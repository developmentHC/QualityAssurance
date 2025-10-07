# 🧾 **Relatório de Atualização – Reunião QA , Devs e PO**

**Data:** Quinta-feira – 19:30
**Responsável:** Miguel Luis e Mateus
**Participantes:** Time de Desenvolvimento, QA e PO

---

## 🧩 **1. Code Review e Configuração**

### 🔹 Situação Atual

* O **SonarQube**, inicialmente planejado para o code review automatizado, **será removido** devido à limitação de regras personalizadas na versão gratuita.
* Estão sendo avaliadas **duas alternativas principais**:

  * **CodeQL (GitHub Advanced Security):** realiza análise estática com foco em vulnerabilidades e boas práticas de código.
  * **Semgrep.dev:** permite criar e personalizar regras de verificação, com interface web e integração CI/CD mais leve.

### 🔹 Próximos Passos

* Avaliar qual das ferramentas (CodeQL ou Semgrep) melhor se adapta ao fluxo atual do projeto.
* Integrar a ferramenta escolhida ao pipeline do **CI/CD** para execução automática a cada **Pull Request**.
* Configurar alertas e relatórios automáticos de análise.

---

## ⚙️ **2. CI/CD e Fluxo de Branches**

### 🔹 Situação Atual

* O relatório completo sobre o fluxo de **CI/CD** foi criado e documentado no repositório:
  👉 [Fluxo do CI/CD – QualityAssurance](https://github.com/developmentHC/QualityAssurance/blob/main/Testes%20Automatizados/Fluxo%20do%20ci%20%26%20cd.md)

* Estrutura atual:

  ```
  feature/* → QA → main
  ```

  * **feature/** → Desenvolvimento de tarefas individuais
  * **QA** → Homologação e testes manuais/automatizados
  * **main** → Produção

### 🔹 Pipeline

* O pipeline de **CI/CD** executa testes automatizados e build antes do merge com a branch `main`.

---

## 🧹 **3. Endpoint de Delete – Conflito com Cypress**

### 🔹 Problema Identificado

* O endpoint de **delete local** vai causar conflito com o ambiente de **Cypress** durante execução no **CI/CD**.
* Isso ocorre porque o Cypress tenta acessar o endpoint local (`localhost`), que não é reconhecido no ambiente de integração contínua.

### 🔹 Impacto

* Testes automatizados que dependem desse endpoint irão **falhar** durante a pipeline.

### 🔹 Solução Proposta

* Criar uma **versão do endpoint acessível apenas em ambiente de produção/homologação**, permitindo que o Cypress o utilize no CI/CD.
* Alternativamente, criar um **mock de endpoint** para simulação em ambiente de testes.

---

## 🤝 **4. Reunião com os Devs**

### 🔹 Pontos a Discutir

* Escolha entre **CodeQL** e **Semgrep** para code review.
* Ajustes no pipeline CI/CD para incluir análise estática de código.
* Estratégia para resolver o conflito do endpoint de delete.
* Validação do fluxo proposto para o **botão de ajuda**.

---

## 🆘 **5. Botão de Ajuda – Proposta de Fluxo**

### 🔹 Referência

* O fluxo de login e ajuda pode seguir modelo semelhante ao da **Amazon**, com redirecionamento para suporte e autenticação quando necessário:
  🔗 [Exemplo de fluxo de autenticação Amazon](https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0)

### 🔹 Ideia de Implementação

* Botão de **“Ajuda”** redirecionando para uma página ou modal com:

  * Opções rápidas de FAQ
  * Link direto para suporte
  * Acesso rápido à política de privacidade
  * (Futuramente) Integração com chatbot de atendimento

---

## 🔐 **6. LGPD e Políticas de Privacidade**

### 🔹 Situação Atual

* Processo de adequação à **LGPD** como está indo?.


---

## ✅ **Resumo Geral**

| Tópico             | Status                        | Próximos Passos                          |
| ------------------ | ----------------------------- | ---------------------------------------- |
| Code Review        | Em análise (CodeQL / Semgrep) | Escolher ferramenta e integrar ao CI/CD  |
| CI/CD              | Documentado                   | Validar execução completa do pipeline    |
| Endpoint Delete    | Conflito identificado         | Criar endpoint produtivo ou mock         |
| Botão de Ajuda     | Proposta em análise           | Validar UX e fluxo                       |
| LGPD / Privacidade | Em progresso                  | Finalizar textos e validar consentimento |
