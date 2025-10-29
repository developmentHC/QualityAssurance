# Cenários de Teste — Fluxo de Agendamento Profissional

---

## Cenário 1 – Visualizar agendamentos pendentes na tela inicial

**Pré-condição:** Profissional está logado no sistema.

**Passos:**
1. Acessar a tela inicial (home do profissional).  
2. Verificar a lista de agendamentos pendentes.  

**Resultado Esperado:**  
- Sistema exibe corretamente todos os agendamentos pendentes.  
- Cada agendamento mostra nome do paciente, serviço, data e hora.  
- Se não houver pendentes, aparece mensagem: **“Não há agendamentos pendentes.”**

---

## Cenário 2 – Visualizar informações completas de um agendamento pendente

**Pré-condição:** Profissional possui pelo menos um agendamento pendente.

**Passos:**
1. Na tela inicial, localizar um agendamento pendente.  
2. Clicar em **“Informações do Agendamento”**.  

**Resultado Esperado:**  
- Sistema redireciona para a página de detalhes do agendamento.  
- São exibidas informações completas: paciente, serviço, data, hora e status atual (**Pendente de Confirmação**).  

---

## Cenário 3 – Confirmar agendamento a partir da tela inicial

**Pré-condição:** Profissional possui um agendamento pendente.  

**Passos:**  
1. Na tela inicial, localizar o agendamento desejado.  
2. Clicar em **“Confirmar Agendamento”**.  

**Resultado Esperado:**  
- Status do agendamento muda para **“Agendamento Confirmado”**.  
- Mensagem de confirmação é exibida.  
- Paciente recebe notificação informando que o agendamento foi confirmado.  

---

## Cenário 4 – Acessar a página “Meus Agendamentos”

**Pré-condição:** Profissional está logado.  

**Passos:**  
1. Na tela inicial, clicar em **“Ver todos os agendamentos”**.  

**Resultado Esperado:**  
- Sistema redireciona para a página **“Meus Agendamentos”**.  
- É exibido o calendário com os agendamentos de cada dia.  
- Agendamentos são organizados por status: **Confirmados**, **Pendentes** e **Cancelados**.  

---

## Cenário 5 – Filtrar agendamentos no calendário

**Pré-condição:** Profissional possui agendamentos em diferentes dias e com diferentes status.

**Passos:**  
1. Acessar a página **“Meus Agendamentos”**.  
2. Selecionar datas diferentes no calendário.  

**Resultado Esperado:**  
- O calendário atualiza automaticamente para mostrar apenas os agendamentos do dia selecionado.  
- Cada agendamento exibe o status com rótulo visual distinto.  

---

## Cenário 6 – Confirmar agendamento pela página de informações

**Pré-condição:** Profissional acessou as informações de um agendamento pendente.

**Passos:**  
1. Clicar em **“Confirmar Agendamento”** na tela de informações.  

**Resultado Esperado:**  
- Status do agendamento muda para **“Agendamento Confirmado”**.  
- Mensagem é atualizada na tela substituindo “Pendente de Confirmação” por “Agendamento Confirmado”.  
- Paciente recebe notificação de confirmação.  

---

## Cenário 7 – Cancelar agendamento

**Pré-condição:** Profissional acessou um agendamento pendente ou confirmado.  

**Passos:**  
1. Clicar em **“Cancelar Agendamento”**.  
2. Confirmar a ação, se solicitado.  

**Resultado Esperado:**  
- Status do agendamento muda para **“Agendamento Cancelado”**.  
- Mensagem de confirmação do cancelamento é exibida.  
- Paciente recebe notificação informando o cancelamento.  

---

## Cenário 8 – Tentativa de confirmar agendamento já cancelado

**Pré-condição:** Agendamento já se encontra no status **Cancelado**.

**Passos:**  
1. Acessar a página de informações do agendamento cancelado.  
2. Clicar em **“Confirmar Agendamento”**.  

**Resultado Esperado:**  
- Sistema impede a ação e exibe mensagem: **“Agendamento já cancelado.”**  
- Status permanece como **Cancelado**.  

---

## Cenário 9 – Falha ao confirmar ou cancelar agendamento

**Pré-condição:** Sistema com instabilidade ou erro de comunicação com o servidor.  

**Passos:**  
1. Tentar confirmar ou cancelar um agendamento.  

**Resultado Esperado:**  
- Sistema exibe mensagem: **“Ops! Não conseguimos concluir a ação.”**  
- Nenhuma alteração de status é aplicada.  
- Usuário pode tentar novamente.  

---

## Cenário 10 – Ver atualização automática de status

**Pré-condição:** Profissional confirmou ou cancelou um agendamento recentemente.

**Passos:**  
1. Voltar para a tela inicial ou “Meus Agendamentos”.  

**Resultado Esperado:**  
- Lista de agendamentos é atualizada automaticamente.  
- O status exibido reflete a última ação realizada (Confirmado ou Cancelado).  

---

## Cenário 11 – Sessão expirada durante ação

**Pré-condição:** Sessão do profissional expirada.  

**Passos:**  
1. Tentar acessar **“Meus Agendamentos”** ou confirmar um agendamento.  

**Resultado Esperado:**  
- Sistema redireciona para a tela de login.  
- Mensagem exibida: **“Sessão expirada. Faça login novamente.”**  

---

## Cenário 12 – Validação de interface

**Passos:**  
1. Verificar a presença e o funcionamento dos botões (**“Confirmar Agendamento”**, **“Cancelar Agendamento”**, **“Ver todos os agendamentos”**).  
2. Validar textos e mensagens exibidas.  
3. Testar visualização em dispositivos móveis.  

**Resultado Esperado:**  
- Todos os botões funcionam corretamente.  
- Textos estão claros, padronizados e sem erros.  
- Layout é responsivo e mantém usabilidade adequada.  

---

## Cenário 13 – Teste de fluxo completo (confirmação)

**Passos:**  
1. Logar como profissional.  
2. Visualizar agendamentos pendentes.  
3. Acessar informações de um agendamento.  
4. Confirmar o agendamento.  
5. Verificar atualização na tela inicial e na página “Meus Agendamentos”.  

**Resultado Esperado:**  
- Fluxo completo ocorre sem erros.  
- Agendamento é confirmado e visível nas duas telas.  
- Paciente é notificado com sucesso.  

---

## Cenário 14 – Teste de fluxo completo (cancelamento)

**Passos:**  
1. Logar como profissional.  
2. Acessar um agendamento pendente ou confirmado.  
3. Cancelar o agendamento.  
4. Verificar atualização na tela inicial e no calendário.  

**Resultado Esperado:**  
- Agendamento é cancelado corretamente.  
- Status atualizado para **Cancelado** em todas as telas.  
- Paciente é notificado do cancelamento.  
