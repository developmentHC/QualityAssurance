# 📑 Organização do Projeto de Qualidade

Este repositório foi estruturado para centralizar toda a documentação, relatórios e evidências relacionadas ao processo de **Qualidade de Software (QA)**.  
Abaixo está descrita a organização das pastas e o que será abordado em cada uma delas.

---

## 📂 Estrutura do Projeto

### 🔎 Testes Exploratórios
- Cada teste deverá ser criado em uma pasta seguindo a sequência numérica (`1.0`, `2.0`, `3.0`...).
- Conteúdo de cada pasta:
  - **Heurísticas utilizadas** → técnicas aplicadas durante a exploração.
  - **Relatório** → resumo dos testes realizados, insights e descobertas.
  - **Bugs/Melhorias** → problemas encontrados e sugestões de otimização.
  - **Plano do Teste Exploratório** → objetivo, escopo, riscos e critérios.

---

### 📖 Documentação Geral do Projeto
Centraliza as principais informações do sistema:
- **Requisitos** → funcionais e não funcionais.
- **Regras de Negócio** → regras aplicadas ao domínio da aplicação.
- **Desenvolvimento** → decisões técnicas e arquiteturais.
- **DOR e DOD** → *Definition of Ready* e *Definition of Done*.
- **Design** → telas, protótipos e guias de estilo.
- **Novas Adições** → melhorias e incrementos solicitados pelo time.

---

### 📢 Relatórios para o Time
- Organização em pastas numéricas (`1.0`, `2.0`, `3.0`...).
- Dividido em:
  - **Testes** → resultados e status de execução.
  - **Bugs/Melhorias** → problemas reportados e ajustes necessários.

---

### 📝 Testes Manuais
- **Cenários de Teste/Casos de Teste** → descrição detalhada com pré-condições, passos, critérios de aceitação e pós-condições.
- **Relatórios dos Testes** → resultados (Passou/Falhou).
- **Relatório de Bugs/Melhorias** → inconsistências encontradas.
- **Causa Raiz/Dicas de Melhoria** → análise dos problemas e recomendações para evitar recorrência.

---

### 🤖 Testes Automatizados
- **Cypress** → scripts de automação para web.
- **CI/CD** → integração dos testes no pipeline de deploy.
- **Cypress Cloud** → relatórios e execução paralela em nuvem.

---

### 📊 Métricas de Qualidade
Acompanhamento contínuo da saúde do produto:
- **Resultados gerais** dos testes manuais, automatizados e exploratórios.
- **Atualizações dos Bugs** → monitoramento de status e regressão.
- **Redução de Defeitos** → análise de recorrência.
- **Redução de Correções** → eficácia das soluções aplicadas.
- **Priorização de Defeitos** → impacto e criticidade dos bugs.

---

## ✅ Objetivo
Garantir a **qualidade contínua** do produto, com transparência para o time e stakeholders, centralizando toda a documentação e métricas de QA neste repositório.

