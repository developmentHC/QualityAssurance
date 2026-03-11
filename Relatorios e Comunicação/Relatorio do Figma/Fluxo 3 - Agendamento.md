# Fluxo 3 - Agendamento

## Tela Perfil Profissional - Desktop

> **"Como será esta parte? para o usuario ver os metodos de pagamento. Referência: fazer tipo o iFood."**

Observação do QA: é necessário definir como os **métodos de pagamento aceitos pelo profissional** serão apresentados ao paciente nesta tela.

A referência mencionada sugere um comportamento semelhante ao utilizado em aplicativos como o iFood, onde os métodos de pagamento ficam visíveis no perfil do estabelecimento ou serviço.

Verificar com o time de produto e design:

- quais **formas de pagamento serão exibidas** (ex: cartão de crédito, débito, PIX, dinheiro, convênios, etc.);
- se essas informações serão **apenas informativas** ou se farão parte do fluxo de pagamento dentro da plataforma;
- se será necessário apresentar **ícones ou indicadores visuais** para facilitar a identificação rápida dos métodos disponíveis.

Essa definição é importante para **aumentar a transparência para o paciente antes da confirmação do agendamento**.

<img width="637" height="557" alt="image" src="https://github.com/user-attachments/assets/ca4546be-5e44-4778-998d-ec88c8edc550" />

> **"Como será esta tela se o profissional pular a etapa de acessibilidade no cadastro?"**

Dúvida do QA: é necessário definir qual será o comportamento da interface caso o profissional **não preencha ou pule a etapa de informações de acessibilidade durante o cadastro**.

Verificar com o time de produto e desenvolvimento se o sistema deverá:

- **ocultar completamente essa seção** quando não houver informações cadastradas;
- exibir uma **mensagem padrão**, como por exemplo:  
  *“Informações de acessibilidade não informadas pelo profissional.”*
- permitir que o profissional **adicione essas informações posteriormente na edição de perfil**.

Essa definição ajuda a evitar **áreas vazias ou inconsistentes na interface do perfil profissional**.

<img width="743" height="272" alt="image" src="https://github.com/user-attachments/assets/e2025183-8a6a-4743-9cd0-6284ee6cf802" />

> **"Os dados que o paciente selecionou ficariam salvos após ele fazer login - neste casos seria na visão do usuario deslogado"**

Observação do QA: verificar o comportamento do sistema quando um paciente **seleciona informações de agendamento antes de realizar login**.

É necessário definir se os dados selecionados anteriormente serão **preservados após a autenticação do usuário**.

Validar com o time de produto e desenvolvimento se o fluxo deverá:

- **manter as informações previamente selecionadas** (data, horário, tipo de consulta, etc.) após o login;
- **retomar o usuário diretamente no ponto do fluxo onde ele estava**;
- ou reiniciar o fluxo caso não seja possível manter o estado da sessão.

Preservar essas informações pode ajudar a **reduzir fricção no processo de agendamento e melhorar a experiência do usuário**.

<img width="735" height="570" alt="image" src="https://github.com/user-attachments/assets/56f9d202-1a78-4025-af47-45111117f4c5" />

> **"Se estiver vazio como fica essa parte?"**

Observação do QA: verificar qual será o comportamento da interface quando **não houver informações ou conteúdos disponíveis para esta seção do perfil profissional**.

É importante evitar que a interface apresente **espaços vazios ou componentes sem conteúdo**.

Validar com o time de design e produto se o sistema deverá:

- **ocultar completamente a seção** quando não houver dados;
- exibir um **estado vazio (empty state)** com mensagem informativa;
- ou apresentar uma **mensagem padrão**, como por exemplo:  
  *“Nenhuma informação disponível no momento.”*

Essa definição ajuda a manter **consistência visual e clareza para o usuário durante a navegação no perfil profissional**.

<img width="697" height="633" alt="image" src="https://github.com/user-attachments/assets/d2945ddf-51fa-484c-b473-205c0675326e" />

---

## Tela Agendamento - Desktop

> **"Sugestão: colocar a seleção de data e hora em um só componente"**

Observação do QA: avaliar a possibilidade de **unificar a seleção de data e horário em um único componente de interface**.

Atualmente, a separação desses elementos pode gerar **mais passos no fluxo de agendamento**, o que pode aumentar o tempo de interação do usuário.

Verificar com o time de produto e design:

- se a seleção de **data e horário pode ser feita dentro do mesmo componente**, como em calendários que exibem horários disponíveis ao selecionar o dia;
- se essa mudança **simplificaria o fluxo de agendamento** e reduziria a quantidade de cliques;
- se existe alguma **restrição técnica ou de design system** que impeça essa unificação.

Essa melhoria pode ajudar a **tornar o processo de agendamento mais rápido e intuitivo para o usuário**.

<img width="781" height="522" alt="image" src="https://github.com/user-attachments/assets/88a30a66-c8c8-4218-a924-fe946b7758dd" />

---

## Tela Confirmação de Agendamento - Desktop

> **"Qual o objetivo do ID ?"**

Dúvida do QA: é necessário esclarecer qual será a **função do ID exibido na confirmação do agendamento**.

Atualmente não está claro se esse identificador terá apenas função técnica ou se será utilizado também pelo usuário durante a experiência.

Validar com o time de produto e desenvolvimento se o ID deverá:

- funcionar como **código de confirmação da consulta**;
- ser utilizado para **identificação do agendamento em atendimentos ou suporte**;
- servir como **código que o paciente pode informar ao chegar na consulta**, semelhante ao modelo utilizado em aplicativos de entrega.

Caso seja um elemento visível para o usuário, é importante garantir que:

- o **propósito do código esteja claro na interface**;
- exista uma **breve explicação ou rótulo**, como por exemplo:  
  *“Código da consulta”* ou *“ID do agendamento”*.

Essa definição ajuda a **evitar confusão para o usuário e dá utilidade clara à informação exibida na tela**.

<img width="655" height="637" alt="image" src="https://github.com/user-attachments/assets/cd9bf457-d6b7-4a6b-8724-cb5778c6b8f6" />

---

## Tela Informação Agendamento Pendente - Desktop

> **"Caso ele confirme, como o usuário vai saber? Ele recebe uma notificação via email da confirmação? Isso evita o fluxo de ficar indo na mesma tela esperando a confirmação."**

Observação do QA: é necessário definir **como o usuário será informado quando o profissional confirmar o agendamento**.

No estado atual, o fluxo pode levar o usuário a **retornar repetidamente à tela para verificar se a consulta foi confirmada**, o que pode gerar frustração ou incerteza.

Validar com o time de produto e desenvolvimento se o sistema deverá enviar notificações quando o status do agendamento mudar.

Possíveis opções:

- envio de **notificação por e-mail informando a confirmação da consulta**;
- envio de **notificação push no aplicativo**, caso exista;
- atualização do status dentro da **área de agendamentos do usuário na plataforma**;
- possibilidade de incluir também **notificação por SMS**, dependendo da estratégia do produto.

Também é importante verificar se a interface desta tela deverá:

- informar claramente que o **agendamento está aguardando confirmação do profissional**;
- indicar **quanto tempo pode levar essa confirmação**, se houver regra definida;
- orientar o usuário sobre **onde acompanhar o status do agendamento**.

Essa definição é importante para **reduzir ansiedade do usuário e melhorar a comunicação durante o processo de agendamento**.

<img width="911" height="697" alt="image" src="https://github.com/user-attachments/assets/746031f0-7641-45b4-a05d-b47e96b77c41" />

---

## Tela Cancelar Agendamento - Desktop

> **"Caso o profissional confirme o agendamento e o paciente cancele após um tempo, como o profissional recebe o aviso de cancelamento?"**

Observação do QA: é necessário definir **como o profissional será notificado quando um paciente cancelar um agendamento previamente confirmado**.

Essa informação é importante para garantir que o profissional **tenha tempo de reorganizar sua agenda e evitar horários ociosos**.

<img width="819" height="498" alt="image" src="https://github.com/user-attachments/assets/7b604d87-fa44-43f9-845a-5dba2f0d145c" />

---

## Tela Cancelamento Concluído - Desktop

> **"Poderia notificar o profissional via email sobre o cancelamento"**

Observação do QA: verificar com o time de produto e desenvolvimento se o sistema deverá **notificar automaticamente o profissional quando um cancelamento for concluído pelo paciente**.

Essa notificação pode ajudar o profissional a **se manter atualizado sobre alterações em sua agenda sem precisar acessar constantemente a plataforma**.

Possíveis comportamentos do sistema:

- envio de **e-mail automático informando o cancelamento da consulta**;
- inclusão de informações relevantes no e-mail, como:
  - nome do paciente;
  - data e horário da consulta cancelada;
  - motivo do cancelamento (caso exista campo para isso);
- atualização imediata do status na **agenda do profissional dentro da plataforma**.

<img width="591" height="242" alt="image" src="https://github.com/user-attachments/assets/221a8098-a173-4bb8-8695-65d3808aa3b9" />

---

## Tela Menu Sanduíche > Usuário Deslogado - Mobile

> **"Será necessário esta parte? Visando que normalmente os sistemas usam um email por cadastro no caso do profissional deveria ser outro"**

Dúvida do QA: é necessário validar com o time de produto se essa opção é realmente necessária no **menu para usuários deslogados**, considerando que o sistema pode possuir **cadastros distintos para pacientes e profissionais**.

Alguns pontos a serem verificados:

- se o sistema permitirá **login com o mesmo e-mail para perfis diferentes (paciente e profissional)**;
- ou se cada tipo de usuário deverá possuir **um cadastro separado com e-mails diferentes**.

Dependendo dessa definição, pode ser necessário:

- **separar claramente as opções de acesso**, como por exemplo:
  - *Entrar como paciente*
  - *Entrar como profissional*
- ou manter **um único login**, com o sistema identificando automaticamente o tipo de perfil associado ao e-mail.
  
Essa definição ajuda a garantir **clareza no fluxo de autenticação e evitar erros de acesso entre perfis diferentes dentro da plataforma**.

<img width="392" height="529" alt="image" src="https://github.com/user-attachments/assets/d44fc57d-fe0f-44ce-bc24-e6c0945d7a5f" />
