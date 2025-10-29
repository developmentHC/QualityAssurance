# Cenários de Teste — Fluxo de Agendamento Paciente

---

## Cenário 1 – Acessar perfil de um profissional

**Pré-condição:** Usuário está logado no sistema.

**Passos:**
1. Acessar a tela inicial.  
2. Verificar a lista de profissionais disponível.  
3. Clicar em **“Ver perfil”** de um profissional.  

**Resultado Esperado:**
- Usuário é redirecionado para a página de detalhes do profissional.  
- As informações completas do profissional são exibidas (nome, especialidade, serviços, etc).  

---

## Cenário 2 – Selecionar um serviço e solicitar agendamento

**Pré-condição:** Usuário está na página de perfil do profissional.

**Passos:**
1. Selecionar um serviço através do checkbox.  
2. Clicar em **“Solicitar Agendamento”**.  
3. Escolher uma data e hora disponíveis.  
4. Clicar novamente em **“Solicitar Agendamento”**.  

**Resultado Esperado:**
- Sistema envia a solicitação.  
- Mensagem de sucesso é exibida: **“Solicitação enviada com sucesso”**.  
- São mostrados os detalhes do agendamento (profissional, serviço, data e hora).  

---

## Cenário 3 – Selecionar múltiplos serviços

**Pré-condição:** Usuário está na página do profissional.

**Passos:**
1. Marcar mais de um serviço nos checkboxes.  
2. Clicar em **“Solicitar Agendamento”**.  
3. Escolher data e hora.  
4. Confirmar agendamento.  

**Resultado Esperado:**
- Solicitação é enviada para todos os serviços selecionados.  
- Mensagem de sucesso é exibida.  
- Detalhes dos serviços aparecem na confirmação.  

---

## Cenário 4 – Tentativa de agendamento sem selecionar serviço

**Pré-condição:** Usuário está na página do profissional.

**Passos:**
1. Não selecionar nenhum checkbox.  
2. Clicar em **“Solicitar Agendamento”**.  

**Resultado Esperado:**
- Sistema exibe mensagem de alerta impedindo o avanço: **“Selecione pelo menos um serviço”**.  
- Usuário permanece na mesma tela.  

---

## Cenário 5 – Falha ao enviar solicitação de agendamento

**Pré-condição:** Sistema com problema de comunicação com o servidor ou conflito de horário.

**Passos:**
1. Selecionar serviço e data/hora.  
2. Clicar em **“Solicitar Agendamento”**.  

**Resultado Esperado:**
- Sistema exibe mensagem: **“Ops! Não conseguimos concluir”**.  
- Exibe botão **“Realizar Novo Agendamento”**.  
- Ao clicar no botão, usuário volta à etapa de seleção de data/hora.  

---

## Cenário 6 – Cancelar e refazer agendamento

**Pré-condição:** Usuário tentou agendar e ocorreu falha.

**Passos:**
1. Ao ver mensagem de erro, clicar em **“Realizar Novo Agendamento”**.  
2. Selecionar nova data/hora e clicar em **“Solicitar Agendamento”**.  

**Resultado Esperado:**
- Nova solicitação é enviada com sucesso.  
- Mensagem de sucesso exibida.  

---

## Cenário 7 – Validação de interface

**Passos:**
1. Verificar presença e funcionamento dos checkboxes.  
2. Verificar texto dos botões (**“Ver perfil”**, **“Solicitar Agendamento”**).  
3. Validar mensagens exibidas (ortografia, formatação, clareza).  

**Resultado Esperado:**
- Todos os elementos estão visíveis e interativos.  
- Textos corretos e consistentes.  

---

## Cenário 8 – Teste de usabilidade (fluxo completo)

**Passos:**
1. Logar no sistema.  
2. Selecionar um profissional.  
3. Escolher um serviço.  
4. Solicitar agendamento, selecionar data/hora, confirmar.  

**Resultado Esperado:**
- Fluxo completo sem erros.  
- Tempo médio até conclusão aceitável.  
- Confirmação clara ao final.  
