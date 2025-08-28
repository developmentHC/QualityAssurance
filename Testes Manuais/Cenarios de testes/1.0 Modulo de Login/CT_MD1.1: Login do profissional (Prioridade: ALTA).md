# 🧪 Plano de Testes Manuais - Login Social (Profissional)  
> Funcionalidade: Fluxo de Login Profissional  
> Sistema: ConectaBem  
> Autor: Miguel Luis  
> Data: 2025-08-26  

---

# 📊 Tabela Consolidada - Partição de Equivalência

| Tipo de Login       | Partição Válida                                    | Partição Inválida                                       |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Google**          | Conta Google existente + autorização concedida     | Conta inexistente / autorização negada                  |
| **Facebook**        | Conta Facebook existente + autorização concedida   | Conta inexistente / autorização negada                  |
| **Código (E-mail)** | E-mail cadastrado + código correto dentro de 5 min | E-mail inexistente / código incorreto / código expirado |
| **Dispositivo**     | Login com código válido em qualquer dispositivo    | Código inválido ou expirado em outro dispositivo        |

## Cenário 01: Login Social via Google

### Caso de Teste 01: Login com Google (Happy Path)

| ID                    | Descrição                                                     |
| :-------------------- | :------------------------------------------------------------ |
| AUTH_PRO_LOGIN_001    | Usuário profissional realiza login com Google com sucesso.    |

| **Pré-condições**                                |
| :----------------------------------------------- |
| Conta Google válida e vinculada ao ConectaBem.   |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário está na página inicial do ConectaBem                  |
| **QUANDO** ele clica em "Entrar com Google"                                  |
| **QUANDO** é redirecionado para a tela de login do Google                     |
| **QUANDO** insere credenciais válidas                                         |
| **ENTÃO** é redirecionado de volta para o ConectaBem autenticado e acessa o dashboard do profissional com sucesso           |

| **Critérios de aceitação**                                           |
| :------------------------------------------------------------------- |
| O sistema deve autenticar e direcionar o profissional para o painel. |

---

### Caso de Teste 02: Login com Google com conta inválida (Negativo)

| ID                    | Descrição                                                         |
| :-------------------- | :---------------------------------------------------------------- |
| AUTH_PRO_LOGIN_002    | Tentativa de login com Google usando conta inválida ou não vinculada. |

| **Pré-condições**                                        |
| :------------------------------------------------------- |
| Conta Google inválida ou não vinculada ao ConectaBem.    |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário está na tela de login                                |
| **QUANDO** clica em "Entrar com Google"                                     |
| **QUANDO** insere uma conta Google não vinculada                             |
| **ENTÃO** deve receber uma mensagem de erro informando falha de autenticação |

| **Critérios de aceitação**                                           |
| :------------------------------------------------------------------- |
| O sistema não deve permitir login e deve exibir mensagem de erro.    |

---

### Caso de Teste 03: Login com Google cancelado (Alternativo)

| ID                    | Descrição                                               |
| :-------------------- | :------------------------------------------------------ |
| AUTH_PRO_LOGIN_003    | Usuário cancela o login na tela do Google.              |

| **Pré-condições**                         |
| :---------------------------------------- |
| Usuário inicia o login via Google.        |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário clicou em "Entrar com Google"                        |
| **QUANDO** cancela o processo na tela de autenticação do Google             |
| **ENTÃO** deve ser redirecionado de volta para a tela de login do ConectaBem |

| **Critérios de aceitação**                                     |
| :------------------------------------------------------------- |
| O sistema deve retornar o usuário para a tela de login inicial |

---

## Cenário 02: Login Social via Facebook

### Caso de Teste 04: Login com Facebook (Happy Path)

| ID                    | Descrição                                                       |
| :-------------------- | :-------------------------------------------------------------- |
| AUTH_PRO_LOGIN_004    | Usuário profissional realiza login com Facebook com sucesso.    |

| **Pré-condições**                                  |
| :------------------------------------------------- |
| Conta Facebook válida e vinculada ao ConectaBem.   |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário está na página inicial do ConectaBem                  |
| **QUANDO** ele clica em "Entrar com Facebook"                                 |
| **QUANDO** é redirecionado para a tela de login do Facebook                    |
| **QUANDO** insere credenciais válidas                                         |
| **ENTÃO** é redirecionado de volta para o ConectaBem autenticado e acessa o dashboard do profissional com sucesso             |

| **Critérios de aceitação**                                           |
| :------------------------------------------------------------------- |
| O sistema deve autenticar e direcionar o profissional para o painel. |

---

### Caso de Teste 05: Login com Facebook com conta inválida (Negativo)

| ID                    | Descrição                                                           |
| :-------------------- | :------------------------------------------------------------------ |
| AUTH_PRO_LOGIN_005    | Tentativa de login com Facebook usando conta inválida ou não vinculada. |

| **Pré-condições**                                      |
| :----------------------------------------------------- |
| Conta Facebook inválida ou não vinculada ao ConectaBem. |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário está na tela de login                                  |
| **QUANDO** clica em "Entrar com Facebook"                                     |
| **QUANDO** insere uma conta Facebook não vinculada                             |
| **ENTÃO** deve receber uma mensagem de erro informando falha de autenticação   |

| **Critérios de aceitação**                                           |
| :------------------------------------------------------------------- |
| O sistema não deve permitir login e deve exibir mensagem de erro.    |

---

### Caso de Teste 06: Login com Facebook cancelado (Alternativo)

| ID                    | Descrição                                                |
| :-------------------- | :------------------------------------------------------- |
| AUTH_PRO_LOGIN_006    | Usuário cancela o login na tela do Facebook.             |

| **Pré-condições**                         |
| :---------------------------------------- |
| Usuário inicia o login via Facebook.      |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário clicou em "Entrar com Facebook"                       |
| **QUANDO** cancela o processo na tela de autenticação do Facebook            |
| **ENTÃO** deve ser redirecionado de volta para a tela de login do ConectaBem |

| **Critérios de aceitação**                                     |
| :------------------------------------------------------------- |
| O sistema deve retornar o usuário para a tela de login inicial |

---

## Cenário 03: Login via Código de Verificação

### Caso de Teste 07: Login via código de verificação válido (Happy Path)

| ID                    | Descrição                                                           |
| :-------------------- | :------------------------------------------------------------------ |
| AUTH_PRO_LOGIN_007    | Usuário realiza login com sucesso usando código enviado por e-mail. |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| E-mail do profissional cadastrado no ConectaBem.              |
| Código válido enviado e não expirado (até 5 minutos).         |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário insere o e-mail cadastrado                           |
| **QUANDO** recebe um código no e-mail e insere o código válido              |
| **ENTÃO** é redirecionado para o dashboard profissional                     |

| **Critérios de aceitação**                                                 |
| :-------------------------------------------------------------------------- |
| O sistema deve autenticar corretamente o usuário e redirecionar ao painel. |

---

### Caso de Teste 08: Código incorreto (Negativo)

| ID                    | Descrição                                          |
| :-------------------- | :------------------------------------------------- |
| AUTH_PRO_LOGIN_008    | Usuário insere código inválido e não consegue logar |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Código inválido informado pelo usuário.           |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário solicita o login via código                          |
| **QUANDO** insere um código incorreto                                       |
| **ENTÃO** o sistema deve exibir mensagem de erro e não autenticar           |

| **Critérios de aceitação**                                     |
| :------------------------------------------------------------- |
| O sistema não deve permitir o login e deve informar o erro.    |

---

### Caso de Teste 09: Código expirado (Alternativo)

| ID                    | Descrição                                                |
| :-------------------- | :------------------------------------------------------- |
| AUTH_PRO_LOGIN_009    | Usuário insere código expirado após 5 minutos.            |

| **Pré-condições**                                          |
| :--------------------------------------------------------- |
| Código gerado já ultrapassou o tempo de expiração (5 min). |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário recebeu um código de verificação                      |
| **QUANDO** tenta usá-lo após o tempo limite                                  |
| **ENTÃO** o sistema deve recusar o código e solicitar um novo                |

| **Critérios de aceitação**                                       |
| :--------------------------------------------------------------- |
| O sistema deve invalidar o código expirado e pedir novo envio.   |
