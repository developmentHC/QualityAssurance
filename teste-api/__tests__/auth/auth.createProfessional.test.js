jest.setTimeout(15000);

const request = require("supertest");
const { randomUUID } = require("crypto");

const api = request("http://localhost:3001");

function generateTestEmail(prefix = "professional") {
  return `${prefix}.${randomUUID()}@test.conectabem.com`;
}

describe("POST /auth/createProfessional", () => {
  let token;
  let userId;

  beforeEach(async () => {
    const email = generateTestEmail();

    // Criar usuário pendente
    const sendOTP = await api
      .post("/auth/sendOTP")
      .send({ email });

    expect([200, 201]).toContain(sendOTP.status);

    // Validar OTP
    const checkOTP = await api
      .post("/auth/checkOTP")
      .send({
        email,
        OTP: "0000",
      });

    expect(checkOTP.status).toBe(200);

    token = checkOTP.body.token;
    userId = checkOTP.body.user._id;
  });


  function validBody() {
    return {
      userId,
      name: "João Silva",
      birthdayDate: 1632824400000,
      CNPJCPFProfissional: "123.456.789-00",

      residentialAddress: {
        cep: "12345-678",
        endereco: "Avenida Paulista",
        bairro: "Bela Vista",
        numero: "1000",
        cidade: "São Paulo",
        estado: "SP",
        complemento: "Sala 42",
        name: "Minha casa",
        type: "Casa",
      },

      clinic: {
        name: "Clínica Saúde Total",
        cep: "12345-678",
        address: "Avenida Paulista",
        neighborhood: "Bela Vista",
        number: "1000",
        city: "São Paulo",
        state: "SP",
        addition: "Sala 123",
      },

      professionalSpecialties: [
        "Cardiologia",
        "Clínica Geral",
      ],

      professionalServicePreferences: [
        "Consulta",
        "Exame",
      ],

      otherProfessionalSpecialties: [
        "Acupuntura",
      ],

      accessibility: [
        "Rampa de acesso",
        "Banheiro adaptado",
      ],

      profilePhoto: "https://teste.com/foto.png",
    };
  }


  // ==========================
  // 201 - Cadastro profissional
  // ==========================
  it("deve completar o cadastro do profissional", async () => {
    const response = await api
      .post("/auth/createProfessional")
      .set("Authorization", `Bearer ${token}`)
      .send(validBody());

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("msg");
    expect(response.body).toHaveProperty("token");
  });


  // ==========================
  // 401 - Sem token
  // ==========================
  it("deve retornar 401 sem autorização", async () => {
    const response = await api
      .post("/auth/createProfessional")
      .send(validBody());

    expect(response.status).toBe(401);
  });


  // ==========================
  // 403 - Token inválido
  // ==========================
  it("deve retornar 403 com token inválido", async () => {
    const response = await api
      .post("/auth/createProfessional")
      .set("Authorization", "Bearer token-falso")
      .send(validBody());

    expect(response.status).toBe(403);
  });


  // ==========================
  // 422 - Sem nome
  // ==========================
  it("deve retornar 422 sem nome", async () => {
    const body = validBody();

    delete body.name;

    const response = await api
      .post("/auth/createProfessional")
      .set("Authorization", `Bearer ${token}`)
      .send(body);

    expect(response.status).toBe(422);

    expect(response.body).toHaveProperty("error");
  });


  // ==========================
  // 422 - Body vazio
  // ==========================
  it("deve retornar 422 com body vazio", async () => {
    const response = await api
      .post("/auth/createProfessional")
      .set("Authorization", `Bearer ${token}`)
      .send({});

    expect(response.status).toBe(422);

    expect(response.body).toHaveProperty("error");
  });
});