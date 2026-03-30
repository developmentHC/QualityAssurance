# Falha - Erro 422 ao cadastrar paciente e profissional (campos obrigatórios ausentes: userId)

## Descrição  
Ao tentar realizar o cadastro de paciente ou profissional, a API retorna erro **422 (Unprocessable Entity)** indicando ausência do campo obrigatório `userId`. Esse comportamento impede a conclusão do cadastro, sugerindo falha na montagem do payload ou na integração entre front-end e back-end.

---

## Ambiente de Teste 
- **Ambientes:** Local e Homologação
- **SO:** Windows 11  
- **Navegador:** Brave v1.86.146  

---

## Passos para reproduzir 
1. Acessar a página de cadastro: https://conecta-bem-front.vercel.app/auth
2. Criar uma conta como paciente ou profissional
3. Preencher todos os campos obrigatórios do formulário
4. Submeter o cadastro

---

## Resultado Esperado 
O sistema deve enviar todos os campos obrigatórios, permitindo que o cadastro seja processado com sucesso e o paciente seja registrado na base de dados.

---

## Resultado Obtido  
A requisição retorna erro **422**, informando que o campo `userId` está ausente no payload, bloqueando a finalização do cadastro.

---

## Evidência  
- **Log de Erro do Vercel:**
<p align="center">
  <img width="909" height="414" alt="log_vercel" src="https://github.com/user-attachments/assets/18d20ec8-313a-49d5-a6a8-d4deea81b9cf" />
</p>

- **Log de Erro do Brave:**
<p align="center">
  <img width="1579" height="571" alt="log_brave" src="https://github.com/user-attachments/assets/c7f85be7-c7e6-4fe5-8228-cccbe13d7f70" />
</p>

---

### **Hipóteses**

* Desalinhamento entre frontend e backend (payload)
* Possível mudança recente no contrato da API
* Middleware de autenticação não populando `req.user`
* Possível impacto de migração ou mistura entre
  NextAuth.js e Better Auth

---

### **Impacto**

* Bloqueia onboarding de novos usuários
* Afeta produção diretamente

---

### **Observação adicional**

* Fluxo OTP apresentou inconsistência (falha nas primeiras tentativas e sucesso posterior)
* Pode indicar problema de sincronização, expiração ou múltiplas gerações de código
