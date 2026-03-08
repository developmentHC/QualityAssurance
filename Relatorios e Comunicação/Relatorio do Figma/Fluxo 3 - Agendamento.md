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
