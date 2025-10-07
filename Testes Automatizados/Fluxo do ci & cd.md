# ⚙️ Fluxo de CI/CD do Projeto

## 🧭 Visão Geral

O projeto segue um fluxo simplificado  de **Integração Contínua (CI)** e **Entrega Contínua (CD)**, utilizando as branches principais **`main`**, **`qa`** e **`feature/*`**.

Este modelo garante que todas as alterações sejam **testadas e revisadas** antes de chegar à produção, mantendo o ciclo de desenvolvimento e validação fluido entre as equipes de **Desenvolvimento** e **Qualidade (QA)**.

---

## 🧩 Estrutura de Branches

| Branch | Função | Ambiente |
|:--|:--|:--|
| `main` | Versão estável e pronta para produção | Produção |
| `qa` | Ambiente de homologação e testes | Homologação / QA |
| `feature/*` | Desenvolvimento de novas funcionalidades e correções | Local / Desenvolvimento |

---

## 🚀 Fluxo do Processo

### 1. Criação da Branch de Desenvolvimento

Cada nova tarefa ou funcionalidade é desenvolvida em uma branch específica:

```bash
git checkout qa
git pull origin qa
git checkout -b feature/nome-da-task
````

> A branch `feature/nome-da-task` é criada a partir da `qa`, garantindo que a base de código esteja atualizada com as últimas alterações validadas.

---

### 2. Desenvolvimento e Code Review

Após o desenvolvimento da funcionalidade:

* O desenvolvedor abre um **Pull Request (PR)** de:

  ```
  feature/nome-da-task → qa
  ```
* O código passa por **code review** antes de ser integrado.
* Após a aprovação, o merge é feito na branch `qa`.

---

### 3. Deploy Automático no Ambiente de QA

O **pipeline de CI/CD** é acionado automaticamente (ou manualmente, conforme o caso) ao ocorrer um merge na branch `qa`.

O pipeline realiza:

* Build do projeto;
* Execução de testes automatizados (unitários e de integração);
* Deploy automático no ambiente de **Homologação/QA**.

---

### 4. Testes de QA

Com o build disponível no ambiente de QA:

* A equipe de **Qualidade (QA)** executa os **testes manuais e/ou automatizados**;
* São validados os requisitos funcionais, integrações e regras de negócio;
* Caso algum bug seja identificado, o desenvolvedor cria uma nova branch de correção:

```bash
git checkout qa
git pull origin qa
git checkout -b fix/bug123
```

Após a correção, é aberto um novo **Pull Request (`fix/bug123 → qa`)**, e o fluxo de testes é repetido.

---

### 5. Aprovação e Deploy em Produção

Quando o QA aprova todas as validações:

* É aberto um **Pull Request de `qa → main`**;
* O código é revisado e mergeado na `main`;
* O **pipeline de CD** é acionado automaticamente, realizando o **deploy no ambiente de produção**.

---

## 🔁 Resumo do Fluxo CI/CD

```bash
(feature/*) ──> PR ──> qa ──> PR ──> main
                     ↑         ↑
                  testes     produção
                     QA
```

### Sugestão de outras ferramentas além do sonarqube que pensei em usar dois juntos

## 1️⃣ Por que usar os dois juntos

| Ferramenta  | Força principal                                                         | Limitação                                                                     | Benefício da combinação                                                               |
| ----------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Semgrep** | Feedback rápido no PR, boas práticas, estilo, vulnerabilidades comuns   | Não consegue rastrear fluxos complexos de dados ou vulnerabilidades profundas | Dá **feedback imediato ao dev**, evitando bugs triviais antes de merge                |
| **CodeQL**  | Análise profunda, rastreamento de dados (data flow), segurança avançada | Mais pesado, mais lento, curva de aprendizado maior                           | Garante que **vulnerabilidades reais e complexas** sejam detectadas antes de produção |

✅ **Combinar ambos significa:**

* Devs recebem **alertas rápidos e fáceis de entender** (Semgrep) durante o PR.
* QA ou Security recebe **relatórios completos de segurança** (CodeQL) para auditoria e prevenção.
* Redução de retrabalho, bugs e vulnerabilidades em produção.

---

## 2️⃣ Como integrar no fluxo de desenvolvimento

### 🔹 Pipeline sugerido:

1. **Pull Request (PR)**

   * **Semgrep** roda primeiro → feedback rápido e direto no PR.
   * Regras personalizadas de boas práticas e estilo.
   * Falhas de segurança comuns (ex: uso de `eval`, `console.log` em produção).

2. **Merge / Branch QA**

   * **CodeQL** roda em segundo plano → varredura profunda de segurança.
   * Detecta vulnerabilidades complexas (SQL Injection, XSS, Path Traversal).
   * Relatórios vão para **Security Dashboard** e podem ser revisados pelo QA ou Security.

3. **Produção**

   * Apenas merges aprovados passam → alta confiança de qualidade e segurança.

---

## 3️⃣ Exemplo visual do fluxo

```
Dev cria PR
   │
   ▼
[Semgrep] → alerta rápido no PR (estilo, boas práticas, vulnerabilidades básicas)
   │
   ▼
QA revisa PR
   │
   ▼
Merge aprovado → branch QA
   │
   ▼
[CodeQL] → análise profunda (security, fluxos de dados, vulnerabilidades complexas)
   │
   ▼
Relatórios → Dashboard QA / Security
   │
   ▼
Merge final para produção
```


---

📄 **Última atualização:** Outubro de 2025
👤 **Responsável:** Equipe de QA e Desenvolvimento
