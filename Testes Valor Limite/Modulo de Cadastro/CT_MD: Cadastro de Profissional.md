| ID-PRO | Campo               | Valor Testado         | Resultado Esperado                | Resultado Obtido | Status  |
| ------ | ------------------- | --------------------- | --------------------------------- | ---------------- | ------- |
| PR001  | Nome                | 9 caracteres          | Rejeitar – mínimo 10              | A ser verificado | Pending |
| PR002  | Nome                | 10 caracteres         | Aceitar                           | A ser verificado | Pending |
| PR003  | Nome                | 11 caracteres         | Aceitar                           | A ser verificado | Pending |
| PR004  | Data Nasc.          | 17 anos 364 dias      | Rejeitar – "Idade mínima 18 anos" | A ser verificado | Pending |
| PR005  | Data Nasc.          | 18 anos exato         | Aceitar                           | A ser verificado | Pending |
| PR006  | Data Nasc.          | 110 anos 1 dia atrás  | Rejeitar – "Data inválida"        | A ser verificado | Pending |
| PR007  | Data Nasc.          | 110 anos exato        | Aceitar (≥ 18)                    | A ser verificado | Pending |
| PR008  | CEP Residencial     | 8 dígitos             | Rejeitar                          | A ser verificado | Pending |
| PR009  | CEP Residencial     | 9 dígitos inexistente | Rejeitar – "CEP não encontrado"   | A ser verificado | Pending |
| PR010  | Nome da Clínica     | 2 caracteres          | Rejeitar – mínimo 3               | A ser verificado | Pending |
| PR011  | Nome da Clínica     | 3 caracteres          | Aceitar                           | A ser verificado | Pending |
| PR012  | CPF                 | 10 dígitos            | Rejeitar – "CPF inválido"         | A ser verificado | Pending |
| PR013  | CPF                 | 11 dígitos válido     | Aceitar                           | A ser verificado | Pending |
| PR014  | CNPJ                | 18 dígitos válido     | Aceitar                           | A ser verificado | Pending |
| PR015  | CNPJ                | 19 dígitos            | Rejeitar – "CNPJ inválido"        | A ser verificado | Pending |
| PR016  | Endereço da Clínica | 4 caracteres          | Rejeitar – mínimo 5               | A ser verificado | Pending |
| PR017  | Endereço da Clínica | 5 caracteres          | Aceitar                           | A ser verificado | Pending |
| PR018  | Número da Clínica   | 0                     | Rejeitar – deve ser ≥ 1           | A ser verificado | Pending |
| PR019  | Número da Clínica   | 1                     | Aceitar                           | A ser verificado | Pending |
| PR020  | Especialidades      | Lista vazia           | Rejeitar                          | A ser verificado | Pending |
| PR021  | Especialidades      | 1 item válido         | Aceitar                           | A ser verificado | Pending |
| PR022  | Sugestão            | vazio                 | Rejeitar – "Sugestão inválida"    | A ser verificado | Pending |
| PR023  | Sugestão            | 1 caractere           | Aceitar                           | A ser verificado | Pending |
