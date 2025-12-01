# 🧪 Plano de Testes Manuais – Cadastro de Paciente  
> Funcionalidade: Fluxo de Cadastro (Paciente)  
> Sistema: ConectaBem  
> Autor: Adaptado por ChatGPT  
> Data de Atualização: 2025-12-01  
> Versão: 1.0

---

# 📊 Tabela Consolidada – Partição de Equivalência  

| Tipo de Cadastro    | Partição Válida                                    | Partição Inválida                                       |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Google**          | Conta Google existente + autorização concedida     | Conta inexistente / autorização negada                  |
| **Facebook**        | Conta Facebook existente + autorização concedida   | Conta inexistente / autorização negada                  |
| **E-mail (OTP)**    | E-mail válido + código correto dentro da validade  | Formato inválido / código incorreto / expirado / limite excedido |
| **CEP**             | CEP existente (ViaCEP)                             | CEP inexistente / formato inválido                      |
| **Campos Obrigatórios** | Dados completos + formatos válidos            | Dados vazios / inválidos                                |

---

# 🔹 Cenário 01: Cadastro via Provedores (Google / Facebook)

---

## **Caso de Teste 01 – Cadastro com Google (Happy Path)**  
**ID:** CAD_PAC_SOCIAL_001  
**Descrição:** Usuário realiza cadastro como Paciente utilizando Google com sucesso.

### **Pré-condições**
- Conta Google válida.  
- Permissão concedida para compartilhar nome/e-mail.  
- E-mail não cadastrado previamente.

### **Passos**
1. **DADO** que o usuário está na Home do ConectaBem  
2. **QUANDO** clica em **“Entrar com Google”**  
3. **E** concede permissão de compartilhamento  
4. **ENTÃO** o sistema exibe tela de seleção de perfil  
5. **QUANDO** seleciona **Paciente**  
6. **ENTÃO** exibe formulário de cadastro Etapa 1/4  
7. **QUANDO** preenche todos os dados obrigatórios corretamente  
8. **E** avança até finalizar a Etapa 4/4  
9. **ENTÃO** cadastro é concluído e usuário é autenticado

### **Critérios de Aceitação**
- Não permitir prosseguir sem seleção de perfil.  
- Exibir Pop-over explicando os perfis na primeira escolha.  
- Cadastro concluído e home autenticada exibida.

---

## **Caso de Teste 02 – Cadastro com Facebook (Inativado / Documentado)**  
**ID:** CAD_PAC_SOCIAL_002  
**Descrição:** Cadastro através do Facebook (funcionalidade desativada, mas registrada).

---

## **Caso de Teste 03 – Cadastro Social sem permissão de dados (Negativo)**  
**ID:** CAD_PAC_SOCIAL_003  
**Descrição:** Usuário não concede permissão para compartilhamento.

### **Pré-condições**
- Conta Google/Facebook válida.

### **Passos**
1. **DADO** que o usuário iniciou login social  
2. **QUANDO** nega permissão de acesso a nome/e-mail  
3. **ENTÃO** o cadastro deve ser interrompido  
4. **E** o sistema deve voltar para a tela anterior exibindo mensagem de erro

### **Critérios de Aceitação**
- Cadastro não deve avançar sem dados básicos.

---

# 🔹 Cenário 02: Cadastro via E-mail (OTP)

---

## **Caso de Teste 04 – Envio e Validação de Código OTP (Happy Path)**  
**ID:** CAD_PAC_EMAIL_004  
**Descrição:** Cadastro iniciado por e-mail com validação correta do código.

### **Pré-condições**
- E-mail válido e não cadastrado.  
- Envio de código funcional.  

### **Passos**
1. **DADO** que o usuário está na Home  
2. **QUANDO** insere e-mail válido  
3. **ENTÃO** o sistema envia código OTP  
4. **QUANDO** usuário insere o código válido dentro da contagem regressiva  
5. **ENTÃO** exibe a seleção de perfil  
6. **QUANDO** seleciona **Paciente**  
7. **ENTÃO** inicia Etapa 1/4 do cadastro

### **Critérios de Aceitação**
- Exibir tempo regressivo.  
- Novo código invalida o anterior.  
- Botão de reenviar só habilita após 60s.  
- Código válido permite prosseguir.

---

## **Caso de Teste 05 – Código incorreto (Negativo)**  
**ID:** CAD_PAC_EMAIL_005  

### **Pré-condições**
- Código inserido é incorreto.

### **Passos**
1. **DADO** que o usuário solicitou login via código  
2. **QUANDO** insere código incorreto  
3. **ENTÃO** sistema exibe:  
   - “Preencha corretamente ou reenvie o código e tente novamente”

### **Critérios de Aceitação**
- Não validar código incorreto.  
- Inputs exibem estado vermelho.

---

## **Caso de Teste 06 – Código expirado (Alternativo)**  
**ID:** CAD_PAC_EMAIL_006  

### **Pré-condições**
- Código expirado (tempo configurado > 30s até 5min).

### **Passos**
1. **DADO** que o usuário recebeu o código  
2. **QUANDO** tenta utilizá-lo após expiração  
3. **ENTÃO** sistema solicita novo envio

---

## **Caso de Teste 07 – Reenvio de código (Limite)**  
**ID:** CAD_PAC_EMAIL_007  

### **Pré-condições**
- Usuário solicitou múltiplos reenvios.

### **Passos**
1. **DADO** que usuário reenviou o código 5 vezes na última hora  
2. **QUANDO** tenta reenviar novamente  
3. **ENTÃO** sistema exibe:  
   - **“Você só poderá solicitar novamente o código após 1 hora”**

### **Critérios de Aceitação**
- Limite respeitado.

---

# 🔹 Cenário 03: Dados Obrigatórios

---

## **Caso de Teste 08 – Preenchimento Completo das Etapas (Happy Path)**  
**ID:** CAD_PAC_DADOS_008  

### **Pré-condições**
- Usuário validou e-mail ou login social.

### **Passos**
1. **DADO** que está na Etapa 1/4  
2. **QUANDO** preenche:  
   - Nome ≥ 3 caracteres  
   - Data válida (18–110 anos)  
   - CEP válido (ViaCEP)  
   - Endereço, número, bairro, cidade, estado  
3. **E** avança para Etapa 2/4, 3/4 e 4/4  
4. **E** preenche campos obrigatórios de preferências  
5. **ENTÃO** cadastro conclui

### **Critérios de Aceitação**
- Não permitir continuar com campos inválidos.

---

## **Caso de Teste 09 – Campos obrigatórios vazios (Negativo)**  
**ID:** CAD_PAC_DADOS_009  

### **Passos**
1. **DADO** usuário na etapa  
2. **QUANDO** deixa campos obrigatórios vazios  
3. **ENTÃO** labels e inputs ficam vermelhos  
4. **E** sistema impede avanço

---

## **Caso de Teste 10 – Usuário opta por pular campos opcionais**  
**ID:** CAD_PAC_DADOS_010  

### **Pré-condições**
- Sistema permite botão “pular”.

### **Passos**
1. **DADO** que o botão “pular” está ativo  
2. **QUANDO** usuário o utiliza  
3. **ENTÃO** sistema alerta sobre dados faltantes (no futuro)  
4. **E** permite continuar até a conclusão final

---

# 🔹 Cenário 04: Validações de Formulário (Paciente)

*(Baseado integralmente nas regras 3.1.1)*

---

## **Caso de Teste 11 – Validação do Nome**  
**ID:** CAD_PAC_VALID_011  

### **Critérios**
- ≥ 3 caracteres  
- Apenas um espaço entre palavras  

---

## **Caso de Teste 12 – Validação da Data de Nascimento**  
**ID:** CAD_PAC_VALID_012  
- Idade mínima: 18  
- Idade máxima: 110  

---

## **Caso de Teste 13 – CEP Residencial via ViaCEP**  
**ID:** CAD_PAC_VALID_013  
- Formato 00000-000  
- CEP inexistente → erro “CEP não encontrado”  

---

## **Caso de Teste 14 – Endereço / Bairro / Cidade / Estado**  
**ID:** CAD_PAC_VALID_014  
- Mínimo 3 caracteres cada  

---

## **Caso de Teste 15 – Acessibilidade e Preferências**  
**ID:** CAD_PAC_VALID_015  
- Aceita lista (array)  
- Pode ser vazio ou múltiplos itens  

---

# 🔹 Cenário 05: Fluxo de Conclusão

---

## **Caso de Teste 16 – Finalização do Cadastro**  
**ID:** CAD_PAC_END_016  

### **Pré-condições**
- Todas as etapas preenchidas corretamente.

### **Passos**
1. **DADO** que usuário está na última etapa  
2. **QUANDO** finaliza o cadastro  
3. **ENTÃO** sistema registra data/hora do cadastro  
4. **E** autentica automaticamente  
5. **E** redireciona para Home

---

# 🔹 Cenário 06: Restrições Gerais

---

## **Caso de Teste 17 – E-mail já cadastrado (Negativo)**  
**ID:** CAD_PAC_RESTR_017  

### **Passos**
1. **DADO** que usuário insere um e-mail já existente  
2. **ENTÃO** sistema exibe mensagem clara de erro  
3. **E** impede continuação

---

## **Caso de Teste 18 – Perfis diferentes usando o mesmo e-mail**  
**ID:** CAD_PAC_RESTR_018  

### **Passos**
1. **DADO** que e-mail pertence a perfil Profissional  
2. **QUANDO** tenta cadastrar como Paciente  
3. **ENTÃO** sistema impede compartilhamento de e-mail entre perfis

---

## **Caso de Teste 19 – Falha de conexão durante o cadastro**  
**ID:** CAD_PAC_RESTR_019  

### **Passos**
1. **DADO** que ocorre uma falha de conexão  
2. **ENTÃO** sistema interrompe o processo  
3. **E** informa usuário a tentar novamente
