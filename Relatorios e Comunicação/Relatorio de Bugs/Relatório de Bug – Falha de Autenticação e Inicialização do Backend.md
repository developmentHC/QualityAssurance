# 🐞 Relatório de Bug – Falha de Autenticação e Inicialização do Backend

**ID:** **BUG-AUTH-001**

**Módulo:** Autenticação / Login

**Ambiente:** Produção (Vercel)

**URL:** [https://conecta-bem.vercel.app](https://conecta-bem.vercel.app)

**Data do teste:** 16/03/2026

**Testador:** Miguel Luis

**Severidade:** S1 – Crítico

**Prioridade:** P1 – Alta

---

# 📌 Descrição do Problema

O sistema falha ao processar autenticação (login/cadastro) tanto via **email** quanto via **Google OAuth**.

Durante a execução, o backend retorna erros críticos relacionados a:

* Configuração incorreta da **API Key do SendGrid**
* **URI do MongoDB indefinida**
* Falha na inicialização do processo **Node.js**

Esses erros fazem com que o backend não inicialize corretamente, gerando falhas no frontend como:

* erro de **CORS**
* falha ao enviar **OTP**
* erro **Axios Network Error**
* falhas de autenticação social

---

# 📸 Evidências

### Evidência 1 – Erro no log da vercel do backend ao enviar OTP

<img width="1670" height="825" alt="{0CBD4C42-0B79-4C98-BDAC-32D75E5C2C00}" src="https://github.com/user-attachments/assets/9856cff5-a223-417e-8f0a-5ac087dd423d" />


* `API key does not start with "SG."`
* `Erro ao conectar ao MongoDB: The uri parameter to openUri() must be a string, got "undefined"`
* `Node.js process exited with exit status: 1`

### Evidência 2 – Erros de requisição

<img width="1729" height="744" alt="{1004F9A8-9D38-4DE0-8C58-A37D8EFB9F1E}" src="https://github.com/user-attachments/assets/5d5e71c0-6ba4-4cae-a6a5-f52d8248e4c2" />


```
CORS Missing Allow Origin
AxiosError: Network Error
```

### Evidência 3 – Erros de segurança no login Google

<img width="1041" height="802" alt="{D6AE244B-8090-4BC3-9129-716A2D15AFC3}" src="https://github.com/user-attachments/assets/42cdc79c-9940-493e-93db-9b4177941bde" />

```
Content-Security-Policy: bloqueou execução de script inline
```

---

# 🔁 Cenário 1 – Login / Cadastro via Email

## Passo a Passo

1. Acessar a página inicial do sistema
2. Inserir um email válido no campo **E-mail**
3. Clicar no botão **Continuar**
4. O sistema tenta enviar um **OTP**

## Resultado Atual

O sistema retorna erro no console:

```
AxiosError: Network Error
```

E a requisição falha devido a erro no backend:

```
API key does not start with "SG."
Erro ao conectar ao MongoDB: uri undefined
```

## Resultado Esperado

O sistema deveria:

1. Validar o email
2. Enviar OTP via serviço de email
3. Exibir tela para inserir o código
4. Permitir autenticação do usuário

---

# 🔁 Cenário 2 – Login / Cadastro via Google

## Passo a Passo

1. Acessar a tela de login
2. Clicar em **Entrar com Google**
3. Autorizar login no Google

## Resultado Atual

A autenticação falha e o console apresenta:

```
Content-Security-Policy blocked inline script
Cookie rejected due to invalid domain
```

Além disso, a requisição para backend falha devido ao erro de inicialização do servidor.

## Resultado Esperado

O sistema deveria:

1. Redirecionar para autenticação Google
2. Receber token OAuth
3. Criar ou autenticar o usuário
4. Redirecionar para o dashboard

---

# 📊 Impacto

* Login totalmente indisponível
* Cadastro de usuários bloqueado
* Integrações externas (SendGrid / MongoDB) não funcionam
* Frontend apresenta múltiplos erros derivados

**Impacto no negócio:** Usuários não conseguem acessar a plataforma.

---

# 🔎 Causa Raiz (Root Cause)

| Problema              | Causa                                                       |
| --------------------- | ----------------------------------------------------------- |
| SendGrid API inválida | API Key não configurada corretamente (não inicia com `SG.`) |
| Falha conexão MongoDB | Variável de ambiente `MONGODB_URI` está `undefined`         |
| Backend crash         | Processo Node encerra por erro de inicialização             |
| CORS errors           | Backend não responde às requisições                         |
| OAuth falhando        | Backend indisponível para validar autenticação              |

---

# 🛠 Sugestões de Correção

### Backend

1. Corrigir variável de ambiente do **SendGrid**

2. Definir corretamente **MongoDB URI**

3. Adicionar validação no startup da aplicação

4. Configurar CORS corretamente

5. ao resolver esses erros no backend possivelmente vai resolver os erros 500 no frontend sendo possivel fazer login/cadastro novamente

### DevOps

Verificar no **Vercel / Environment Variables**:

* SENDGRID_API_KEY
* MONGODB_URI
* NEXTAUTH_URL
* GOOGLE_CLIENT_ID
* GOOGLE_CLIENT_SECRET

---

# 📊 Classificação de Severidade (Padrão QA)

| Severidade | Descrição                        |
| ---------- | -------------------------------- |
| S1         | Sistema indisponível             |
| S2         | Funcionalidade crítica com falha |
| S3         | Problema moderado                |
| S4         | Problema visual                  |

**Classificação deste bug:** **S1 – Crítico**

---
