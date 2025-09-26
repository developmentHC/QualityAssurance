| ID-PAC | Campo          | Valor Testado          | Resultado Esperado                | Resultado Obtido | Status  |
| ------ | -------------- | ---------------------- | --------------------------------- | ---------------- | ------- |
| P001   | Nome           | 2 caracteres ("An")    | Rejeitar – mínimo 3               | A ser verificado | Pending |
| P002   | Nome           | 3 caracteres ("Ana")   | Aceitar                           | A ser verificado | Pending |
| P003   | Nome           | 4 caracteres ("Anas")  | Aceitar                           | A ser verificado | Pending |
| P004   | Data Nasc.     | 17 anos 364 dias       | Rejeitar – "Idade mínima 18 anos" | A ser verificado | Pending |
| P005   | Data Nasc.     | 18 anos exato          | Aceitar                           | A ser verificado | Pending |
| P006   | Data Nasc.     | 110 anos 1 dia atrás   | Rejeitar – "Data inválida"        | A ser verificado | Pending |
| P007   | Data Nasc.     | 110 anos exato         | Aceitar (≥ 18)                    | A ser verificado | Pending |
| P008   | CEP            | 8 dígitos ("12345678") | Rejeitar – formato inválido       | A ser verificado | Pending |
| P009   | CEP            | 9 dígitos inexistente  | Rejeitar – "CEP não encontrado"   | A ser verificado | Pending |
| P010   | Endereço       | 2 caracteres           | Rejeitar                          | A ser verificado | Pending |
| P011   | Endereço       | 3 caracteres           | Aceitar                           | A ser verificado | Pending |
| P012   | Bairro         | 2 caracteres           | Rejeitar                          | A ser verificado | Pending |
| P013   | Bairro         | 3 caracteres           | Aceitar                           | A ser verificado | Pending |
| P014   | Cidade         | 2 caracteres           | Rejeitar                          | A ser verificado | Pending |
| P015   | Cidade         | 3 caracteres           | Aceitar                           | A ser verificado | Pending |
| P016   | Estado         | 2 caracteres           | Rejeitar                          | A ser verificado | Pending |
| P017   | Estado         | 3 caracteres           | Aceitar                           | A ser verificado | Pending |
| P018   | Especialidades | Lista vazia            | Rejeitar                          | A ser verificado | Pending |
| P019   | Especialidades | 1 item válido          | Aceitar                           | A ser verificado | Pending |
