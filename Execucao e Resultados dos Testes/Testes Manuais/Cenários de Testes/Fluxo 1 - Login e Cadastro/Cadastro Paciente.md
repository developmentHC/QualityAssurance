# Plano de Testes — Cadastro de Paciente
**Sistema:** ConectaBem | **Versão:** 2.0

---

## Resumo

| Métrica                     | Original | Otimizado | Redução |
|-----------------------------|----------|-----------|---------|
| Casos de Teste              | 19       | 4         | 79%     |
| Páginas de Documentação     | 5        | 1         | 80%     |
| Tempo Estimado de Execução  | ~60 min  | ~15 min   | 75%     |

---

## CAD_PAC_MAIN_001 — Fluxo Principal Completo

| Info | Detalhe |
|------|---------|
| Técnica | Particionamento de Equivalência + Tabela de Decisão |
| Risco | Alto |
| Automatizável | Sim |
| Pré-condições | Ambiente configurado · Contas de teste válidas (Google e Email) |

| # | Passo | Detalhe |
|---|-------|---------|
| 1 | Acessar o sistema | — |
| 2 | Selecionar método de login | Google ou Email |
| 3 | Autenticar | Google: conceder permissões · Email: validar OTP |
| 4 | Selecionar perfil | Paciente |
| 5 | Etapa 1/4 | Nome ≥3 chars · Data de nascimento · CEP válido · Endereço completo |
| 6 | Etapa 2/4 | Preferências (ou pular) |
| 7 | Etapa 3/4 | Necessidades (ou pular) |
| 8 | Etapa 4/4 | Revisar e finalizar |

| Resultado Esperado | Critério de Aceitação |
|--------------------|-----------------------|
| Registro de data/hora do cadastro | Ambos os métodos de login funcionam |
| Autenticação automática | Validações em tempo real |
| Redirecionamento para Home autenticada | Botão Continuar só habilita com campos válidos |
| Confirmação visual de cadastro | Progresso salvo e persistente ao recarregar |

---

## CAD_PAC_VALID_002 — Validações de Campos

| Info | Detalhe |
|------|---------|
| Técnica | Tabela de Decisão + Análise de Valor Limite |
| Risco | Alto |
| Automatizável | Sim |

| Campo | Valor | Tipo | Comportamento Esperado | Criticidade |
|-------|-------|------|------------------------|-------------|
| Nome | "Jo" | Inválido | Erro: mínimo 3 caracteres | Alta |
| Nome | "Ana" | Válido | Campo aceito | Alta |
| Idade | 17 | Inválido | Erro: mínimo 18 anos | Alta |
| Idade | 18 | Válido | Campo aceito | Alta |
| Idade | 110 | Válido | Campo aceito | Alta |
| Idade | 111 | Inválido | Erro: máximo 110 | Alta |
| CEP | "12345" | Inválido | Erro de formato | Média |
| CEP | "00000-000" | Inválido | CEP não encontrado | Média |
| CEP | "01001-000" | Válido | Autocompleta endereço | Média |
| Email | Já cadastrado | Inválido | Email já cadastrado | Alta |
| Campo obrigatório | Vazio | Inválido | Campo obrigatório | Alta |

**Combinações críticas:**

| Cenário | Nome | Idade / CEP | Resultado |
|---------|------|-------------|-----------|
| Múltiplos erros | "Jo" | 17 / "12345" | Múltiplos erros simultâneos |
| Fluxo válido | "Maria" | 18 / "01001-000" | Avanço de etapa |

---

## CAD_PAC_EXC_003 — Exceções de Autenticação

| Info | Detalhe |
|------|---------|
| Técnica | Particionamento de Equivalência |
| Risco | Médio |
| Automatizável | Sim |

| Cenário | Comportamento Esperado |
|---------|------------------------|
| Google sem permissão | Mensagem clara + retorno à tela inicial |
| OTP incorreto | Erro exibido + contador de tentativas |
| 5 tentativas inválidas | Bloqueio por 5 minutos |
| OTP expirado | Mensagem + opção de reenvio |
| Limite de reenvios atingido | Bloqueio por 1 hora |
| Email inválido | Erro em tempo real |

---

## CAD_PAC_STATE_004 — Workflow e Persistência

| Info | Detalhe |
|------|---------|
| Técnica | Transição de Estados |
| Risco | Médio |
| Automatizável | Parcial |

| De | Para | Condição | Resultado |
|----|------|----------|-----------|
| Etapa 1 | Etapa 2 | Campos válidos | Avança ✓ |
| Etapa 1 | Etapa 2 | Campos inválidos | Bloqueia ✗ |
| Etapa 2 | Etapa 3 | Pular (opcional) | Avança ✓ |
| Qualquer etapa | Retorno | Fechar navegador | Recupera dados ✓ |
| Etapa 4 | Home | Finalizar | Autentica ✓ |

---

## Matriz de Cobertura

| Requisito | Caso de Teste | Risco | Status |
|-----------|---------------|-------|--------|
| RF01 | CAD_PAC_MAIN_001 | Alto | ✓ OK |
| RF02 | CAD_PAC_VALID_002 | Alto | ✓ OK |
| RF03 | CAD_PAC_STATE_004 | Alto | ✓ OK |
| RF04 | CAD_PAC_CRIT_001 | Alto | ✓ OK |
| RF05 | CAD_PAC_EXC_003 | Médio | ✓ OK |
