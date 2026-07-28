jest.setTimeout(15000);

const request = require("supertest");
const { randomUUID } = require("crypto");

const api = request("http://localhost:3001");

function generateTestEmail(prefix = "user") {
  return `${prefix}.${randomUUID()}@test.conectabem.com`;
}

describe("GET /user", () => {
  let email;
  let token;

  beforeEach(async () => {
    email = generateTestEmail();

    // Cria usuário
    const sendOTP = await api
      .post("/auth/sendOTP")
      .send({ email });

    // Login
    const login = await api
      .post("/auth/checkOTP")
      .send({
        email,
        OTP: "0000",
      });

    expect(login.status).toBe(200);

    token = login.body.token;
  });

  // ==========================
  // 200 - Usuário encontrado
  // ==========================
  it("deve retornar os dados do usuário autenticado", async () => {
    const response = await api
      .get("/user")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("_id");
    expect(response.body).toHaveProperty("email", email);
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("userType");

    // Não deve retornar campos sensíveis
    expect(response.body).not.toHaveProperty("hashedOTP");
    expect(response.body).not.toHaveProperty("__v");
  });

  // ==========================
  // 401 - Sem token
  // ==========================
  it("deve retornar 401 quando não enviar o token", async () => {
    const response = await api.get("/user");

    expect(response.status).toBe(401);
  });

  // ==========================
  // 403 - Token inválido
  // ==========================
  it("deve retornar 403 quando o token for inválido", async () => {
    const response = await api
      .get("/user")
      .set("Authorization", "Bearer token-invalido");

    expect(response.status).toBe(403);
  });
});