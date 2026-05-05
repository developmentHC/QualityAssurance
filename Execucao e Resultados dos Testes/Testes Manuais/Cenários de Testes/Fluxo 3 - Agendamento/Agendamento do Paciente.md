# Casos de Teste — Agendamento de Paciente

Sistema: ConectaBem  
Versão: 2.0  

---

## CT-AGEND-001 — Agendamento com sucesso (fluxo simples)

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-001 |
| Título | Agendamento de paciente com um serviço |
| Pré-condição | Usuário logado · Profissional com agenda disponível |
| Dados de teste | 1 serviço válido · Data futura válida · Horário disponível |
| Passos | 1. Acessar perfil do profissional <br> 2. Selecionar 1 serviço <br> 3. Clicar em "Solicitar Agendamento" <br> 4. Selecionar data válida <br> 5. Selecionar horário disponível <br> 6. Confirmar agendamento |
| Resultado esperado | Agendamento realizado com sucesso · Exibição correta dos dados · Mensagem de confirmação |

---

## CT-AGEND-002 — Agendamento com múltiplos serviços

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-002 |
| Título | Agendamento com combinação de serviços |
| Pré-condição | Usuário logado · Serviços com durações diferentes |
| Dados de teste | Serviço A (30min) · Serviço B (60min) |
| Passos | 1. Acessar perfil <br> 2. Selecionar múltiplos serviços <br> 3. Solicitar agendamento <br> 4. Selecionar horário válido <br> 5. Confirmar |
| Resultado esperado | Soma correta das durações · Horários compatíveis exibidos · Agendamento concluído |

---

## CT-AGEND-003 — Validações obrigatórias

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-003 |
| Título | Validação de campos obrigatórios no agendamento |
| Pré-condição | Usuário no fluxo de agendamento |
| Dados de teste | Nenhum serviço selecionado |
| Passos | 1. Tentar solicitar agendamento sem selecionar serviço |
| Resultado esperado | Mensagem: "Selecione pelo menos um serviço" · Bloqueio de avanço |

---

## CT-AGEND-004 — Validação de data e hora

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-004 |
| Título | Validação de restrições de data e horário |
| Pré-condição | Usuário no calendário |
| Dados de teste | Data passada · Horário fora do expediente · Horário ocupado |
| Passos | 1. Selecionar data passada <br> 2. Selecionar horário inválido <br> 3. Selecionar horário ocupado |
| Resultado esperado | Bloqueio das seleções inválidas · Mensagens de erro apropriadas |

---

## CT-AGEND-005 — Regras de negócio

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-005 |
| Título | Validação de regras de agendamento |
| Pré-condição | Regras configuradas (antecedência, limite diário, etc.) |
| Dados de teste | Agendamento < 24h · Mais de 5 agendamentos no dia |
| Passos | 1. Tentar agendar com menos de 24h <br> 2. Exceder limite diário |
| Resultado esperado | Bloqueio com mensagens claras · Regras aplicadas corretamente |

---

## CT-AGEND-006 — Tratamento de erros

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-006 |
| Título | Tratamento de falhas no agendamento |
| Pré-condição | Sistema com possibilidade de falha simulada |
| Dados de teste | Timeout · Falha de rede · Conflito de agenda |
| Passos | 1. Realizar agendamento durante falha <br> 2. Simular timeout <br> 3. Gerar conflito de horário |
| Resultado esperado | Mensagens de erro exibidas · Opção de retry · Nenhuma duplicação de agendamento |

---

## CT-AGEND-007 — Navegação e sessão

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-007 |
| Título | Controle de navegação e sessão |
| Pré-condição | Usuário em fluxo ativo |
| Dados de teste | Sessão expirada |
| Passos | 1. Avançar etapas <br> 2. Voltar etapas <br> 3. Expirar sessão |
| Resultado esperado | Manutenção ou limpeza de dados conforme regra · Redirecionamento para login |

---

## CT-AGEND-008 — UI/UX e usabilidade

| Campo | Descrição |
|------|----------|
| ID | CT-AGEND-008 |
| Título | Validação de interface e experiência do usuário |
| Pré-condição | Sistema acessível em desktop e mobile |
| Dados de teste | Fluxo completo |
| Passos | 1. Validar layout da página <br> 2. Validar feedback visual (erro, sucesso, loading) <br> 3. Executar fluxo completo <br> 4. Testar navegação por teclado <br> 5. Testar responsividade |
| Resultado esperado | Interface clara · Feedback visual correto · Fluxo intuitivo · Responsividade adequada |
