# Plano de Testes Manuais - Login
> Funcionalidade: Fluxo de Login Profissional  
> Sistema: ConectaBem  
> Autor: Miguel Luis e Mateus Santos  
> Data de Criação: 2025-08-27  
> Data de Atualização: 2025-11-30

---

# Tabela Consolidada – Partição de Equivalência

| Tipo de Login       | Partição Válida                                    | Partição Inválida                                       |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Google**          | Conta Google existente + autorização concedida     | Conta inexistente / autorização negada                  |
| **Facebook**        | Conta Facebook existente + autorização concedida   | Conta inexistente / autorização negada                  |
| **Código (E-mail)** | E-mail cadastrado + código correto dentro de 5 min | E-mail inexistente / código incorreto / código expirado |
| **Dispositivo**     | Login com código válido em qualquer dispositivo    | Código inválido ou expirado em outro dispositivo        |

---

# Cenário 01: Login Social via Google

---

## **Caso de Teste 01 – Login com Google (Happy Path)**  
**ID:** AUTH_PRO_LOGIN_001  
**Descrição:** Usuário profissional realiza login com Google com sucesso.

### **Pré-condições**
- Conta Google válida e vinculada ao ConectaBem.

### **Passos**
1. **DADO** que o usuário está na página inicial do ConectaBem  
2. **QUANDO** ele clica em **"Entrar com Google"**  
3. **QUANDO** é redirecionado para a tela de autenticação do Google  
4. **QUANDO** insere credenciais válidas  
5. **ENTÃO** é autenticado e redirecionado para o **dashboard do profissional**

### **Critérios de Aceitação**
- O sistema deve autenticar e direcionar o usuário ao painel profissional.

---

## **Caso de Teste 02 – Login Google com conta inválida (Negativo)**  
**ID:** AUTH_PRO_LOGIN_002  
**Descrição:** Conta inválida ou não vinculada.

### **Pré-condições**
- Conta Google não vinculada ou inexistente.

### **Passos**
1. **DADO** que o usuário está na tela de login  
2. **QUANDO** clica em **"Entrar com Google"**  
3. **QUANDO** insere uma conta inválida / não vinculada  
4. **ENTÃO** o sistema exibe mensagem de falha de autenticação

### **Critérios de Aceitação**
- Login não deve ocorrer e deve apresentar mensagem de erro.

---

## **Caso de Teste 03 – Login Google cancelado (Alternativo)**  
**ID:** AUTH_PRO_LOGIN_003  
**Descrição:** Usuário cancela o login no Google.

### **Pré-condições**
- Usuário iniciou o fluxo de login Google.

### **Passos**
1. **DADO** que o usuário clicou em **"Entrar com Google"**  
2. **QUANDO** cancela a autenticação no Google  
3. **ENTÃO** deve retornar para a tela de login do ConectaBem

### **Critérios de Aceitação**
- O sistema deve retornar o usuário à tela inicial de login.

---

# Cenário 02: Login Social via Facebook  
*(Invalidados – mas documentados)*

---

## **Caso de Teste 04 – Login com Facebook (Happy Path)**  
**ID:** AUTH_PRO_LOGIN_004  
*(Inativado / não utilizado atualmente)*

---

## **Caso de Teste 05 – Login Facebook com conta inválida**  
**ID:** AUTH_PRO_LOGIN_005  
*(Inativado / não utilizado atualmente)*

---

## **Caso de Teste 06 – Login Facebook cancelado**  
**ID:** AUTH_PRO_LOGIN_006  
*(Inativado / não utilizado atualmente)*

---

# Cenário 03: Login via Código de Verificação

---

## **Caso de Teste 07 – Código válido (Happy Path)**  
**ID:** AUTH_PRO_LOGIN_007  
**Descrição:** login bem-sucedido usando código enviado por e-mail.

### **Pré-condições**
- E-mail cadastrado.
- Código válido dentro de 5 minutos.

### **Passos**
1. **DADO** que o usuário insere e-mail cadastrado  
2. **QUANDO** recebe o código e insere um código válido  
3. **ENTÃO** o sistema autentica e redireciona ao dashboard profissional

### **Critérios de Aceitação**
- Login deve ser concluído com sucesso.

---

## **Caso de Teste 08 – Código incorreto (Negativo)**  
**ID:** AUTH_PRO_LOGIN_008  

### **Pré-condições**
- Código inválido informado.

### **Passos**
1. **DADO** que solicitou login via código  
2. **QUANDO** insere código incorreto  
3. **ENTÃO** o sistema exibe mensagem de erro

### **Critérios de Aceitação**
- O sistema não deve autenticar.

---

## **Caso de Teste 09 – Código expirado (Alternativo)**  
**ID:** AUTH_PRO_LOGIN_009  

### **Pré-condições**
- Código expirado (> 5 min).

### **Passos**
1. **DADO** que recebeu um código  
2. **QUANDO** tenta usá-lo após expirar  
3. **ENTÃO** o sistema recusa e solicita novo envio

---

# Cenário 04: Código – Casos Extras

---

## **Caso de Teste 10 – Reenvio de código**  
**ID:** AUTH_PRO_LOGIN_011  

### **Pré-condições**
- Usuário já possui código ativo.

### **Passos**
1. **DADO** que solicita reenvio  
2. **QUANDO** novo código é gerado  
3. **ENTÃO** o anterior deve ser invalidado

---

## **Caso de Teste 11 – Uso de código anterior**  
**ID:** AUTH_PRO_LOGIN_012  

### **Pré-condições**
- Novo código já foi solicitado.

### **Passos**
1. **DADO** que usuário insere código antigo  
2. **QUANDO** tenta validar  
3. **ENTÃO** o sistema rejeita

---

## **Caso de Teste 12 – Múltiplas tentativas incorretas**  
**ID:** AUTH_PRO_LOGIN_013  

### **Pré-condições**
- Usuário tentou várias vezes com códigos invalidos.

### **Passos**
1. **DADO** tentativas repetidas  
2. **QUANDO** excede limite  
3. **ENTÃO** sistema bloqueia temporariamente

---

# Cenário 05: Dispositivos

---

## **Caso de Teste 13 – Login simultâneo em dispositivos diferentes**  
**ID:** AUTH_PRO_LOGIN_014  

### **Pré-condições**
- Conta logada em outro dispositivo.

### **Passos**
1. **DADO** que já existe uma sessão ativa  
2. **QUANDO** tenta logar em novo dispositivo  
3. **ENTÃO** o sistema aplica política definida (permitir ou invalidar sessão anterior)

### **Critérios de Aceitação**
- Deve seguir a política de múltiplas sessões configurada no sistema.

