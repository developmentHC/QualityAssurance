# Falha - Botão “Continuar” não avança no cadastro de profissional

## Descrição  
Ao tentar avançar no cadastro de um profissional, o botão **“Continuar”** não executa nenhuma ação após o clique. O fluxo permanece travado na mesma etapa do formulário, sem redirecionamento, feedback visual ou exibição de erro para o usuário.

Durante os testes, não foram identificados erros no console do navegador, DevTools ou logs da Vercel, indicando possível falha silenciosa de validação, bloqueio no submit do formulário ou inconsistência no fluxo de cadastro.

---

## Ambiente de Teste 
- **Ambientes:** Local e Homologação
- **SO:** Windows 11  
- **Navegador:** Brave v1.90.121 

---

## Passos para reproduzir 
1. Acessar a página de cadastro: https://conecta-bem-front.vercel.app/auth
2. Selecionar cadastro de profissional
3. Preencher todos os campos obrigatórios do formulário
4. Clicar no botão “Continuar”

---

## Resultado Esperado 
O sistema deve validar os dados corretamente e avançar para a próxima etapa do cadastro do profissional.

---

## Resultado Obtido  
O botão “Continuar” não executa nenhuma ação. O formulário permanece na mesma etapa, sem feedback visual, mensagem de erro, request aparente ou avanço no fluxo.

---

## Evidência  

- [Vídeo do Erro](https://github.com/user-attachments/assets/0d66ec4e-80be-45a7-9ad7-571cb935d1b0)

---

### **Hipóteses**

* Validação silenciosa bloqueando o submit do formulário
* `onSubmit` não sendo executado
* Possível falha na integração entre componentes do formulário
* Possível ausência de tratamento visual para erros de validação
* Possível problema na etapa de transição do fluxo multi-step
* Possível erro frontend ocorrendo sem propagação para console/logs

---

### **Impacto**
* Bloqueia onboarding de profissionais
* Impede conclusão do fluxo de cadastro
* Afeta diretamente aquisição e entrada de novos usuários na plataforma

---

### **Observação adicional**
* Nenhum erro foi exibido no console do navegador ou logs da Vercel durante a reprodução
* Nenhuma mensagem de erro é apresentada ao usuário na interface
* Não foi possível identificar requisição sendo disparada no momento do clique
* Comportamento sugere falha frontend antes da execução da chamada para API
