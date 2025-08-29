# 📝 Relatório de Teste - Correção de Bugs  
> Sistema: ConectaBem  
> Teste realizado em: Cadastro de Profissionais  
> Testador: Miguel Luis  
> Data: 2025-08-28  

---

## 🔗 Referências  
- [Task no GitHub](https://github.com/users/developmentHC/projects/4/views/1?pane=issue&itemId=125403133&issue=developmentHC%7CconectaBemFront%7C31)  
- [Pull Request](https://github.com/developmentHC/conectaBemFront/pull/38)  
- [Protótipo Figma](https://www.figma.com/design/NtXWClFNNGscXzSd38vwmX/Squad-Design_ConectaBem_v.28.07.25?node-id=8462-94204&p=f&t=917Yrapw45HZ9V4y-0)  

---

## 🐞 Bugs Analisados

### (Etapa 1) Bug 1 - Botão "Continuar" não ativa de imediato
- **Descrição:** O botão "Continuar" só ativa após apagar e preencher novamente um campo, mesmo com todos os campos corretos.  
- **Passos para reproduzir:**
  1. Entrar no link da vercel (ConectaBem).  
  2. Preencher todos os campos corretamente na etapa 1 do cadastro.  
  3. Verificar se o botão "Continuar" ativa automaticamente.  
- ✅ **Status:** **Resolvido**

---

### (Etapa 2) Bug 2 - Layout diferente do Figma  
- **Descrição:** A tela da etapa 2 estava diferente do protótipo no Figma.  
- **Passos para reproduzir:**
  1. Entrar no link da vercel (ConectaBem).  
  2. Preencher todos os campos corretamente até a etapa 2.  
  3. Comparar o layout da etapa 2 com o Figma.
  4. - ✅ **Status:** **Resolvido**

---

### (Etapa 2) Bug 3 - Mensagem de erro em inglês  
- **Descrição:** Mensagem de erro do campo "Número" estava em inglês, diferente do Figma.  
- **Passos para reproduzir:**
  1. Entrar no link da vercel (ConectaBem).  
  2. Preencher todos os campos corretamente até a etapa 2.  
  3. Clicar no campo "Número" e verificar a mensagem de erro. 
- ✅ **Status:** **Resolvido**

---

### (Etapa 3) Bug 4 - Falta do campo de sugestão de especialidade  
- **Descrição:** Não existia um campo de sugestão de especialidade conforme protótipo do Figma.  
- **Passos para reproduzir:**
  1. Entrar no link da vercel (ConectaBem).  
  2. Preencher todos os campos corretamente até a etapa 3.  
  3. Verificar se existe um campo de sugestão de especialidade.   
- ✅ **Status:** **Resolvido**

---

### (Etapa 4) Bug 5 - Link dos termos de uso não funcional  
- **Descrição:** O link dos termos de uso não redirecionava para nenhuma página.  
- **Passos para reproduzir:**
  1. Entrar no link da vercel (ConectaBem).  
  2. Preencher todos os campos corretamente até a etapa 4.  
  3. Verificar se o link dos termos de uso abre os documentos.  
- ⏳ **Status:** **Funcionalidade ainda não implementada**  

---

## 📌 Conclusão
- **Bugs Resolvidos:** 3 (Etapa 1, Etapa 2 - mensagem de erro, Etapa 3)  
- **Bugs Pendentes:** 
  - Etapa 4: link dos termos de uso (aguardando implementação da página).  

✅ O fluxo de cadastro encontra-se mais estável, com a maioria dos problemas corrigidos. Restam pendências ligadas ao **Design** e à **implementação de funcionalidades futuras**.  

---

