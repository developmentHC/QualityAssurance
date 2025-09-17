# 🐞 Relatório de Defeitos – Testes Manuais de Integração (API + Frontend)

## 🔹 Contexto

* **Tipo de Teste**: Integração (API x Frontend)
* **Prioridade**: Alta
* **Ambiente**: Produção https://conecta-bem-front.vercel.app/
* Navegador: FireFox v142 64 bits , sistema operacional windows 11
* **Cenário Testado**: Login via **código de verificação por e-mail** (OTP)
* **Tarefas Relacionadas**:
  * [conectaBemFront #41](https://github.com/users/developmentHC/projects/5?pane=issue&itemId=127081614&issue=developmentHC%7CconectaBemFront%7C41)
  * [conectaBemBack #14 (PR)](https://github.com/developmentHC/conectaBemBack/pull/14)
  * [conectaBemBack #19 (Issue)](https://github.com/developmentHC/conectaBemBack/issues/19)
* **Evidência (print)**: [Google Drive](https://drive.google.com/file/d/1LOgIwp3437awHnn_XubfTVG9jIMvvdav/view?usp=sharing)

---

## 🔹 Passos para Reproduzir

1. Acessar a tela de login.
2. Opção de login via **email**.
3. Inserir e-mail válido no campo.
4. Solicitar envio de código OTP.
5. verifica se recebeu o codigo no email
6. verificar o log do backend(com o erro esperado)
   
---

## 🔹 Resultado Obtido

* **Na primeira tentativa**: código é enviado corretamente (via SendGrid)[Observação: atualmente nem com novos emails recebi o codigo na primeira tentativa].
* **Nas solicitações seguintes**:

  * Código **não é enviado ao e-mail** (nem inbox, nem spam).
  * Erro exibido nos **logs do backend (Vercel)**:

Obs: tenho a descrição toda do erro só não coloquei aqui se não ia ficar muito grande(se precisar só pedir que eu mando)
```
❌ Erro ao enviar: Client network socket disconnected before secure TLS connection was established
Unhandled Rejection: AxiosError: Client network socket disconnected before secure TLS connection was established
```

* Outro erro recorrente nos testes:

```
❌ Erro ao enviar: socket hang up
Unhandled Rejection: AxiosError: socket hang up
```

* Pelo **frontend** → solicitação falha.
* Pela **API (Swagger)** → não recebo o código no e-mail.

---

## 🔹 Comportamento Esperado

* Usuário deve receber o código em até alguns segundos no e-mail (boa experiência de uso).

---

## 🔹 Impactos Identificados

* **Usabilidade**:

  * A demora ou falha no envio gera **frustração e impaciência** no usuário.

* **Funcionalidade**:
  * API de envio não retorna o codigo mesmo dando status code 200 e 201.
  * Erro de integração **Axios + SendGrid** precisa de análise pelo backend.

---

## 🔹 Observações Importantes

* Caso o usuário tenha se cadastrado via **Google**, ao tentar login via **código**, o sistema não envia OTP (fluxo correto, mas sem mensagem clara para o usuário).
* Também peço ajuda do backend para falar mais sobre a api e mostrar como ela funciona para facilitar os testes

---

## 🔹 Conclusão da Tarefa

* **Atualização da documentação Swagger** → **Concluída** ✅
* **Bug reportado** → **Aberto para correção** ❌
