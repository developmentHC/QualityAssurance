# CT_MD1.0: Cadastro de Paciente (Prioridade: ALTA).

# 🧪 Plano de Testes Manuais - ConectaBem
> Funcionalidade: Cadastro de Usuário (Paciente) [Testes relacionados a autenticação com facebook estão invalidados]

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
| CADS_SOCIAL_001   | O cadastro será realizado como Paciente com Google. |

| **Pré-condições**                                   |
| :-------------------------------------------------- |
| Usuário com conta Google válida. |
| Permissão de compartilhamento de dados autorizada. |
| Não existir cadastro prévio vinculado ao mesmo e-mail Google. |
| API ViaCEP funcionando para validação de endereço. |

| **Passos** |
| :--------- |
| **DADO** que o usuário está na Home do ConectaBem |
| **QUANDO** acessa “Entrar” e seleciona a opção **Login com Google** |
| **E** concede permissão à conta Google |
| **ENTÃO** o sistema redireciona para a seleção de perfil |
| **QUANDO** o usuário seleciona o perfil **Paciente** |
| **ENTÃO** o sistema exibe o formulário de cadastro (Etapa 1/4) |
| **QUANDO** o usuário preenche todos os campos obrigatórios corretamente, incluindo: |
| — Nome (mín. 3 caracteres) |
| — Data de nascimento (idade entre 18 e 110 anos) |
| — CEP válido no formato 00000-000 |
| — Logradouro, Número, Bairro, Cidade e Estado válidos |
| **E** o CEP digitado é validado com sucesso e os campos são preenchidos automaticamente quando possível |
| **E** o botão “Continuar” é habilitado após todos os campos válidos |
| **QUANDO** o usuário clica em “Continuar” |
| **ENTÃO** o sistema valida os dados, salva o progresso do cadastro e avança para a Etapa 2/4 |
| **E** após completar todas as etapas até a 4/4, o sistema conclui o cadastro e autentica o usuário |
| **ENTÃO** o usuário é redirecionado à Home autenticada |

| **Critérios de aceitação** |
| :-------------------------- |
| O Sistema deve validar todos os campos obrigatórios conforme regras definidas. |
| Em caso de erro (ex.: CEP inválido), deve exibir mensagem e impedir continuação. |
| O botão “Continuar” só habilita com todos os campos válidos. |
| O cadastro deve ser concluído e a Home autenticada exibida. |

---

## Caso 2: Cadastro de Paciente com sucesso (Facebook)
| ID                | Descrição                                           |
| :---------------- | :-------------------------------------------------- |
| CADS_SOCIAL_002   | O cadastro será realizado como Paciente com Facebook. |

| **Pré-condições**                                   |
| :-------------------------------------------------- |
| Usuário com conta Facebook válida. |
| Permissão de compartilhamento de dados autorizada. |
| (Obs.: autenticação via Facebook está inválida para teste, mas mantida para documentação.) |
| API ViaCEP funcionando. |

| **Passos** |
| :--------- |
| **DADO** que o usuário está na Home do ConectaBem |
| **QUANDO** acessa “Entrar” e seleciona **Login com Facebook** |
| **E** autoriza o acesso aos dados |
| **ENTÃO** o sistema exibe a tela de seleção de perfil |
| **QUANDO** o usuário seleciona **Paciente** |
| **ENTÃO** o sistema abre o formulário de cadastro (Etapa 1/4) |
| **QUANDO** o usuário preenche corretamente Nome, Data de Nascimento, CEP e endereço |
| **E** o CEP é reconhecido e os campos são preenchidos automaticamente quando possível |
| **E** o botão “Continuar” é habilitado apenas após campos válidos |
| **QUANDO** o usuário clica em “Continuar” |
| **ENTÃO** o sistema valida, salva o progresso e avança para a Etapa 2/4 |
| **E** após finalizar a Etapa 4/4, o sistema autentica o usuário |
| **ENTÃO** o usuário é redirecionado para a Home autenticada |

| **Critérios de aceitação** |
| :-------------------------- |
| Campos obrigatórios devem seguir validações de nome, idade e endereço. |
| Sistema deve impedir continuação em caso de erro. |
| Cadastro deve ser concluído exibindo a Home autenticada. |

---

## Caso 3: Cadastro de Paciente com sucesso (E-mail)
| ID              | Descrição                                          |
| :-------------- | :------------------------------------------------- |
| CADS_EMAIL_003  | O cadastro será realizado como Paciente via e-mail.|

| **Pré-condições** |
| :---------------- |
| E-mail válido informado. |
| Usuário não possui cadastro prévio com o mesmo e-mail. |
| Capacidade de envio de código (OTP) funcionando. |
| Limite de tentativas e regras de expiração configuradas. |
| API ViaCEP ativa. |

| **Passos** |
| :--------- |
| **DADO** que o usuário está na Home do ConectaBem |
| **QUANDO** acessa “Entrar” e informa um e-mail válido |
| **ENTÃO** o sistema envia um código de verificação |
| **QUANDO** o usuário insere o código dentro do prazo (≤5 min) |
| **E** o código é validado com sucesso, desabilitando botão e link durante a validação |
| **ENTÃO** o sistema exibe a seleção de perfil |
| **QUANDO** o usuário escolhe **Paciente** |
| **ENTÃO** o sistema exibe o formulário de cadastro (Etapa 1/4) |
| **QUANDO** o usuário preenche corretamente os seguintes campos: |
| — Nome (≥3 caracteres) |
| — Data de nascimento válida (≥18 anos) |
| — CEP válido |
| — Logradouro, Número, Bairro, Cidade, Estado |
| **E** o CEP é validado via ViaCEP e retorna endereço correto |
| **E** o botão “Continuar” habilita após todos os dados válidos |
| **QUANDO** o usuário avança para a Etapa 2/4 |
| **E** preenche preferências e necessidades de atendimento |
| **E** finaliza todas as etapas até a 4/4 |
| **ENTÃO** o sistema conclui o cadastro e autentica o usuário |

| **Critérios de aceitação** |
| :-------------------------- |
| O sistema deve validar o formato do e-mail antes do envio. |
| O código deve respeitar tempo de expiração e tentativas. |
| O formulário deve validar todos os campos conforme regras. |
| O cadastro deve ser gerado com sucesso e a Home autenticada exibida. |
| O sistema deve cadastrar o Paciente e exibir a Home autenticada |
