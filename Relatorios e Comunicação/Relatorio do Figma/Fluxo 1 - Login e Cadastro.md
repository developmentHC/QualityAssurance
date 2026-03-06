# Fluxo 1 - Login e Cadastro

## Tela Login - Cadastro - Desktop

> **"aqui é onde normalmente fica a mensagem de politica de privacidade"**

Observação do QA: normalmente telas de login ou cadastro incluem um aviso ou link para a política de privacidade e termos de uso próximo ao botão principal de ação.

Verificar se será necessário incluir essa informação nesta tela para garantir transparência ao usuário e seguir boas práticas de UX e conformidade com LGPD.

<img width="754" height="474" alt="image" src="https://github.com/user-attachments/assets/c11add49-65ab-4893-932b-4116843a9d78" />

---

## Tela Login - Cadastro - Mobile

> **"Quando um usuário não cadastrado entrar com Google/Facebook ele entra direto ou vai para tela de cadastro?"**

Dúvida do QA: quando um usuário utiliza login social (Google ou Facebook) e ainda não possui cadastro na plataforma, é necessário definir qual será o comportamento do fluxo.

Verificar se:
- o usuário será autenticado e criado automaticamente no sistema, entrando diretamente na plataforma; ou
- será direcionado para uma tela de complemento de cadastro antes de acessar a aplicação.

<img width="608" height="617" alt="image" src="https://github.com/user-attachments/assets/0f114a2b-0e56-41d1-8a0e-61969288e6e4" />

---

## Tela Código expirado

> **"design ainda não terminado"**

Observação do QA: a tela de código expirado ainda não possui layout final definido.

Será necessário completar o design desta tela incluindo:
- mensagem clara informando que o código expirou;
- opção para solicitar um novo código;
- possibilidade de retorno ao fluxo de verificação.

<img width="821" height="579" alt="image" src="https://github.com/user-attachments/assets/8a073613-482b-455c-b08a-878fe8c9b84c" />

---

## Tela Home Paciente - Desktop

> **"não seria interessante ter um ícone que iria abrir um mini modal? Pois no site está com o ícone após estar logado."**

Sugestão do QA: considerar adicionar um ícone que abra um mini modal com informações ou ações rápidas, semelhante ao comportamento observado na versão atual do site após o usuário estar logado.

A sugestão é verificar se esse elemento deve existir também nesta versão do layout para manter consistência de navegação entre as interfaces.

<img width="748" height="584" alt="image" src="https://github.com/user-attachments/assets/f0ef64ab-34e1-443e-a6f9-493300a95801" />

---

## Tela Código de Verificação - Fornecer Código - Mobile

> **"Código de verificação possui tempo de validade entre 30 segundos e 5 minutos.**  
> **Não informar ao usuário o tempo restante do código."**

Observação do QA: considerar não exibir explicitamente ao usuário o tempo restante de validade do código de verificação.

Essa prática pode trazer alguns benefícios de segurança, como:

- reduzir risco de interceptação do código durante o período de validade;
- dificultar tentativas de ataque por força bruta;
- diminuir exposição de informações sensíveis em dispositivos compartilhados;
- seguir boas práticas de segurança adotadas em referências como **NIST** e **OWASP**.

Verificar com o time de produto e segurança se a estratégia adotada para este fluxo será:

- **não exibir nenhum tempo de expiração**, ou  
- **exibir apenas uma mensagem genérica**, como “o código pode expirar em breve”.

<img width="571" height="828" alt="image" src="https://github.com/user-attachments/assets/0e559701-c777-4aec-9d8c-bfa342914ebe" />

## Tela Cadastro Paciente - Dados Iniciais - Mobile

> **"O Cep já busca automático e não precisa deste botão."**

Observação do QA: o campo de **CEP já realiza a busca automática do endereço**, portanto o botão de busca pode se tornar redundante no fluxo.

Verificar com o time de produto e design se:

- a busca do endereço será **disparada automaticamente após o preenchimento completo do CEP**;
- o botão de busca pode ser **removido da interface para simplificar o fluxo**;
- em caso de falha na busca automática, será necessário apresentar **mensagem de erro ou opção de preenchimento manual do endereço**.

Essa abordagem pode ajudar a **reduzir atrito no cadastro e simplificar a experiência do usuário em dispositivos mobile**.

<img width="351" height="622" alt="image" src="https://github.com/user-attachments/assets/d46d8c01-a140-4c99-8a5e-6a1d4321a3c9" />

---

## Tela Cadastro Profissional

> **"Em caso de falha de conexão durante o cadastro, o processo deve ser interrompido e o usuário informado para tentar novamente. oq fazer?"**

Dúvida / Observação do QA: é necessário definir o comportamento da aplicação em casos de **falha de conexão durante o processo de cadastro do profissional**.

Verificar com o time de produto e desenvolvimento qual será a estratégia adotada:

- **interromper o fluxo e exibir mensagem de erro**, solicitando que o usuário tente novamente;
- **salvar temporariamente os dados já preenchidos**, evitando que o usuário precise reinserir todas as informações;
- apresentar uma **mensagem clara de falha de conexão**, como por exemplo:  
  *“Não foi possível concluir o cadastro devido a um problema de conexão. Verifique sua internet e tente novamente.”*

Também pode ser interessante avaliar se o sistema deve incluir:

- **tentativa automática de reenvio da requisição**, ou
- opção manual de **“Tentar novamente”** para o usuário.

Essa definição é importante para **evitar perda de dados e frustração durante um fluxo de cadastro mais longo**.*

<img width="725" height="610" alt="image" src="https://github.com/user-attachments/assets/5fc6e9e6-86f4-45e4-aeb6-002f4c578b99" />
