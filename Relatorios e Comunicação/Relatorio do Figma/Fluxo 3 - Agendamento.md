# Fluxo 3 - Agendamento

## Tela Perfil Profissional - Desktop

> **"Como será esta parte? para o usuario ver os metodos de pagamento. Referência: fazer tipo o iFood."**

### 🔍 Observação do QA
Definir como os métodos de pagamento aceitos pelo profissional serão exibidos no perfil. Validar com produto e design quais formas serão mostradas (cartão, PIX, dinheiro, convênios etc.), se serão apenas informativas ou parte do fluxo de pagamento e se haverá ícones ou indicadores visuais para facilitar a identificação antes da confirmação do agendamento.

### 🎨 Retorno do Design
Em andamento
<p align="center">
  <img width="637" height="557" alt="image" src="https://github.com/user-attachments/assets/ca4546be-5e44-4778-998d-ec88c8edc550" />
</p>

> **"Como será esta tela se o profissional pular a etapa de acessibilidade no cadastro?"**

### 🔍 Observação do QA
Definir o comportamento da interface caso o profissional não informe dados de acessibilidade no cadastro. Verificar se a seção deve ser ocultada, se será exibida uma mensagem padrão informando que não há dados ou se o profissional poderá adicionar essas informações posteriormente na edição do perfil.

### 🎨 Retorno do Design
Pode estar junto a descrição do profissional como tags

<img width="743" height="272" alt="image" src="https://github.com/user-attachments/assets/e2025183-8a6a-4743-9cd0-6284ee6cf802" />

> **"Os dados que o paciente selecionou ficariam salvos após ele fazer login - neste casos seria na visão do usuario deslogado"**

### 🔍 Observação do QA
Verificar o comportamento quando o paciente seleciona informações de agendamento antes de fazer login. Definir se o sistema deve manter os dados escolhidos (data, horário, tipo de consulta) após a autenticação e retomar o fluxo no mesmo ponto ou se o processo deverá ser reiniciado.

### 🎨 Retorno do Design
Check

<img width="735" height="570" alt="image" src="https://github.com/user-attachments/assets/56f9d202-1a78-4025-af47-45111117f4c5" />

> **"Se estiver vazio como fica essa parte?"**

### 🔍 Observação do QA
Definir o comportamento da interface quando não houver informações disponíveis para essa seção do perfil profissional, evitando espaços vazios. Validar se a seção deve ser ocultada, apresentar um estado vazio ou exibir uma mensagem padrão informativa.

### 🎨 Retorno do Design
Se estiver vazio, colocar sugestões de outros profissionais com serviços parecidos

<img width="697" height="633" alt="image" src="https://github.com/user-attachments/assets/d2945ddf-51fa-484c-b473-205c0675326e" />

---

## Tela Agendamento - Desktop

> **"Sugestão: colocar a seleção de data e hora em um só componente"**

### 🔍 Observação do QA
Avaliar com produto e design a possibilidade de unificar a seleção de data e horário em um único componente, verificando se isso pode simplificar o fluxo de agendamento, reduzir etapas para o usuário e se existe alguma restrição técnica ou do design system.

### 🎨 Retorno do Design
Check

<img width="781" height="522" alt="image" src="https://github.com/user-attachments/assets/88a30a66-c8c8-4218-a924-fe946b7758dd" />

---

## Tela Confirmação de Agendamento - Desktop

> **"Qual o objetivo do ID ?"**

### 🔍 Observação do QA
Definir qual é a função do ID exibido na confirmação do agendamento, validando se ele será usado como código de confirmação da consulta, identificação para suporte ou referência para o usuário ao chegar na consulta, garantindo que o propósito fique claro na interface.

### 🎨 Retorno do Design
O ID precisa ser adicionado no componente "Status_agendamentos_resumo"

<img width="655" height="637" alt="image" src="https://github.com/user-attachments/assets/cd9bf457-d6b7-4a6b-8724-cb5778c6b8f6" />

---

## Tela Informação Agendamento Pendente - Desktop

> **"Caso ele confirme, como o usuário vai saber? Ele recebe uma notificação via email da confirmação? Isso evita o fluxo de ficar indo na mesma tela esperando a confirmação."**

### 🔍 Observação do QA
Definir como o paciente será informado quando o profissional confirmar o agendamento, avaliando o envio de notificações como e-mail, push, SMS ou atualização de status dentro da plataforma para evitar que o usuário precise verificar manualmente a confirmação.

### 🎨 Retorno do Design
Sugestão: Notificação via email, via mensagem whatsapp. Pode ser também uma notificação na tela "home" assim que o usuário fazer o login.

<img width="911" height="697" alt="image" src="https://github.com/user-attachments/assets/746031f0-7641-45b4-a05d-b47e96b77c41" />

---

## Tela Cancelar Agendamento - Desktop

> **"Caso o profissional confirme o agendamento e o paciente cancele após um tempo, como o profissional recebe o aviso de cancelamento?"**

### 🔍 Observação do QA
Definir como o profissional será notificado quando um paciente cancelar um agendamento previamente confirmado, garantindo que ele seja informado rapidamente para reorganizar sua agenda.
<img width="819" height="498" alt="image" src="https://github.com/user-attachments/assets/7b604d87-fa44-43f9-845a-5dba2f0d145c" />

### 🎨 Retorno do Design
Sugestão: Notificação/mensagem via email e whatsapp. Também uma notificação na tela "home" assim que o profissional efetuar o login.

---

## Tela Cancelamento Concluído - Desktop

> **"Poderia notificar o profissional via email sobre o cancelamento"**

### 🔍 Observação do QA
Validar se o sistema deverá enviar uma notificação automática ao profissional quando um cancelamento for concluído, como por exemplo um e-mail contendo informações da consulta cancelada (paciente, data, horário e possível motivo).

### 🎨 Retorno do Design
Sugestão: Também via whatsapp e notificação na tela "home"

<img width="591" height="242" alt="image" src="https://github.com/user-attachments/assets/221a8098-a173-4bb8-8695-65d3808aa3b9" />

---

## Tela Menu Sanduíche > Usuário Deslogado - Mobile

> **"Será necessário esta parte? Visando que normalmente os sistemas usam um email por cadastro no caso do profissional deveria ser outro"**

### 🔍 Observação do QA
Validar com produto como funcionará o fluxo de login para pacientes e profissionais, definindo se haverá um login único com identificação automática do perfil ou acessos separados para cada tipo de usuário.
<img width="392" height="529" alt="image" src="https://github.com/user-attachments/assets/d44fc57d-fe0f-44ce-bc24-e6c0945d7a5f" />

### 🎨 Retorno do Design
Pensar em uma alternativa de "cadastro" em que seja utilizado o mesmo email tanto para paciente, quanto para profissional. Sem a necessidade de cadastrar com emails distintos.
