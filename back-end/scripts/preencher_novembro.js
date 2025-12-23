/**
 * Script para preencher dados de Novembro no Metrics.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const metricsFile = path.join(__dirname, '../data/Metrics.json');
const sendEmailFile = path.join(__dirname, '../src/controllers/send_email.JSON');

// Dados da tabela de Novembro
const dadosNovembro = [
  {
    nome: "Marcelo Rodrigo Izael da Silva",
    ligacoes: 428,
    tma: "00:05:02",
    nota_telefone: 4.69,
    quantidade_notas_telefone: 290,
    tickets: 334,
    tmt: null,
    nota_ticket: 3.8,
    quantidade_notas_ticket: 10,
    nota_qualidade: 0.75,
    quantidade_avaliacoes: 4,
    total_escalado: "155:48:00",
    total_cumprido: "162:38:18",
    abs: 0,
    pausa_escalada: "25:20:00",
    pausa_realizada: "30:44:53",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "19:20:22",
    pausa_10_escalada: "7:00:00",
    pausa_10_realizada: "0:23:23",
    pausa_banheiro: "7:26:07",
    pausa_feedback: "3:21:22",
    pausa_treinamento: "0:13:38"
  },
  {
    nome: "Rodrigo Raimundo Reis",
    ligacoes: 421,
    tma: "00:06:37",
    nota_telefone: 4.92,
    quantidade_notas_telefone: 72,
    tickets: 102,
    tmt: null,
    nota_ticket: 2.5,
    quantidade_notas_ticket: 13,
    nota_qualidade: 0.69,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "184:31:52",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "31:55:06",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "18:31:27",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:00:00",
    pausa_banheiro: "5:26:33",
    pausa_feedback: "7:26:38",
    pausa_treinamento: "0:30:28"
  },
  {
    nome: "Gabrielli Ribeiro de Assunção",
    ligacoes: 408,
    tma: "00:05:11",
    nota_telefone: 4.77,
    quantidade_notas_telefone: 217,
    tickets: 490,
    tmt: null,
    nota_ticket: 3.1,
    quantidade_notas_ticket: 10,
    nota_qualidade: 0.63,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "193:53:58",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "42:05:05",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "19:21:00",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:07:45",
    pausa_banheiro: "7:57:09",
    pausa_feedback: "14:09:51",
    pausa_treinamento: "0:29:20"
  },
  {
    nome: "Juliana Aparecida Rofino",
    ligacoes: 404,
    tma: "00:05:10",
    nota_telefone: 4.69,
    quantidade_notas_telefone: 176,
    tickets: 184,
    tmt: null,
    nota_ticket: 2.6,
    quantidade_notas_ticket: 5,
    nota_qualidade: 0.81,
    quantidade_avaliacoes: 4,
    total_escalado: "174:00:00",
    total_cumprido: "172:26:26",
    abs: 0,
    pausa_escalada: "26:00:00",
    pausa_realizada: "25:14:36",
    pausa_almoco_escalada: "17:00:00",
    pausa_almoco_realizada: "15:59:21",
    pausa_10_escalada: "10:00:00",
    pausa_10_realizada: "0:29:43",
    pausa_banheiro: "5:04:53",
    pausa_feedback: "2:35:31",
    pausa_treinamento: "1:05:08"
  },
  {
    nome: "Laura Ketheleen de Freitas Guedes",
    ligacoes: 400,
    tma: "00:05:32",
    nota_telefone: 4.81,
    quantidade_notas_telefone: 107,
    tickets: 99,
    tmt: null,
    nota_ticket: 3.4,
    quantidade_notas_ticket: 5,
    nota_qualidade: 0.84,
    quantidade_avaliacoes: 4,
    total_escalado: "164:00:00",
    total_cumprido: "173:37:09",
    abs: 0,
    pausa_escalada: "24:30:00",
    pausa_realizada: "30:38:55",
    pausa_almoco_escalada: "17:00:00",
    pausa_almoco_realizada: "19:43:12",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:43:15",
    pausa_banheiro: "6:58:11",
    pausa_feedback: "0:31:35",
    pausa_treinamento: "2:42:42"
  },
  {
    nome: "Dimas Henrique Gonçalves do Nascimento",
    ligacoes: 391,
    tma: "00:06:32",
    nota_telefone: 4.62,
    quantidade_notas_telefone: 180,
    tickets: 412,
    tmt: null,
    nota_ticket: 3.7,
    quantidade_notas_ticket: 6,
    nota_qualidade: 0.86,
    quantidade_avaliacoes: 4,
    total_escalado: "174:00:00",
    total_cumprido: "178:59:08",
    abs: 0,
    pausa_escalada: "26:00:00",
    pausa_realizada: "42:37:12",
    pausa_almoco_escalada: "17:00:00",
    pausa_almoco_realizada: "17:30:55",
    pausa_10_escalada: "10:00:00",
    pausa_10_realizada: "0:06:58",
    pausa_banheiro: "4:50:11",
    pausa_feedback: "19:02:35",
    pausa_treinamento: "1:06:33"
  },
  {
    nome: "Monike Samara Nascimento da Silva",
    ligacoes: 389,
    tma: "00:06:05",
    nota_telefone: 4.75,
    quantidade_notas_telefone: 91,
    tickets: 208,
    tmt: null,
    nota_ticket: 3.1,
    quantidade_notas_ticket: 13,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "181:37:21",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "27:18:06",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "18:33:56",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:10:12",
    pausa_banheiro: "6:25:58",
    pausa_feedback: "1:36:49",
    pausa_treinamento: "0:31:11"
  },
  {
    nome: "Laura Porto de Almeida",
    ligacoes: 380,
    tma: "00:04:49",
    nota_telefone: 4.79,
    quantidade_notas_telefone: 66,
    tickets: 167,
    tmt: null,
    nota_ticket: 3.7,
    quantidade_notas_ticket: 3,
    nota_qualidade: 0.96,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "170:54:23",
    abs: 1,
    pausa_escalada: "28:30:00",
    pausa_realizada: "28:10:50",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:59:14",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:16:16",
    pausa_banheiro: "6:24:25",
    pausa_feedback: "3:16:56",
    pausa_treinamento: "0:13:59"
  },
  {
    nome: "Igor Leme de Siqueira",
    ligacoes: 376,
    tma: "00:05:50",
    nota_telefone: 4.78,
    quantidade_notas_telefone: 178,
    tickets: 58,
    tmt: null,
    nota_ticket: 3.0,
    quantidade_notas_ticket: 2,
    nota_qualidade: 0.85,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "181:42:22",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "30:14:49",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:34:18",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:06:24",
    pausa_banheiro: "8:02:26",
    pausa_feedback: "3:44:38",
    pausa_treinamento: "0:47:03"
  },
  {
    nome: "Marcos da Silva Pereira",
    ligacoes: 330,
    tma: "00:06:33",
    nota_telefone: 4.71,
    quantidade_notas_telefone: 215,
    tickets: 224,
    tmt: null,
    nota_ticket: 4.3,
    quantidade_notas_ticket: 6,
    nota_qualidade: 0.88,
    quantidade_avaliacoes: 4,
    total_escalado: "155:48:00",
    total_cumprido: "156:10:23",
    abs: 0,
    pausa_escalada: "25:20:00",
    pausa_realizada: "36:00:37",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "18:56:12",
    pausa_10_escalada: "7:00:00",
    pausa_10_realizada: "0:12:52",
    pausa_banheiro: "5:04:17",
    pausa_feedback: "11:21:32",
    pausa_treinamento: "0:25:44"
  },
  {
    nome: "Viviane Barros Silva",
    ligacoes: 330,
    tma: "00:05:06",
    nota_telefone: 4.76,
    quantidade_notas_telefone: 169,
    tickets: 167,
    tmt: null,
    nota_ticket: 3.6,
    quantidade_notas_ticket: 8,
    nota_qualidade: 0.96,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "165:22:39",
    abs: 1,
    pausa_escalada: "28:30:00",
    pausa_realizada: "30:35:56",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:01:39",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:17:46",
    pausa_banheiro: "9:56:55",
    pausa_feedback: "2:48:32",
    pausa_treinamento: null // #REF! - deixar null
  },
  {
    nome: "Vinicius Nascimento de Assunção",
    ligacoes: 311,
    tma: "00:06:03",
    nota_telefone: 4.63,
    quantidade_notas_telefone: 127,
    tickets: 104,
    tmt: null,
    nota_ticket: 3.1,
    quantidade_notas_ticket: 10,
    nota_qualidade: 0.49,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "177:26:28",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "27:34:16",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "18:17:32",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:10:51",
    pausa_banheiro: "6:54:56",
    pausa_feedback: "1:28:49",
    pausa_treinamento: "0:24:31"
  },
  {
    nome: "Murilo mazin cersozimo caetano",
    ligacoes: 305,
    tma: "00:06:31",
    nota_telefone: 4.74,
    quantidade_notas_telefone: 136,
    tickets: 120,
    tmt: null,
    nota_ticket: 3.1,
    quantidade_notas_ticket: 8,
    nota_qualidade: 0.89,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "186:29:43",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "41:20:04",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:58:19",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:28:52",
    pausa_banheiro: "8:35:16",
    pausa_feedback: "10:26:25",
    pausa_treinamento: "1:16:09"
  },
  {
    nome: "Stephanie Monterani de Oliveira",
    ligacoes: 241,
    tma: "00:07:52",
    nota_telefone: 4.79,
    quantidade_notas_telefone: 164,
    tickets: 69,
    tmt: null,
    nota_ticket: 3.5,
    quantidade_notas_ticket: 8,
    nota_qualidade: 0.74,
    quantidade_avaliacoes: 4,
    total_escalado: "186:00:00",
    total_cumprido: "166:44:17",
    abs: 1,
    pausa_escalada: "28:30:00",
    pausa_realizada: "37:41:11",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:53:49",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:00:00",
    pausa_banheiro: "9:44:42",
    pausa_feedback: "9:17:03",
    pausa_treinamento: "0:45:37"
  },
  {
    nome: "Mariana Leao Cordeiro da Cruz",
    ligacoes: 235,
    tma: "00:09:21",
    nota_telefone: 4.80,
    quantidade_notas_telefone: 120,
    tickets: 48,
    tmt: null,
    nota_ticket: 2.6,
    quantidade_notas_ticket: 5,
    nota_qualidade: 0.98,
    quantidade_avaliacoes: 4,
    total_escalado: "164:00:00",
    total_cumprido: "119:13:33",
    abs: 4,
    pausa_escalada: "24:30:00",
    pausa_realizada: "25:31:12",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "12:42:07",
    pausa_10_escalada: "9:30:00",
    pausa_10_realizada: "0:25:32",
    pausa_banheiro: "8:38:23",
    pausa_feedback: "3:53:46",
    pausa_treinamento: null // #REF! - deixar null
  }
];

const loadMetrics = () => {
  const content = fs.readFileSync(metricsFile, 'utf-8');
  return JSON.parse(content);
};

const loadEmailMapping = () => {
  const content = fs.readFileSync(sendEmailFile, 'utf-8');
  return JSON.parse(content);
};

const findEmailByName = (nome, emailMapping) => {
  const normalizedNome = nome.toLowerCase().trim();
  for (const [name, email] of Object.entries(emailMapping)) {
    if (name.toLowerCase().trim() === normalizedNome) {
      return email.toLowerCase().trim();
    }
  }
  return null;
};

const normalizeTime = (timeStr) => {
  if (!timeStr || timeStr === '-' || timeStr === null || timeStr === '#REF!') return "00:00:00";
  // Se já está no formato HH:MM:SS, retornar
  if (timeStr.match(/^\d{2}:\d{2}:\d{2}$/)) return timeStr;
  // Se está no formato H:MM:SS, adicionar zero à esquerda
  if (timeStr.match(/^\d{1,2}:\d{2}:\d{2}$/)) {
    const parts = timeStr.split(':');
    return `${parts[0].padStart(2, '0')}:${parts[1]}:${parts[2]}`;
  }
  return timeStr;
};

const fillNovembroData = () => {
  console.log('🔄 Preenchendo dados de Novembro...\n');
  
  const metrics = loadMetrics();
  const emailMapping = loadEmailMapping();
  
  let success = 0;
  let failed = 0;
  
  for (const dados of dadosNovembro) {
    const email = findEmailByName(dados.nome, emailMapping);
    
    if (!email) {
      console.error(`❌ Operador não encontrado: ${dados.nome}`);
      failed++;
      continue;
    }
    
    const normalizedEmail = email.toLowerCase().trim();
    
    if (!metrics[normalizedEmail] || !metrics[normalizedEmail].login) {
      console.error(`❌ Operador não encontrado no Metrics.json: ${dados.nome} (${email})`);
      failed++;
      continue;
    }
    
    // Garantir estrutura de meses
    if (!metrics[normalizedEmail].login.meses) {
      metrics[normalizedEmail].login.meses = {
        Outubro: { dados: {} },
        Novembro: { dados: {} },
        Dezembro: { dados: {} }
      };
    }
    
    // Preencher dados de Novembro
    metrics[normalizedEmail].login.meses.Novembro.dados = {
      chamadas: {
        ligacoes: dados.ligacoes || 0,
        tma: normalizeTime(dados.tma),
        nota_telefone: dados.nota_telefone || 0,
        quantidade_notas: dados.quantidade_notas_telefone || 0
      },
      tickets: {
        quantidade: dados.tickets || 0,
        tmt: normalizeTime(dados.tmt),
        nota_ticket: dados.nota_ticket || 0,
        quantidade_notas: dados.quantidade_notas_ticket || 0
      },
      qualidade: {
        nota: dados.nota_qualidade || 0,
        quantidade: dados.quantidade_avaliacoes || 0
      },
      pausas_tempo_logado: {
        total_escalado: normalizeTime(dados.total_escalado),
        total_cumprido: normalizeTime(dados.total_cumprido),
        abs: dados.abs || 0,
        atrasos: 0, // Não tinha na tabela
        pausa_escalada: normalizeTime(dados.pausa_escalada),
        pausa_realizada: normalizeTime(dados.pausa_realizada),
        pausa_almoco_escalada: normalizeTime(dados.pausa_almoco_escalada),
        pausa_almoco_realizada: normalizeTime(dados.pausa_almoco_realizada),
        pausa_10_escalada: normalizeTime(dados.pausa_10_escalada),
        pausa_10_realizada: normalizeTime(dados.pausa_10_realizada),
        pausa_banheiro: normalizeTime(dados.pausa_banheiro),
        pausa_feedback: normalizeTime(dados.pausa_feedback),
        pausa_treinamento: normalizeTime(dados.pausa_treinamento)
      }
    };
    
    // Atualizar timestamp
    metrics[normalizedEmail].login.metricas_atualizadas_em = new Date().toLocaleString('pt-BR');
    
    console.log(`✅ ${dados.nome} - Novembro`);
    success++;
  }
  
  // Salvar arquivo
  fs.writeFileSync(metricsFile, JSON.stringify(metrics, null, 2), 'utf-8');
  
  console.log(`\n📊 Resultado:`);
  console.log(`   ✅ Sucesso: ${success}`);
  console.log(`   ❌ Falhas: ${failed}`);
  console.log(`\n✅ Dados de Novembro preenchidos com sucesso!`);
};

fillNovembroData();

