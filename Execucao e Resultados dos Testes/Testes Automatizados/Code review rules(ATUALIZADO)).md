# 🧩 Proposta de Regras de Code Review – Semgrep

**Responsável QA:** Miguel
**Objetivo:** Criar um conjunto de regras automatizadas no **Semgrep** para garantir qualidade, segurança e boas práticas no código durante os *Pull Requests*.

---

## 📘 1. **Padrões de Código / Estilo (Code Style)**

| ID    | Regra                                          | Descrição                       | Exemplo Detectado      |
| ----- | ---------------------------------------------- | ------------------------------- | ---------------------- |
| CS001 | **Proibir `console.log()` em produção**        | Evitar logs no código final.    | `console.log('debug')` |
| CS002 | **Usar `===` e `!==` ao invés de `==` e `!=`** | Evita comparações imprecisas.   | `if (x == '1')`        |
| CS003 | **Proibir código comentado**                   | Limpa o código antes do merge.  | `// TODO remover`      |
| CS004 | **Obrigar ponto e vírgula (JS/TS)**            | Padroniza o estilo de escrita.  | `const x = 1`          |
| CS005 | **Proibir variáveis não usadas**               | Reduz sujeira no código.        | `let temp;`            |
| CS006 | **Evitar nomes genéricos em variáveis**        | Aumenta clareza e legibilidade. | `let data, info;`      |

---

## 🧠 2. **Boas Práticas de Desenvolvimento**

| ID    | Regra                                        | Descrição                         | Exemplo Detectado          |
| ----- | -------------------------------------------- | --------------------------------- | -------------------------- |
| BP001 | **Proibir código duplicado em funções**      | Incentiva reuso e refatoração.    | Duas funções idênticas     |
| BP002 | **Obrigar retorno explícito em funções**     | Evita comportamentos inesperados. | Função sem `return`        |
| BP003 | **Detectar funções muito longas**            | Sugere refatoração (>50 linhas).  | `function bigOne(){...}`   |
| BP004 | **Evitar parâmetros demais (>3)**            | Incentiva clareza e modularidade. | `function foo(a,b,c,d,e)`  |
| BP005 | **Proibir uso de `any` no TypeScript**       | Garante tipagem forte.            | `let user: any`            |
| BP006 | **Alertar sobre código morto (inacessível)** | Melhora limpeza do código.        | `return; console.log('a')` |

---

## 🧱 3. **Segurança (Security)**

| ID     | Regra                                  | Descrição                               | Exemplo Detectado                |
| ------ | -------------------------------------- | --------------------------------------- | -------------------------------- |
| SEC001 | **Proibir `eval()`**                   | Evita execução arbitrária de código.    | `eval(userInput)`                |
| SEC002 | **Evitar `innerHTML` direto**          | Previne XSS.                            | `element.innerHTML = userInput`  |
| SEC003 | **Proibir senhas ou tokens hardcoded** | Segurança de credenciais.               | `const PASSWORD = "1234"`        |
| SEC004 | **Proibir conexões HTTP simples**      | Forçar HTTPS.                           | `fetch('http://api...')`         |
| SEC005 | **Evitar deserialização insegura**     | Previne ataques por objetos maliciosos. | `JSON.parse(data)` sem validação |
| SEC006 | **Evitar bibliotecas desatualizadas**  | Check de versões vulneráveis.           | `lodash < 4.17.21`               |

---

## 🔐 4. **Autenticação & API**

| ID     | Regra                                      | Descrição                              | Exemplo Detectado            |
| ------ | ------------------------------------------ | -------------------------------------- | ---------------------------- |
| API001 | **Obrigar uso de headers de autenticação** | Requisições devem ter `Authorization`. | `fetch(url)` sem header      |
| API002 | **Evitar logs de tokens JWT**              | Segurança de dados sensíveis.          | `console.log(jwt)`           |
| API003 | **Detectar endpoints abertos**             | Rota sem autenticação.                 | `/api/public`                |
| API004 | **Evitar requisições sem timeout**         | Boa prática para estabilidade.         | `axios.get(url)` sem timeout |

---

## 🧰 5. **Performance e Complexidade**

| ID      | Regra                                     | Descrição                       | Exemplo Detectado                |
| ------- | ----------------------------------------- | ------------------------------- | -------------------------------- |
| PERF001 | **Detectar loops aninhados**              | Alta complexidade O(n²).        | `for (...) { for (...) { ... }}` |
| PERF002 | **Evitar uso excessivo de `setInterval`** | Potencial vazamento de memória. | `setInterval(...)` sem clear     |
| PERF003 | **Detectar funções síncronas lentas**     | Identifica gargalos no código.  | Uso de `sleep`, `while(true)`    |
| PERF004 | **Alertar uso de `.map()` sem retorno**   | Erro comum de lógica.           | `[1,2,3].map(x => {x*2})`        |

---

## 🪪 6. **Logs e Monitoramento**

| ID     | Regra                                      | Descrição                       | Exemplo Detectado                     |
| ------ | ------------------------------------------ | ------------------------------- | ------------------------------------- |
| LOG001 | **Proibir logs com dados sensíveis**       | Evita exposição de dados.       | `console.log(user.password)`          |
| LOG002 | **Alertar falta de log em erros críticos** | Melhor visibilidade no sistema. | `catch(e) {}` sem log                 |
| LOG003 | **Usar logger padrão da aplicação**        | Padroniza saída.                | `console.log` em vez de `Logger.info` |

---

## 🧩 7. **Testes **

| ID    | Regra                                         | Descrição                          | Exemplo Detectado         |
| ----- | --------------------------------------------- | ---------------------------------- | ------------------------- |
| QA001 | **Obrigar teste unitário para funções novas** | Aumenta cobertura de testes.       | Código novo sem teste     |
| QA002 | **Proibir mocks não usados**                  | Reduz  mock testes.              | `jest.mock()` sem uso     |
| QA003 | **Detectar `test.skip`**                      | Evita testes pulados no merge.     | `test.skip(...)`          |
| QA004 | **Proibir asserts genéricos**                 | Encoraja verificações específicas. | `expect(true).toBe(true)` |

---

## 🧩 8. **Regras Personalizadas por Time**

| ID      | Regra                                         | Descrição                           | Exemplo Detectado                   |
| ------- | --------------------------------------------- | ----------------------------------- | ----------------------------------- |
| TEAM001 | **Padrão de nomes para funções e arquivos**   | Conformidade com convenção interna. | Arquivos com letras maiúsculas      |
| TEAM002 | **Obrigar comentários JSDoc**                 | Documentação de funções públicas.   | Falta de `/** ... */`               |

---

## 🧩 9. **Configurações Possíveis no Semgrep**

Essas são as opções que o QA pode ajustar no arquivo de regra `.yml`:

| Configuração  | Descrição                                       | Exemplo                           |
| ------------- | ----------------------------------------------- | --------------------------------- |
| `pattern`     | O código que será detectado.                    | `console.log(...)`                |
| `pattern-not` | O que deve ser ignorado.                        | `console.log('safe')`             |
| `severity`    | Nível da regra (`INFO`, `WARNING`, `ERROR`).    | `severity: WARNING`               |
| `languages`   | Linguagens afetadas.                            | `[javascript, typescript]`        |
| `message`     | Mensagem exibida no PR.                         | `"Evite console.log()"`           |
| `metadata`    | Dados extras (autor, categoria).                | `{ author: QA, category: Style }` |
| `fix`         | Sugestão de correção automática (experimental). | `"use Logger.info() instead"`     |

---

## ✅ **Ação para os Devs**

> Por favor, **revisem as categorias e regras acima** e indiquem:
> * Quais devem ser **obrigatórias** (bloqueiam o PR).
> * Quais devem ser **apenas aviso** (warning).
> * Quais **não se aplicam** ao projeto atual.
> * Quais **novas regras personalizadas** vocês gostariam de incluir.
> * Envia mensagem no Whatsapp ou discord
