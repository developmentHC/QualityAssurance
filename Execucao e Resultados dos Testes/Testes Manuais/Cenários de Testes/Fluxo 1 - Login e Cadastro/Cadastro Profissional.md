# Plano de Testes Manuais - ConectaBem
> Funcionalidade: Cadastro de Usuário (Profissional)  
> Testes com Facebook permanecem invalidados, porém documentados.  
> Sistema: ConectaBem  
> Autor: Victor Nadoti  
> Data: 2025-08-28  

---

## Passos Comuns ao Cadastro de Profissional (Refatorado)

1. Selecionar o perfil **“Profissional”** após autenticação.
2. Preencher **Nome completo** (mín. 10 caracteres, apenas letras, apenas 1 espaço entre palavras).
3. Informar **Data de nascimento** válida (≥ 18 anos e ≤ 110 anos).
4. Preencher **CEP residencial** (formato `00000-000`, com validação ViaCEP).
5. Preencher:
   - Endereço residencial (mín. 3 caracteres)
   - Bairro residencial (mín. 3 caracteres)
   - Cidade residencial (mín. 3 caracteres)
   - Estado residencial (mín. 3 caracteres)
6. Preencher **Nome da clínica** (mín. 3 caracteres).
7. Informar **CPF ou CNPJ** válido (11–18 caracteres, validação real).
8. Preencher **CEP profissional** (formato `00000-000`, validação ViaCEP).
9. Preencher:
   - Endereço da clínica (mín. 5 caracteres)
   - Bairro da clínica (mín. 3 caracteres)
   - Número da clínica (≥ 1)
   - Complemento da clínica (opcional)
   - Cidade da clínica (mín. 3 caracteres)
   - Estado da clínica (mín. 3 caracteres)
10. Selecionar **mínimo 1 especialidade**.
11. Definir *Service Preferences* (pode ser vazio, nulo ou múltiplos itens).
12. Informar **Sugestão** (mín. 1 caractere).
13. Concluir cadastro.
14. Verificar redirecionamento automático para a **Home autenticada**.

---

# Cenário 01: Cadastro com Sucesso

---

## Caso 1: Cadastro de Profissional com sucesso (Google)

| Campo | Descrição |
| ----- | --------- |
| **ID** | CADS_SOCIAL_001 |
| **Descrição** | O cadastro será realizado como Profissional utilizando Google. |

### Pré-condições
- Usuário possui conta Google válida.
- Google autorizado a fornecer nome/e-mail.
- E-mail não está cadastrado previamente.

### Passos
1. **DADO** que o usuário está na Home do ConectaBem  
2. **QUANDO** acessa “Entrar” e escolhe **Login com Google**  
3. **E** concede permissão ao Google  
4. **E** após autenticação, seleciona o perfil **“Profissional”**  
5. **E** executa todos os **Passos Comuns ao Cadastro de Profissional**  
6. **ENTÃO** o sistema conclui o cadastro e redireciona para a Home autenticada  

### Critérios de Aceitação
- Cadastro do profissional realizado com sucesso.
- Exibição da Home autenticada.
- Registro de data/hora da criação.

---

## Caso 2: Cadastro de Profissional com sucesso (Facebook)
> *Registrado, mas marcado como inválido dependendo do estado do projeto.*

| Campo | Descrição |
| ----- | --------- |
| **ID** | CADS_SOCIAL_002 |
| **Descrição** | O cadastro será realizado como Profissional utilizando Facebook. |

### Pré-condições
- Usuário possui conta Facebook válida.
- Facebook autorizado a fornecer nome/e-mail.
- E-mail não está cadastrado previamente.

### Passos
1. **DADO** que o usuário está na Home do ConectaBem  
2. **QUANDO** acessa “Entrar” e escolhe **Login com Facebook**  
3. **E** concede permissão ao Facebook  
4. **E** seleciona o perfil **“Profissional”**  
5. **E** executa todos os **Passos Comuns ao Cadastro de Profissional**  
6. **ENTÃO** é redirecionado para a Home autenticada  

### Critérios de Aceitação
Idênticos ao Caso 1.

---

## Caso 3: Cadastro de Profissional com sucesso (E-mail)

| Campo | Descrição |
| ----- | --------- |
| **ID** | CADS_EMAIL_003 |
| **Descrição** | O cadastro será realizado como Profissional via e-mail + código OTP. |

### Pré-condições
- E-mail válido.
- E-mail não cadastrado anteriormente.

### Passos
1. **DADO** que o usuário está na Home do ConectaBem  
2. **QUANDO** acessa “Entrar”  
3. **E** informa o e-mail no formato válido  
4. **E** recebe o código e valida corretamente dentro do tempo  
5. **E** seleciona o perfil “Profissional”  
6. **E** executa todos os **Passos Comuns ao Cadastro de Profissional**  
7. **ENTÃO** o sistema finaliza o cadastro e redireciona para a Home autenticada  

### Critérios de Aceitação
Idênticos ao Caso 1.
