# Casos de Teste — Gestão de Agendamentos (Profissional)

Sistema: ConectaBem  
Versão: 2.0  

---

## CT-PRO-AGEND-001 — Confirmação de agendamento

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-001 |
| Título | Confirmação de agendamento pelo profissional |
| Pré-condição | Profissional logado · Agendamento em estado Pendente |
| Dados de teste | Agendamento válido com paciente, serviço e horário |
| Passos | 1. Acessar home <br> 2. Visualizar lista de pendentes <br> 3. Acessar detalhes do agendamento <br> 4. Validar dados exibidos <br> 5. Clicar em "Confirmar Agendamento" |
| Resultado esperado | Status alterado para Confirmado · Mensagem de sucesso · Notificação enviada ao paciente · Agendamento removido da lista de pendentes · Exibido no calendário |

---

## CT-PRO-AGEND-002 — Cancelamento de agendamento

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-002 |
| Título | Cancelamento de agendamento |
| Pré-condição | Agendamento em estado Pendente ou Confirmado |
| Dados de teste | Agendamento existente |
| Passos | 1. Acessar detalhes do agendamento <br> 2. Clicar em "Cancelar Agendamento" <br> 3. Confirmar ação <br> 4. (Opcional) Inserir justificativa |
| Resultado esperado | Status alterado para Cancelado · Mensagem de confirmação · Notificação ao paciente · Bloqueio de novas ações sobre o agendamento |

---

## CT-PRO-AGEND-003 — Validação de estados e transições

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-003 |
| Título | Controle de estados do agendamento |
| Pré-condição | Agendamentos em diferentes estados (Pendente, Confirmado, Cancelado) |
| Dados de teste | Agendamentos com estados variados |
| Passos | 1. Tentar confirmar agendamento pendente <br> 2. Tentar cancelar agendamento pendente <br> 3. Tentar cancelar agendamento confirmado <br> 4. Tentar reconfirmar agendamento confirmado <br> 5. Tentar alterar agendamento cancelado |
| Resultado esperado | Transições válidas executadas corretamente · Transições inválidas bloqueadas com mensagem adequada · Estado sempre consistente |

---

## CT-PRO-AGEND-004 — Tratamento de erros e falhas

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-004 |
| Título | Resiliência a falhas no fluxo de gestão |
| Pré-condição | Sistema com possibilidade de falha simulada |
| Dados de teste | Timeout · Falha de rede · Sessão expirada |
| Passos | 1. Tentar confirmar agendamento durante falha de rede <br> 2. Simular timeout na ação <br> 3. Simular expiração de sessão |
| Resultado esperado | Mensagens de erro exibidas · Estado do agendamento não alterado indevidamente · Redirecionamento para login quando necessário |

---

## CT-PRO-AGEND-005 — Regras de negócio e conflitos

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-005 |
| Título | Validação de regras e conflitos de agenda |
| Pré-condição | Agenda com múltiplos agendamentos |
| Dados de teste | Dois agendamentos no mesmo horário |
| Passos | 1. Tentar confirmar dois agendamentos conflitantes <br> 2. Verificar bloqueio ou alerta <br> 3. Confirmar um agendamento <br> 4. Validar bloqueio do horário |
| Resultado esperado | Sistema impede conflitos ou alerta sobre sobreposição · Horário corretamente bloqueado após confirmação |

---

## CT-PRO-AGEND-006 — Navegação e persistência

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-006 |
| Título | Navegação entre listas e persistência de estado |
| Pré-condição | Profissional com agendamentos |
| Dados de teste | Lista com múltiplos estados |
| Passos | 1. Navegar entre home e "Meus Agendamentos" <br> 2. Filtrar por data <br> 3. Retornar à lista inicial |
| Resultado esperado | Dados consistentes entre telas · Filtros aplicados corretamente · Atualização automática das listas |

---

## CT-PRO-AGEND-007 — UI/UX e usabilidade

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-007 |
| Título | Validação de interface e experiência do profissional |
| Pré-condição | Sistema acessível em diferentes dispositivos |
| Dados de teste | Lista com múltiplos agendamentos |
| Passos | 1. Validar layout da home (pendentes) <br> 2. Validar página de detalhes <br> 3. Validar calendário <br> 4. Executar ações (confirmar/cancelar) <br> 5. Testar responsividade <br> 6. Navegar via teclado |
| Resultado esperado | Interface clara e organizada · Feedback visual adequado · Navegação fluida · Responsividade funcional |

---

## CT-PRO-AGEND-008 — Performance e produtividade

| Campo | Descrição |
|------|----------|
| ID | CT-PRO-AGEND-008 |
| Título | Eficiência no uso pelo profissional |
| Pré-condição | Profissional com alta carga de agendamentos |
| Dados de teste | 20+ agendamentos pendentes |
| Passos | 1. Acessar sistema <br> 2. Confirmar múltiplos agendamentos <br> 3. Navegar entre telas |
| Resultado esperado | Confirmação de múltiplos agendamentos em menos de 3 minutos · Sem travamentos · Feedback rápido e claro |
