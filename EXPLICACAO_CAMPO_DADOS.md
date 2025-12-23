# 📋 Explicação do Campo `dados` Principal

## ❓ O que é o campo `dados` principal?

No arquivo `Metrics.json`, cada operador tem:

1. **Estrutura de meses** (`meses`):
   - `meses.Outubro.dados` - Métricas de Outubro
   - `meses.Novembro.dados` - Métricas de Novembro  
   - `meses.Dezembro.dados` - Métricas de Dezembro

2. **Campo `dados` principal** (na linha 114):
   - Este campo é usado como **fallback** quando não especifica um mês específico
   - Por padrão, o sistema retorna automaticamente o **último mês disponível** (Dezembro > Novembro > Outubro)

## 🔄 Como funciona?

### Quando você especifica um mês:
```
GET /api/dashboard/metrics?month=Novembro
```
→ Retorna `meses.Novembro.dados`

### Quando você NÃO especifica um mês:
```
GET /api/dashboard/metrics
```
→ O sistema automaticamente retorna o último mês disponível:
  1. Tenta `meses.Dezembro.dados`
  2. Se não existir, tenta `meses.Novembro.dados`
  3. Se não existir, tenta `meses.Outubro.dados`
  4. Se não existir, usa o campo `dados` principal

## 💡 Por que manter o campo `dados`?

1. **Compatibilidade**: Código antigo que busca `metricsData.dados` continua funcionando
2. **Simplicidade**: Quando não especifica mês, retorna automaticamente o mais recente
3. **Fallback**: Se não houver estrutura de meses, ainda funciona com o campo `dados`

## 📝 Recomendação de Uso

### ✅ Preencher os meses:
- Preencha `meses.Outubro.dados`
- Preencha `meses.Novembro.dados`
- Preencha `meses.Dezembro.dados`

### ⚠️ Sobre o campo `dados` principal:
- Você **pode ignorar** este campo se preencher os meses corretamente
- O sistema vai usar automaticamente o último mês disponível
- Ou você pode preenchê-lo manualmente se quiser definir um "mês padrão" específico

## 🎯 Resumo

- **Meses específicos** (`meses.Outubro`, etc.): Use para dados mensais
- **Campo `dados` principal**: É um fallback automático para o último mês disponível
- **Você não precisa** manter o campo `dados` sincronizado manualmente - o sistema faz isso automaticamente!

