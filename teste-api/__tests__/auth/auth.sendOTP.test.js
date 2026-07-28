jest.setTimeout(15000);

const request = require("supertest");
const { randomUUID } = require("crypto");

const api = request("http://localhost:3001");

function generateTestEmail(prefix = "patient") {
  return `${prefix}.${randomUUID()}@test.conectabem.com`;
}

describe("POST /auth/sendOTP", () => {
  // ==========================
  // 201 - Novo usuário
  // ==========================
  it("deve retornar 201 ao criar um novo usuário", async () => {
    const email = generateTestEmail();

    const response = await api
      .post("/auth/sendOTP")
      .send({ email });

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");

    expect(response.body).toMatchObject({
      email: {
        address: email,
        exists: false,
        status: "pending",
      },
      message: "User created and OTP sent through email",
    });
  });


  // ==========================
  // 200 - Usuário existente
  // ==========================
  it("deve retornar 200 para um usuário já existente", async () => {
    const email = generateTestEmail();

    // Primeiro cria o usuário
    await api
      .post("/auth/sendOTP")
      .send({ email });

    // Depois tenta novamente com o mesmo email
    const response = await api
      .post("/auth/sendOTP")
      .send({ email });

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("id");

    expect(response.body).toMatchObject({
      email: {
        address: email,
        exists: true,
        status: "pending",
      },
      message: "User OTP updated and sent",
    });
  });


  // ==========================
  // 422 - Sem e-mail
  // ==========================
  it("deve retornar 422 quando o e-mail não for enviado", async () => {
    const response = await api
      .post("/auth/sendOTP")
      .send({});

    expect(response.status).toBe(422);

    expect(response.body).toHaveProperty("message");
  });


  // ==========================
  // 422 - E-mail inválido
  // ==========================
  it("deve retornar 422 para e-mail inválido", async () => {
    const response = await api
      .post("/auth/sendOTP")
      .send({
        email: "email-invalido",
      });

    expect(response.status).toBe(422);

    expect(response.body).toHaveProperty("message");
  });
});