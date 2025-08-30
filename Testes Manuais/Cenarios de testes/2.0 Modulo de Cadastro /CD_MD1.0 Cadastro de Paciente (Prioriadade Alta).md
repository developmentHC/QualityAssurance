# CT_MD1.0: Cadastro de Paciente (Prioridade: ALTA).

# 🧪 Plano de Testes Manuais - ConectaBem
> Funcionalidade: Cadastro de Usuário (Paciente)

> Sistema: [ConectaBem](https://conecta-bem-front.vercel.app/)

> Autor: Victor Nadoti

> Data: 2025-08-28

---

# 📊 Tabela Consolidada - Partição de Equivalência(usar esta tabela para os testes)

| Tipo de Cadastro    | Partição Válida                                    | Partição Inválida                                       |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Google**          | Conta Google existente + autorização concedida     | Conta inexistente / autorização negada                  |
| **Facebook**        | Conta Facebook existente + autorização concedida   | Conta inexistente / autorização negada                  |
| **Código (E-mail)** | E-mail cadastrado + código correto dentro de 5 min | E-mail inexistente / código incorreto / código expirado |
| **Dispositivo**     | Login com código válido em qualquer dispositivo    | Código inválido ou expirado em outro dispositivo        |

--- 

# Cenário 01: Cadastro com Sucesso

## Caso 1: Cadastro de Paciente com sucesso (Google)

| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS\_SOCIAL\_001 | O cadastro será realizado como Paciente com Google.. |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Usuário com conta Google válida vinculada ao ConectaBem. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está na Home do ConectaBem           |
| **QUANDO** clica em "Entrar" e seleciona "Login com Google" |
| **E** autoriza o acesso com credenciais válidas             |
| **E** escolhe o perfil “paciente” |
| **E** preenche os dados obrigatórios, preferências e Atendimento | 
| **ENTÃO** o cadastro é concluido e o usuário é redirecionado para a Home |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| O Sistema deve cadastrar o paciente e exibir a Home autenticada |

___ 


## Caso 2: Cadastro de Paciente com sucesso (Facebook)
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS\_SOCIAL\_002 | O cadastro será realizado como Paciente com Facebook.. |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Usuário com conta Facebook válida vinculada ao ConectaBem. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está na Home do ConectaBem           |
| **QUANDO** clica em "Entrar" e seleciona "Login com Facebook" |
| **E** autoriza o acesso com credenciais válidas             |
| **E** escolhe o perfil “paciente” |
| **E** preenche os dados obrigatórios, preferências e Atendimento  | 
| **ENTÃO** o cadastro é concluido e o usuário é redirecionado para a Home |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| O Sistema deve cadastrar o paciente e exibir a Home autenticada |

___ 

## Caso 3: Cadastro de Paciente com sucesso (E-mail)
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS\_EMAIL\_003 | O cadastro será realizado como Paciente via e-mail. |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Usuário com e-mail válido |
| Não exista cadastro anterior com este e-mail |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está na Home do ConectaBem |
| **E** clica em “Entrar”          |
| **QUANDO** digita o E-mail no Input |
| **E** clica em “Continuar”          |
| **E** digite o código de validação enviado para o E-mail | 
| **E** escolhe o perfil “Paciente” |
| **E** preenche os dados obrigatórios, preferências e Atendimento  | 
| **ENTÃO** o cadastro é concluido e o usuário é redirecionado para a Home |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| O sistema deve cadastrar o Paciente e exibir a Home autenticada |

___ 
 

# Cenário 02 – Cadastro Inválido (Testes Negativos)

## Caso 1 - Cadastro com E-mail em formato inválido
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_001 | Tentar cadastrar com E-mail em formato inválido |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Usuário insere um e-mail em formato inválido (ex: “teste@teste”). |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está na Home do ConectaBem |
| **E** clica em “Entrar”          |
| **QUANDO** digita um E-mail inválido |
| **ENTÃO** o sistema não deve permitir que continue o cadastro até que um e-mail válido seja digitado |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Usuário não pode prosseguir sem corrigir o e-mail. |

___ 

## Caso 2 - Cadastro com dados obrigatórios não preenchidos
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_002| Campos obrigatórios não preenchidos. |

| **Pré-condições**                                 |
| :------------------------------------------------ |
|  Usuário com e-mail válido |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário acessa a tela de cadastro |
| **QUANDO** não preenche um ou mais campos obrigatórios (ex: e-mail, senha, nome) |
| **E** tenta confirmar o cadastro | 
| **ENTÃO** o sistema deve bloquear a ação e destacar os campos obrigatórios faltantes |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Sistema não deve permitir clicar no “Continuar” |
| Label dos campos devem ficar com a borda vermelha | 
| Mensagem de Erro clara exibida ao usuário para cada campo obrigatório não preenchido |

___ 

## Caso 3 - Inserção de caracteres especiais no nome

| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_003 | Inserção de caracteres especiais em campos |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Usuário tenta inserir caracteres como `@#$%¨&*` em campos de nome |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário acessa a tela de cadastro (Paciente ou Médico)|
| **QUANDO** insere caracteres especiais em campos de texto|
| **ENTÃO** o sistema não deve validar e impedir caracteres especiais|

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Usuário não pode prosseguir sem corrigir o campo de Nome. |
| Label do campo deve ficar com a borda vermelha | 
| Mensagem de Erro clara exibida ao usuário abaixo do campo inválido |

___ 

## Caso 4 - Limites de Caracteres no campo Nome
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_004 | Usuário tenta inserir 256 caracteres no campo nome. |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Nome é obrigatório no cadastro. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está preenchendo o campo Nome |
| **QUANDO** insere valores acima do limite definido |
| **ENTÃO** o sistema deve exibir mensagem “CEP é obrigatório” |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Usuário não pode prosseguir sem corrigir o Nome. |
| Label do campo deve ficar com a borda vermelha | 
| Mensagem de Erro clara exibida ao usuário abaixo do campo inválido |

___ 

## Caso 5 - Cadastro com CEP em formato inválido
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_005 | Tentar cadastrar com CEP em formato inválido |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Endereço/CEP é obrigatório no cadastro. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está preenchendo seus dados | 
| **QUANDO** digita CEP em formato inválido (ex: “123”, “abcd”) |
| **E** clica em “Continuar”
| **ENTÃO** o sistema não deve permitir que continue o cadastro até que um CEP válido seja digitado |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Usuário não pode prosseguir sem corrigir o CEP. |
| Label do campo deve ficar com a borda vermelha | 
| Mensagem de Erro clara exibida ao usuário abaixo do campo inválido |

___ 

## Caso 6 - Cadastro com CEP em branco
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_006 | Campo CEP não preenchido  |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Endereço/CEP é obrigatório no cadastro. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está preenchendo o endereço |
| **QUANDO** deixa o campo do CEP vazio |
| **E** clica em “Continuar”   |
| **ENTÃO** o sistema deve exibir mensagem “CEP é obrigatório” |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Usuário não pode prosseguir sem corrigir o CEP. |
| Label do campo deve ficar com a borda vermelha | 
| Mensagem de Erro clara exibida ao usuário abaixo do campo inválido |

___ 

## Caso 7 - Cadastro com Data de Nascimento Inválida
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_007 | Data de nascimento inválida  (data futura ou idade mínima não atendida).  |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Data de Nascimento é obrigatório no cadastro. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está preenchendo data de nascimento|
| **QUANDO** informa uma data no futuro **OU** que viola a idade mínima |
| **E** clica em “Continuar”   |
| **ENTÃO** o sistema deve exibir mensagem de data inválida |

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Usuário não pode prosseguir sem informar data válida. |
| Label do campo deve ficar com a borda vermelha | 
| Mensagem de Erro clara exibida ao usuário abaixo do campo inválido |

___ 

## Caso 8 - Termos de Uso/Política de Privacidade não aceitos
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_NEG_008 | **Termos de Uso/Política de Privacidade não aceitos**.  |

| **Pré-condições**                                 |
| :------------------------------------------------ |
| Página final do cadastro exige aceite dos termos.. |

| **Passos**                                                  |
| :---------------------------------------------------------- |
| **DADO** que o usuário está concluindo o cadastro |
| **QUANDO** não marca “Li e aceito os Termos de Uso e Política de Privacidade” |
| **E** clica em “Começar”   |
| **ENTÃO** o sistema deve impedir a conclusão e exibir orientação para aceitar os termos|

| **Critérios de aceitação**                                                 |
| :------------------------------------------------------------------------- |
| Cadastro só pode ser finalizado com o aceite explícito. |

