# Plano de Testes Otimizado – Agendamento Paciente

> **Funcionalidade**: Fluxo de Agendamento  
> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  
> **Status**: Consolidado em 4 Casos Principais

---

## Resumo da Otimização

| Métrica | Original | Otimizado | Redução |
|-------|----------|-----------|--------|
| Casos de Teste | 8 | 4 | 50% |
| Cenários Separados | 8 | 1 (estruturado) | 87.5% |
| Validações Dispersas | 8+ | 1 matriz | 87.5% |

---

## Casos de Teste

---

## CASO 1: Fluxo Completo de Agendamento

**ID:** AGEND_MAIN_001  
**Descrição:** Testa todas as etapas do agendamento feliz (end-to-end)

### O que este caso cobre
- Acesso ao perfil do profissional
- Seleção de um ou mais serviços
- Solicitação de agendamento
- Seleção de data e hora
- Confirmação com sucesso

### Passos Consolidados (Lista)

#### 1. Agendamento simples
- Estar logado como paciente
- Clicar em **"Ver perfil"** de um profissional
- Verificar redirecionamento para a página do profissional
- Validar exibição de:
  - Nome
  - Especialidade
  - Serviços
  - Avaliações
- Selecionar **1 serviço** via checkbox
- Clicar em **"Solicitar Agendamento"**
- Selecionar data disponível
- Selecionar horário disponível
- Confirmar agendamento
- Verificar:
  - Mensagem **"Solicitação enviada com sucesso"**
  - Exibição de profissional, serviço e data/hora
  - Opção para voltar à lista de profissionais

#### 2. Agendamento com múltiplos serviços
- Estar na página do profissional
- Selecionar **2 ou mais serviços**
- Solicitar agendamento
- Selecionar data e horário disponíveis
- Confirmar
- Verificar:
  - Mensagem de sucesso
  - Lista completa de todos os serviços agendados

#### 3. Fluxo completo (tempo de execução)
- Iniciar login como paciente
- Executar todo o fluxo:
  - Perfil → Serviço → Data → Confirmação
- Verificar:
  - Tempo total inferior a 60 segundos
  - Ausência de erros durante o processo

---

## CASO 2: Matriz de Validações e Erros

**ID:** AGEND_VALID_002  
**Descrição:** Centraliza todas as validações, erros e estados especiais

### Matriz Completa de Estados

| Estado | Entrada/Ação | Comportamento Esperado | Criticidade |
|------|-------------|------------------------|------------|
| Sem serviço selecionado | Clicar em "Solicitar" sem checkbox | Mensagem: "Selecione pelo menos um serviço" | Alta |
| Data passada | Selecionar data anterior à atual | Data bloqueada ou mensagem de erro | Alta |
| Hora indisponível | Selecionar horário já ocupado | Mensagem: "Horário indisponível" | Alta |
| Falha servidor | Enviar durante falha de rede | Mensagem de erro + botão "Tentar novamente" | Alta |
| Conflito de agenda | Agendar horário já reservado | Mensagem orientando escolher outro horário | Alta |
| Timeout | Resposta > 15 segundos | Loading visível + timeout controlado | Média |
| Serviço indisponível | Selecionar serviço desativado | Checkbox desabilitado ou mensagem | Média |
| Limite de agendamentos | Tentar 6º agendamento no dia | Mensagem: "Limite diário atingido (5)" | Média |
| Voltar etapas | Clicar em "Voltar" no fluxo | Manutenção ou não das seleções (regra definida) | Baixa |
| Sessão expirada | Sessão expira no processo | Redirecionamento para login | Média |

### Passo Padrão para Execução
- Para cada linha da matriz:
  - Estar no ponto correto do fluxo de agendamento
  - Executar a ação descrita
  - Validar o comportamento esperado

---

## CASO 3: Regras de Negócio e Combinações

**ID:** AGEND_RULES_003  
**Descrição:** Valida regras específicas, cálculos e combinações complexas

### 1. Antecedência mínima
- Considerar política: **agendamento mínimo de 24h**
- Tentar selecionar data/hora com apenas 12h de antecedência
- Verificar:
  - Bloqueio do agendamento
  - Mensagem: "Agende com pelo menos 24h de antecedência"
  - Calendário exibindo apenas datas a partir do dia seguinte

### 2. Horário de atendimento
- Considerar horário do profissional: **08h às 18h**
- Tentar selecionar horário **19:00**
- Verificar:
  - Bloqueio da seleção
  - Mensagem: "Fora do horário de atendimento"
  - Exibição apenas de slots entre 08h e 18h

### 3. Duração de serviços combinados
- Considerar:
  - Serviço A: 30 minutos
  - Serviço B: 60 minutos
- Selecionar ambos serviços
- Verificar:
  - Cálculo automático de 90 minutos
  - Exibição apenas de horários com slot compatível
  - Ou sugestão para agendamento separado

### 4. Cancelamento e reagendamento
- Ter um agendamento iniciado
- Receber erro e clicar em **"Realizar Novo Agendamento"**
- Verificar:
  - Retorno à seleção de data/hora
  - Serviços previamente selecionados mantidos
  - Possibilidade de escolher novo horário

---

## CASO 4: UI/UX e Usabilidade

**ID:** AGEND_UI_004  
**Descrição:** Avaliação visual, usabilidade e experiência do usuário

### 1. Página do Profissional
- Foto e nome visíveis no topo
- Especialidades claramente listadas
- Serviços exibindo:
  - Nome
  - Descrição
  - Duração
  - Preço
- Checkboxes alinhados e funcionais
- Botão **"Solicitar Agendamento"** visível e claro

### 2. Tela de Agendamento (Data/Hora)
- Calendário exibindo apenas dias disponíveis
- Horários livres claramente indicados
- Datas passadas e indisponíveis desabilitadas
- Fluxo fluido: data → hora → confirmação
- Resumo do agendamento sempre visível

### 3. Feedback Visual
- Checkbox selecionado com mudança visual
- Loading durante processamento
- Sucesso:
  - Ícone positivo
  - Mensagem clara
- Erro:
  - Cor vermelha
  - Ícone de alerta
  - Mensagem específica
- Botões com estados: normal, hover, desabilitado

### 4. Usabilidade e Acessibilidade
- Fluxo intuitivo e guiado
- Possibilidade de voltar e alterar escolhas
- Informações visíveis no momento correto
- Mobile:
  - Calendário responsivo
  - Interações fáceis por toque
- Teclado:
  - Navegação por TAB funcional

### Teste de Usabilidade Completo
- Considerar usuário novo
- Realizar primeiro agendamento
- Verificar:
  - Conclusão em menos de 2 minutos
  - Nenhuma ajuda externa necessária
  - Compreensão clara de cada etapa

---

## Matriz de Cobertura Garantida

| Requisito | Caso | Status |
|---------|------|-------|
| Acessar perfil profissional | AGEND_MAIN_001 | ✅ |
| Selecionar serviço | AGEND_MAIN_001 | ✅ |
| Selecionar múltiplos serviços | AGEND_MAIN_001 | ✅ |
| Validação sem serviço | AGEND_VALID_002 | ✅ |
| Falha no envio | AGEND_VALID_002 | ✅ |
| Cancelar e refazer | AGEND_RULES_003 | ✅ |
| Validação de interface | AGEND_UI_004 | ✅ |
| Teste de usabilidade | AGEND_UI_004 | ✅ |
