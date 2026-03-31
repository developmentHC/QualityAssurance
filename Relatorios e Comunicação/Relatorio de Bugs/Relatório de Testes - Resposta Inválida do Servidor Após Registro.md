# Bug - Resposta Inválida do Servidor Após Registro

## Descrição
Ao submeter o cadastro de paciente, a API retorna **HTTP 200** porém nenhum registro é criado na base de dados. O front-end exibe "Resposta inválida do servidor após o registro." e os logs do Vercel revelam um `UnhandledRejection` fatal que derruba o processo Node.js com exit status 128. A promise rejeitada não é capturada corretamente, fazendo com que a resposta seja enviada como 200 antes do processo encerrar.

---

## Ambiente de Teste

- **Ambientes:** Homologação
- **SO:** Windows 11
- **Navegador:** Brave v1.86.146
- **PR:** [Brave v1.86.146](https://github.com/developmentHC/conectaBemBack/pull/58)

---

## Passos para reproduzir

1. Acessar a página de cadastro: https://conecta-bem-front.vercel.app/auth
2. Criar uma conta como paciente ou profissional
3. Preencher todos os campos obrigatórios do formulário
4. Submeter o cadastro

---

## Resultado Esperado

O sistema deve processar o cadastro com sucesso, persistir o usuário na base de dados e redirecionar ao fluxo seguinte.

---

## Resultado Obtido

- **UI:** "Resposta inválida do servidor após o registro."
- **Network (Brave):** `{"msg":"Nenhuma alteração realizada"}`
- **HTTP Status:** 200 OK (sem persistência do registro)
- **Log Vercel (Fatal):**
```
UnhandledRejection: ValidationError: Usuário não encontrado.
  at UserValidationService.validateUserExists
    (file:///var/task/src/services/validationService.mjs:10:13)
  at process.processTicksAndRejections
    (node:internal/process/task_queues:105:5)

Node.js process exited with exit status: 128.
```

---

## Evidências

- [Mensagem de erro — UI](https://github.com/user-attachments/assets/9797280a-3390-4a4c-9def-410c94c9fc2c)
- [Log de Erro do Brave](https://github.com/user-attachments/assets/ebd82183-2e18-4f52-8f64-842246ecf6d9)
- [Log de Erro do Vercel](https://github.com/user-attachments/assets/5a77c532-3abf-43c7-b1fb-c2f60d81cc78)

---

## Hipóteses

* Race condition entre criação do usuário e validação posterior — `validateUserExists` pode estar consultando o banco antes do commit de criação
* Promise rejeitada não capturada em `validationService.mjs:10` encerra o processo antes de finalizar o fluxo corretamente
* Mudança recente no contrato interno entre serviços — `userId` chega ao backend mas a validação espera outro identificador ou estado
* Regressão introduzida ao corrigir o erro anterior (422) — o payload agora é enviado corretamente, mas expôs falha na camada de validação/persistência

---

## Impacto

* Bloqueia onboarding de novos usuários
* Regressão em relação ao bug anterior (422 → 200 sem persistência)

