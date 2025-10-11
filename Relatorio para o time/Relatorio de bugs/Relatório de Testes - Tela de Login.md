# Relatório de Testes - Bugs e Melhorias do Fluxo 1

## 🐞 Bug – Footer desalinhado na tela de Login

### Descrição  
O footer aparece fora da posição correta na tela de login.  

---

### Ambiente de Teste
- Navegadores: Brave e Firefox
- Dispositivos: Windows 11

---

### Passos para reproduzir
1. Acessar a página de login - https://conecta-bem-front.vercel.app/auth.  

---

### Resultado esperado
O footer deve permanecer fixado na parte inferior da tela, sem sobreposição ou deslocamento.

---

### Resultado obtido
O footer desloca-se para cima.

---

### Evidência
<img width="913" height="600" alt="footer" src="https://github.com/user-attachments/assets/f21b0ba4-137a-41aa-b3d7-c27135a12625" />


---

## 💡 Melhoria – Navegação incorreta ao voltar etapas no cadastro

### Descrição  
Ao tentar retornar uma etapa no fluxo de cadastro, o sistema volta ao início do processo, em vez de apenas uma etapa anterior.

---

### Ambiente de Teste
- Navegadores: Brave e Firefox
- Dispositivos: Windows 11

---

### Passos para reproduzir
1. Acesse a página de cadastro - https://conecta-bem-front.vercel.app/auth.  
2. Clique no botão "Entrar".  
3. Digite um email válido e clique no botão "Continuar".
4. Digite o código recebido.
5. Preencha os dados e vá avançando.
6. Tente voltar para a página anterior.

---

### Resultado esperado
O sistema deve retornar apenas uma etapa anterior no fluxo de cadastro.

---

### Resultado obtido
O sistema retorna à primeira etapa, reiniciando o processo.

---

### Evidência
https://github.com/user-attachments/assets/6729261e-43c7-46bf-a9af-f579bb3fe1eb

---

## 🐞 Bug – Erro 422 ao cadastro com e-mail do Google

**Descrição**  
Ao tentar autenticar-se com uma conta Google, o sistema retorna erro **422**.  
O log no console indica ausência do campo **`userId`** na resposta do backend.

---

### Ambiente de Teste
- Navegadores: Brave e Firefox
- Dispositivos: Windows 11

---

### Passos para reproduzir
1. Acesse a página de cadastro - https://conecta-bem-front.vercel.app/auth.  
2. Selecione **“Entrar com Google”**.  
3. Preencha os dados corretamente e tente finalizar o cadastro.

---

### Resultado esperado
Cadstro realizado com sucesso e redirecionamento ao dashboard do profissional.

---

### Resultado obtido
Erro **422** exibido, impedindo o cadastro.

---

### Causa provável
Log no console diz estar faltando o campo `userId`.

---

### Evidências
https://github.com/user-attachments/assets/a7ab01a9-30e8-4638-b79a-321b20f97a41

<img width="749" height="140" alt="erro 422" src="https://github.com/user-attachments/assets/b5a8a86f-9fa7-4fa7-b97b-cc5ed3ab1e62" />



## 💡 Melhoria – Código de verificação não expira após 5 minutos

**Descrição**  
O código de verificação continua sendo aceito mesmo após o tempo limite de 5 minutos, contrariando o comportamento esperado das "regras de negócio".

---

### Ambiente de Teste
- Navegadores: Brave e Firefox
- Dispositivos: Windows 11

---

### Passos para reproduzir
1. Acesse a página de cadastro - https://conecta-bem-front.vercel.app/auth.
2. Digite um email e clique no botão "Entrar".  
3. Receba o código e aguarde por mais de 5 minutos.  
4. Inserir o código recebido.

---

### Resultado esperado
Após 5 minutos, o código deve expirar e o sistema deve solicitar um novo.

---

### Resultado obtido
Código é aceito mesmo após o tempo limite.
