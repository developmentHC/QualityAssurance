# Plano de Testes Otimizado – Agendamento Profissional

> **Funcionalidade**: Gestão de Agendamentos (Lado Profissional)  
> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  
> **Status**: Consolidado em 4 Casos Principais

---

## Resumo da Otimização

| Métrica | Original | Otimizado | Redução |
|-------|----------|-----------|--------|
| Casos de Teste | 14 | 4 | 71% |
| Cenários Separados | 14 | 1 (estruturado) | 93% |
| Estados Testados | 14+ | 1 matriz completa | 93% |

---

## Casos de Teste

---

## CASO 1: Gestão Completa de Agendamentos

**ID:** AGEND_PRO_MAIN_001  
**Descrição:** Testa todas as ações principais do profissional sobre agendamentos

### O que este caso cobre
- Visualização de agendamentos pendentes
- Acesso aos detalhes do agendamento
- Confirmação de agendamento
- Cancelamento de agendamento
- Visualização em calendário
- Atualização automática das listas

### Passos Consolidados (Fluxo Principal)

#### 1. Confirmação completa de agendamento
- Estar logado como profissional
- Acessar a home do sistema
- Verificar:
  - Lista de agendamentos pendentes
  - Exibição de nome do paciente, serviço, data, hora e botões de ação
- Clicar em **"Informações do Agendamento"**
- Verificar página de detalhes com:
  - Dados do paciente
  - Serviço
  - Data e hora
  - Status atual
- Clicar em **"Confirmar Agendamento"**
- Verificar:
  - Status alterado para **Confirmado**
  - Mensagem de sucesso exibida
  - Notificação enviada ao paciente (simulada ou via log)
- Retornar à home
- Verificar:
  - Agendamento removido da lista de pendentes
- Acessar **"Meus Agendamentos"**
- Verificar:
  - Agendamento exibido como **Confirmado** no calendário

#### 2. Cancelamento completo de agendamento
- Ter um agendamento em estado **Pendente** ou **Confirmado**
- Acessar os detalhes do agendamento
- Clicar em **"Cancelar Agendamento"**
- Confirmar a ação
- Verificar:
  - Status alterado para **Cancelado**
  - Mensagem de confirmação exibida
  - Paciente notificado do cancelamento
- Retornar às listas
- Verificar:
  - Agendamento exibido como **Cancelado**
  - Impossibilidade de confirmar novamente

---

## CASO 2: Matriz de Estados e Transições

**ID:** AGEND_PRO_STATE_002  
**Descrição:** Centraliza todos os estados possíveis do agendamento e suas transições

### Matriz de Estados do Agendamento

| Estado Atual | Ação Tentada | Resultado Esperado | Criticidade |
|------------|-------------|--------------------|------------|
| Pendente | Confirmar | Status muda para Confirmado + notificação | Alta |
| Pendente | Cancelar | Status muda para Cancelado + notificação | Alta |
| Confirmado | Cancelar | Status muda para Cancelado + notificação | Alta |
| Confirmado | Confirmar | Ação bloqueada ou mensagem "Já confirmado" | Média |
| Cancelado | Confirmar | Mensagem "Agendamento já cancelado" | Alta |
| Cancelado | Cancelar | Ação bloqueada ou mensagem informativa | Média |
| Qualquer | Falha de rede | Mensagem de erro + estado mantido | Alta |
| Lista vazia | Acessar home | Mensagem "Não há agendamentos pendentes" | Baixa |
| Qualquer | Filtro por data | Lista filtrada corretamente | Média |
| Qualquer | Sessão expirada | Redireciona para login | Alta |

### Transições de Estado Permitidas
- Pendente → Confirmado → Fim
- Pendente → Cancelado → Fim
- Confirmado → Cancelado → Fim

### Transições Bloqueadas
- Cancelado → Confirmado
- Confirmado → Confirmado
- Cancelado → Cancelado

### Passo Padrão de Execução
- Para cada linha da matriz:
  - Garantir o estado inicial do agendamento
  - Executar a ação correspondente
  - Validar o resultado esperado

---

## CASO 3: Regras de Negócio e Fluxos Alternativos

**ID:** AGEND_PRO_RULES_003  
**Descrição:** Valida regras específicas, efeitos colaterais e cenários alternativos

### 1. Notificações e efeitos colaterais
- Confirmar um agendamento com sucesso
- Verificar:
  - Notificação enviada ao paciente
  - Agendamento removido da lista de pendentes
  - Agendamento aparece na lista de confirmados
  - Horário bloqueado no calendário do profissional

### 2. Conflitos de agenda
- Simular dois agendamentos no mesmo horário
- Tentar confirmar ambos
- Verificar:
  - Sistema bloqueia o conflito
  - Ou, se ocorrer falha, alerta de sobreposição exibido

### 3. Timeout e reconexão
- Iniciar confirmação de agendamento
- Simular expiração de sessão durante a ação
- Verificar:
  - Redirecionamento para login
  - Ação não concluída
  - Ao retornar, agendamento permanece no estado original

### 4. Cancelamento com justificativa
- Cancelar um agendamento
- Caso o sistema solicite justificativa:
  - Inserir motivo
  - Confirmar cancelamento
- Verificar:
  - Motivo registrado
  - Motivo enviado ao paciente

---

## CASO 4: UI/UX e Experiência do Profissional

**ID:** AGEND_PRO_UI_004  
**Descrição:** Avaliação de interface, usabilidade e produtividade do profissional

### 1. Home do Profissional
- Lista de pendentes com:
  - Nome do paciente
  - Serviço
  - Data
  - Hora
- Botões claros:
  - Informações
  - Confirmar
  - Cancelar
- Estado vazio com mensagem adequada
- Contador de pendentes visível
- Botão **"Ver todos os agendamentos"** funcional

### 2. Página de Detalhes
- Exibição de:
  - Paciente
  - Serviço
  - Data
  - Hora
  - Status
- Status destacado visualmente
- Botões de ação bem posicionados
- Histórico de ações (se disponível)

### 3. Calendário "Meus Agendamentos"
- Visualização mensal, semanal e diária
- Agendamentos diferenciados por status
- Filtro por data funcional
- Navegação entre períodos
- Clique no agendamento abre detalhes

### 4. Feedback Visual
- Botões com estados:
  - Normal
  - Hover
  - Disabled
  - Loading
- Confirmações com modal ou toast claro
- Mensagens de erro específicas
- Loading durante ações assíncronas

### 5. Responsividade
- Mobile:
  - Lista compacta e legível
- Tablet:
  - Calendário aproveita espaço
- Desktop:
  - Informações completas sem scroll excessivo

### Teste de Usabilidade Específico
- Considerar profissional com 20+ agendamentos pendentes
- Acessar o sistema
- Verificar:
  - Confirmação de 5 agendamentos em menos de 3 minutos
  - Nenhuma confusão entre dados
  - Ausência de cliques desnecessários
  - Feedback claro a cada ação

---

## Matriz de Cobertura Garantida

| Funcionalidade | Coberto por | Status |
|---------------|-----------|-------|
| Visualizar pendentes | MAIN + UI | ✅ |
| Ver detalhes | MAIN | ✅ |
| Confirmar agendamento | MAIN + STATE | ✅ |
| Acessar calendário | MAIN + UI | ✅ |
| Filtrar por data | MAIN | ✅ |
| Cancelar agendamento | MAIN + STATE | ✅ |
| Validação de estados | STATE | ✅ |
| Falha de comunicação | STATE | ✅ |
| Atualização automática | MAIN | ✅ |
| Sessão expirada | STATE | ✅ |
| Validação de interface | UI | ✅ |
| Fluxo completo confirmação | MAIN + RULES | ✅ |
| Fluxo completo cancelamento | MAIN + RULES | ✅ |
