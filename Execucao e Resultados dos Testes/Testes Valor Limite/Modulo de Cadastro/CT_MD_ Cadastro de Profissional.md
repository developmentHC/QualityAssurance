| ID-PRO | Campo               | Valor Testado         | Resultado Esperado                | Resultado Obtido | Status  |
| ------ | ------------------- | --------------------- | --------------------------------- | ---------------- | ------- |
| PR001  | Nome                | 9 caracteres          | Rejeitar – mínimo 10              | O mesmo do espero | ✔ Passou |
| PR002  | Nome                | 10 caracteres         | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR003  | Nome                | 11 caracteres         | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR004  | Data Nasc.          | 17 anos 364 dias      | Rejeitar – "Idade mínima 18 anos" | O mesmo do espero | ✔ Passou |
| PR005  | Data Nasc.          | 18 anos exato         | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR006  | Data Nasc.          | 110 anos 1 dia atrás  | Rejeitar – "Data inválida"        | O mesmo do espero | ✔ Passou |
| PR007  | Data Nasc.          | 110 anos exato        | Aceitar (≥ 18)                    | O mesmo do espero | ✔ Passou |
| PR008  | CEP Residencial     | 8 dígitos             | Rejeitar                          | O mesmo do espero | ✔ Passou |
| PR009  | CEP Residencial     | 9 dígitos inexistente | Rejeitar – "CEP não encontrado"   | O mesmo do espero | ✔ Passou |
| PR010  | Nome da Clínica     | 2 caracteres          | Rejeitar – mínimo 3               | O mesmo do espero | ✔ Passou |
| PR011  | Nome da Clínica     | 3 caracteres          | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR012  | CPF                 | 10 dígitos            | Rejeitar – "CPF inválido"         | O mesmo do espero | ✔ Passou |
| PR013  | CPF                 | 11 dígitos válido     | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR014  | CNPJ                | 18 dígitos válido     | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR015  | CNPJ                | 19 dígitos            | Rejeitar – "CNPJ inválido"        | O mesmo do espero | ✔ Passou |
| PR016  | Endereço da Clínica | 4 caracteres          | Rejeitar – mínimo 5               | O mesmo do espero | ✔ Passou |
| PR017  | Endereço da Clínica | 5 caracteres          | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR018  | Número da Clínica   | Vazio                 | Rejeitar – deve ser ≥ 1           | O mesmo do espero | ✔ Passou |
| PR019  | Número da Clínica   | 1                     | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR020  | Especialidades      | Lista vazia           | Rejeitar                          | Rejeita, mas sem feedback para o usuário | ⚠ Incompleto |
| PR021  | Especialidades      | 1 item válido         | Aceitar                           | O mesmo do espero | ✔ Passou |
| PR022  | Sugestão            | vazio                 | Rejeitar – "Sugestão inválida"    | A ser verificado | Pending |
| PR023  | Sugestão            | 1 caractere           | Aceitar                           | A ser verificado | Pending |
