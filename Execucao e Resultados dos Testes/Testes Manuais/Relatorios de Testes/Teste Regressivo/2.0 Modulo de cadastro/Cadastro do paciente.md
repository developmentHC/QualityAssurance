# Teste Regressivo Fluxo 1 - Cadastro do paciente

---

## Cenário 1: Cadastro Social via Google

| CT  | Descrição                                         | Tipo         | Resultado             |
|-----|---------------------------------------------------|---------------|------------------------|
| CT01 | Login com Google *(Happy Path)*                  | Positivo      | ❌ Falhou (erro 422)   |
| CT02 | Login com Google com conta inválida              | Negativo      | ⚠️ Inválido            |
| CT03 | Login com Google cancelado                       | Alternativo   | ⚠️ Inválido            |

---

## Cenário 2: Cadastro Social via Facebook

| CT  | Descrição                                         | Tipo         | Resultado                    |
|-----|---------------------------------------------------|---------------|-------------------------------|
| CT04 | Login com Facebook *(Happy Path)*                | Positivo      | 🚧 Ainda não implementado     |
| CT05 | Login com Facebook com conta inválida            | Negativo      | 🚧 Ainda não implementado     |
| CT06 | Login com Facebook cancelado                     | Alternativo   | 🚧 Ainda não implementado     |

---

## Cenário 3: Cadastro via Código de Verificação

| CT  | Descrição                                         | Tipo         | Resultado             |
|-----|---------------------------------------------------|---------------|------------------------|
| CT07 | Cadastro via código de verificação válido           | Positivo      | ✅ Sucesso             |
| CT08 | Código incorreto                                 | Negativo      | ✅ Sucesso (erro tratado) |
| CT09 | Código expirado                                  | Alternativo   | ❌ Falhou              |
| CT010 | Cadastro realizado com sucesso                  | Positivo   |       ✅ Sucesso         |

---

## Cenário 4: Código de Verificação (Extras)

| CT  | Descrição                                         | Tipo         | Resultado                    |
|-----|---------------------------------------------------|---------------|-------------------------------|
| CT10 | Reenvio de código                                | Positivo      | ✅ Sucesso                   |
| CT11 | Uso de código anterior                           | Negativo      | ✅ Sucesso                   |
| CT12 | Múltiplas tentativas incorretas                  | Negativo      | 🚧 Ainda não implementado     |

---

## Cenário 5: Dispositivos

| CT  | Descrição                                         | Tipo         | Resultado                 |
|-----|---------------------------------------------------|---------------|----------------------------|
| CT13 | Login simultâneo em dispositivos diferentes       | Alternativo   | 🚧 Ainda não implementado |
