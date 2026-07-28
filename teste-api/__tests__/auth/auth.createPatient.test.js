jest.setTimeout(15000);

const request = require("supertest");
const { randomUUID } = require("crypto");

const api = request("http://localhost:3001");

function generateTestEmail(prefix = "patient") {
  return `${prefix}.${randomUUID()}@test.conectabem.com`;
}

describe("POST /auth/createPatient", () => {
  let email;
  let token;
  let userId;

  beforeEach(async () => {
    email = generateTestEmail();

    // Cria usuário
    const sendOTP = await api
      .post("/auth/sendOTP")
      .send({ email });

    expect([200, 201]).toContain(sendOTP.status);

    // Autentica
    const login = await api
      .post("/auth/checkOTP")
      .send({
        email,
        OTP: "0000",
      });

    expect(login.status).toBe(200);

    token = login.body.token;
    userId = login.body.user._id;
  });

  const validBody = () => ({
    userId,
    name: "João Silva",
    birthdayDate: 1632824400000,
    residentialAddress: {
      cep: "13295-000",
      endereco: "Rua das Orquídeas",
      bairro: "Centro",
      numero: "123",
      cidade: "Itupeva",
      estado: "SP",
      complemento: "Apto 101",
      name: "Minha casa",
      type: "Casa",
    },
    userSpecialties: [
      "Cardiologia",
      "Clínica Geral",
    ],
    userServicePreferences: [
      "Consulta",
      "Exame",
    ],
    accessibility: [
      "Cadeira de rodas",
      "Deficiência visual",
    ],
    profilePhoto: "https://teste.com/foto.png",
  });

  // ==========================
  // 201 - Cadastro realizado
  // ==========================
  it("deve completar o cadastro do paciente", async () => {
    const response = await api
      .post("/auth/createPatient")
      .set("Authorization", `Bearer ${token}`)
      .send(validBody());

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("msg");
    expect(response.body).toHaveProperty("token");
  });

  // ==========================
  // 401 - Sem token
  // ==========================
  it("deve retornar 401 quando não enviar o token", async () => {
    const response = await api
      .post("/auth/createPatient")
      .send(validBody());

    expect(response.status).toBe(401);
  });

  // ==========================
  // 403 - Token inválido
  // ==========================
  it("deve retornar 403 para token inválido", async () => {
    const response = await api
      .post("/auth/createPatient")
      .set("Authorization", "Bearer token-invalido")
      .send(validBody());

    expect(response.status).toBe(403);
  });

  // ==========================
  // 422 - Sem nome
  // ==========================
  it("deve retornar 422 quando name não for enviado", async () => {
    const body = validBody();
    delete body.name;

    const response = await api
      .post("/auth/createPatient")
      .set("Authorization", `Bearer ${token}`)
      .send(body);

    expect(response.status).toBe(422);

    expect(response.body).toHaveProperty("error");
  });

  // ==========================
  // 422 - Body vazio
  // ==========================
  it("deve retornar 422 quando nenhum dado for enviado", async () => {
    const response = await api
      .post("/auth/createPatient")
      .set("Authorization", `Bearer ${token}`)
      .send({});

    expect(response.status).toBe(422);

    expect(response.body).toHaveProperty("error");
  });
});