# 🧪 Plano de Testes da API – ConectaBem

## 📌 1. Objetivo

Garantir a qualidade, estabilidade e confiabilidade da API **ConectaBem**, validando os endpoints por meio de **testes funcionais, de integração, contrato e automação**.

Os testes serão executados utilizando:

- **Postman** para testes manuais
- **Supertest (JavaScript)** para automação de testes da API

---

# 📌 2. Escopo dos Testes

Os testes da API irão cobrir:

- Testes **positivos**
- Testes **negativos**
- Testes **de contrato (JSON Schema)**
- Testes **de integração entre endpoints**
- Testes **automatizados com Supertest**
- Testes **manuais exploratórios com Postman**

Endpoints incluídos:

- Autenticação
- Usuário
- Endereços
- Busca de profissionais
- Agendamentos
- Mensagens
- Endpoint de teste

---

# 📌 3. Ferramentas

| Ferramenta | Uso |
|---|---|
| **Postman** | Testes manuais da API |
| **Supertest** | Testes automatizados da API |
| **Jest / Mocha** | Runner de testes |
| **AJV** | Validação de JSON Schema |

---

# 📌 4. Estratégia de Teste

## 4.1 Testes Positivos

Verificam se a API retorna **respostas corretas para requisições válidas**.

Exemplos:

| Endpoint | Teste |
|---|---|
| POST `/auth/sendOTP` | Deve enviar OTP com email válido |
| POST `/auth/checkOTP` | Deve autenticar com OTP correto |
| GET `/user` | Deve retornar dados do usuário autenticado |
| GET `/search/highlightsWeek` | Deve retornar lista de profissionais |

Validações:

- Status HTTP correto
- Estrutura da resposta
- Campos obrigatórios presentes

---

## 4.2 Testes Negativos

Validam o comportamento da API quando ocorre erro.

Exemplos:

| Endpoint | Cenário |
|---|---|
| `/auth/checkOTP` | OTP inválido |
| `/auth/sendOTP` | Email inválido |
| `/appointments` | Usuário não autenticado |
| `/messages` | Campos obrigatórios ausentes |

Validações:

- Status HTTP correto (`400`, `401`, `403`, `404`)
- Mensagem de erro consistente

---

## 4.3 Testes de Integração

Verificam o funcionamento correto entre múltiplos endpoints.

### Exemplo de fluxo de autenticação

1. `POST /auth/sendOTP`
2. `POST /auth/checkOTP`
3. `POST /auth/createPatient`
4. `GET /user`

Validações:

- Usuário criado corretamente
- Token de autenticação válido
- Dados persistidos no sistema

---

## 4.4 Testes Manuais (Postman)

Os testes manuais serão executados no **Postman** para:

- Exploração da API
- Validação de cenários
- Testes rápidos durante o desenvolvimento

### Autenticação

- `POST /auth/sendOTP`
- `POST /auth/checkOTP`
- `POST /auth/createPatient`
- `POST /auth/createProfessional`
- `POST /auth/uploadPhoto`

### Usuário

- `GET /user`

### Endereço

- `GET /address`
- `PUT /address`
- `PUT /active-address`

### Busca

- `GET /search/highlightsWeek`
- `GET /search/professionalBySpeciality/{speciality}`
- `GET /search/searchBar/{terms}`

### Agendamentos

- `POST /appointments`
- `POST /appointments/{id}/actions`
- `GET /appointments/{id}`
- `GET /appointments/me`

### Mensagens

- `POST /messages`
- `GET /messages/contacts`
- `PATCH /conversations/{conversationId}/read`
- `GET /messages/unread`

### Teste

- `GET /teste`

---

## 4.5 Testes Automatizados (Supertest)

Os testes automatizados serão implementados utilizando **Supertest** para validar endpoints da API diretamente no backend.

### Exemplo de teste automatizado

```javascript
const request = require("supertest");
const app = require("../app");

describe("GET /teste", () => {
  it("deve retornar status 200", async () => {
    const response = await request(app)
      .get("/teste");

    expect(response.statusCode).toBe(200);
  });
});
```

### Exemplo de teste de autenticação

```javascript
describe("POST /auth/sendOTP", () => {
  it("deve enviar OTP para email válido", async () => {
    const response = await request(app)
      .post("/auth/sendOTP")
      .send({
        email: "teste@email.com"
      });

    expect(response.statusCode).toBe(200);
  });
});
```

Validações incluídas:

- Status HTTP
- Estrutura da resposta
- Campos obrigatórios
- Fluxos de autenticação

---

## 4.6 Testes de Contrato (JSON Schema)

Os testes de contrato garantem que a estrutura da resposta da API **não seja alterada indevidamente**.

Ferramenta utilizada:

- **AJV (Another JSON Validator)**

### Exemplo de JSON Schema

```json
{
  "type": "object",
  "required": ["id", "name", "email"],
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "email": { "type": "string" }
  }
}
```

Validações realizadas:

- Campos obrigatórios
- Tipos de dados
- Estrutura da resposta

---

# 📌 5. Métricas e Critérios de Aceite

| Critério | Meta |
|---|---|
| Sucesso dos testes | ≥ 95% |
| Quebra de contrato | 0% |
| Tempo médio das APIs | < 2s |
| Erros de autenticação | Não aceitável |
| Cobertura de endpoints | ≥ 90% |

---

# 📌 6. Ambiente de Teste

| Ambiente | Descrição |
|---|---|
| Local | Desenvolvimento |
| Staging | Homologação |
| Produção | Ambiente final |

Base URL:

```
https://conecta-bem-back.vercel.app
```

---

# 📌 7. Dados de Teste

Os testes utilizarão:

- Emails fictícios
- Usuários de teste
- Especialidades médicas
- Agendamentos simulados

---

# 📌 8. Riscos

| Risco | Impacto |
|---|---|
| Falhas na autenticação | Alto |
| Token expirando rapidamente | Médio |
| Falta de documentação | Médio |
| Inconsistência no retorno da API | Alto |
| Problemas de CORS | Médio |

---

# ✅ Resultado Esperado

A API será considerada **estável e pronta para uso** quando:

- Todos os endpoints críticos passarem nos testes
- Não houver quebra de contrato
- Fluxos principais funcionarem corretamente
- As respostas da API estiverem dentro do tempo esperado
