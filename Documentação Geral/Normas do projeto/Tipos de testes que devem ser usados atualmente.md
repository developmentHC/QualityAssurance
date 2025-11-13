# 🧪 Estratégia de Testes Complementares

Após a execução dos **testes manuais regressivos**, é essencial continuar avaliando o sistema com foco nos **pequenos detalhes**, na **qualidade contínua** e na **estabilidade entre módulos e serviços**.
Para isso, três tipos de testes se tornam fundamentais na fase atual:

* **Testes de Contrato**
* **Testes de Integração**
* **Smoke Tests**

Este documento descreve cada um deles, sua importância e quando aplicá-los.

---

## 📘 1. Testes de Contrato

Os **Testes de Contrato** garantem que a comunicação entre serviços (APIs, microserviços, módulos internos, front ↔ backend) siga um contrato bem definido — normalmente um esquema de dados, tipos, obrigatoriedade de campos, formatos de resposta ou regras de consumo.

### 🎯 Objetivo

* Garantir que **alterações no backend não quebrem o frontend**, e vice-versa.
* Validar a **estrutura** e o **conteúdo** das respostas da API.
* Assegurar compatibilidade entre versões de serviços.

### 🛠️ O que é analisado?

* Estrutura do JSON (campos obrigatórios, tipos, formatos).
* Status codes esperados.
* Mensagens de erro padronizadas.
* Versionamento de endpoints.
* Respeito às regras definidas no contrato da API (como Swagger, OpenAPI ou Postman Schemas).

### 📌 Quando usar?

* Após qualquer mudança no backend.
* Antes de publicar uma nova versão.
* Em pipelines automatizados.

---

## 🔗 2. Testes de Integração

Os **Testes de Integração** verificam se dois ou mais componentes do sistema funcionam corretamente quando combinados.

### 🎯 Objetivo

* Garantir que módulos integrados se comportem conforme esperado.
* Identificar falhas que **não aparecem nos testes unitários**, como problemas de comunicação, autorização, banco de dados ou fluxo entre telas.

### 🛠️ Exemplos de integrações testadas:

* Frontend → Backend.
* Backend → Banco de Dados.
* Microserviço A → Microserviço B.
* Aplicação → Sistema externo (ex.: pagamentos, gateways, APIs públicas).
* Workflow completo entre módulos (login → compra → histórico → notificação).

### 📌 Quando usar?

* Após integrações novas.
* Antes de releases.
* Para validar efeitos colaterais e comportamentos do fluxo real.

---

## 🚀 3. Smoke Tests

Os **Smoke Tests** validam se o sistema está **minimamente funcional** após uma nova entrega, deploy ou atualização.

São rápidos, simples e focados no essencial.

### 🎯 Objetivo

* Confirmar que o sistema está estável o suficiente para testes mais profundos.
* Detectar falhas críticas imediatamente após o deploy.

### 🛠️ Características:

* Testes de execução rápida.
* Cobrem apenas funcionalidades vitais (login, navegação básica, carregamento do dashboard, etc.).
* Identificam problemas que impedem o uso do sistema.

### 📌 Quando usar?

* Após cada deploy.
* No início de cada ciclo de testes.
* Em pipelines CI/CD como etapa obrigatória.

---

## 📄 Conclusão

Com os **testes regressivos já executados**, agora o foco é garantir:

* Compatibilidade entre serviços (**Contrato**)
* Comunicação correta entre módulos (**Integração**)
* Estabilidade mínima após atualizações (**Smoke**)

Esses três tipos de testes fortalecem a qualidade contínua do sistema, reduzem riscos e ajudam a identificar problemas rapidamente antes que se tornem bugs maiores.
