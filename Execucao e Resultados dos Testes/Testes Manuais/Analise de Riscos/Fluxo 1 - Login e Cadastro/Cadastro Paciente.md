# Análise de Risco por Funcionalidade  
> **Funcionalidade:** Cadastro de Paciente  
> **Sistema:** ConectaBem  

---

## 1. Visão Geral

Esta análise de risco foi elaborada a partir da revisão do fluxo no Figma, regras de negócio e definição dos casos de teste.  
O objetivo é identificar pontos críticos do cadastro de paciente e direcionar a priorização e estratégia de testes.

---

## 2. Matriz de Riscos – Cadastro de Paciente

| Área | Risco Identificado | Impacto | Probabilidade | Nível |
|----|------------------|--------|--------------|------|
| Autenticação | Usuário não consegue logar (Google/OTP) | Alto | Médio | 🔴 Alto |
| Cadastro | Dados inválidos aceitos | Alto | Alto | 🔴 Alto |
| Cadastro | Usuário bloqueado sem feedback | Alto | Médio | 🔴 Alto |
| UX | Botão liberar com campo inválido | Médio | Alto | 🟠 Médio |
| Persistência | Perda de dados ao recarregar | Alto | Médio | 🔴 Alto |
| Integração | Via CEP fora do ar | Médio | Médio | 🟠 Médio |
| Segurança | Reuso de OTP | Alto | Baixo | 🟠 Médio |
| Conteúdo | Mensagem de erro confusa | Médio | Baixo | 🟢 Baixo |

> Esta é a **análise de risco formal**, utilizada como base para definição, redução e priorização dos casos de teste.

---

## 3. Mapeamento de Riscos x Casos de Teste

A estratégia de testes é orientada por risco.  
Os casos de teste não foram definidos apenas por funcionalidade, mas pelo **impacto e probabilidade de falha**.

---

### Risco: Falha no fluxo principal de cadastro

**Impacto:**  
Usuário não consegue se cadastrar no sistema.

**Mitigação (Casos de Teste):**
- `CAD_PAC_MAIN_001`
- `CAD_PAC_VALID_002`

**Decisão de QA:**
- Classificados como **Alto Risco**
- Totalmente **automatizáveis**
- Executados **primeiro** em cada ciclo

---

### Risco: Dados inválidos persistidos no sistema

**Impacto:**  
Problemas legais, dados incorretos de paciente e inconsistência no sistema.

**Probabilidade:**  
Alta (inputs manuais).

**Mitigação (Casos de Teste):**
- `CAD_PAC_VALID_002`
- Análise de valor limite
- Combinação de múltiplos erros simultâneos

---

### Risco: Bloqueio indevido de autenticação

**Impacto:**  
Frustração do usuário e aumento de chamados de suporte.

**Probabilidade:**  
Média.

**Mitigação (Casos de Teste):**
- `CAD_PAC_EXC_003`
- Testes de limite de tentativas
- Expiração e reenvio de OTP

---

### Risco: Perda de progresso no cadastro

**Impacto:**  
Abandono do fluxo de cadastro.

**Probabilidade:**  
Média (refresh, fechamento do navegador).

**Mitigação (Casos de Teste):**
- `CAD_PAC_STATE_004`
- Testes de persistência
- Recuperação após recarregamento da página

---

## 4. Conclusão

A análise de risco permitiu:
- Redução significativa do número de casos de teste
- Foco nos fluxos de maior impacto ao usuário e ao negócio
- Melhor direcionamento para automação
- Aumento da eficiência da execução de testes

Esta abordagem garante **alta cobertura com menor esforço**, mantendo a qualidade do produto.
