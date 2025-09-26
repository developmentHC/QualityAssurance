| ID     | Título                           | Entrada       | Resultado Esperado | Resultado Obtido | Status   |
| ------ | -------------------------------- | ------------- | ------------------ | ---------------- | -------- |
| CT-013 | CEP - 8 chars                    | "12345678"    | Rejeitado          | -                | Pendente |
| CT-014 | CEP - 9 chars                    | "12345-678"   | Aceito             | -                | Pendente |
| CT-015 | CEP - 10 chars                   | "1234567890"  | Rejeitado          | -                | Pendente |
| CT-016 | Endereço/Bairro/Cidade - 2 chars | "AB"          | Rejeitado          | -                | Pendente |
| CT-017 | Endereço/Bairro/Cidade - 3 chars | "ABC"         | Aceito             | -                | Pendente |
| CT-018 | Endereço/Bairro/Cidade - 4 chars | "ABCD"        | Aceito             | -                | Pendente |
| CT-025 | CPF - 10 chars                   | "1234567890"  | Rejeitado          | -                | Pendente |
| CT-026 | CPF - 11 chars                   | "12345678901" | Aceito             | -                | Pendente |
| CT-031 | Sugestão - vazio                 | ""            | Rejeitado          | -                | Pendente |
| CT-032 | Sugestão - 1 char                | "A"           | Aceito             | -                | Pendente |
| CT-033 | Sugestão - 2 chars               | "AB"          | Aceito             | -                | Pendente |
