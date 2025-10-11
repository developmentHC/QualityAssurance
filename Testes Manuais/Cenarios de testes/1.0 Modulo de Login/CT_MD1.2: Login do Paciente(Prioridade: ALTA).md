# 🧪 Plano de Testes Manuais - ConectaBem
> Funcionalidade: Autenticação de Usuário (Paciente) [Testes relacionados a autenticação com facebook estão invalidados]
> Sistema: [ConectaBem](https://conecta-bem-front.vercel.app/)
> Autor: Miguel Luis e Mateus Santos
> Data de Criação: 2025-08-27
> Data de Atualização: 2025-09-30
> 
---

# 📊 Tabela Consolidada - Partição de Equivalência(usar esta tabela para os testes)

| Tipo de Login       | Partição Válida                                    | Partição Inválida                                       |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Google**          | Conta Google existente + autorização concedida     | Conta inexistente / autorização negada                  |
| **Facebook**        | Conta Facebook existente + autorização concedida   | Conta inexistente / autorização negada                  |
| **Código (E-mail)** | E-mail cadastrado + código correto dentro de 5 min | E-mail inexistente / código incorreto / código expirado |
| **Dispositivo**     | Login com código válido em qualquer dispositivo    | Código inválido ou expirado em outro dispositivo        |


## Cenário 01: Login via Google com sucesso

### Caso de Teste 01: Login com conta Google válida (Happy Path)

| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| AUTH\_SOCIAL\_001 | O login será realizado com uma conta Google válida. |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Usuário com conta Google vinculada ao ConectaBem. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está na Home do ConectaBem           |
| **QUANDO** clica em "Entrar" e seleciona "Login com Google" |
| **E** autoriza o acesso com credenciais válidas             |
| **ENTÃO** é redirecionado para a Home autenticado  e visualiza seu perfil logado         |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| O sistema deve autenticar e exibir o perfil logado do paciente com sucesso |

---

## Cenário 02: Login via Facebook com sucesso

### Caso de Teste 02: Login com conta Facebook válida (Happy Path)

| ID                | Descrição                                             |
| :---------------- | :---------------------------------------------------- |
| AUTH\_SOCIAL\_002 | O login será realizado com uma conta Facebook válida. |

| **Pré-condições**                                   |
| :-------------------------------------------------- |
| Usuário com conta Facebook vinculada ao ConectaBem. |

| **Passos**                                                    |
| :------------------------------------------------------------ |
| **DADO** que o usuário está na Home do ConectaBem             |
| **QUANDO** clica em "Entrar" e seleciona "Login com Facebook" |
| **E** autoriza o acesso com credenciais válidas               |
| **ENTÃO** é redirecionado para a Home autenticado e visualiza seu perfil logado            |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| O sistema deve autenticar e exibir o perfil logado do paciente com sucesso |

---

## Cenário 03: Login via Código de Verificação com sucesso

### Caso de Teste 03: Login com código de verificação válido (Happy Path)

| ID              | Descrição                                                                  |
| :-------------- | :------------------------------------------------------------------------- |
| AUTH\_CODE\_001 | O login será realizado com código de verificação válido e dentro do prazo. |

| **Pré-condições**                                     |
| :---------------------------------------------------- |
| Usuário com e-mail previamente cadastrado no sistema. |

| **Passos**                                                                         |
| :--------------------------------------------------------------------------------- |
| *DADO** que o usuário está na Home do ConectaBem e clica em "Entrar"   |
| **QUANDO** insere seu e-mail cadastrado                                            |
| **E** recebe um código no e-mail                                                   |
| **E** digita o código válido dentro de 5 minutos                                   |
| **ENTÃO** o sistema deve redirecionar o usuário autenticado para a Home            |

| **Critérios de aceitação**                                                                 |
| :----------------------------------------------------------------------------------------- |
| O sistema deve autenticar o usuário e permitir acesso à Home dentro do prazo de expiração. |

---

## ❌ Cenários Negativos

### Caso de Teste 04: Login via Google negado

| ID                | Descrição                                            |
| :---------------- | :--------------------------------------------------- |
| AUTH\_SOCIAL\_003 | Tentativa de login via Google com autorização negada |

| **Pré-condições**                           |
| :------------------------------------------ |
| Usuário acessa a opção de login via Google. |

| **Passos**                                            |
| :---------------------------------------------------- |
| **DADO** que o usuário seleciona "Login com Google"   |
| **QUANDO** nega a autorização                         |
| **ENTÃO** o sistema mantém o usuário na tela de login e  exibe mensagem de "Autenticação negada"  |

| **Critérios de aceitação**                                |
| :-------------------------------------------------------- |
| O sistema não deve autenticar sem autorização do usuário. |

---

### Caso de Teste 05: Login via Facebook negado

| ID                | Descrição                                              |
| :---------------- | :----------------------------------------------------- |
| AUTH\_SOCIAL\_004 | Tentativa de login via Facebook com autorização negada |

| **Pré-condições**                             |
| :-------------------------------------------- |
| Usuário acessa a opção de login via Facebook. |

| **Passos**                                            |
| :---------------------------------------------------- |
| **DADO** que o usuário seleciona "Login com Facebook" |
| **QUANDO** nega a autorização                         |
| **ENTÃO** o sistema mantém o usuário na tela de login e  exibe mensagem de "Autenticação negada"  |

| **Critérios de aceitação**                                |
| :-------------------------------------------------------- |
| O sistema não deve autenticar sem autorização do usuário. |

---

### Caso de Teste 06: Código de Verificação Inválido

| ID              | Descrição                              |
| :-------------- | :------------------------------------- |
| AUTH\_CODE\_002 | Tentativa de login via código inválido |

| **Pré-condições**                                |
| :----------------------------------------------- |
| Usuário com e-mail válido cadastrado no sistema. |

| **Passos**                                                      |
| :-------------------------------------------------------------- |
| **DADO** que o usuário solicita login via código de verificação |
| **QUANDO** insere um código incorreto                           |
| **ENTÃO** o sistema exibe mensagem de "Código inválido" e    mantém o usuário na tela de login       |

| **Critérios de aceitação**                                            |
| :-------------------------------------------------------------------- |
| O sistema deve rejeitar o código inválido e não autenticar o usuário. |

---

### Caso de Teste 07: Código de Verificação Expirado

| ID              | Descrição                              |
| :-------------- | :------------------------------------- |
| AUTH\_CODE\_003 | Tentativa de login via código expirado |

| **Pré-condições**                                |
| :----------------------------------------------- |
| Usuário com e-mail válido cadastrado no sistema. |

| **Passos**                                                      |
| :-------------------------------------------------------------- |
| **DADO** que o usuário solicita login via código de verificação |
| **QUANDO** insere o código após o prazo de 5 minutos            |
| **ENTÃO** o sistema exibe mensagem de "Código expirado"  e  mantém o usuário na tela de login       |

| **Critérios de aceitação**                         |
| :------------------------------------------------- |
| O sistema deve impedir login com códigos vencidos. |

---

## 🔄 Cenários Alternativos

### Caso de Teste 08: Login via Google com outra conta

| ID                | Descrição                                                      |
| :---------------- | :------------------------------------------------------------- |
| AUTH\_SOCIAL\_005 | Login via Google com uma conta diferente da usada no cadastro. |

| **Pré-condições**                       |
| :-------------------------------------- |
| Usuário possui múltiplas contas Google. |

| **Passos**                                            |
| :---------------------------------------------------- |
| **DADO** que o usuário acessa "Login com Google"      |
| **QUANDO** seleciona uma conta diferente da vinculada |
| **ENTÃO** o sistema autentica com a conta nova e  exibe perfil correspondente       |

| **Critérios de aceitação**                                                    |
| :---------------------------------------------------------------------------- |
| O sistema deve permitir login com qualquer conta Google válida, vinculando-a. |

---

### Caso de Teste 09: Login via Código em Dispositivo Diferente

| ID              | Descrição                                                    |
| :-------------- | :----------------------------------------------------------- |
| AUTH\_CODE\_004 | Login com código de verificação válido em dispositivo extra. |

| **Pré-condições**                          |
| :----------------------------------------- |
| Usuário solicita código em um dispositivo. |

| **Passos**                                                    |
| :------------------------------------------------------------ |
| **DADO** que o usuário acessa login por código em seu celular |
| **QUANDO** insere o código recebido por e-mail                |
| **ENTÃO** é autenticado no dispositivo atual com sucesso      |

| **Critérios de aceitação**                                             |
| :--------------------------------------------------------------------- |
| O sistema deve permitir login válido mesmo em dispositivos diferentes. |

---

### Caso de Teste 10: Login via Código com E-mail não Cadastrado

| ID              | Descrição                                                |
| :-------------- | :------------------------------------------------------- |
| AUTH\_CODE\_005 | Tentativa de login via código com e-mail não registrado. |

| **Pré-condições**                               |
| :---------------------------------------------- |
| Usuário insere e-mail não existente no sistema. |

| **Passos**                                                 |
| :--------------------------------------------------------- |
| **DADO** que o usuário seleciona login via código          |
| **QUANDO** insere um e-mail não cadastrado                 |
| **ENTÃO** o sistema exibe mensagem "E-mail não cadastrado" e  não envia nenhum código |

## 🔐 Cenários de Segurança e Autorização

### Caso de Teste 11: Token inválido ou expirado

| ID                 | Descrição                                           |
| :----------------- | :-------------------------------------------------- |
| AUTH_SEC_001       | Usuário tenta logar com token inválido ou expirado. |

| **Pré-condições**                                  |
| :------------------------------------------------- |
| Token retornado pelo provedor está inválido/expirado. |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário inicia login social                                  |
| **QUANDO** o provedor retorna um token inválido/expirado                    |
| **ENTÃO** o sistema rejeita o login e exibe mensagem de erro                |

| **Critérios de aceitação**                                   |
| :----------------------------------------------------------- |
| O sistema não deve autenticar e deve orientar novo login.    |

---

## 📧 Cenários de Código de Verificação (Extras)

### Caso de Teste 12: Reenvio de código antes do expirar

| ID                 | Descrição                                             |
| :----------------- | :---------------------------------------------------- |
| AUTH_CODE_006      | Usuário solicita novo código antes do expirar o atual.|

| **Pré-condições**                               |
| :---------------------------------------------- |
| Usuário já possui um código válido em andamento.|

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário solicita reenvio de código                           |
| **QUANDO** o sistema gera um novo código                                    |
| **ENTÃO** o anterior deve ser invalidado                                    |

| **Critérios de aceitação**                                       |
| :--------------------------------------------------------------- |
| Apenas o último código enviado deve ser válido para login.       |

---

### Caso de Teste 13: Uso de código anterior

| ID                 | Descrição                                      |
| :----------------- | :--------------------------------------------- |
| AUTH_CODE_007      | Usuário tenta validar um código antigo inválido.|

| **Pré-condições**                               |
| :---------------------------------------------- |
| Um novo código já foi solicitado pelo usuário.  |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário insere um código anterior                           |
| **QUANDO** tenta validar                                                    |
| **ENTÃO** o sistema deve recusar e exibir erro                              |

| **Critérios de aceitação**                                  |
| :---------------------------------------------------------- |
| Sistema deve aceitar apenas o código mais recente.          |

---

### Caso de Teste 14: Múltiplas tentativas incorretas

| ID                 | Descrição                                              |
| :----------------- | :----------------------------------------------------- |
| AUTH_CODE_008      | Usuário excede limite de tentativas incorretas de código.|

| **Pré-condições**                                  |
| :------------------------------------------------- |
| Usuário insere códigos inválidos repetidamente.    |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário tenta login com código                               |
| **QUANDO** insere códigos incorretos mais de X vezes                        |
| **ENTÃO** o sistema bloqueia temporariamente o login                        |

| **Critérios de aceitação**                                  |
| :---------------------------------------------------------- |
| Sistema deve aplicar bloqueio temporário por segurança.     |

---

## 📱 Cenários de Dispositivos

### Caso de Teste 15: Login simultâneo em dispositivos diferentes

| ID                 | Descrição                                               |
| :----------------- | :------------------------------------------------------ |
| AUTH_DEV_001       | Usuário loga em dois dispositivos ao mesmo tempo.       |

| **Pré-condições**                              |
| :--------------------------------------------- |
| Conta já autenticada em outro dispositivo.     |

| **Passos**                                                                 |
| :--------------------------------------------------------------------------- |
| **DADO** que o usuário já está logado em um dispositivo                      |
| **QUANDO** realiza login em outro                                             |
| **ENTÃO** o sistema deve decidir se mantém múltiplas sessões ou invalida a anterior |

| **Critérios de aceitação**                                         |
| :----------------------------------------------------------------- |
| Sistema deve seguir a política definida (permitir ou invalidar).   |
