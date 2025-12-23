/**
 * Script para gerar Metrics.json completo executando todos os scripts de preenchimento
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptsDir = path.join(__dirname);

console.log('🔄 Gerando Metrics.json completo...\n');

try {
  // Executar scripts em sequência
  console.log('📅 Preenchendo Outubro...');
  execSync(`node "${path.join(scriptsDir, 'preencher_outubro.js')}"`, { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('\n📅 Preenchendo Novembro...');
  execSync(`node "${path.join(scriptsDir, 'preencher_novembro.js')}"`, { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('\n📅 Preenchendo Dezembro...');
  execSync(`node "${path.join(scriptsDir, 'preencher_dezembro.js')}"`, { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('\n✅ Metrics.json gerado com sucesso com todos os dados!');
  console.log('📊 Outubro, Novembro e Dezembro preenchidos.');
  
} catch (error) {
  console.error('❌ Erro ao gerar Metrics.json:', error.message);
  process.exit(1);
}

