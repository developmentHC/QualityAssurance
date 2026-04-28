# Casos de Teste — Cadastro de Profissional
Sistema: ConectaBem  
Versão: 2.0  

---

## CT-001 — Cadastro com sucesso via Email

| Campo | Descrição |
|------|----------|
| ID | CT-001 |
| Título | Cadastro de profissional com dados válidos via email |
| Pré-condição | Usuário não cadastrado |
| Dados de teste | Nome completo válido · Idade: 30 · CPF válido · CEP válido · Especialidade selecionada |
| Passos | 1. Acessar sistema <br> 2. Selecionar login por email <br> 3. Inserir email válido <br> 4. Informar OTP correto <br> 5. Preencher dados pessoais <br> 6. Preencher dados profissionais <br> 7. Selecionar especialidade <br> 8. Finalizar cadastro |
| Resultado esperado | Cadastro realizado com sucesso · Usuário autenticado · Redirecionamento para home |

---

## CT-002 — Cadastro com sucesso via Google

| Campo | Descrição |
|------|----------|
| ID | CT-002 |
| Título | Cadastro de profissional via Google |
| Pré-condição | Conta Google válida |
| Dados de teste | Conta Google ativa |
| Passos | 1. Acessar sistema <br> 2. Selecionar login Google <br> 3. Conceder permissões <br> 4. Preencher dados obrigatórios <br> 5. Finalizar cadastro |
| Resultado esperado | Cadastro realizado com sucesso |

---

## CT-003 — Nome inválido (menos de 10 caracteres)

| Campo | Descrição |
|------|----------|
| ID | CT-003 |
| Título | Validação de nome curto |
| Pré-condição | Usuário na etapa de dados pessoais |
| Dados de teste | Nome: "Ana" |
| Passos | 1. Inserir nome inválido <br> 2. Tentar avançar |
| Resultado esperado | Exibição de erro · Bloqueio de avanço |

---

## CT-004 — Nome com espaços duplicados

| Campo | Descrição |
|------|----------|
| ID | CT-004 |
| Título | Validação de nome com espaços inválidos |
| Pré-condição | Usuário na etapa de dados pessoais |
| Dados de teste | Nome: "João  Silva" |
| Passos | 1. Inserir nome <br> 2. Validar campo |
| Resultado esperado | Exibição de erro |

---

## CT-005 — Idade menor que 18

| Campo | Descrição |
|------|----------|
| ID | CT-005 |
| Título | Validação de idade mínima |
| Pré-condição | Usuário na etapa de dados pessoais |
| Dados de teste | Idade: 17 |
| Passos | 1. Inserir idade inválida |
| Resultado esperado | Exibição de erro |

---

## CT-006 — CPF inválido

| Campo | Descrição |
|------|----------|
| ID | CT-006 |
| Título | Validação de CPF inválido |
| Pré-condição | Campo de documento disponível |
| Dados de teste | CPF inválido |
| Passos | 1. Inserir CPF inválido |
| Resultado esperado | Exibição de erro de validação |

---

## CT-007 — CNPJ inválido

| Campo | Descrição |
|------|----------|
| ID | CT-007 |
| Título | Validação de CNPJ inválido |
| Pré-condição | Seleção de pessoa jurídica |
| Dados de teste | CNPJ inválido |
| Passos | 1. Selecionar PJ <br> 2. Inserir CNPJ inválido |
| Resultado esperado | Exibição de erro |

---

## CT-008 — CEP profissional inválido

| Campo | Descrição |
|------|----------|
| ID | CT-008 |
| Título | CEP profissional inválido |
| Pré-condição | Etapa de dados profissionais |
| Dados de teste | CEP: "00000-000" |
| Passos | 1. Inserir CEP |
| Resultado esperado | Mensagem de CEP não encontrado |

---

## CT-009 — Endereço com tamanho inválido

| Campo | Descrição |
|------|----------|
| ID | CT-009 |
| Título | Validação de endereço curto |
| Pré-condição | Campo endereço disponível |
| Dados de teste | "Rua A" |
| Passos | 1. Inserir endereço |
| Resultado esperado | Exibição de erro |

---

## CT-010 — Número do endereço inválido

| Campo | Descrição |
|------|----------|
| ID | CT-010 |
| Título | Validação de número do endereço |
| Pré-condição | Campo número disponível |
| Dados de teste | Número: 0 |
| Passos | 1. Inserir número inválido |
| Resultado esperado | Exibição de erro |

---

## CT-011 — Nenhuma especialidade selecionada

| Campo | Descrição |
|------|----------|
| ID | CT-011 |
| Título | Validação de especialidade obrigatória |
| Pré-condição | Etapa de especialidades |
| Dados de teste | Nenhuma selecionada |
| Passos | 1. Tentar avançar |
| Resultado esperado | Exibição de erro · Bloqueio de avanço |

---

## CT-012 — Sugestão vazia

| Campo | Descrição |
|------|----------|
| ID | CT-012 |
| Título | Validação de campo sugestão |
| Pré-condição | Campo sugestão disponível |
| Dados de teste | Campo vazio |
| Passos | 1. Tentar finalizar |
| Resultado esperado | Exibição de erro |

---

## CT-013 — Email já cadastrado como paciente

| Campo | Descrição |
|------|----------|
| ID | CT-013 |
| Título | Email vinculado a paciente |
| Pré-condição | Email já cadastrado como paciente |
| Dados de teste | Email existente |
| Passos | 1. Inserir email <br> 2. Prosseguir |
| Resultado esperado | Bloqueio · Mensagem explicativa |

---

## CT-014 — OTP inválido

| Campo | Descrição |
|------|----------|
| ID | CT-014 |
| Título | Validação de OTP incorreto |
| Pré-condição | OTP enviado |
| Dados de teste | OTP inválido |
| Passos | 1. Inserir OTP incorreto |
| Resultado esperado | Mensagem de erro |

---

## CT-015 — Limite de tentativas de OTP

| Campo | Descrição |
|------|----------|
| ID | CT-015 |
| Título | Bloqueio por tentativas inválidas |
| Pré-condição | Sistema com controle de tentativas |
| Dados de teste | OTP inválido repetido |
| Passos | 1. Inserir OTP inválido 5 vezes |
| Resultado esperado | Bloqueio temporário |

---

## CT-016 — Persistência de dados

| Campo | Descrição |
|------|----------|
| ID | CT-016 |
| Título | Recuperação após reload |
| Pré-condição | Dados parcialmente preenchidos |
| Dados de teste | Dados válidos |
| Passos | 1. Preencher formulário <br> 2. Recarregar página |
| Resultado esperado | Dados persistem |

---

## CT-017 — Cadastro Pessoa Física válido

| Campo | Descrição |
|------|----------|
| ID | CT-017 |
| Título | Cadastro como pessoa física |
| Pré-condição | Seleção de PF |
| Dados de teste | CPF válido · Sem clínica |
| Passos | 1. Preencher dados PF <br> 2. Finalizar |
| Resultado esperado | Cadastro realizado com sucesso |

---

## CT-018 — Cadastro Pessoa Jurídica válido

| Campo | Descrição |
|------|----------|
| ID | CT-018 |
| Título | Cadastro como pessoa jurídica |
| Pré-condição | Seleção de PJ |
| Dados de teste | CNPJ válido · Clínica preenchida |
| Passos | 1. Selecionar PJ <br> 2. Preencher dados <br> 3. Finalizar |
| Resultado esperado | Cadastro realizado com sucesso |

---

## CT-019 — PJ sem CNPJ

| Campo | Descrição |
|------|----------|
| ID | CT-019 |
| Título | Validação de CNPJ obrigatório |
| Pré-condição | Seleção de PJ |
| Dados de teste | CNPJ vazio |
| Passos | 1. Tentar finalizar |
| Resultado esperado | Exibição de erro |

---
