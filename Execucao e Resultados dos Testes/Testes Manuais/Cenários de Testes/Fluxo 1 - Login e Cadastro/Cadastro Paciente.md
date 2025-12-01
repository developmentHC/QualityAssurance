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

## 📌 Passos Comuns ao Cadastro de Paciente (Refatorado)
1. Sistema exibe tela de seleção de perfil.  
2. Usuário seleciona **Paciente**.  
3. Sistema exibe formulário **Etapa 1/4**.  
4. Usuário preenche corretamente:  
   - Nome (mín. 3 caracteres)  
   - Data de nascimento válida (18–110 anos)  
   - CEP no formato `00000-000`  
   - Logradouro, Número, Bairro, Cidade, Estado  
5. Sistema valida CEP via ViaCEP e preenche automaticamente quando possível.  
6. Botão **“Continuar”** habilita apenas com todos os campos válidos.  
7. Usuário avança para **Etapa 2/4**, depois 3/4 e 4/4.  
8. Usuário preenche preferências e necessidades conforme solicitado.  
9. Sistema salva o progresso em cada etapa.  
10. Ao finalizar a etapa 4/4, sistema conclui o cadastro.  
11. Usuário é autenticado e redirecionado para a **Home autenticada**.

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

### **Passos (EXPANDIDO — inclui os passos comuns repetidos)**
1. **DADO** que o usuário está na Home do ConectaBem.  
2. **QUANDO** clica em **“Entrar com Google”**.  
3. **E** concede permissão de compartilhamento.  
4. **ENTÃO** o sistema exibe tela de seleção de perfil.  
5. **QUANDO** seleciona **Paciente**.  
6. **ENTÃO** o sistema exibe o formulário **Etapa 1/4**.  
7. **QUANDO** preenche o **Nome** (mín. 3 caracteres).  
8. **E** preenche **Data de nascimento** (idade entre 18 e 110 anos).  
9. **E** insere **CEP** no formato `00000-000`.  
10. **ENTÃO** o sistema valida o CEP via ViaCEP e preenche endereço quando possível.  
11. **QUANDO** preenche **Logradouro, Número, Bairro, Cidade, Estado** com valores válidos (mínimos conforme regra).  
12. **ENTÃO** o botão **“Continuar”** habilita e o usuário avança para **Etapa 2/4**.  
13. **E** o usuário completa **Etapa 2/4**, **Etapa 3/4** e **Etapa 4/4**, preenchendo preferências e acessibilidade quando aplicável (ou utilizando o botão “pular” quando permitido).  
14. **ENTÃO** ao finalizar a Etapa 4/4, o sistema conclui o cadastro, registra data/hora e autentica o usuário.  
15. **ENTÃO** o usuário é redirecionado para a **Home autenticada**.

### **Critérios de Aceitação**
- Não permitir prosseguir sem seleção de perfil.  
- Exibir Pop-over explicando os perfis na primeira escolha.  
- Todos os campos obrigatórios validados em cada etapa.  
- Cadastro concluído e home autenticada exibida.  
- Registro de data/hora da criação do cadastro.

---

## **Caso de Teste 02 – Cadastro com Facebook (Documentado / Inativado)**  
**ID:** CAD_PAC_SOCIAL_002  
**Descrição:** Usuário realiza cadastro como Paciente utilizando Facebook (fluxo documentado; funcionalidade inativada).

### **Pré-condições**
- Conta Facebook válida.  
- Permissão concedida para compartilhar nome/e-mail.  
- E-mail não cadastrado previamente.

### **Passos (EXPANDIDO — inclui os passos comuns repetidos)**
1. **DADO** que o usuário está na Home do ConectaBem.  
2. **QUANDO** clica em **“Entrar com Facebook”**.  
3. **E** concede permissão de compartilhamento.  
4. **ENTÃO** o sistema exibe tela de seleção de perfil.  
5. **QUANDO** seleciona **Paciente**.  
6. **ENTÃO** o sistema exibe o formulário **Etapa 1/4**.  
7. **QUANDO** preenche **Nome**, **Data de nascimento**, **CEP** e endereço conforme regras.  
8. **ENTÃO** validações de CEP (ViaCEP) e campos ocorrem; usuário avança pelas etapas 2/4 → 3/4 → 4/4.  
9. **ENTÃO** ao finalizar, cadastro é concluído, data/hora registrada, e usuário autenticado e redirecionado para Home.

### **Critérios de Aceitação**
- Mesmo conjunto de critérios do Caso 01 (quando a funcionalidade estiver ativa).

---

## **Caso de Teste 03 – Cadastro Social sem permissão de dados (Negativo)**  
**ID:** CAD_PAC_SOCIAL_003  
**Descrição:** Usuário social nega permissão de compartilhamento (Google/Facebook) — cadastro não conclui.

### **Pré-condições**
- Conta Google/Facebook válida.

### **Passos (EXPANDIDO — fluxo social interrompido)**
1. **DADO** que o usuário iniciou login social.  
2. **QUANDO** nega permissão de acesso a nome/e-mail no provedor.  
3. **ENTÃO** o sistema não recebe os dados básicos e exibe mensagem de erro indicando que é necessário conceder permissão para continuar.  
4. **ENTÃO** o fluxo de cadastro é interrompido e o usuário retorna à tela de login/seleção de método.

### **Critérios de Aceitação**
- Cadastro não deve avançar sem dados básicos.  
- Mensagem clara explicando o motivo.

---

# 🔹 Cenário 02: Cadastro via E-mail (OTP)

---

## **Caso de Teste 04 – Envio e Validação de Código OTP (Happy Path)**  
**ID:** CAD_PAC_EMAIL_004  
**Descrição:** Cadastro iniciado por e-mail com validação correta do código.

### **Pré-condições**
- E-mail válido e não cadastrado.  
- Envio de código funcional.

### **Passos (EXPANDIDO — inclui confirmação por OTP + passos comuns)**
1. **DADO** que o usuário está na Home do ConectaBem.  
2. **QUANDO** insere e-mail válido no formulário de login/cadastro.  
3. **ENTÃO** o sistema valida formato do e-mail e envia código OTP com contagem regressiva visível.  
4. **QUANDO** usuário insere o código OTP dentro do tempo de validade e antes do limite de tentativas.  
5. **ENTÃO** o sistema valida o código (novo código invalida o anterior; reenviar disponível após 60s; limite 5 reenvios/hora).  
6. **QUANDO** código é validado com sucesso, o sistema exibe seleção de perfil.  
7. **QUANDO** seleciona **Paciente**, o sistema exibe o formulário **Etapa 1/4**.  
8. **E** o usuário preenche **Nome**, **Data de nascimento**, **CEP** e endereço conforme regras (ver Passos Comuns).  
9. **E** avança pelas Etapas 2/4 → 3/4 → 4/4 completando preferências.  
10. **ENTÃO** ao finalizar Etapa 4/4, cadastro é concluído, data/hora registrada e usuário autenticado e redirecionado para Home.

### **Critérios de Aceitação**
- Exibir contagem regressiva do OTP.  
- Reenvio somente após 60s; limite de 5 por hora; novo código invalida o anterior.  
- Botões de validação/reenvio ficam desabilitados durante validação com CTA “Validando”.  
- Cadastro só prossegue após OTP válido.

---

## **Caso de Teste 05 – Código incorreto (Negativo)**  
**ID:** CAD_PAC_EMAIL_005  

### **Pré-condições**
- Código inserido é incorreto.

### **Passos**
1. **DADO** que o usuário solicitou login via código.  
2. **QUANDO** insere código incorreto.  
3. **ENTÃO** sistema exibe mensagem: “Preencha corretamente ou reenvie o código e tente novamente”.  
4. **E** os inputs ficam em estado de erro (vermelho).  
5. **E** usuário pode reenviar respeitando o tempo e o limite de tentativas.

### **Critérios de Aceitação**
- Código incorreto não deve validar.  
- Mensagens e estado visual apresentados conforme regra.

---

## **Caso de Teste 06 – Código expirado (Alternativo)**  
**ID:** CAD_PAC_EMAIL_006  

### **Pré-condições**
- Código expirado (tempo configurado entre 30s e 5min).

### **Passos**
1. **DADO** que o usuário recebeu o código.  
2. **QUANDO** tenta utilizá-lo após expiração.  
3. **ENTÃO** sistema recusa o código e solicita novo envio, exibindo mensagem de expiração.

---

## **Caso de Teste 07 – Reenvio de código (Limite)**  
**ID:** CAD_PAC_EMAIL_007  

### **Pré-condições**
- Usuário solicitou múltiplos reenvios.

### **Passos**
1. **DADO** que usuário reenviou o código 5 vezes na última hora.  
2. **QUANDO** tenta reenviar novamente.  
3. **ENTÃO** sistema exibe: **“Você só poderá solicitar novamente o código após 1 hora”** e impede novo envio até o bloqueio expirar.

---

# 🔹 Cenário 03: Dados Obrigatórios

---

## **Caso de Teste 08 – Preenchimento Completo das Etapas (Happy Path)**  
**ID:** CAD_PAC_DADOS_008  

### **Pré-condições**
- Usuário validou e-mail ou login social.

### **Passos (EXPANDIDO — inclui verificação detalhada de cada etapa)**
1. **DADO** que o usuário está na Etapa 1/4 após seleção de perfil.  
2. **QUANDO** preenche:  
   - **Nome** ≥ 3 caracteres.  
   - **Data de nascimento** válida (18–110 anos).  
   - **CEP** no formato `00000-000` (ViaCEP válido).  
   - **Endereço, Número, Bairro, Cidade, Estado** com mínimos válidos.  
3. **ENTÃO** botão **Continuar** habilita; usuário avança para Etapa 2/4.  
4. **E** nas etapas subsequentes preenche preferências e acessibilidade conforme solicitado.  
5. **ENTÃO** sistema salva progresso em cada etapa.  
6. **ENTÃO** ao finalizar Etapa 4/4, cadastro é concluído, data/hora registrada e usuário autenticado e redirecionado para Home.

### **Critérios de Aceitação**
- Validações aplicadas em cada etapa; não permitir avanço com campos inválidos.

---

## **Caso de Teste 09 – Campos obrigatórios vazios (Negativo)**  
**ID:** CAD_PAC_DADOS_009  

### **Passos**
1. **DADO** usuário na etapa de formulário.  
2. **QUANDO** deixa campos obrigatórios vazios.  
3. **ENTÃO** labels e inputs ficam vermelhos e texto de apoio aparece abaixo.  
4. **E** sistema impede avanço até correção.

---

## **Caso de Teste 10 – Usuário opta por pular campos opcionais**  
**ID:** CAD_PAC_DADOS_010  

### **Pré-condições**
- Sistema oferece botão “pular” para campos não obrigatórios.

### **Passos**
1. **DADO** que o botão “pular” está disponível.  
2. **QUANDO** usuário utiliza o botão para pular campos opcionais.  
3. **ENTÃO** sistema registra que campos ficaram pendentes e exibe aviso (ou indicador) após a conclusão do cadastro para que o usuário complete posteriormente.  
4. **ENTÃO** permite concluir o cadastro e autentica o usuário.

---

# 🔹 Cenário 04: Validações de Formulário (Paciente)

*(Baseado nas regras 3.1.1 — repetições aplicadas em casos relevantes)*

## **Caso de Teste 11 – Validação do Nome**  
**ID:** CAD_PAC_VALID_011  
- Critério: Nome com ≥ 3 caracteres; apenas um espaço entre palavras.

## **Caso de Teste 12 – Validação da Data de Nascimento**  
**ID:** CAD_PAC_VALID_012  
- Critério: Idade mínima 18 anos; máxima 110 anos.

## **Caso de Teste 13 – CEP Residencial via ViaCEP**  
**ID:** CAD_PAC_VALID_013  
- Critério: Formato `00000-000`; CEP inexistente → erro “CEP não encontrado”.

## **Caso de Teste 14 – Endereço / Bairro / Cidade / Estado**  
**ID:** CAD_PAC_VALID_014  
- Critério: Mínimo 3 caracteres cada campo.

## **Caso de Teste 15 – Acessibilidade e Preferências**  
**ID:** CAD_PAC_VALID_015  
- Critério: Aceita array; pode ser vazio ou múltiplos itens.

---

# 🔹 Cenário 05: Fluxo de Conclusão

## **Caso de Teste 16 – Finalização do Cadastro**  
**ID:** CAD_PAC_END_016  

### **Pré-condições**
- Todas as etapas preenchidas corretamente.

### **Passos**
1. **DADO** que usuário está na última etapa.  
2. **QUANDO** finaliza o cadastro.  
3. **ENTÃO** sistema registra data/hora do cadastro.  
4. **E** autentica automaticamente.  
5. **E** redireciona para Home autenticada.

---

# 🔹 Cenário 06: Restrições Gerais

## **Caso de Teste 17 – E-mail já cadastrado (Negativo)**  
**ID:** CAD_PAC_RESTR_017  
- Passo: inserir e-mail já existente → exibir erro claro e impedir continuação.

## **Caso de Teste 18 – Perfis diferentes usando o mesmo e-mail**  
**ID:** CAD_PAC_RESTR_018  
- Passo: tentar cadastrar Paciente com e-mail vinculado a Profissional → impedir e exibir mensagem.

## **Caso de Teste 19 – Falha de conexão durante o cadastro**  
**ID:** CAD_PAC_RESTR_019  
- Passo: simular falha de conexão → processo interrompido e usuário informado para tentar novamente.
