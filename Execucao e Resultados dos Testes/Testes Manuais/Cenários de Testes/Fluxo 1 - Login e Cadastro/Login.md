# Plano de Testes Otimizado – Login Profissional

> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  
> **Status**: Consolidação Inteligente  

---

## Resumo da Otimização

| Métrica | Original | Otimizado | Redução |
|---------|----------|-----------|---------|
| Casos de Teste | 10 | 3 | 70% |
| Cenários Separados | 4 | 1 (estruturado) | 75% |
| Validações Individuais | 10+ | 1 matriz | 90% |

---

## Casos de Teste

---

## Caso 01: Fluxos Principais de Login do Profissional

**ID:** LOGIN_PRO_MAIN_001  
**Técnica:** Particionamento de Equivalência + Fluxo Principal  
**Risco:** Alto  
**Automatizável:** Sim  

### Descrição
Valida todos os caminhos felizes de autenticação do profissional, garantindo acesso correto ao dashboard em diferentes métodos de login e dispositivos.

### Cenários Cobertos

| Método | Condição | Resultado Esperado | Criticidade |
|------|----------|-------------------|-------------|
| Google | Conta vinculada e permissões aceitas | Login realizado | Alta |
| Email/OTP | Email cadastrado + OTP válido | Login realizado | Alta |
| Sessão | Novo dispositivo | Permitido ou bloqueado conforme política | Média |

### Dados de Teste Estratégicos

- Conta Google previamente vinculada  
- Email profissional cadastrado  
- OTP válido dentro de 5 minutos  
- Usuário já logado em Desktop  
- Segundo dispositivo (Mobile)  

### Passos do Teste

1. Acessar a página inicial do ConectaBem  
2. Selecionar o método de login:
   - Google **ou**
   - Email com envio de OTP  
3. Concluir autenticação com credenciais válidas  
4. Verificar redirecionamento para dashboard profissional  
5. Validar dados do perfil exibidos  
6. Realizar login adicional em outro dispositivo (se aplicável)  

### Resultado Esperado

- Sessão criada com sucesso  
- Dashboard profissional exibido  
- Nome e perfil corretos  
- Comportamento de múltiplos dispositivos conforme política definida  

---

## Caso 02: Matriz Completa de Exceções e Erros de Login

**ID:** LOGIN_PRO_ERROR_002  
**Técnica:** Tabela de Decisão Expandida + Particionamento de Equivalência  
**Risco:** Alto  
**Automatizável:** Sim  

### Matriz de Erros e Exceções

| Método | Cenário | Comportamento Esperado | Criticidade |
|------|--------|------------------------|-------------|
| Google | Conta não vinculada | Mensagem: “Conta não encontrada. Cadastre-se primeiro.” | Alta |
| Google | Permissão negada | Retorno à tela inicial com aviso | Média |
| Google | Autenticação cancelada | Retorno silencioso à tela inicial | Baixa |
| Email/OTP | Email não cadastrado | Erro imediato | Alta |
| Email/OTP | Código incorreto | Mensagem com contador de tentativas | Alta |
| Email/OTP | Código expirado (>5 min) | Solicitação de novo código | Média |
| Email/OTP | Código antigo após reenvio | Código rejeitado | Média |
| Email/OTP | 5 tentativas inválidas | Bloqueio por 15 minutos | Alta |
| Email/OTP | Reenvio em menos de 1 minuto | Mensagem de espera (60s) | Baixa |
| Geral | Falha de conexão | Mensagem de erro e opção de retry | Média |

### Combinações Críticas

- Código incorreto + múltiplas tentativas:
  - Contador decrementado corretamente  
  - Bloqueio aplicado após limite  

- Reenvio de OTP:
  - Código anterior invalidado  
  - Apenas o último código é aceito  

### Resultado Esperado

- Usuário não autenticado  
- Dashboard inacessível  
- Mensagens claras e consistentes  
- Nenhuma sessão criada indevidamente  

---

## Caso 03: Segurança, Sessões e Logout

**ID:** LOGIN_PRO_SEC_003  
**Técnica:** Testes de Segurança + Transição de Estados  
**Risco:** Alto  
**Automatizável:** Parcial  

### Escopos Validados

#### Política de Múltiplas Sessões
- Login simultâneo em Desktop e Mobile  
- Permissão ou bloqueio conforme configuração  
- Encerramento de sessão antiga quando aplicável  

#### Timeout de Sessão

| Condição | Tempo | Resultado Esperado |
|--------|------|-------------------|
| Inatividade | 30 minutos | Sessão expirada |
| Retorno após timeout | — | Solicita novo login |

#### Tokens e Cookies
- Exclusão manual de cookies  
- Invalidação imediata da sessão  
- Redirecionamento para login  

#### Logout Manual
- Ação de logout pelo usuário  
- Invalidação de tokens  
- Redirecionamento para tela inicial  

### Passos do Teste (Resumo)

1. Realizar login válido  
2. Simular inatividade prolongada  
3. Excluir cookies manualmente  
4. Executar logout manual  
5. Tentar acessar URL protegida  

### Resultado Esperado

- Sessões encerradas corretamente  
- Tokens invalidados  
- Acesso bloqueado após logout ou timeout  

---

## Matriz de Cobertura – Login Profissional

| Requisito | Casos Cobertos | Risco | Status |
|----------|---------------|-------|--------|
| RF-L01 – Login Google válido | MAIN | Alto | OK |
| RF-L02 – Login Email/OTP | MAIN | Alto | OK |
| RF-L03 – Tratamento erros Google | ERROR | Alto | OK |
| RF-L04 – Tratamento erros OTP | ERROR | Alto | OK |
| RF-L05 – Múltiplos dispositivos | MAIN + SEC | Médio | OK |
| RF-L06 – Segurança de sessão | SEC | Alto | OK |
| RF-L07 – Logout e timeout | SEC | Alto | OK |
| RF-L08 – Bloqueio por tentativas | ERROR | Alto | OK |
