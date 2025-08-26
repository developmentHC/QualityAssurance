# 📋 Relatório de Testes - Task: Atualização de Componentes de Login e Cadastro

## 🔗 Links da Task
- **Pull Request:** [feat: update components on screens](https://github.com/developmentHC/conectaBemFront/pull/28)  
- **Board:** [Task no board](https://github.com/users/developmentHC/projects/4/views/1?pane=issue&itemId=125411172&issue=developmentHC%7CconectaBemFront%7C30)  
- **Figma (Fluxo 1):** [Design no Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8462-94204&p=f&t=lpmGFUyCWGYI4NQC-0)  

---

## ✅ O que foi feito na task
- Atualização dos componentes de **Login e Cadastro** seguindo o **Fluxo 1 do Figma** (principalmente versão mobile).
- Ajustes visuais em:
  - **Header**
  - **SearchInput**
  - **Botão de reenviar código**
  - **Remoção do componente `backStepButton`** das telas de cadastro.
- Alterações apenas **visuais**, sem impacto direto em regras de negócio.
- Dependências: fluxo de **Login e envio de código** via backend.

---

## 🧪 Ambiente de Testes
- **Sistema Operacional:** Windows 11  
- **Navegador:** Firefox v142.0 (64 bits)  
- **Ambiente:** [conectabems-projects.vercel.app](https://conectabems-projects.vercel.app)  
- **Dados necessários:** não é preciso inserir dados reais; código de verificação obtido via backend.  

---

## 🔍 Resultados dos Testes

### 1. **Swagger**
- ❌ Swagger desatualizado → dificulta o acesso à API e execução de testes manuais/automatizados.  
  **Sugestão:** atualizar documentação para melhor suporte ao QA e Devs.

---

### 2. **Fluxo de Cadastro**
- 🚨 **Bug Bloqueante**: Após receber e enviar o código com sucesso, o usuário é redirecionado para a **Home**, ao invés de continuar o fluxo de cadastro.  
  **Impacto:** impede a conclusão do cadastro.  

---

### 3. **Botão "Reenviar código"**
- ⚠️ **Inconsistência visual**:
  - No **Figma (fluxo novo)** → botão está alinhado à **direita**.  
  - No **site em produção** → botão aparece alinhado à **esquerda**.  

---

## 📌 Conclusão
- Foram identificados **ajustes pendentes** para alinhar a implementação ao design definido no Figma.  
- O fluxo de cadastro está **quebrado**, sendo necessário correção imediata para permitir que usuários consigam finalizar o processo.  
- Recomendação de **atualizar o Swagger** para facilitar a validação dos testes manuais e automatizados.  

---

## 📎 Evidências
- Ambiente validado: [conectabems-projects.vercel.app]([https://conectabems-projects.vercel.app](https://conecta-bem-front-git-feat-update-c-62582b-conectabems-projects.vercel.app))  
- Fluxo do Figma utilizado como base: [Design no Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8462-94204&p=f&t=lpmGFUyCWGYI4NQC-0)  

