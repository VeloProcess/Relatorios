/**
 * Script para preencher dados de Dezembro no Metrics.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const metricsFile = path.join(__dirname, '../data/Metrics.json');
const sendEmailFile = path.join(__dirname, '../src/controllers/send_email.JSON');

// Dados da tabela de Dezembro
const dadosDezembro = [
  {
    nome: "Dimas Henrique Gonçalves do Nascimento",
    ligacoes: 254,
    tma: "00:04:54",
    nota_telefone: 4.96,
    quantidade_notas_telefone: 103,
    tickets: 90,
    tmt: "02:29:48",
    nota_ticket: 2.83,
    quantidade_notas_ticket: 12,
    nota_qualidade: 0.88,
    quantidade_avaliacoes: 3,
    total_escalado: "143:00:00",
    total_cumprido: "158:16:48",
    abs: 0,
    atrasos: 2,
    pausa_escalada: "24:30:00",
    pausa_realizada: "23:42:48",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "14:47:36",
    pausa_10_escalada: "8:30:00",
    pausa_10_realizada: "5:00:23",
    pausa_banheiro: "2:06:02",
    pausa_feedback: "1:43:35",
    pausa_treinamento: "0:05:12"
  },
  {
    nome: "Gabrielli Ribeiro de Assunção",
    ligacoes: 250,
    tma: "00:03:37",
    nota_telefone: 4.80,
    quantidade_notas_telefone: 106,
    tickets: 163,
    tmt: "02:46:06",
    nota_ticket: 3.71,
    quantidade_notas_ticket: 14,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "155:32:33",
    abs: 0,
    atrasos: 0,
    pausa_escalada: "24:00:00",
    pausa_realizada: "25:23:41",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "15:46:09",
    pausa_10_escalada: "8:00:00",
    pausa_10_realizada: "5:21:48",
    pausa_banheiro: "2:18:35",
    pausa_feedback: "1:52:17",
    pausa_treinamento: "0:04:52"
  },
  {
    nome: "Igor Leme de Siqueira",
    ligacoes: 154,
    tma: "00:04:39",
    nota_telefone: 4.89,
    quantidade_notas_telefone: 81,
    tickets: 39,
    tmt: "01:19:44",
    nota_ticket: 2.00,
    quantidade_notas_ticket: 4,
    nota_qualidade: 0.97,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "115:53:22",
    abs: 4,
    atrasos: 8,
    pausa_escalada: "16:30:00",
    pausa_realizada: "16:02:31",
    pausa_almoco_escalada: "11:00:00",
    pausa_almoco_realizada: "9:54:40",
    pausa_10_escalada: "5:30:00",
    pausa_10_realizada: "2:57:26",
    pausa_banheiro: "2:03:54",
    pausa_feedback: "0:27:58",
    pausa_treinamento: "0:04:37"
  },
  {
    nome: "Juliana Aparecida Rofino",
    ligacoes: 186,
    tma: "00:03:59",
    nota_telefone: 4.97,
    quantidade_notas_telefone: 90,
    tickets: 71,
    tmt: "03:36:53",
    nota_ticket: 3.00,
    quantidade_notas_ticket: 9,
    nota_qualidade: 0.90,
    quantidade_avaliacoes: 3,
    total_escalado: "133:00:00",
    total_cumprido: "136:30:55",
    abs: 0,
    atrasos: 11,
    pausa_escalada: "20:00:00",
    pausa_realizada: "20:03:58",
    pausa_almoco_escalada: "13:00:00",
    pausa_almoco_realizada: "13:10:56",
    pausa_10_escalada: "7:00:00",
    pausa_10_realizada: "5:00:14",
    pausa_banheiro: "1:16:42",
    pausa_feedback: "0:30:13",
    pausa_treinamento: "0:05:53"
  },
  {
    nome: "Laura Ketheleen de Freitas Guedes",
    ligacoes: 185,
    tma: "00:04:07",
    nota_telefone: 4.85,
    quantidade_notas_telefone: 48,
    tickets: 52,
    tmt: "02:20:28",
    nota_ticket: 2.80,
    quantidade_notas_ticket: 5,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 3,
    total_escalado: "133:00:00",
    total_cumprido: "133:12:48",
    abs: 0,
    atrasos: 10,
    pausa_escalada: "20:00:00",
    pausa_realizada: "20:45:13",
    pausa_almoco_escalada: "13:00:00",
    pausa_almoco_realizada: "12:21:25",
    pausa_10_escalada: "7:00:00",
    pausa_10_realizada: "5:37:45",
    pausa_banheiro: "1:57:16",
    pausa_feedback: "0:43:02",
    pausa_treinamento: "0:05:45"
  },
  {
    nome: "Laura Porto de Almeida",
    ligacoes: 179,
    tma: "00:04:17",
    nota_telefone: 4.86,
    quantidade_notas_telefone: 56,
    tickets: 61,
    tmt: "02:54:35",
    nota_ticket: 4.00,
    quantidade_notas_ticket: 4,
    nota_qualidade: 0.92,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "129:21:48",
    abs: 2,
    atrasos: 10,
    pausa_escalada: "21:00:00",
    pausa_realizada: "21:10:24",
    pausa_almoco_escalada: "14:00:00",
    pausa_almoco_realizada: "14:14:18",
    pausa_10_escalada: "7:00:00",
    pausa_10_realizada: "4:09:09",
    pausa_banheiro: "2:07:54",
    pausa_feedback: "0:39:03",
    pausa_treinamento: null
  },
  {
    nome: "Marcelo Rodrigo Izael da Silva",
    ligacoes: 187,
    tma: "00:03:47",
    nota_telefone: 4.75,
    quantidade_notas_telefone: 129,
    tickets: 132,
    tmt: "03:03:45",
    nota_ticket: 2.92,
    quantidade_notas_ticket: 12,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 3,
    total_escalado: "114:24:00",
    total_cumprido: "123:21:27",
    abs: 0,
    atrasos: 4,
    pausa_escalada: "18:00:00",
    pausa_realizada: "19:48:29",
    pausa_almoco_escalada: "13:00:00",
    pausa_almoco_realizada: "13:14:57",
    pausa_10_escalada: "5:00:00",
    pausa_10_realizada: "3:40:24",
    pausa_banheiro: "2:23:16",
    pausa_feedback: "0:25:44",
    pausa_treinamento: "0:04:08"
  },
  {
    nome: "Marcos da Silva Pereira",
    ligacoes: 192,
    tma: "00:05:29",
    nota_telefone: 4.81,
    quantidade_notas_telefone: 113,
    tickets: 101,
    tmt: "02:35:25",
    nota_ticket: 3.33,
    quantidade_notas_ticket: 3,
    nota_qualidade: 0.95,
    quantidade_avaliacoes: 3,
    total_escalado: "136:36:00",
    total_cumprido: "123:10:52",
    abs: 0,
    atrasos: 11,
    pausa_escalada: "21:20:00",
    pausa_realizada: "24:54:06",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "15:58:19",
    pausa_10_escalada: "5:20:00",
    pausa_10_realizada: "2:45:52",
    pausa_banheiro: "1:51:55",
    pausa_feedback: "4:18:00",
    pausa_treinamento: null
  },
  {
    nome: "Mariana Leao Cordeiro da Cruz",
    ligacoes: 33,
    tma: "00:10:14",
    nota_telefone: 4.91,
    quantidade_notas_telefone: 23,
    tickets: 48,
    tmt: "02:15:55",
    nota_ticket: 3.00,
    quantidade_notas_ticket: 2,
    nota_qualidade: 0.93,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "137:55:24",
    abs: 0,
    atrasos: 5,
    pausa_escalada: "24:00:00",
    pausa_realizada: "21:12:52",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "13:09:45",
    pausa_10_escalada: "8:00:00",
    pausa_10_realizada: "4:56:28",
    pausa_banheiro: "1:30:20",
    pausa_feedback: "1:36:19",
    pausa_treinamento: null
  },
  {
    nome: "Monike Samara Nascimento da Silva",
    ligacoes: 219,
    tma: "00:05:05",
    nota_telefone: 4.84,
    quantidade_notas_telefone: 79,
    tickets: 75,
    tmt: "02:03:05",
    nota_ticket: 2.73,
    quantidade_notas_ticket: 11,
    nota_qualidade: 0.92,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "154:06:21",
    abs: 0,
    atrasos: 8,
    pausa_escalada: "24:00:00",
    pausa_realizada: "23:14:53",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "16:00:08",
    pausa_10_escalada: "8:00:00",
    pausa_10_realizada: "6:13:18",
    pausa_banheiro: "0:26:35",
    pausa_feedback: "0:29:13",
    pausa_treinamento: "0:04:27"
  },
  {
    nome: "Murilo mazin cersozimo caetano",
    ligacoes: 219,
    tma: "00:05:23",
    nota_telefone: 4.74,
    quantidade_notas_telefone: 92,
    tickets: 54,
    tmt: "01:43:29",
    nota_ticket: 3.17,
    quantidade_notas_ticket: 6,
    nota_qualidade: 0.87,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "151:03:00",
    abs: 0,
    atrasos: 10,
    pausa_escalada: "24:00:00",
    pausa_realizada: "26:23:03",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "15:05:11",
    pausa_10_escalada: "8:00:00",
    pausa_10_realizada: "6:05:32",
    pausa_banheiro: "1:46:25",
    pausa_feedback: "3:02:59",
    pausa_treinamento: null
  },
  {
    nome: "Rodrigo Raimundo Reis",
    ligacoes: 251,
    tma: "00:05:14",
    nota_telefone: 4.84,
    quantidade_notas_telefone: 86,
    tickets: 68,
    tmt: "02:10:31",
    nota_ticket: 4.00,
    quantidade_notas_ticket: 10,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "155:01:08",
    abs: 0,
    atrasos: 0,
    pausa_escalada: "24:00:00",
    pausa_realizada: "21:44:11",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "13:50:27",
    pausa_10_escalada: "8:00:00",
    pausa_10_realizada: "4:31:17",
    pausa_banheiro: "2:03:48",
    pausa_feedback: "0:54:42",
    pausa_treinamento: "0:23:57"
  },
  {
    nome: "Stephanie Monterani de Oliveira",
    ligacoes: 209,
    tma: "00:05:25",
    nota_telefone: 4.86,
    quantidade_notas_telefone: 144,
    tickets: 45,
    tmt: "02:13:53",
    nota_ticket: 3.00,
    quantidade_notas_ticket: 6,
    nota_qualidade: 0.78,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "142:55:04",
    abs: 1,
    atrasos: 14,
    pausa_escalada: "21:00:00",
    pausa_realizada: "30:00:36",
    pausa_almoco_escalada: "14:00:00",
    pausa_almoco_realizada: "15:34:23",
    pausa_10_escalada: "7:00:00",
    pausa_10_realizada: "3:10:32",
    pausa_banheiro: "6:45:25",
    pausa_feedback: "4:24:23",
    pausa_treinamento: "0:05:53"
  },
  {
    nome: "Vinicius Nascimento de Assunção",
    ligacoes: 226,
    tma: "00:05:03",
    nota_telefone: 4.86,
    quantidade_notas_telefone: 145,
    tickets: 73,
    tmt: "01:31:59",
    nota_ticket: 3.00,
    quantidade_notas_ticket: 7,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 3,
    total_escalado: "157:00:00",
    total_cumprido: "151:28:34",
    abs: 0,
    atrasos: 5,
    pausa_escalada: "24:00:00",
    pausa_realizada: "22:48:16",
    pausa_almoco_escalada: "16:00:00",
    pausa_almoco_realizada: "14:03:02",
    pausa_10_escalada: "8:00:00",
    pausa_10_realizada: "5:10:33",
    pausa_banheiro: "1:55:59",
    pausa_feedback: "1:18:20",
    pausa_treinamento: "0:20:22"
  },
  {
    nome: "Viviane Barros Silva",
    ligacoes: 186,
    tma: "00:03:30",
    nota_telefone: 4.82,
    quantidade_notas_telefone: 97,
    tickets: 78,
    tmt: "01:59:18",
    nota_ticket: 3.43,
    quantidade_notas_ticket: 7,
    nota_qualidade: 1.00,
    quantidade_avaliacoes: 2,
    total_escalado: "157:00:00",
    total_cumprido: "134:10:10",
    abs: 2,
    atrasos: 12,
    pausa_escalada: "21:00:00",
    pausa_realizada: "21:27:22",
    pausa_almoco_escalada: "14:00:00",
    pausa_almoco_realizada: "13:59:01",
    pausa_10_escalada: "7:00:00",
    pausa_10_realizada: "5:46:54",
    pausa_banheiro: "0:58:02",
    pausa_feedback: "0:37:15",
    pausa_treinamento: "0:06:10"
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
  if (!timeStr || timeStr === '-' || timeStr === null || timeStr === '#REF!' || timeStr === '##') return "00:00:00";
  // Se já está no formato HH:MM:SS, retornar
  if (timeStr.match(/^\d{2}:\d{2}:\d{2}$/)) return timeStr;
  // Se está no formato H:MM:SS, adicionar zero à esquerda
  if (timeStr.match(/^\d{1,2}:\d{2}:\d{2}$/)) {
    const parts = timeStr.split(':');
    return `${parts[0].padStart(2, '0')}:${parts[1]}:${parts[2]}`;
  }
  return timeStr;
};

const fillDezembroData = () => {
  console.log('🔄 Preenchendo dados de Dezembro...\n');
  
  const metrics = loadMetrics();
  const emailMapping = loadEmailMapping();
  
  let success = 0;
  let failed = 0;
  
  for (const dados of dadosDezembro) {
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
    
    // Preencher dados de Dezembro
    metrics[normalizedEmail].login.meses.Dezembro.dados = {
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
        atrasos: dados.atrasos || 0, // Campo novo em Dezembro!
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
    
    console.log(`✅ ${dados.nome} - Dezembro`);
    success++;
  }
  
  // Salvar arquivo
  fs.writeFileSync(metricsFile, JSON.stringify(metrics, null, 2), 'utf-8');
  
  console.log(`\n📊 Resultado:`);
  console.log(`   ✅ Sucesso: ${success}`);
  console.log(`   ❌ Falhas: ${failed}`);
  console.log(`\n✅ Dados de Dezembro preenchidos com sucesso!`);
};

fillDezembroData();

