# 🐞 Bug – Erro 422 ao clicar em “Pular” na tela de Acessibilidade (Cadastro de Paciente)

**Descrição**  
Durante o fluxo de **cadastro de Paciente**, ao clicar no botão **“Pular”** na tela de acessibilidade, ocorre um erro **422 (Unprocessable Entity)**.  
O comportamento esperado seria o mesmo do cadastro de **Profissional**, no qual o botão “Pular” funciona corretamente, permitindo seguir com o cadastro mesmo sem preencher os campos de acessibilidade.

Por outro lado, se o usuário clicar em **“Continuar”** com o campo de acessibilidade vazio, o sistema **aceita normalmente** e prossegue o fluxo — comportamento inconsistente com o esperado.

---

### Ambiente de Teste
- Dispositivo: Windows 11
- Navegador: Brave v1.83.112

### Passos para reproduzir
1. Inicie o fluxo de cadastro de Paciente - https://conecta-bem-front-git-feature-72-ac-37e325-conectabems-projects.vercel.app/auth/registro-paciente.  
2. Na tela de Acessibilidade, não preencha nenhum campo.  
3. Clique em “Pular”.
4. Tente finalizar o cadastro.  

---

### Resultado esperado
O botão “Pular” deve permitir que o usuário avance no fluxo de cadastro sem preencher os campos de acessibilidade (assim como ocorre no cadastro de Profissional).

---

### Resultado obtido
Ao clicar em “Pular”, o sistema retorna **erro 422**, impedindo a continuidade do cadastro.

---

### Evidência
https://github.com/user-attachments/assets/39ecf445-8e4c-41df-ab5f-581b6caf5656

<img width="690" height="139" alt="image" src="https://github.com/user-attachments/assets/3b357eb5-a8d2-425d-91ec-0129a4533533" />

---

### Causa provável
O backend pode estar aplicando validações obrigatórias específicas para o tipo Paciente, mesmo após a remoção da obrigatoriedade dos campos de acessibilidade.  
Possivelmente o campo não está sendo tratado como opcional na request enviada ao endpoint de cadastro.

---

### Critérios de Aceite
- [x] O botão “Pular” aparece nas telas de acessibilidade para Paciente e Profissional. 
- [ ] Campos de acessibilidade não obrigatórios não geram erro no backend. 
- [ ] Mensagem pós-cadastro/login exibida corretamente.
- [ ] Comportamento consistente entre os dois tipos de usuário.  

---

### 📎 Referência
[Link da Task (Figma)](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?t=DzM25r1JfvIywQlk-0)  
**Observação:** O fluxo 1 (Profissional) já está validado e funcionando corretamente.
