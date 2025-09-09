# 📝 Relatório de Testes – Restaurar PRs Perdidos (#41)

**Branches Testadas:**
- [feat/homepage](https://github.com/developmentHC/conectaBemFront/tree/feat/homepage)  
- [refactor/authentication-logic](https://github.com/developmentHC/conectaBemFront/tree/refactor/authentication-logic)  
- [feat-change-address](https://github.com/developmentHC/conectaBemFront/tree/feat-change-address)  
- [agendamento](https://github.com/developmentHC/conectaBemFront/tree/agendamento)  

**Task:**  
[Link da task no GitHub](https://github.com/users/developmentHC/projects/5/views/1?pane=issue&itemId=127081614&issue=developmentHC%7CconectaBemFront%7C41)

---

## 🔹 Páginas e Fluxos Testados

### 📌 Páginas:
- `/` – Página inicial (Home).  
- `/search` – Página de busca de profissionais.  
- `/address` – Página de gerenciamento de endereços do usuário.  
- `/scheduling` – Página de agendamentos.  
- `/scheduling/professional-profile` – Página de perfil do profissional.  

---

### 🏠 Home (`/`)
- Página carregando corretamente.  
- Algumas mudanças visuais e dúvidas com o time de design precisam ser alinhadas.  
- Observações:  
  - Existem **duas versões da Home**. O fluxo 2 possui botão de filtro no campo de busca, enquanto o fluxo 1 não possui.  verei com os designs qual versão seguir.  
  - **Texto principal (H1 e parágrafo):**  
    ```html
    <h1 class="lg:text-5xl text-2xl font-semibold">
      Conecta Bem: <br> O cuidado que acolhe.
    </h1>
    ```  
    A `div` do texto está desalinhada em relação à imagem (um pouco acima, não centralizada).  
    [Referência no Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8988-88914&t=UgAZCLf1VR7qse04-4)  
  - **Cards na Home:** Ao passar o mouse, o cursor vira `pointer`, o que pode dar a entender que são links clicáveis. Recomendo remover para evitar confusão.  
  - **Responsividade:** Alguns espaçamentos ficam estranhos em determinados desktops e tablets.  
    [Evidência](https://drive.google.com/file/d/1oHsHEpTkJ7gJMkfoxrwesrcA7NufTKdM/view?usp=sharing)  
  - Fluxo de navegação da Home para a página de busca via lupa do header está funcionando.
  - Fluxo de navegação restante está funcionando 

---

### 🔎 Busca de Profissionais (`/search`)
- Página carregando corretamente.  
- Responsividade e fluxo de busca funcionando (a implementação da busca ainda não foi feita).  
- Observações:  
  - No primeiro card há um botão **“+ ver mais”**, que não existe nos outros cards.  
  - Sugestão: manter consistência. Os links devem ser aplicados ao card inteiro ou ao nome do profissional, conforme design.  
    [Referência no Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8731-33918&t=UgAZCLf1VR7qse04-4)  

---

### 📍 Endereços (`/address`)
- Página funcionando, mas com **inconsistências visuais**.  
- Observações:  
  - No mobile há um **backstep button** duplicado (um no header e outro no corpo da página). Recomendo remover para manter consistência.  
  - No desktop recomendo remover em manter.  
  - No fluxo de login/cadastro (Fluxo 1), esse botão já havia sido removido.  
    [Evidência](https://drive.google.com/file/d/1I0iQdi452mBzVpJRdY-CHWY2B-KzIuog/view?usp=sharing)  

---

### 📅 Agendamentos (`/scheduling`)
- Página funcionando, mas com **diferenças visuais em relação ao Figma**.  
- O layout de “Meus Agendamentos” não está atualizado conforme o **Fluxo 2 (novo)**.  
  [Referência no Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8731-32825&t=UgAZCLf1VR7qse04-4)  

---

### 👨‍⚕️ Perfil do Profissional (`/scheduling/professional-profile`)
- Página ainda está com o **visual antigo do Fluxo 2**.  
- O design atual está disponível neste link:  
  [Referência no Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8731-33492&t=UgAZCLf1VR7qse04-4)  

---

## 🔐 Fluxo de Autenticação e Registro
- `/auth` – Página principal de login.  
- `/auth/confirmar-codigo` – Página de confirmação de código (OTP).  
- `/auth/registro` – Página de registro inicial.  
- `/auth/registro-paciente` – Cadastro de pacientes.  
- `/auth/registro-profissional` – Cadastro de profissionais.  

**Resultados:**  
- Login e cadastro com Google funcionando corretamente (paciente e profissional).
- porém ao fazer login e cadastro recebi uns erros no log da vercel.
- 2025-09-09T17:57:28.171Z [error] [SENDGRID] Erro ao enviar email: Client network socket disconnected before secure TLS connection was established
- [SENDGRID] FALLOUT: sandbox também falhou: Unauthorized
- link da print do log: https://drive.google.com/file/d/1VvNeOsFPTrAPiAoe5mV1doeh74z3bqYi/view?usp=sharing  
- Logout funcionando corretamente.  
- Aguardando ajuste do Pedro para validar login por e-mail.  

---

## ✅ Conclusão
- O fluxo do usuário está **funcionando corretamente**.
- A **responsividade** atende diferentes resoluções, com pequenos ajustes pendentes.  
- A **integração** entre fluxos e navegação está funcionando corretamente.   
- Existem **inconsistências visuais** entre fluxos antigos e novos, que precisam ser criadas novas tasks de atualização visual.
- Vou também achar uma extensão para relatar melhor as evidencias com prints para indicar melhor aonde está ocorrendo o problema/melhoria.
