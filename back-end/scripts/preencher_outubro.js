/**
 * Script para preencher dados de Outubro no Metrics.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const metricsFile = path.join(__dirname, '../data/Metrics.json');
const sendEmailFile = path.join(__dirname, '../src/controllers/send_email.JSON');

// Dados da tabela de Outubro
const dadosOutubro = [
  {
    nome: "Dimas Henrique Gonçalves do Nascimento",
    ligacoes: 372,
    tma: "00:06:34",
    nota_telefone: 4.88,
    quantidade_notas_telefone: 172,
    tickets: 127,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.90,
    quantidade_avaliacoes: 3,
    total_escalado: "174:00:00",
    total_cumprido: "173:58:03",
    abs: 0,
    pausa_escalada: "24:30:00",
    pausa_realizada: "37:01:07",
    pausa_almoco_escalada: "16:20:00",
    pausa_almoco_realizada: "16:42:14",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "6:43:15",
    pausa_feedback: "13:16:10",
    pausa_treinamento: "00:19:28"
  },
  {
    nome: "Gabrielli Ribeiro de Assunção",
    ligacoes: 369,
    tma: "00:05:23",
    nota_telefone: 4.76,
    quantidade_notas_telefone: 195,
    tickets: 203,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.68,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "171:15:10",
    abs: 1,
    pausa_escalada: "28:30:00",
    pausa_realizada: "28:14:14",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:53:59",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "7:27:44",
    pausa_feedback: "2:52:31",
    pausa_treinamento: null
  },
  {
    nome: "Igor Leme de Siqueira",
    ligacoes: 175,
    tma: "00:05:46",
    nota_telefone: 4.61,
    quantidade_notas_telefone: 77,
    tickets: 6,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.85,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "159:54:03",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "35:25:11",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "14:31:33",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "8:59:27",
    pausa_feedback: "11:52:38",
    pausa_treinamento: "00:00:47"
  },
  {
    nome: "Juliana Aparecida Rofino",
    ligacoes: 378,
    tma: "00:05:20",
    nota_telefone: 4.81,
    quantidade_notas_telefone: 143,
    tickets: 136,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.89,
    quantidade_avaliacoes: 4,
    total_escalado: "174:00:00",
    total_cumprido: "165:51:42",
    abs: 0,
    pausa_escalada: "24:30:00",
    pausa_realizada: "24:17:27",
    pausa_almoco_escalada: "16:20:00",
    pausa_almoco_realizada: "15:29:57",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "5:43:07",
    pausa_feedback: "2:41:56",
    pausa_treinamento: "00:22:27"
  },
  {
    nome: "Laura Ketheleen de Freitas Guedes",
    ligacoes: 311,
    tma: "00:05:17",
    nota_telefone: 4.77,
    quantidade_notas_telefone: 89,
    tickets: 90,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.80,
    quantidade_avaliacoes: 3,
    total_escalado: "174:00:00",
    total_cumprido: "163:58:26",
    abs: 0,
    pausa_escalada: "24:30:00",
    pausa_realizada: "23:47:21",
    pausa_almoco_escalada: "16:20:00",
    pausa_almoco_realizada: "15:32:54",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "5:56:17",
    pausa_feedback: "2:18:10",
    pausa_treinamento: null
  },
  {
    nome: "Laura Porto de Almeida",
    ligacoes: 369,
    tma: "00:04:38",
    nota_telefone: 4.73,
    quantidade_notas_telefone: 114,
    tickets: 44,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.83,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "164:13:33",
    abs: 1,
    pausa_escalada: "28:30:00",
    pausa_realizada: "24:48:08",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "15:53:58",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "7:10:23",
    pausa_feedback: "1:43:47",
    pausa_treinamento: null
  },
  {
    nome: "Marcelo Rodrigo Izael da Silva",
    ligacoes: 335,
    tma: "00:04:45",
    nota_telefone: 4.78,
    quantidade_notas_telefone: 233,
    tickets: 457,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.87,
    quantidade_avaliacoes: 3,
    total_escalado: "155:48:00",
    total_cumprido: "155:32:00",
    abs: 0,
    pausa_escalada: "25:20:00",
    pausa_realizada: "27:58:41",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "18:44:53",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "7:17:54",
    pausa_feedback: "1:55:54",
    pausa_treinamento: null
  },
  {
    nome: "Marcos da Silva Pereira",
    ligacoes: 269,
    tma: "00:06:27",
    nota_telefone: 4.69,
    quantidade_notas_telefone: 141,
    tickets: 255,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.85,
    quantidade_avaliacoes: 3,
    total_escalado: "155:48:00",
    total_cumprido: "138:46:56",
    abs: 2,
    pausa_escalada: "25:20:00",
    pausa_realizada: "26:35:14",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:03:37",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "4:03:39",
    pausa_feedback: "5:27:58",
    pausa_treinamento: null
  },
  {
    nome: "Mariana Leao Cordeiro da Cruz",
    ligacoes: 193,
    tma: "00:08:43",
    nota_telefone: 4.78,
    quantidade_notas_telefone: 122,
    tickets: 92,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.90,
    quantidade_avaliacoes: 3,
    total_escalado: "174:00:00",
    total_cumprido: "163:25:50",
    abs: 1,
    pausa_escalada: "24:30:00",
    pausa_realizada: "29:35:17",
    pausa_almoco_escalada: "16:20:00",
    pausa_almoco_realizada: "14:26:06",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "9:10:24",
    pausa_feedback: "4:43:11",
    pausa_treinamento: "00:30:05"
  },
  {
    nome: "Monike Samara Nascimento da Silva",
    ligacoes: 355,
    tma: "00:05:19",
    nota_telefone: 4.81,
    quantidade_notas_telefone: 84,
    tickets: 243,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.83,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "179:31:35",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "31:02:40",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "19:10:53",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "8:15:08",
    pausa_feedback: "3:36:39",
    pausa_treinamento: null
  },
  {
    nome: "Murilo mazin cersozimo caetano",
    ligacoes: 174,
    tma: "00:05:42",
    nota_telefone: 4.91,
    quantidade_notas_telefone: 59,
    tickets: 12,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.62,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "181:11:51",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "36:25:29",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:54:28",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "11:28:49",
    pausa_feedback: "6:58:52",
    pausa_treinamento: "00:03:20"
  },
  {
    nome: "Rodrigo Raimundo Reis",
    ligacoes: 329,
    tma: "00:06:32",
    nota_telefone: 4.68,
    quantidade_notas_telefone: 78,
    tickets: 14,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "148:59:03",
    abs: 1,
    pausa_escalada: "28:30:00",
    pausa_realizada: "23:12:22",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "12:34:57",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "6:24:27",
    pausa_feedback: "4:12:58",
    pausa_treinamento: null
  },
  {
    nome: "Stephanie Monterani de Oliveira",
    ligacoes: 101,
    tma: "00:07:58",
    nota_telefone: 4.81,
    quantidade_notas_telefone: 48,
    tickets: 19,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.82,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "170:19:15",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "41:50:09",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "17:56:31",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "9:35:36",
    pausa_feedback: "14:18:02",
    pausa_treinamento: null
  },
  {
    nome: "Vinicius Nascimento de Assunção",
    ligacoes: 183,
    tma: "00:05:43",
    nota_telefone: 4.76,
    quantidade_notas_telefone: 106,
    tickets: 13,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 0.97,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "184:13:39",
    abs: 0,
    pausa_escalada: "28:30:00",
    pausa_realizada: "39:57:19",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "19:18:32",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "5:04:05",
    pausa_feedback: "15:33:01",
    pausa_treinamento: "00:01:41"
  },
  {
    nome: "Viviane Barros Silva",
    ligacoes: 269,
    tma: "00:04:16",
    nota_telefone: 4.74,
    quantidade_notas_telefone: 135,
    tickets: 155,
    tmt: null,
    nota_ticket: null,
    quantidade_notas_ticket: null,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 3,
    total_escalado: "186:00:00",
    total_cumprido: "162:48:04",
    abs: 2,
    pausa_escalada: "28:30:00",
    pausa_realizada: "27:59:55",
    pausa_almoco_escalada: "19:00:00",
    pausa_almoco_realizada: "16:09:09",
    pausa_10_escalada: null,
    pausa_10_realizada: null,
    pausa_banheiro: "9:01:07",
    pausa_feedback: "2:49:39",
    pausa_treinamento: null
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
  if (!timeStr || timeStr === '-' || timeStr === null) return "00:00:00";
  // Se já está no formato HH:MM:SS, retornar
  if (timeStr.match(/^\d{2}:\d{2}:\d{2}$/)) return timeStr;
  // Se está no formato H:MM:SS, adicionar zero à esquerda
  if (timeStr.match(/^\d{1,2}:\d{2}:\d{2}$/)) {
    const parts = timeStr.split(':');
    return `${parts[0].padStart(2, '0')}:${parts[1]}:${parts[2]}`;
  }
  return timeStr;
};

const fillOutubroData = () => {
  console.log('🔄 Preenchendo dados de Outubro...\n');
  
  const metrics = loadMetrics();
  const emailMapping = loadEmailMapping();
  
  let success = 0;
  let failed = 0;
  
  for (const dados of dadosOutubro) {
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
    
    // Preencher dados de Outubro
    metrics[normalizedEmail].login.meses.Outubro.dados = {
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
    
    console.log(`✅ ${dados.nome} - Outubro`);
    success++;
  }
  
  // Salvar arquivo
  fs.writeFileSync(metricsFile, JSON.stringify(metrics, null, 2), 'utf-8');
  
  console.log(`\n📊 Resultado:`);
  console.log(`   ✅ Sucesso: ${success}`);
  console.log(`   ❌ Falhas: ${failed}`);
  console.log(`\n✅ Dados de Outubro preenchidos com sucesso!`);
};

fillOutubroData();

