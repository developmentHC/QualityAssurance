# Relatório de Arquitetura — Automação de Testes de API (ConectaBem)

**Projeto:** qa-conectabem-api-tests
**Repositório de origem (produção):** `developmentHC/conectaBemBack`
**Repositório de testes (a ser criado):** conta **ConectaBem** (org `developmentHC`)
**Stack de testes:** Jest + Supertest + JSON Schema + Faker
**Ambiente alvo:** Dev (com acesso ao banco MongoDB)
**Autor:** Miguel Luís — QA
**Data:** Julho/2026

---

## 1. Objetivo

Criar um repositório dedicado e independente do backend, responsável por testar a API do ConectaBem (`conectaBemBack`) via HTTP, cobrindo os fluxos funcionais críticos e o contrato de resposta dos endpoints. O repositório deve:

- Rodar de forma automatizada, sem depender de execução manual.
- Ser mantido pela equipe de QA sem exigir mudanças no código da API.
- Gerar relatórios de execução legíveis por qualquer pessoa do time, técnica ou não.
- Ser fácil de estender conforme novos endpoints forem adicionados ao ConectaBem.

---

## 2. Localização e propriedade do repositório

O repositório deve ser criado **dentro da conta/organização do ConectaBem** (`developmentHC`), e não em conta pessoal, pelos seguintes motivos:

- Mantém a propriedade do ativo de testes junto ao produto, não à pessoa que os escreveu.
- Permite que qualquer novo colaborador de QA do projeto tenha acesso direto, sem depender de convite individual.
- Facilita a integração de segredos/variáveis de ambiente (`MONGODB_URI`, credenciais de teste) nos GitHub Actions da própria organização.

**Nome sugerido:** `conectaBem-api-tests` (segue o padrão de nomenclatura já usado no repo do backend).

---

## 3. Arquitetura de pastas

```
conectaBem-api-tests/
│
├── __Test__/
│   ├── contrato/
│   │   ├── auth.contrato.test.js
│   │   ├── users.contrato.test.js
│   │   └── appointments.contrato.test.js
│   └── funcional/
│       ├── auth.funcional.test.js
│       ├── users.funcional.test.js
│       └── appointments.funcional.test.js
│
├── src/
│   ├── data/
│   │   ├── user-faker.js
│   │   └── auth-faker.js
│   │
│   ├── helpers/
│   │   ├── request.js
│   │   ├── authHelper.js
│   │   ├── validarContratos.js
│   │   └── dbHelper.js
│   │
│   └── schema/
│       ├── auth.login.schema.json
│       ├── user.write.schema.json
│       ├── user.read.schema.json
│       └── appointment.schema.json
│
├── reports/                     # gerado automaticamente pelo CI, não versionado
│
├── config/
│   └── environments/
│       ├── dev.json
│       └── staging.json
│
├── .github/
│   └── workflows/
│       └── daily-regression.yml
│
├── jest.config.js
├── babel.config.js
└── package.json
```

### Responsabilidade de cada camada

| Camada | Responsabilidade |
|---|---|
| `__Test__/funcional` | Valida comportamento: status code, headers, efeitos colaterais, regras de negócio |
| `__Test__/contrato` | Valida apenas o *shape* da resposta contra o JSON Schema |
| `src/data` | Geração de massa de dados fake (Faker) por domínio |
| `src/helpers/request.js` | Wrapper único do Supertest com baseURL por ambiente |
| `src/helpers/authHelper.js` | Login via bypass de OTP (`@test.conectabem.com` / `000000`), retorna token pronto para uso |
| `src/helpers/validarContratos.js` | Função central de validação contra JSON Schema |
| `src/helpers/dbHelper.js` | Conexão direta ao MongoDB de dev — usado só para seed/cleanup, nunca para asserts de negócio |
| `src/schema` | Um arquivo por contrato de resposta |
| `config/environments` | Configuração de baseURL e variáveis por ambiente (dev, staging) |

---

## 4. Estratégia de autenticação nos testes

O ConectaBem já expõe um mecanismo de bypass de OTP em dev/staging (e-mails `@test.conectabem.com` aceitam OTP fixo `000000`). A arquitetura usa esse mecanismo como padrão:

1. `authHelper.js` cria (ou reaproveita) um usuário de teste via `POST /auth/register` ou usa os usuários já semeados (`npm run seed:test-users` no backend).
2. Executa o fluxo real de `POST /auth/checkOTP` com `000000`.
3. Retorna o token de acesso pronto para os testes que dependem de rota protegida.
4. O login acontece uma vez por suíte (`beforeAll`), não por teste, para não penalizar o tempo de execução.

Isso testa o fluxo de autenticação de ponta a ponta, em vez de mockar JWT manualmente — reduzindo o risco de a suíte "passar" mesmo se o fluxo real de login quebrar.

---

## 5. Massa de dados e limpeza (cleanup)

- Dados de teste são criados **via API**, sempre que possível, para validar o comportamento real do endpoint.
- Todo dado criado usa identificador único (e-mail com sufixo timestamp/random dentro do domínio `@test.conectabem.com`), permitindo execução em paralelo sem conflito.
- O `dbHelper.js` é usado apenas para:
  - Cleanup pós-execução (`afterAll`/`afterEach`) quando não existe endpoint de delete para o recurso.
  - Verificações de estado que a API não expõe diretamente.
- Nenhum teste deve depender de dados pré-existentes no banco além dos usuários semeados oficialmente.

---

## 6. Tipos de teste e cobertura

| Tipo | O que cobre | Quando roda |
|---|---|---|
| **Funcional** | Regras de negócio, status codes, efeitos colaterais | Todo push/PR (suíte reduzida) e execução diária completa |
| **Contrato** | Formato/tipo dos campos da resposta (JSON Schema) | Execução diária completa |
| **Smoke** (subset de funcional) | Fluxos críticos: login/OTP, criação e leitura de recurso principal | Todo push/PR |
| **Regressão** | Toda a suíte funcional + contrato | Diariamente, via CI agendado |

A suíte deve crescer de forma incremental: a cada novo endpoint do `conectaBemBack`, adiciona-se o par funcional + contrato correspondente, seguindo o mesmo padrão de arquivos já existente — isso é o que torna a suíte **mutável/extensível** sem exigir retrabalho estrutural.

---

## 7. CI/CD — Execução diária agendada

Workflow do GitHub Actions (`.github/workflows/daily-regression.yml`) configurado com `cron`, rodando em horário fixo (ex: 06h BRT / 09h UTC), com os seguintes passos:

1. Checkout do repositório de testes.
2. Instalação de dependências (`npm ci`).
3. Execução da suíte completa (`npm run test`) contra o ambiente de dev.
4. Geração do relatório de execução (seção 8).
5. Publicação do relatório como artifact do workflow (e, opcionalmente, notificação em canal do time em caso de falha).

Além da execução diária, um segundo workflow menor (`on: pull_request`) roda apenas a suíte smoke, dando feedback rápido em cada PR do backend, se os dois repositórios forem integrados via `repository_dispatch` ou webhook — ponto a validar com o time em uma fase posterior.

---

## 8. Relatórios de execução

Cada execução (manual, PR ou diária) deve gerar um relatório navegável, não apenas o log bruto do terminal. Sugestão de ferramentas:

- **`jest-html-reporter`** ou **`jest-junit`**: gera HTML/XML com resumo de testes passados/falhos, tempo de execução e stack trace de falhas.
- O relatório é salvo em `reports/` (ignorado no `.gitignore`, mas publicado como artifact do GitHub Actions a cada execução).
- Na execução diária, o relatório fica disponível por um período retido pelo Actions, permitindo consultar o histórico de regressão sem precisar rodar localmente.

---

## 9. Métricas do repositório via Claude

Periodicamente (sugestão: semanal), o repositório de testes deve ser analisado com a skill `qa-repo-analyzer`, gerando um dashboard com métricas como:

- Quantidade de testes por tipo (funcional vs contrato).
- Taxa de sucesso histórica.
- Cobertura de endpoints testados vs. total de endpoints expostos pelo backend (via `swagger-output.json` do `conectaBemBack`).
- Sinais de dívida técnica (testes flaky, duplicação de helpers, schemas desatualizados).

Esse relatório complementa — mas não substitui — o relatório de execução do CI: ele mede a **saúde do processo de QA**, enquanto o relatório de execução mede o **resultado de uma rodada específica**.

---

## 10. Manutenibilidade (por que a suíte é "mutável")

- **Camadas desacopladas**: mudar a URL base ou o ambiente não exige tocar em nenhum teste, apenas em `config/environments`.
- **Schemas isolados por recurso**: alterar o contrato de um endpoint não afeta os demais arquivos de schema.
- **Helpers centralizados**: qualquer mudança no fluxo de autenticação (ex: nova versão do endpoint de OTP) é ajustada em um único arquivo (`authHelper.js`), refletindo em todos os testes que o usam.
- **Padrão replicável**: cada novo domínio (ex: agendamentos, avaliações) segue exatamente a mesma estrutura de pastas — reduz a curva de aprendizado para novos colaboradores do time de QA.

---

## 11. Próximos passos

1. Criar o repositório `conectaBem-api-tests` sob a conta `developmentHC`.
2. Configurar variáveis de ambiente e segredos do GitHub Actions (baseURL de dev, `MONGODB_URI` de leitura).
3. Implementar o esqueleto inicial: `request.js`, `authHelper.js`, `validarContratos.js` e o primeiro par de testes (auth — funcional + contrato).
4. Configurar o workflow de execução diária agendada.
5. Validar geração do relatório de execução em uma primeira rodada manual antes de agendar.
6. Rodar a primeira análise de métricas via `qa-repo-analyzer` como baseline.
