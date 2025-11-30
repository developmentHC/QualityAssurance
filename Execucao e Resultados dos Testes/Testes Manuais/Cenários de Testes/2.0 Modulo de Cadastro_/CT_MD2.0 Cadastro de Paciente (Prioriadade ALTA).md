# CT_MD1.0 — Cadastro de Paciente (Fluxo Completo e Complexo)
### Prioridade: ALTA  
### Autor: Victor Nadoti  
### Data: 2025-08-28  
### Sistema: ConectaBem  

---

# 🎯 Objetivo
Validar todo o fluxo de cadastro de Paciente via login Google, incluindo:
- Autenticação válida,
- Seleção de perfil,
- Etapa 1/4 com todas as validações obrigatórias (nome, idade mínima, CEP, ViaCEP, endereço),
- Persistência parcial,
- Navegação correta para a Etapa 2/4.

---

# 📦 Pré-condições
- Usuário possui **conta Google válida**.
- Autorização do OAuth está funcional.
- Não existe cadastro anterior usando o mesmo e-mail Google.
- API **ViaCEP disponível** e respondendo.
- A página inicial do ConectaBem está acessível.

---

# 🧩 Partições de Equivalência Utilizadas
- **Google (Válida)** → conta existente + permissão concedida  
- **Dados do Formulário (Válidos)** → nome, idade ≥18, CEP existente, endereço mínimo 3 caracteres  
- **Dados do Formulário (Inválidos)** → usados para gerar microvalidações durante o fluxo (ex.: erro de idade, CEP malformado)

---

# 👉 ID: CADS_SOCIAL_001_CPLX

# Título
**Cadastro completo de Paciente via Google com validações avançadas e auto-preenchimento de endereço**

---

# 🔎 Passos Detalhados

## 🟦 Etapa 0 — Autenticação
1. **DADO** que o usuário acessa a *Home* do ConectaBem.  
2. **QUANDO** clicar em **Entrar**.  
3. **E** selecionar **"Login com Google"**.  
4. **E** confirmar a permissão solicitada pelo OAuth (nome + e-mail).  
5. **ENTÃO** o sistema deve redirecionar para a tela de **Seleção de Perfil**.  

---

## 🟪 Etapa 0.5 — Seleção de Perfil
6. **QUANDO** o sistema exibir o pop-over explicativo sobre tipos de perfil.  
7. **E** o usuário selecionar **"Paciente"**.  
8. **ENTÃO** o sistema deve abrir o fluxo de cadastro “Etapa 1/4”.

---

## 🟩 Etapa 1/4 — Informações básicas (Tela enviada)

### 🔸 Validação campo a campo durante o fluxo

9. **QUANDO** o usuário digitar o nome **"João Silva"**  
   - **ENTÃO** o campo deve ficar válido (≥ 3 caracteres e apenas 1 espaço entre palavras).

10. **QUANDO** o usuário inserir **"15/08/2010"** (idade <18)  
    - **ENTÃO** o sistema deve exibir:  
      **"Idade mínima para cadastro é 18 anos"**  
    - *E mantém o botão “Continuar” desabilitado.*

11. **QUANDO** corrigir para **"15/08/1995"**  
    - **ENTÃO** o campo passa a ficar válido.

---

### 🔸 Validação do CEP e ViaCEP

12. **QUANDO** o usuário digitar **"12345-678"**  
    - **E** clicar fora do campo ou parar de digitar  
    - **ENTÃO** o sistema deve consultar o ViaCEP automaticamente.

13. **SE** o ViaCEP retornar endereço válido  
    - O sistema deve preencher automaticamente:  
      - Logradouro  
      - Bairro  
      - Cidade  
      - Estado  

14. **QUANDO** o usuário apagar o CEP e inserir um formato inválido  
    - Ex.: **"123"**  
    - **ENTÃO** deve exibir:  
      **"CEP inválido — use o formato 00000-000"**  
    - E o auto-preenchimento deve ser limpo.

---

### 🔸 Preenchimento dos demais campos

15. **QUANDO** o usuário preencher:
    - Número: **"120"**  
    - Bairro: já preenchido  
    - Cidade: já preenchido  
    - Estado: já preenchido  

16. **E** todos os campos obrigatórios estiverem válidos  
    - **ENTÃO** o botão **“Continuar”** deve ser habilitado.

---

## 🟧 Etapa Final da Fase 1

17. **QUANDO** o usuário clicar em **Continuar**  
18. **ENTÃO** o sistema deve:
    - Validar novamente todos os campos  
    - Persistir os dados temporariamente (store/session)  
    - Redirecionar para **Etapa 2/4 - Preferências e atendimento**  

---

# 📌 Critérios de Aceitação

✔️ Autenticação Google deve ser concluída com permissão explícita.  
✔️ A tela de seleção de perfil deve ser exibida com o pop-over informativo.  
✔️ O botão “Continuar” só habilita quando **todos os campos obrigatórios** estiverem válidos.  
✔️ A idade deve ser ≥18 e ≤110 anos.  
✔️ CEP deve seguir o formato `00000-000` e ser validado via API.  
✔️ Em caso de CEP inválido → erro + reset dos campos.  
✔️ Auto-preenchimento deve ocorrer quando ViaCEP retornar dados.  
✔️ Labels, bordas e textos auxiliares devem ficar vermelhos em caso de erro.  
✔️ Ao prosseguir, o sistema deve salvar dados temporários.  
✔️ Usuário deve ser redirecionado corretamente para Etapa 2/4.  
✔️ Nenhum campo obrigatório pode ficar em branco.  
✔️ Ao atualizar a página, os dados já preenchidos da Etapa 1/4 devem permanecer (persistência local).  
