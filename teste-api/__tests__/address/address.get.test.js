jest.setTimeout(15000);

const request = require("supertest");
const { randomUUID } = require("crypto");

const api = request("http://localhost:3001");

function generateTestEmail(prefix = "address") {
  return `${prefix}.${randomUUID()}@test.conectabem.com`;
}

describe("GET /address", () => {
  let email;
  let token;

  beforeEach(async () => {
    email = generateTestEmail();

    // Cria usuário
    const sendOTP = await api
      .post("/auth/sendOTP")
      .send({ email });

    expect([200, 201]).toContain(sendOTP.status);

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
  // 200 - Endereços encontrados
  // ==========================
  it("deve retornar os endereços do usuário", async () => {
    const response = await api
      .get("/address")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("addresses");
    expect(Array.isArray(response.body.addresses)).toBe(true);
  });

  // ==========================
  // 401 - Sem token
  // ==========================
  it("deve retornar 401 quando não enviar o token", async () => {
    const response = await api.get("/address");

    expect(response.status).toBe(401);
  });

  // ==========================
  // 403 - Token inválido
  // ==========================
  it("deve retornar 403 quando o token for inválido", async () => {
    const response = await api
      .get("/address")
      .set("Authorization", "Bearer token-invalido");

    expect(response.status).toBe(403);
  });
});