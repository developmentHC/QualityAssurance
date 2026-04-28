# Casos de Teste — Login Profissional
Sistema: ConectaBem  
Versão: 2.0  

---

## CT-001 — Login com sucesso via Google

| Campo | Descrição |
|------|----------|
| ID | CT-001 |
| Título | Login com conta Google válida |
| Pré-condição | Conta Google vinculada ao sistema |
| Dados de teste | Conta Google válida |
| Passos | 1. Acessar página inicial <br> 2. Selecionar login com Google <br> 3. Conceder permissões |
| Resultado esperado | Login realizado com sucesso · Redirecionamento para dashboard |

---

## CT-002 — Login com sucesso via Email e OTP

| Campo | Descrição |
|------|----------|
| ID | CT-002 |
| Título | Login via email com OTP válido |
| Pré-condição | Email cadastrado |
| Dados de teste | Email válido · OTP correto |
| Passos | 1. Inserir email <br> 2. Solicitar OTP <br> 3. Inserir código válido |
| Resultado esperado | Login realizado com sucesso |

---

## CT-003 — Conta Google não vinculada

| Campo | Descrição |
|------|----------|
| ID | CT-003 |
| Título | Login com Google não cadastrado |
| Pré-condição | Conta Google não vinculada |
| Dados de teste | Conta não cadastrada |
| Passos | 1. Tentar login com Google |
| Resultado esperado | Mensagem de erro: conta não encontrada |

---

## CT-004 — Permissão Google negada

| Campo | Descrição |
|------|----------|
| ID | CT-004 |
| Título | Usuário nega permissão Google |
| Pré-condição | Fluxo de autenticação iniciado |
| Dados de teste | Permissão negada |
| Passos | 1. Iniciar login Google <br> 2. Negar permissões |
| Resultado esperado | Retorno à tela inicial |

---

## CT-005 — Email não cadastrado

| Campo | Descrição |
|------|----------|
| ID | CT-005 |
| Título | Login com email inexistente |
| Pré-condição | Email não cadastrado |
| Dados de teste | Email inválido |
| Passos | 1. Inserir email <br> 2. Solicitar OTP |
| Resultado esperado | Exibição de erro |

---

## CT-006 — OTP incorreto

| Campo | Descrição |
|------|----------|
| ID | CT-006 |
| Título | Código OTP inválido |
| Pré-condição | OTP enviado |
| Dados de teste | Código incorreto |
| Passos | 1. Inserir OTP inválido |
| Resultado esperado | Mensagem de erro · Tentativa contabilizada |

---

## CT-007 — OTP expirado

| Campo | Descrição |
|------|----------|
| ID | CT-007 |
| Título | Código OTP expirado |
| Pré-condição | OTP gerado anteriormente |
| Dados de teste | Código expirado |
| Passos | 1. Inserir OTP expirado |
| Resultado esperado | Solicitação de novo código |

---

## CT-008 — Limite de tentativas de OTP

| Campo | Descrição |
|------|----------|
| ID | CT-008 |
| Título | Bloqueio por múltiplas tentativas inválidas |
| Pré-condição | Controle de tentativas ativo |
| Dados de teste | OTP inválido repetido |
| Passos | 1. Inserir OTP inválido 5 vezes |
| Resultado esperado | Bloqueio temporário |

---

## CT-009 — Reenvio de OTP antes do tempo permitido

| Campo | Descrição |
|------|----------|
| ID | CT-009 |
| Título | Controle de reenvio de OTP |
| Pré-condição | OTP já solicitado |
| Dados de teste | Nova solicitação em menos de 60s |
| Passos | 1. Solicitar OTP <br> 2. Solicitar novamente antes de 60s |
| Resultado esperado | Mensagem de aguardo |

---

## CT-010 — Código antigo após reenvio

| Campo | Descrição |
|------|----------|
| ID | CT-010 |
| Título | Validação de código antigo |
| Pré-condição | Novo OTP gerado |
| Dados de teste | Código anterior |
| Passos | 1. Solicitar novo OTP <br> 2. Inserir código antigo |
| Resultado esperado | Código rejeitado |

---

## CT-011 — Login em múltiplos dispositivos

| Campo | Descrição |
|------|----------|
| ID | CT-011 |
| Título | Controle de múltiplas sessões |
| Pré-condição | Usuário logado em um dispositivo |
| Dados de teste | Segundo login |
| Passos | 1. Realizar login em outro dispositivo |
| Resultado esperado | Permitido ou bloqueado conforme política |

---

## CT-012 — Timeout de sessão

| Campo | Descrição |
|------|----------|
| ID | CT-012 |
| Título | Expiração por inatividade |
| Pré-condição | Usuário autenticado |
| Dados de teste | Inatividade > 30 min |
| Passos | 1. Permanecer inativo |
| Resultado esperado | Sessão expirada |

---

## CT-013 — Acesso após expiração

| Campo | Descrição |
|------|----------|
| ID | CT-013 |
| Título | Acesso após timeout |
| Pré-condição | Sessão expirada |
| Dados de teste | Tentativa de navegação |
| Passos | 1. Acessar área protegida |
| Resultado esperado | Redirecionamento para login |

---

## CT-014 — Logout manual

| Campo | Descrição |
|------|----------|
| ID | CT-014 |
| Título | Encerramento de sessão |
| Pré-condição | Usuário autenticado |
| Dados de teste | — |
| Passos | 1. Clicar em logout |
| Resultado esperado | Sessão encerrada · Redirecionamento |

---

## CT-015 — Acesso após logout

| Campo | Descrição |
|------|----------|
| ID | CT-015 |
| Título | Bloqueio após logout |
| Pré-condição | Logout realizado |
| Dados de teste | URL protegida |
| Passos | 1. Tentar acessar rota protegida |
| Resultado esperado | Acesso bloqueado |

---

## CT-016 — Falha de conexão

| Campo | Descrição |
|------|----------|
| ID | CT-016 |
| Título | Tratamento de erro de rede |
| Pré-condição | Conexão instável ou indisponível |
| Dados de teste | Simulação de falha |
| Passos | 1. Tentar login |
| Resultado esperado | Mensagem de erro · Opção de retry |

---
