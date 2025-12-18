import Groq from 'groq-sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { getIndicators } from '../database.js';

dotenv.config();

// Configurar Groq (Principal)
let groqApiKey = process.env.GROQ_API_KEY;
if (groqApiKey) {
  groqApiKey = groqApiKey.trim().replace(/\s+/g, '').replace(/['"]/g, '');
  console.log('🔑 Chave do Groq processada. Tamanho:', groqApiKey.length, 'caracteres');
  console.log('🔑 Primeiros caracteres:', groqApiKey.substring(0, 10) + '...');
} else {
  console.error('❌ GROQ_API_KEY não configurada');
}

const groq = groqApiKey ? new Groq({
  apiKey: groqApiKey,
}) : null;

// Configurar Gemini (Fallback)
let geminiApiKey = process.env.GEMINI_API_KEY;
if (geminiApiKey) {
  geminiApiKey = geminiApiKey.trim().replace(/\s+/g, '').replace(/['"]/g, '');
  console.log('🔑 Chave do Gemini processada. Tamanho:', geminiApiKey.length, 'caracteres');
  console.log('🔑 Primeiros caracteres:', geminiApiKey.substring(0, 10) + '...');
} else {
  console.error('❌ GEMINI_API_KEY não configurada');
}

const gemini = geminiApiKey ? new GoogleGenerativeAI(geminiApiKey) : null;

// Função para converter tempo hh:mm:ss para segundos
const timeToSeconds = (timeStr) => {
  if (!timeStr || typeof timeStr !== 'string') return null;
  const parts = timeStr.split(':');
  if (parts.length !== 3) return null;
  const hours = parseInt(parts[0]) || 0;
  const minutes = parseInt(parts[1]) || 0;
  const seconds = parseInt(parts[2]) || 0;
  return hours * 3600 + minutes * 60 + seconds;
};

// Função para converter segundos para hh:mm:ss
const secondsToTime = (totalSeconds) => {
  if (totalSeconds === null || totalSeconds === undefined || isNaN(totalSeconds)) return '00:00:00';
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

// Função para calcular médias de todos os operadores
const calculateAverages = () => {
  const allIndicators = getIndicators();
  
  // Pegar apenas os indicadores mais recentes de cada operador
  const latestIndicators = {};
  allIndicators.forEach(ind => {
    const opId = ind.operator_id;
    if (!latestIndicators[opId] || new Date(ind.created_at) > new Date(latestIndicators[opId].created_at)) {
      latestIndicators[opId] = ind;
    }
  });

  const indicatorsArray = Object.values(latestIndicators);
  if (indicatorsArray.length === 0) return null;

  const averages = {
    tma: null,
    calls: null,
    tickets: null,
    tmt: null,
  };

  // Calcular média de TMA (em segundos)
  const tmaValues = [];
  indicatorsArray.forEach(ind => {
    const add = ind.additionalData || ind;
    const tma = add.tma || ind.tma;
    if (tma) {
      const seconds = timeToSeconds(tma);
      if (seconds !== null) tmaValues.push(seconds);
    }
  });
  if (tmaValues.length > 0) {
    const avgSeconds = tmaValues.reduce((a, b) => a + b, 0) / tmaValues.length;
    averages.tma = secondsToTime(Math.round(avgSeconds));
  }

  // Calcular média de chamadas
  const callsValues = [];
  indicatorsArray.forEach(ind => {
    const calls = ind.calls;
    if (calls !== null && calls !== undefined && !isNaN(calls)) {
      callsValues.push(parseInt(calls));
    }
  });
  if (callsValues.length > 0) {
    averages.calls = Math.round(callsValues.reduce((a, b) => a + b, 0) / callsValues.length);
  }

  // Calcular média de tickets
  const ticketsValues = [];
  indicatorsArray.forEach(ind => {
    const add = ind.additionalData || ind;
    const tickets = add.tickets || add.tickets;
    if (tickets !== null && tickets !== undefined && !isNaN(tickets)) {
      ticketsValues.push(parseInt(tickets));
    }
  });
  if (ticketsValues.length > 0) {
    averages.tickets = Math.round(ticketsValues.reduce((a, b) => a + b, 0) / ticketsValues.length);
  }

  // Calcular média de TMT (em segundos)
  const tmtValues = [];
  indicatorsArray.forEach(ind => {
    const add = ind.additionalData || ind;
    const tmt = add.tmt || ind.tmt;
    if (tmt && tmt !== '-' && tmt !== 'Em breve') {
      const seconds = timeToSeconds(tmt);
      if (seconds !== null) tmtValues.push(seconds);
    }
  });
  if (tmtValues.length > 0) {
    const avgSeconds = tmtValues.reduce((a, b) => a + b, 0) / tmtValues.length;
    averages.tmt = secondsToTime(Math.round(avgSeconds));
  }

  return averages;
};

// Função para gerar feedback usando Groq (Principal)
const generateWithGroq = async (prompt, systemPrompt) => {
  if (!groq || !groqApiKey) {
    throw new Error('Groq não configurado');
  }

  console.log('🤖 Tentando gerar feedback com Groq...');
  
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.3,
    response_format: { type: 'json_object' },
  });

  return completion.choices[0].message.content;
};

// Função para gerar feedback usando Gemini (Fallback)
const generateWithGemini = async (prompt, systemPrompt) => {
  if (!gemini || !geminiApiKey) {
    throw new Error('Gemini não configurado');
  }

  console.log('🤖 Tentando gerar feedback com Gemini (fallback)...');
  
  const model = gemini.getGenerativeModel({ 
    model: 'gemini-1.5-flash',
    generationConfig: {
      temperature: 0.3,
      responseMimeType: 'application/json',
    },
  });

  const fullPrompt = `${systemPrompt}\n\n${prompt}`;
  const result = await model.generateContent(fullPrompt);
  const response = await result.response;
  
  return response.text();
};

// Função principal com fallback
export const generateFeedback = async (operatorData, indicators) => {
  try {
    // Validar se pelo menos uma API está configurada
    if (!groqApiKey && !geminiApiKey) {
      throw new Error('Nenhuma API de IA configurada. Configure GROQ_API_KEY ou GEMINI_API_KEY no Render.');
    }

    // Calcular médias de todos os operadores
    const averages = calculateAverages();
    console.log('📊 Médias calculadas:', averages);

    // Extrair métricas do operador atual
    const add = indicators.additionalData || indicators;
    
    const operatorMetrics = {
      calls: indicators.calls || null,
      tma: indicators.tma || add.tma || null,
      tickets: add.tickets || null,
      tmt: add.tmt || null,
      percentLogado: add.percent_logado || add.percentLogado || null,
      pausaEscalada: add.pausa_escalada || add.pausaEscalada || null,
      totalPausas: add.total_pausas || add.totalPausas || null,
      almocoEscalado: add.almoco_escalado || add.almocoEscalado || null,
      almocoRealizado: add.almoco_realizado || add.almocoRealizado || null,
      pausa10Escalada: add.pausa10_escalada || add.pausa10Escalada || null,
      pausa10Realizado: add.pausa10_realizado || add.pausa10Realizado || null,
      pausaBanheiro: add.pausa_banheiro || add.pausaBanheiro || null,
      pausaFeedback: add.pausa_feedback || add.pausaFeedback || null,
    };

    // Preparar informações de comparação
    let comparisonInfo = '';
    
    if (averages) {
      comparisonInfo = '\n\nMÉDIAS DA EQUIPE (para comparação):\n';
      if (averages.tma) comparisonInfo += `- TMA médio: ${averages.tma}\n`;
      if (averages.calls) comparisonInfo += `- Chamadas médias: ${averages.calls}\n`;
      if (averages.tickets) comparisonInfo += `- Tickets médios: ${averages.tickets}\n`;
      if (averages.tmt) comparisonInfo += `- TMT médio: ${averages.tmt}\n`;
    }

    const prompt = `Você é um analista de performance. Gere um feedback mensal CONCISO e DIRETO para um operador de atendimento.

OPERADOR:
- Nome: ${operatorData.name}
- Mês de referência: ${operatorData.reference_month || operatorData.referenceMonth}

MÉTRICAS DO OPERADOR:
${operatorMetrics.calls !== null ? `- Ligações realizadas: ${operatorMetrics.calls}` : ''}
${operatorMetrics.tma ? `- TMA (Tempo Médio de Atendimento): ${operatorMetrics.tma}` : ''}
${operatorMetrics.tickets !== null ? `- Tickets: ${operatorMetrics.tickets}` : ''}
${operatorMetrics.tmt ? `- TMT: ${operatorMetrics.tmt}` : ''}
${operatorMetrics.percentLogado ? `- % Logado: ${operatorMetrics.percentLogado}` : ''}
${operatorMetrics.pausaEscalada ? `- Pausa Escalada: ${operatorMetrics.pausaEscalada}` : ''}
${operatorMetrics.totalPausas ? `- Total de Pausas: ${operatorMetrics.totalPausas}` : ''}
${operatorMetrics.almocoEscalado ? `- Almoço Escalado: ${operatorMetrics.almocoEscalado}` : ''}
${operatorMetrics.almocoRealizado ? `- Almoço Realizado: ${operatorMetrics.almocoRealizado}` : ''}
${operatorMetrics.pausa10Escalada ? `- Pausa 10 Escalada: ${operatorMetrics.pausa10Escalada}` : ''}
${operatorMetrics.pausa10Realizado ? `- Pausa 10 Realizado: ${operatorMetrics.pausa10Realizado}` : ''}
${operatorMetrics.pausaBanheiro ? `- Pausa Banheiro: ${operatorMetrics.pausaBanheiro}` : ''}
${operatorMetrics.pausaFeedback ? `- Pausa Feedback: ${operatorMetrics.pausaFeedback}` : ''}
${comparisonInfo}

=== INSTRUÇÕES OBRIGATÓRIAS ===

Organize o feedback em APENAS 3 TÓPICOS:

1. CHAMADAS
   - Ligações realizadas: Compare com a média da equipe. Se estiver acima da média = MANTER, se abaixo = MELHORAR
   - TMA: Compare com a média da equipe. Se estiver ABAIXO da média = MANTER (bom), se estiver ACIMA da média = MELHORAR (ruim)
   - TMT: Compare com a média da equipe. Se estiver ABAIXO da média = MANTER (bom), se estiver ACIMA da média = MELHORAR (ruim)

2. TICKETS
   - Tickets: Compare com a média da equipe. Se estiver acima da média = MANTER, se abaixo = MELHORAR

3. PAUSAS
   - % Logado: 
     * Se for 100% = MANTER (está ótimo)
     * Se for MENOR que 100% = MELHORAR (pode melhorar)
     * Se for MAIOR que 100% = MANTER (está ótimo)
   - Para TODAS as pausas (Pausa Escalada vs Total de Pausas, Almoço Escalado vs Almoço Realizado, Pausa 10 Escalada vs Pausa 10 Realizado, Pausa Banheiro, Pausa Feedback):
     * Se TEMPO REALIZADO > TEMPO ESCALADO = MELHORAR (está ruim, ultrapassou o tempo permitido)
     * Se TEMPO REALIZADO < TEMPO ESCALADO = MANTER (está bom, dentro do tempo permitido)
     * Se TEMPO REALIZADO = TEMPO ESCALADO = MANTER (está bom, no limite)

FORMATO OBRIGATÓRIO PARA CADA MÉTRICA:

[NOME DA MÉTRICA]
Valor: [valor exato do operador]
Média da equipe: [média se disponível, ou "N/A"]
Status: MANTER ou MELHORAR
Análise: [2-3 linhas explicando a comparação e o motivo do status]

EXEMPLO:
TMA (Tempo Médio de Atendimento)
Valor: 00:05:30
Média da equipe: 00:04:20
Status: MELHORAR
Análise: O TMA de 5 minutos e 30 segundos está ACIMA da média da equipe (4 minutos e 20 segundos). Isso indica que o operador está demorando mais que o esperado para atender cada ligação, impactando a produtividade. É necessário focar em agilidade e otimização do tempo de atendimento.

Formate a resposta em JSON:
{
  "summary": "resumo geral conciso (máximo 2 parágrafos)",
  "metricsAnalysis": "análise organizada em 3 seções: CHAMADAS, TICKETS, PAUSAS. Cada métrica deve seguir o formato acima com Valor, Média da equipe, Status e Análise",
  "positivePoints": "pontos positivos resumidos",
  "attentionPoints": "pontos de atenção resumidos",
  "recommendations": "recomendações práticas e acionáveis",
  "operatorResponseModel": "modelo de resposta profissional e curto do operador"
}`;

    const systemPrompt = 'Você é um analista de performance profissional. Siga EXATAMENTE o formato e as regras especificadas no prompt do usuário. Organize o feedback em apenas 3 tópicos: CHAMADAS, TICKETS e PAUSAS.';

    let responseContent;
    let usedProvider = '';

    // Tentar Groq primeiro (Principal)
    try {
      if (groqApiKey) {
        responseContent = await generateWithGroq(prompt, systemPrompt);
        usedProvider = 'Groq';
        console.log('✅ Feedback gerado com sucesso usando Groq');
      } else {
        throw new Error('Groq não configurado');
      }
    } catch (groqError) {
      console.error('❌ Erro ao gerar com Groq:', groqError.message);
      console.log('🔄 Tentando fallback com Gemini...');
      
      // Fallback para Gemini
      try {
        if (geminiApiKey) {
          responseContent = await generateWithGemini(prompt, systemPrompt);
          usedProvider = 'Gemini';
          console.log('✅ Feedback gerado com sucesso usando Gemini (fallback)');
        } else {
          throw new Error('Gemini não configurado');
        }
      } catch (geminiError) {
        console.error('❌ Erro ao gerar com Gemini:', geminiError.message);
        throw new Error(`Erro ao gerar feedback: Groq falhou (${groqError.message}) e Gemini falhou (${geminiError.message})`);
      }
    }

    console.log(`🤖 Provedor usado: ${usedProvider}`);
    console.log('=== DEBUG: Resposta da IA ===');
    console.log('Resposta completa:', responseContent);

    let feedbackData;
    try {
      feedbackData = JSON.parse(responseContent);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      console.error('Conteúdo recebido:', responseContent);
      throw new Error(`Erro ao processar resposta da IA: ${parseError.message}`);
    }

    // Validar campos obrigatórios
    if (!feedbackData.summary) {
      console.error('Campo summary não encontrado na resposta:', feedbackData);
      throw new Error('Resposta da IA não contém o campo "summary"');
    }

    // Converter metricsAnalysis de objeto para string se necessário
    let metricsAnalysisText = '';

    if (typeof feedbackData.metricsAnalysis === 'string') {
      metricsAnalysisText = feedbackData.metricsAnalysis;
    } else if (typeof feedbackData.metricsAnalysis === 'object' && feedbackData.metricsAnalysis !== null) {
      console.log('⚠️ metricsAnalysis veio como objeto, convertendo para string...');
      metricsAnalysisText = JSON.stringify(feedbackData.metricsAnalysis, null, 2);
    } else {
      console.error('⚠️ ATENÇÃO: Campo metricsAnalysis está vazio ou em formato inválido!');
      throw new Error('A IA não gerou a análise detalhada de métricas no formato esperado. Por favor, tente novamente.');
    }

    if (!metricsAnalysisText || metricsAnalysisText.trim() === '') {
      console.error('⚠️ ATENÇÃO: Campo metricsAnalysis está vazio após conversão!');
      throw new Error('A IA não gerou a análise detalhada de métricas. Por favor, tente novamente.');
    }

    console.log('✅ metricsAnalysis gerado com sucesso. Tamanho:', metricsAnalysisText.length, 'caracteres');
    console.log('Preview metricsAnalysis:', metricsAnalysisText.substring(0, 300));

    return {
      summary: feedbackData.summary || '',
      feedbackText: `${feedbackData.summary}\n\nANÁLISE DETALHADA POR MÉTRICA:\n${metricsAnalysisText}\n\nPONTOS POSITIVOS:\n${feedbackData.positivePoints || 'Não informado'}\n\nPONTOS DE ATENÇÃO:\n${feedbackData.attentionPoints || 'Não informado'}\n\nRECOMENDAÇÕES:\n${feedbackData.recommendations || 'Não informado'}`,
      positivePoints: feedbackData.positivePoints || '',
      attentionPoints: feedbackData.attentionPoints || '',
      recommendations: feedbackData.recommendations || '',
      operatorResponseModel: feedbackData.operatorResponseModel || '',
      metricsAnalysis: metricsAnalysisText,
      provider: usedProvider,
    };
  } catch (error) {
    console.error('❌ Erro ao gerar feedback:', error);
    console.error('Stack:', error.stack);

    if (error.message?.includes('API key') || error.message?.includes('authentication')) {
      throw new Error('Chave da API inválida ou não configurada. Verifique GROQ_API_KEY e GEMINI_API_KEY no Render.');
    } else if (error.message?.includes('rate limit')) {
      throw new Error('Limite de requisições atingido. Tente novamente em alguns instantes.');
    } else if (error.message?.includes('quota') || error.message?.includes('insufficient')) {
      throw new Error('Cota da API esgotada. Verifique seus créditos.');
    } else {
      throw new Error(`Erro ao gerar feedback: ${error.message || 'Erro desconhecido'}`);
    }
  }
};
