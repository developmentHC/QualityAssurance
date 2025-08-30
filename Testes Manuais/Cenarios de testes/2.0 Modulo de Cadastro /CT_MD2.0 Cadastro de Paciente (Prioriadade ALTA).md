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
