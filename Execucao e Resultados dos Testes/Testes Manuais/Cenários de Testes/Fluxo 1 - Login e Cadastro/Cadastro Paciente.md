# Casos de Teste — Cadastro de Paciente
Sistema: ConectaBem  
Versão: 2.0  

---

## CT-001 — Cadastro com sucesso via Email

| Campo | Descrição |
|------|----------|
| ID | CT-001 |
| Título | Cadastro de paciente com dados válidos via email |
| Pré-condição | Usuário não cadastrado · Sistema disponível |
| Dados de teste | Nome: Maria Silva · Idade: 25 · CEP: 01001-000 · Email válido |
| Passos | 1. Acessar sistema <br> 2. Selecionar login por email <br> 3. Informar email válido <br> 4. Inserir OTP correto <br> 5. Preencher formulário com dados válidos <br> 6. Finalizar cadastro |
| Resultado esperado | Cadastro realizado com sucesso · Usuário autenticado · Redirecionamento para home |

---

## CT-002 — Cadastro com sucesso via Google

| Campo | Descrição |
|------|----------|
| ID | CT-002 |
| Título | Cadastro de paciente via login Google |
| Pré-condição | Conta Google válida · Usuário não cadastrado |
| Dados de teste | Conta Google ativa |
| Passos | 1. Acessar sistema <br> 2. Selecionar login Google <br> 3. Conceder permissões <br> 4. Preencher dados obrigatórios <br> 5. Finalizar cadastro |
| Resultado esperado | Cadastro realizado com sucesso · Usuário autenticado |

---

## CT-003 — Nome inválido (menos de 3 caracteres)

| Campo | Descrição |
|------|----------|
| ID | CT-003 |
| Título | Validação de nome inválido |
| Pré-condição | Usuário na etapa de cadastro |
| Dados de teste | Nome: "Jo" |
| Passos | 1. Inserir nome inválido <br> 2. Tentar avançar |
| Resultado esperado | Exibição de erro · Bloqueio de avanço |

---

## CT-004 — Idade menor que 18

| Campo | Descrição |
|------|----------|
| ID | CT-004 |
| Título | Validação de idade mínima |
| Pré-condição | Usuário na etapa de cadastro |
| Dados de teste | Idade: 17 |
| Passos | 1. Inserir idade inválida <br> 2. Tentar avançar |
| Resultado esperado | Exibição de erro · Impedir continuidade |

---

## CT-005 — Idade maior que 110

| Campo | Descrição |
|------|----------|
| ID | CT-005 |
| Título | Validação de idade máxima |
| Pré-condição | Usuário na etapa de cadastro |
| Dados de teste | Idade: 111 |
| Passos | 1. Inserir idade inválida <br> 2. Tentar avançar |
| Resultado esperado | Exibição de erro |

---

## CT-006 — CEP inválido (formato incorreto)

| Campo | Descrição |
|------|----------|
| ID | CT-006 |
| Título | Validação de formato de CEP |
| Pré-condição | Usuário na etapa de endereço |
| Dados de teste | CEP: "12345" |
| Passos | 1. Inserir CEP inválido <br> 2. Sair do campo |
| Resultado esperado | Exibição de erro de formato |

---

## CT-007 — CEP inexistente

| Campo | Descrição |
|------|----------|
| ID | CT-007 |
| Título | Validação de CEP não encontrado |
| Pré-condição | Integração com serviço de CEP ativa |
| Dados de teste | CEP: "00000-000" |
| Passos | 1. Inserir CEP <br> 2. Aguardar validação |
| Resultado esperado | Mensagem de CEP não encontrado |

---

## CT-008 — Email já cadastrado

| Campo | Descrição |
|------|----------|
| ID | CT-008 |
| Título | Validação de email duplicado |
| Pré-condição | Email já existente na base |
| Dados de teste | Email previamente cadastrado |
| Passos | 1. Inserir email <br> 2. Prosseguir |
| Resultado esperado | Mensagem de erro: email já cadastrado |

---

## CT-009 — OTP incorreto

| Campo | Descrição |
|------|----------|
| ID | CT-009 |
| Título | Validação de OTP inválido |
| Pré-condição | OTP enviado |
| Dados de teste | OTP inválido |
| Passos | 1. Inserir OTP incorreto |
| Resultado esperado | Mensagem de erro · Tentativa contabilizada |

---

## CT-010 — OTP expirado

| Campo | Descrição |
|------|----------|
| ID | CT-010 |
| Título | Validação de OTP expirado |
| Pré-condição | OTP gerado anteriormente |
| Dados de teste | OTP expirado |
| Passos | 1. Inserir OTP expirado |
| Resultado esperado | Mensagem de expiração · Opção de reenvio |

---

## CT-011 — Limite de tentativas de OTP

| Campo | Descrição |
|------|----------|
| ID | CT-011 |
| Título | Bloqueio após múltiplas tentativas inválidas |
| Pré-condição | Sistema com controle de tentativas ativo |
| Dados de teste | OTP inválido repetido 5 vezes |
| Passos | 1. Inserir OTP inválido 5 vezes |
| Resultado esperado | Bloqueio temporário de autenticação |

---

## CT-012 — Campos obrigatórios vazios

| Campo | Descrição |
|------|----------|
| ID | CT-012 |
| Título | Validação de campos obrigatórios |
| Pré-condição | Usuário na etapa de cadastro |
| Dados de teste | Campos obrigatórios vazios |
| Passos | 1. Tentar avançar sem preencher |
| Resultado esperado | Exibição de erros nos campos · Bloqueio de avanço |

---

## CT-013 — Persistência de dados após reload

| Campo | Descrição |
|------|----------|
| ID | CT-013 |
| Título | Persistência de dados |
| Pré-condição | Usuário iniciou preenchimento |
| Dados de teste | Dados válidos parcialmente preenchidos |
| Passos | 1. Preencher etapa 1 <br> 2. Recarregar página |
| Resultado esperado | Dados devem ser mantidos |

---

## CT-014 — Navegação entre etapas

| Campo | Descrição |
|------|----------|
| ID | CT-014 |
| Título | Controle de avanço entre etapas |
| Pré-condição | Usuário no fluxo de cadastro |
| Dados de teste | Dados válidos e inválidos |
| Passos | 1. Tentar avançar com dados inválidos <br> 2. Corrigir dados <br> 3. Avançar |
| Resultado esperado | Bloqueio com erro · Avanço após correção |

---

## CT-015 — Finalização do cadastro

| Campo | Descrição |
|------|----------|
| ID | CT-015 |
| Título | Finalização do fluxo de cadastro |
| Pré-condição | Todas etapas preenchidas corretamente |
| Dados de teste | Dados válidos |
| Passos | 1. Revisar dados <br> 2. Confirmar cadastro |
| Resultado esperado | Cadastro concluído · Redirecionamento para home |
