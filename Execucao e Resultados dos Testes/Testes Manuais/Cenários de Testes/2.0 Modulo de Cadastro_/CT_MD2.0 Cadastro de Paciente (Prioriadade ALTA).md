# CT_MD1.0: Cadastro de Paciente (Prioridade: ALTA)

# 🧪 Plano de Testes Manuais - ConectaBem
> Funcionalidade: Cadastro de Usuário (Paciente)  
> Testes relacionados à autenticação com Facebook estão invalidados.  
> Sistema: ConectaBem  
> Autor: Victor Nadoti  
> Data: 2025-08-28

---

# 📊 Tabela Consolidada - Partição de Equivalência
(Usar esta tabela para os testes)

| Tipo de Cadastro    | Partição Válida                                    | Partição Inválida                                       |
| ------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Google**          | Conta Google existente + autorização concedida     | Conta inexistente / autorização negada                  |
| **Facebook**        | Conta Facebook existente + autorização concedida   | Conta inexistente / autorização negada                  |
| **Código (E-mail)** | E-mail cadastrado + código correto dentro de 5 min | E-mail inexistente / código incorreto / código expirado |
| **Dispositivo**     | Login com código válido em qualquer dispositivo    | Código inválido ou expirado em outro dispositivo        |

---

# 📌 Passos Comuns ao Cadastro de Paciente (Refatorado)

1. Sistema exibe tela de seleção de perfil.
2. Usuário seleciona **Paciente**.
3. Sistema exibe formulário **Etapa 1/4**.
4. Usuário preenche corretamente:
   - Nome (mín. 3 caracteres)
   - Data de nascimento válida (18–110 anos)
   - CEP no formato `00000-000`
   - Logradouro, Número, Bairro, Cidade, Estado
5. Sistema valida CEP via ViaCEP e preenche automaticamente quando possível.
6. Botão **“Continuar”** habilita apenas com todos os campos válidos.
7. Usuário avança para **Etapa 2/4**, depois 3/4 e 4/4.
8. Usuário preenche preferências e necessidades conforme solicitado.
9. Sistema salva o progresso em cada etapa.
10. Ao finalizar a etapa 4/4, sistema conclui o cadastro.
11. Usuário é autenticado e redirecionado para a **Home autenticada**.

---

# Cenário 01: Cadastro com Sucesso

---

## Caso 1: Cadastro de Paciente com Sucesso (Google)

| Campo | Descrição |
|-------|-----------|
| **ID** | CADS_SOCIAL_001 |
| **Descrição** | Cadastro de paciente utilizando autenticação Google. |

### Pré-condições
- Conta Google válida.
- Permissão de compartilhamento de dados autorizada.
- E-mail Google não vinculado a outro cadastro.
- API ViaCEP funcionando.

### Passos
1. **DADO** que o usuário está na Home do ConectaBem  
2. **QUANDO** acessa “Entrar” e seleciona **Login com Google**  
3. **E** concede permissão ao Google  
4. **ENTÃO** sistema exibe a seleção de perfil  
5. **E** o usuário executa os **Passos Comuns ao Cadastro de Paciente**  

### Critérios de Aceitação
- Todos os campos obrigatórios validados.
- Sistema bloqueia avanço em caso de erro.
- Cadastro concluído com sucesso.
- Home autenticada exibida.

---

## Caso 2: Cadastro de Paciente com Sucesso (Facebook)

| Campo | Descrição |
|-------|-----------|
| **ID** | CADS_SOCIAL_002 |
| **Descrição** | Cadastro de paciente utilizando autenticação Facebook. (Funcionalidade inválida para teste, mas documentada.) |

### Pré-condições
- Conta Facebook válida.
- Permissão de compartilhamento de dados autorizada.
- API ViaCEP ativa.

### Passos
1. **DADO** que o usuário está na Home do ConectaBem  
2. **QUANDO** acessa “Entrar” e seleciona **Login com Facebook**  
3. **E** autoriza compartilhamento de dados  
4. **ENTÃO** sistema exibe a seleção de perfil  
5. **E** o usuário executa os **Passos Comuns ao Cadastro de Paciente**  

### Critérios de Aceitação
- Mesmo conjunto de regras do Caso 1.

---

## Caso 3: Cadastro de Paciente com Sucesso (E-mail)

| Campo | Descrição |
|-------|-----------|
| **ID** | CADS_EMAIL_003 |
| **Descrição** | Cadastro de paciente utilizando e-mail + código OTP. |

### Pré-condições
- E-mail válido.
- E-mail não vinculado a outro cadastro.
- Envio de OTP funcional.
- Regras de expiração e tentativas configuradas.
- ViaCEP operante.

### Passos
1. **DADO** que o usuário está na Home do ConectaBem  
2. **QUANDO** insere um e-mail válido  
3. **ENTÃO** sistema envia código de verificação  
4. **QUANDO** usuário informa o código dentro da validade  
5. **E** o sistema valida o OTP  
6. **ENTÃO** exibe seleção de perfil  
7. **E** o usuário executa os **Passos Comuns ao Cadastro de Paciente**  

### Critérios de Aceitação
- Validação de e-mail antes do envio.
- Código respeita tempo, tentativas e expiração.
- Formulário segue regras de validação.
- Cadastro é concluído e Home autenticada exibida.
