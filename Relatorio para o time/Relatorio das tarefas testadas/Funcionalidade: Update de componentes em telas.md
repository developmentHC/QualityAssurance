# 📋 Relatório de Testes(atualizado) - Task: Atualização de Componentes de Login e Cadastro

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

### 1. **Swagger**(pendente)
- ❌ Swagger desatualizado → dificulta o acesso à API e execução de testes manuais/automatizados.  
  **Sugestão:** atualizar documentação para melhor suporte ao QA e Devs.

---

### 2. **Fluxo de Cadastro**(pendente)
- 🚨 **Bug Bloqueante**: Após receber e enviar o código com sucesso, o usuário é redirecionado para a **Home**, ao invés de continuar o fluxo de cadastro.  
  **Impacto:** impede a conclusão do cadastro.  

---

### 3. **Botão "Reenviar código"**(corrigido)
- ⚠️ **Inconsistência visual**:
  - No **Figma (fluxo novo)** → botão está alinhado à **direita**.  
  - No **site em produção** → botão aparece alinhado à **esquerda**. 

### 4. **BackStepButton(versão mobile na tela de login) não redireciona ao ser clicado rapidamente **(corrigido)
- ⚠️ **Bug de redirecionamento**:
  - Ao clicar no botão pelo navegador firefox v142 o usuario não é redirecionado de volta a home**.
  - Ao clicar no botão pelo navegador OperaGx o usuario é redirecionado corretamente
  - Evidencia: https://drive.google.com/file/d/1RhrcZ1qYGmTqPBMwIZYwhDXGlfu9XTv0/view. 
ambientes testado:
QA -
Sistema: windows 11 64 bits
Navegador firefox 142

Dev -
OperagX
Fluxo de atualização: Early Access
Core: 120.0.5543.204
Sistema: Windows 10 64-bit
Versão do Chromium: 135.0.7049.115
 

---

## 📌 Conclusão 
- O fluxo de cadastro está **quebrado**, sendo necessário correção imediata para permitir que usuários consigam finalizar o processo.  
- Recomendação de **atualizar o Swagger** para facilitar a validação dos testes manuais e automatizados.  
- Bug encontrado na versão mobile ao clicar no backStepButton
- a task no que pretendia fazer que é atualizar o visual dos componentes está finalizada.
---

## 📎 Evidências
- Ambiente validado: [conectabems-projects.vercel.app]([https://conectabems-projects.vercel.app](https://conecta-bem-front-git-feat-update-c-62582b-conectabems-projects.vercel.app))  
- Fluxo do Figma utilizado como base: [Design no Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8462-94204&p=f&t=lpmGFUyCWGYI4NQC-0)  

