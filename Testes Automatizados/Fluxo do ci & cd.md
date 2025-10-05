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

---

📄 **Última atualização:** Outubro de 2025
👤 **Responsável:** Equipe de QA e Desenvolvimento
