# 📋 Guia para Commitar Metrics.json

## ⚠️ IMPORTANTE: Arquivo Metrics.json está sendo ignorado!

O arquivo `back-end/data/Metrics.json` está sendo ignorado pelo `.gitignore` (linha 13).

## 🔧 Opções:

### Opção 1: Manter Metrics.json privado (RECOMENDADO)
Se os dados são sensíveis, mantenha o arquivo ignorado e crie um arquivo de exemplo:

```bash
# Criar arquivo de exemplo (sem dados reais)
cp back-end/data/Metrics.json back-end/data/Metrics.json.example
git add back-end/data/Metrics.json.example
git commit -m "Adicionar exemplo de estrutura Metrics.json"
```

### Opção 2: Incluir Metrics.json no Git
Se você quer versionar os dados, edite o `.gitignore`:

1. Abra `.gitignore`
2. Remova ou comente a linha `back-end/data/`
3. Adicione exceção: `!back-end/data/Metrics.json`

Ou execute:
```bash
# Remover Metrics.json do .gitignore temporariamente
git add -f back-end/data/Metrics.json
git commit -m "Adicionar Metrics.json com dados de Outubro, Novembro e Dezembro"
```

## 📝 Comandos para Commit Completo

### 1. Verificar status atual:
```bash
git status
```

### 2. Adicionar arquivos modificados:
```bash
# Adicionar todos os arquivos (exceto os ignorados)
git add .

# OU adicionar arquivos específicos:
git add back-end/src/services/metricsService.js
git add back-end/src/routes/dashboardRoutes.js
git add back-end/scripts/preencher_*.js
git add back-end/scripts/gerar_metrics_*.js
```

### 3. Fazer commit:
```bash
git commit -m "Implementar sistema de métricas mensais (Outubro, Novembro, Dezembro)

- Adicionar estrutura de meses no Metrics.json
- Criar scripts para preencher dados mensais
- Atualizar metricsService para suportar busca por mês
- Adicionar campo 'atrasos' em Dezembro
- Suportar TMT e nota_ticket nos meses"
```

### 4. Verificar remote configurado:
```bash
git remote -v
```

### 5. Fazer push:
```bash
git push origin main
# ou
git push origin master
```

## 🔍 Verificar se Metrics.json será commitado:

```bash
# Verificar se Metrics.json está sendo rastreado
git ls-files | grep Metrics.json

# Se não aparecer nada, o arquivo está sendo ignorado
```

## ✅ Recomendação Final:

**Manter Metrics.json privado** e criar apenas um arquivo de exemplo:
- `Metrics.json.example` → versão sem dados reais (já existe)
- `Metrics.json` → dados reais (permanece ignorado)

Isso protege dados sensíveis e permite que outros desenvolvedores vejam a estrutura.

