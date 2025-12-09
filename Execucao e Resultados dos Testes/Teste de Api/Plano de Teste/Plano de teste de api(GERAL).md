# 🧪 Plano de Testes da API – ConectaBem

## 📌 1. Objetivo

Garantir a qualidade, estabilidade e confiabilidade da API **ConectaBem**, validando endpoints por meio de testes funcionais, de integração, contrato, automação e performance utilizando Postman.

---

## 📌 2. Escopo dos Testes

* Testes **positivos**
* Testes **de contrato (JSON Schema)**
* Testes **de integração**
* Testes **automatizados** com scripts do Postman
* Testes **de performance** com Collection Runner / Newman

---

## 📌 3. Ferramentas

* **Postman**
* **Newman** (opcional para CI/CD)
* **AJV** ou **TV4** (validação de JSON Schema) 
* **Mockaroo** (dados fictícios, opcional)

---

##  4. Estratégia de Teste

###  4.1 Testes Positivos
###  4.3 Testes de Integração
###  4.4 Testes Automatizados
###  4.5 Testes de Performance
###  4.6. Testes de Contrato (JSON Schema)

---

##  5. Métricas e Critérios de Aceite

| Critério              | Meta          |
| --------------------- | ------------- |
| Sucesso dos testes    | ≥ 95%         |
| Quebra de contrato    | 0%            |
| Tempo médio das APIs  | < 2s          |
| Erros de autenticação | Não aceitável |

---

## 📌 10. Riscos

* Falhas na autenticação
* Token expirando rápido
* Falta de documentação
* Inconsistência no retorno
* Problemas de CORS
