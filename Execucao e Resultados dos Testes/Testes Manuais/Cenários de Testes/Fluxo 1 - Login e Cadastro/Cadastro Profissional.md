# Plano de Testes Manuais – Cadastro de Usuário (Profissional)  
Sistema: ConectaBem  
Versão: 1.0  
Data: 2025-12-05  
Status: Completo (Revisado e Refeito)  

---

# Passos Comuns ao Cadastro de Profissional

1. Selecionar o perfil **Profissional** após autenticação (Google ou E-mail/OTP).
2. Preencher **Nome completo** (mín. 10 caracteres, apenas letras, um único espaço entre palavras).
3. Informar **Data de nascimento** válida (entre 18 e 110 anos).
4. Preencher **CEP residencial** no formato `00000-000` (com validação via ViaCEP).
5. Preencher endereço residencial:
   - Endereço (mín. 3 caracteres)
   - Bairro (mín. 3 caracteres)
   - Cidade (mín. 3 caracteres)
   - Estado (mín. 3 caracteres)
6. Preencher **Nome da clínica** (mín. 3 caracteres).
7. Informar **CPF ou CNPJ** válido.
8. Preencher **CEP profissional** (mesmo formato e validação do CEP residencial).
9. Preencher endereço profissional:
   - Endereço da clínica (mín. 5 caracteres)
   - Bairro (mín. 3 caracteres)
   - Cidade (mín. 3 caracteres)
   - Estado (mín. 3 caracteres)
   - Número da clínica (≥ 1)
   - Complemento (opcional)
10. Selecionar **mínimo 1 especialidade**.
11. Preencher **Service Preferences** (pode ser vazio, nulo ou múltiplos itens).
12. Informar **Sugestão** (mínimo 1 caractere).
13. Concluir cadastro.
14. Verificar redirecionamento automático para a Home autenticada.

---

# Cenário 01: Cadastro via Provedores (Google)

## Caso 1 – Cadastro com Google (Happy Path)
**ID:** CADS_SOCIAL_001  
**Descrição:** O usuário realiza cadastro de Profissional utilizando Google com sucesso.

### Pré-condições
- Conta Google válida.
- Permissão concedida para nome/e-mail.
- E-mail não cadastrado.

### Passos
1. Dado que o usuário acessa a Home do ConectaBem.  
2. Quando seleciona "Entrar com Google".  
3. E concede permissão ao provedor.  
4. Então o sistema exibe a tela de seleção de perfil.  
5. Quando seleciona "Profissional".  
6. E executa todos os Passos Comuns ao Cadastro de Profissional.  
7. Então o sistema conclui o cadastro e redireciona para a Home autenticada.

### Critérios de Aceitação
- Cadastro concluído com sucesso.  
- Home autenticada exibida.  
- Registro de data e hora da criação.

---

## Caso 2 – Cadastro Social sem permissão de dados (Negativo)
**ID:** CADS_SOCIAL_002  
**Descrição:** Usuário nega permissão de dados no Google, impossibilitando o cadastro.

### Pré-condições
- Usuário inicia login social.

### Passos
1. Dado que o usuário iniciou login com Google.  
2. Quando nega permissão para compartilhar e-mail ou nome.  
3. Então o sistema exibe mensagem de erro informando a necessidade da permissão.  
4. E o fluxo é interrompido, retornando à tela de login.

### Critérios de Aceitação
- Cadastro não prossegue sem dados básicos.  
- Mensagem clara explicando o motivo.

---

# Cenário 02: Cadastro via E-mail (OTP)

## Caso 3 – Cadastro via E-mail com sucesso (OTP)
**ID:** CADS_EMAIL_003  
**Descrição:** O usuário se cadastra validando corretamente o código OTP.

### Pré-condições
- E-mail válido não cadastrado.

### Passos
1. Dado que o usuário acessa a Home.  
2. Quando informa um e-mail válido.  
3. Então o sistema envia o código OTP com contagem regressiva.  
4. Quando insere o código dentro da validade.  
5. Então o sistema valida o OTP e exibe a seleção de perfil.  
6. Quando seleciona "Profissional".  
7. E executa os Passos Comuns ao Cadastro de Profissional.  
8. Então o sistema conclui o cadastro e redireciona para a Home autenticada.

### Critérios de Aceitação
- OTP válido permite continuar.  
- Regras de contagem e reenvio aplicadas.

---

## Caso 4 – Código incorreto (Negativo)
**ID:** CADS_EMAIL_004

### Passos
1. Dado que o usuário solicitou código OTP.  
2. Quando insere código incorreto.  
3. Então o sistema exibe mensagem de erro e mantém os campos em estado inválido.  
4. E permite reenviar código conforme regras.

---

## Caso 5 – Código expirado
**ID:** CADS_EMAIL_005

### Passos
1. Dado que o usuário recebeu o código.  
2. Quando tenta validar após expiração.  
3. Então o sistema solicita reenviar e exibe mensagem de expiração.

---

## Caso 6 – Limite de reenvio atingido
**ID:** CADS_EMAIL_006

### Passos
1. Dado que o usuário reenviou o código 5 vezes na última hora.  
2. Quando tenta reenviar novamente.  
3. Então o sistema bloqueia o envio e informa o tempo restante.

---

## Caso 7 – E-mail já cadastrado
**ID:** CADS_EMAIL_007

### Passos
1. Quando o usuário insere e-mail já cadastrado.  
2. Então o sistema exibe mensagem de erro e impede avanço.

---

# Cenário 03: Dados Obrigatórios

## Caso 8 – Preenchimento completo das etapas (Happy Path)
**ID:** CADS_DADOS_008

### Descrição
Validação do fluxo completo com todos os dados obrigatórios preenchidos corretamente.

---

## Caso 9 – Campos obrigatórios vazios (Negativo)
**ID:** CADS_DADOS_009

### Passos
1. Quando o usuário tenta avançar sem preencher campos obrigatórios.  
2. Então o sistema marca campos em vermelho e impede avanço.

---

## Caso 10 – Campos opcionais pulados
**ID:** CADS_DADOS_010  
**Descrição:** Complemento é opcional; demais são obrigatórios.

### Passos
1. Quando o usuário deixa o campo opcional vazio.  
2. Então o sistema permite continuar e registra que o campo foi omitido.

---

# Cenário 04: Validações de Formulário

## Caso 11 – Validação do Nome
**ID:** CADS_VALID_011  
**Regra:** mínimo 10 caracteres, somente letras e um espaço entre palavras.

## Caso 12 – Validação da Data de Nascimento  
**ID:** CADS_VALID_012  
**Regra:** idade entre 18 e 110 anos.

## Caso 13 – Validação do CEP residencial  
**ID:** CADS_VALID_013  
**Regra:** Formato correto, via ViaCEP. CEP inexistente gera erro.

## Caso 14 – Validação do Endereço Residencial  
**ID:** CADS_VALID_014  
**Regra:** mínimo 3 caracteres para endereço, bairro, cidade e estado.

## Caso 15 – Validação do Nome da Clínica  
**ID:** CADS_VALID_015  
**Regra:** mínimo 3 caracteres.

## Caso 16 – Validação de CPF ou CNPJ  
**ID:** CADS_VALID_016  
**Regra:** validação real, rejeita inválidos.

## Caso 17 – CEP profissional  
**ID:** CADS_VALID_017  
**Regra:** mesmo comportamento do CEP residencial.

## Caso 18 – Endereço da Clínica  
**ID:** CADS_VALID_018  
**Regra:** endereço ≥ 5 caracteres, demais ≥ 3, e número ≥ 1.

## Caso 19 – Especialidades  
**ID:** CADS_VALID_019  
**Regra:** selecionar no mínimo uma.

## Caso 20 – Service Preferences  
**ID:** CADS_VALID_020  
**Regra:** aceita vazio, nulo ou múltiplos itens.

## Caso 21 – Sugestão  
**ID:** CADS_VALID_021  
**Regra:** mínimo 1 caractere.

---

# Cenário 05: Fluxo de Conclusão

## Caso 22 – Finalização do cadastro
**ID:** CADS_END_022  
**Descrição:** Conclusão das etapas e autenticação automática.

### Passos
1. Dado que o usuário preencheu tudo corretamente.  
2. Quando finaliza o cadastro.  
3. Então o sistema registra data/hora, autentica e redireciona para a Home.

---

# Cenário 06: Restrições Gerais

## Caso 23 – E-mail já cadastrado como outro perfil
**ID:** CADS_RESTR_023

### Passos
1. Quando usuário tenta cadastrar como Profissional usando e-mail vinculado a Paciente.  
2. Então o sistema exibe mensagem impedindo o uso.

---

## Caso 24 – Perfis diferentes com mesmo e-mail
**ID:** CADS_RESTR_024  

### Passos
1. Quando tenta cadastrar um perfil diferente com o mesmo e-mail.  
2. Então o sistema nega e informa a necessidade de login com o perfil original.

---

## Caso 25 – Falha de conexão durante o cadastro
**ID:** CADS_RESTR_025

### Passos
1. Quando ocorre uma falha de rede enquanto o usuário salva alguma etapa.  
2. Então o sistema exibe mensagem de erro e solicita tentativa posterior.
