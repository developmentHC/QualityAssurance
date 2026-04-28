# Plano de Testes — Login Profissional
**Sistema:** ConectaBem | **Versão:** 2.0

---

## Resumo

| Métrica                    | Original | Otimizado | Redução |
|---------------------------|----------|-----------|---------|
| Casos de Teste             | 10       | 3         | 70%     |
| Cenários Separados         | 4        | 1         | 75%     |
| Validações Individuais     | 10+      | 1         | 90%     |

---

## LOGIN_PRO_MAIN_001 — Fluxos Principais de Login

| Info | Detalhe |
|------|---------|
| Técnica | Particionamento de Equivalência + Fluxo Principal |
| Risco | Alto |
| Automatizável | Sim |

| Método | Condição | Resultado Esperado | Criticidade |
|--------|----------|--------------------|-------------|
| Google | Conta vinculada + permissões aceitas | Login realizado | Alta |
| Email/OTP | Email cadastrado + OTP válido | Login realizado | Alta |
| Sessão | Novo dispositivo | Permitido ou bloqueado conforme política | Média |

| # | Passo | Detalhe |
|---|-------|---------|
| 1 | Acessar a página inicial | — |
| 2 | Selecionar método de login | Google ou Email/OTP |
| 3 | Concluir autenticação | Credenciais válidas |
| 4 | Verificar redirecionamento | Dashboard profissional |
| 5 | Validar perfil exibido | Nome e perfil corretos |
| 6 | Login em segundo dispositivo | Se aplicável, conforme política |

| Resultado Esperado | Critério de Aceitação |
|--------------------|-----------------------|
| Sessão criada com sucesso | Ambos os métodos de login funcionam |
| Dashboard profissional exibido | Nome e perfil exibidos corretamente |
| Múltiplos dispositivos conforme política | Comportamento consistente com a configuração |

---

## LOGIN_PRO_ERROR_002 — Exceções e Erros de Login

| Info | Detalhe |
|------|---------|
| Técnica | Tabela de Decisão + Particionamento de Equivalência |
| Risco | Alto |
| Automatizável | Sim |

| Método | Cenário | Comportamento Esperado | Criticidade |
|--------|---------|------------------------|-------------|
| Google | Conta não vinculada | Mensagem: "Conta não encontrada. Cadastre-se primeiro." | Alta |
| Google | Permissão negada | Retorno à tela inicial com aviso | Média |
| Google | Autenticação cancelada | Retorno silencioso à tela inicial | Baixa |
| Email/OTP | Email não cadastrado | Erro imediato | Alta |
| Email/OTP | Código incorreto | Mensagem + contador de tentativas | Alta |
| Email/OTP | Código expirado (>5 min) | Solicitação de novo código | Média |
| Email/OTP | Código antigo após reenvio | Código rejeitado | Média |
| Email/OTP | 5 tentativas inválidas | Bloqueio por 15 minutos | Alta |
| Email/OTP | Reenvio em menos de 1 min | Mensagem de espera (60s) | Baixa |
| Geral | Falha de conexão | Mensagem de erro + opção de retry | Média |

**Combinações críticas:**

| Cenário | Condição | Resultado |
|---------|----------|-----------|
| Código incorreto repetido | Contador decrementado corretamente | Bloqueio após limite ✗ |
| Reenvio de OTP | Código anterior enviado | Rejeitado · Apenas último código aceito ✗ |

---

## LOGIN_PRO_SEC_003 — Segurança, Sessões e Logout

| Info | Detalhe |
|------|---------|
| Técnica | Testes de Segurança + Transição de Estados |
| Risco | Alto |
| Automatizável | Parcial |

| Escopo | Cenário | Resultado Esperado |
|--------|---------|-------------------|
| Múltiplas sessões | Login simultâneo Desktop + Mobile | Permitido ou bloqueado conforme política |
| Múltiplas sessões | Nova sessão aberta | Sessão antiga encerrada quando aplicável |
| Timeout | Inatividade por 30 min | Sessão expirada |
| Timeout | Retorno após expiração | Solicita novo login |
| Cookies | Exclusão manual | Sessão invalidada imediatamente |
| Logout | Ação manual do usuário | Tokens invalidados + redirecionamento para tela inicial |
| Acesso pós-logout | Tentativa de acessar URL protegida | Acesso bloqueado |

| # | Passo |
|---|-------|
| 1 | Realizar login válido |
| 2 | Simular inatividade prolongada |
| 3 | Excluir cookies manualmente |
| 4 | Executar logout manual |
| 5 | Tentar acessar URL protegida |

---

## Matriz de Cobertura

| Requisito | Casos Cobertos | Risco | Status |
|-----------|---------------|-------|--------|
| RF-L01 — Login Google válido | MAIN_001 | Alto | ✓ OK |
| RF-L02 — Login Email/OTP | MAIN_001 | Alto | ✓ OK |
| RF-L03 — Tratamento erros Google | ERROR_002 | Alto | ✓ OK |
| RF-L04 — Tratamento erros OTP | ERROR_002 | Alto | ✓ OK |
| RF-L05 — Múltiplos dispositivos | MAIN_001 + SEC_003 | Médio | ✓ OK |
| RF-L06 — Segurança de sessão | SEC_003 | Alto | ✓ OK |
| RF-L07 — Logout e timeout | SEC_003 | Alto | ✓ OK |
| RF-L08 — Bloqueio por tentativas | ERROR_002 | Alto | ✓ OK |
