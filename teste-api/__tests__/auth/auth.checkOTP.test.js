jest.setTimeout(15000);

const request = require("supertest");
const { randomUUID } = require("crypto");

const api = request("http://localhost:3001");

function generateTestEmail(prefix = "patient") {
  return `${prefix}.${randomUUID()}@test.conectabem.com`;
}

describe("POST /auth/checkOTP", () => {
  let email;

  beforeEach(async () => {
    email = generateTestEmail();

    const response = await api
      .post("/auth/sendOTP")
      .send({ email });

  });

  // ==========================
  // 200 - OTP válido
  // ==========================
  it("deve autenticar o usuário com OTP válido", async () => {
    const response = await api
      .post("/auth/checkOTP")
      .send({
        email,
        OTP: "0000",
      });

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("user");

    expect(response.body.user.email).toBe(email);
    expect(response.body.user.status).toBe("pending");
  });

  // ==========================
  // 401 - OTP inválido
  // ==========================
  it("deve retornar 401 para OTP inválido", async () => {
    const response = await api
      .post("/auth/checkOTP")
      .send({
        email,
        OTP: "9999",
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  // ==========================
  // 422 - Sem e-mail
  // ==========================
  it("deve retornar 422 quando o e-mail não for enviado", async () => {
    const response = await api
      .post("/auth/checkOTP")
      .send({
        OTP: "0000",
      });

    expect(response.status).toBe(422);
    expect(response.body).toHaveProperty("message");
  });

  // ==========================
  // 422 - Sem OTP
  // ==========================
  it("deve retornar 422 quando o OTP não for enviado", async () => {
    const response = await api
      .post("/auth/checkOTP")
      .send({
        email,
      });

    expect(response.status).toBe(422);
    expect(response.body).toHaveProperty("message");
  });

  // ==========================
  // 422 - Body vazio
  // ==========================
  it("deve retornar 422 quando nenhum parâmetro for enviado", async () => {
    const response = await api
      .post("/auth/checkOTP")
      .send({});

    expect(response.status).toBe(422);
    expect(response.body).toHaveProperty("message");
  });
});