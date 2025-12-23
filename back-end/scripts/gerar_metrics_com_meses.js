/**
 * Script para gerar Metrics.json com estrutura mensal
 * Cada operador terá métricas para Outubro, Novembro e Dezembro
 * 
 * Execute: node scripts/gerar_metrics_com_meses.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendEmailFile = path.join(__dirname, '../src/controllers/send_email.JSON');
const metricsFile = path.join(__dirname, '../data/Metrics.json');

/**
 * Template de estrutura vazia para um mês
 */
const createEmptyMonthStructure = () => {
  return {
    chamadas: {
      ligacoes: 0,
      tma: "00:00:00",
      nota_telefone: 0,
      quantidade_notas: 0
    },
    tickets: {
      quantidade: 0,
      tmt: "00:00:00",
      nota_ticket: 0,
      quantidade_notas: 0
    },
    qualidade: {
      nota: 0,
      quantidade: 0
    },
    pausas_tempo_logado: {
      total_escalado: "00:00:00",
      total_cumprido: "00:00:00",
      abs: 0,
      atrasos: 0,
      pausa_escalada: "00:00:00",
      pausa_realizada: "00:00:00",
      pausa_almoco_escalada: "00:00:00",
      pausa_almoco_realizada: "00:00:00",
      pausa_10_escalada: "00:00:00",
      pausa_10_realizada: "00:00:00",
      pausa_banheiro: "00:00:00",
      pausa_feedback: "00:00:00",
      pausa_treinamento: "00:00:00"
    }
  };
};

/**
 * Template de estrutura completa para um operador com meses
 */
const createOperatorStructureWithMonths = (email, nome) => {
  return {
    login: {
      email: email,
      nome: nome,
      metricas_atualizadas_em: new Date().toLocaleString('pt-BR'),
      meses: {
        "Outubro": {
          dados: createEmptyMonthStructure()
        },
        "Novembro": {
          dados: createEmptyMonthStructure()
        },
        "Dezembro": {
          dados: createEmptyMonthStructure()
        }
      },
      // Campo "dados" principal: aponta automaticamente para o último mês disponível (Dezembro)
      // O sistema usa este campo quando não especifica um mês específico
      dados: createEmptyMonthStructure() // Por padrão, será Dezembro (mais recente)
    }
  };
};

/**
 * Gera Metrics.json completo com estrutura mensal
 */
const generateMetricsWithMonths = () => {
  try {
    console.log('🔄 Gerando Metrics.json com estrutura mensal...\n');
    
    // Carregar mapeamento de emails
    const emailMapping = JSON.parse(fs.readFileSync(sendEmailFile, 'utf-8'));
    console.log(`📧 Encontrados ${Object.keys(emailMapping).length} operadores em send_email.JSON\n`);
    
    const metricsStructure = {};
    let created = 0;
    let preserved = 0;
    
    // Para cada operador no mapeamento
    for (const [nome, email] of Object.entries(emailMapping)) {
      const normalizedEmail = email.toLowerCase().trim();
      
      // Verificar se já existe no arquivo atual
      let existingData = null;
      if (fs.existsSync(metricsFile)) {
        try {
          const currentMetrics = JSON.parse(fs.readFileSync(metricsFile, 'utf-8'));
          
          // Verificar se já existe
          if (currentMetrics[normalizedEmail]) {
            existingData = currentMetrics[normalizedEmail];
          } else if (currentMetrics.login && currentMetrics.login.email === email) {
            existingData = currentMetrics.login;
          }
        } catch (error) {
          console.log(`⚠️ Erro ao ler arquivo existente: ${error.message}`);
        }
      }
      
      if (existingData && existingData.login && existingData.login.dados) {
        // Preservar dados existentes e adicionar estrutura de meses
        const existingDados = existingData.login.dados;
        
        metricsStructure[normalizedEmail] = {
          login: {
            email: email,
            nome: nome,
            metricas_atualizadas_em: existingData.login.metricas_atualizadas_em || new Date().toLocaleString('pt-BR'),
            meses: {
              "Outubro": {
                dados: existingData.login.meses?.Outubro?.dados || createEmptyMonthStructure()
              },
              "Novembro": {
                dados: existingData.login.meses?.Novembro?.dados || existingDados || createEmptyMonthStructure()
              },
              "Dezembro": {
                dados: existingData.login.meses?.Dezembro?.dados || createEmptyMonthStructure()
              }
            },
            // Manter dados para compatibilidade (será o mês atual/mais recente)
            dados: existingDados
          }
        };
        preserved++;
        console.log(`✅ Preservado e atualizado: ${nome} (${email})`);
      } else {
        // Criar estrutura completa com meses
        metricsStructure[normalizedEmail] = createOperatorStructureWithMonths(email, nome);
        created++;
        console.log(`📝 Criado: ${nome} (${email})`);
      }
    }
    
    // Salvar arquivo
    fs.writeFileSync(metricsFile, JSON.stringify(metricsStructure, null, 2), 'utf-8');
    
    console.log(`\n✅ Arquivo Metrics.json gerado com sucesso!`);
    console.log(`📊 Estatísticas:`);
    console.log(`   - Total de operadores: ${Object.keys(metricsStructure).length}`);
    console.log(`   - Novos criados: ${created}`);
    console.log(`   - Dados preservados: ${preserved}`);
    console.log(`📁 Localização: ${metricsFile}`);
    console.log(`\n💡 Cada operador agora tem métricas para Outubro, Novembro e Dezembro!`);
    console.log(`💡 Você pode preencher os dados de cada mês manualmente.`);
    
  } catch (error) {
    console.error('❌ Erro ao gerar Metrics.json:', error);
    throw error;
  }
};

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.includes('gerar_metrics_com_meses')) {
  generateMetricsWithMonths();
}

export { generateMetricsWithMonths, createOperatorStructureWithMonths };

