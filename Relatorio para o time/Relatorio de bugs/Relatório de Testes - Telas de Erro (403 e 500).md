# 🐞 Bug – Tela de Erro 500: Comportamento incorreto ao clicar em “Tentar novamente” seguido de “Voltar ao início”

**Descrição**  
Na tela de erro **500 (Erro Interno do Servidor)**, foi identificado um comportamento incorreto na sequência de ações dos botões.  
Quando o usuário clica primeiro em **“Tentar novamente”** e depois em **“Voltar ao início”**, ocorre um erro e a navegação não é concluída corretamente.  
Por outro lado, se o usuário clicar diretamente em **“Voltar ao início”**, o redirecionamento funciona como esperado.

---

### Passos para reproduzir
1. Entrar na tela de erro 500 - https://conecta-bem-front-git-feat-error-pages-conectabems-projects.vercel.app/teste-500.  
2. Clicar em **“Tentar novamente”**.  
3. Em seguida, clicar em **“Voltar ao início”**.  

---

### Resultado esperado
Após clicar em “Voltar ao início”, o usuário deve ser redirecionado corretamente para a página inicial, independentemente de ter clicado em “Tentar novamente” antes.

---

### Resultado obtido
Ao seguir a sequência “Tentar novamente” → “Voltar ao início”, o redirecionamento falha, e o sistema mantém o estado de erro.

---

### Evidência
https://github.com/user-attachments/assets/bbab5466-cda8-45cd-8319-dcfe16691abc

---

### Causa provável
O problema parece estar relacionado ao **Next.js (App Router)**, quando uma **Server Component** (assíncrona dentro de `/app`) lança uma exceção não tratada.  
Após o “Tentar novamente”, o estado da árvore de componentes não é restaurado corretamente, impactando a navegação subsequente.

---

### Critérios de Aceite
- [ ] Botões de ação funcionais (ex: Tentar novamente, Voltar à Home, Login).  
- [x] Telas 403 e 500 implementadas conforme design no Figma.
- [x] Layout responsivo no mobile e desktop (testado no Brave / Android 11 ✅).  
- [x] Consistência visual e de comportamento com a tela 404.

---

### 📎 Referência
[Figma – Squad Design ConectaBem]([https://www.figma.com/file/xxxxx](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=3001-40619&t=5yN0eamB1GnFeiKU-0))
