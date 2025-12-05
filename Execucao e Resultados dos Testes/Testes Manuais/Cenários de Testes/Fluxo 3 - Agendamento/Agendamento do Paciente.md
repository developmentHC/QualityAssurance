# Cenários de Teste — Fluxo de Agendamento Paciente
> Responsavel: Mateus QA
> Software: ConectaBem

## Cenário 1 – Acessar perfil de um profissional

**Descrição:** Testar se o usuário consegue acessar o perfil detalhado de um profissional a partir da tela inicial.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Usuário logado, profissional disponível na lista  
**Passos:**  
1. Acessar a tela inicial.  
2. Verificar a lista de profissionais disponível.  
3. Clicar em **“Ver perfil”** de um profissional.  

**Resultado Esperado:**  
- Usuário é redirecionado para a página de detalhes do profissional.  
- As informações completas do profissional são exibidas (nome, especialidade, serviços, etc).  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 2 – Selecionar um serviço e solicitar agendamento

**Descrição:** Verificar se é possível selecionar um serviço e enviar solicitação de agendamento com sucesso.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Usuário logado, perfil profissional aberto, serviços disponíveis  
**Passos:**  
1. Selecionar um serviço através do checkbox.  
2. Clicar em **“Solicitar Agendamento”**.  
3. Escolher uma data e hora disponíveis.  
4. Clicar novamente em **“Solicitar Agendamento”**.  

**Resultado Esperado:**  
- Sistema envia a solicitação.  
- Mensagem de sucesso: **“Solicitação enviada com sucesso”**.  
- Detalhes do agendamento (profissional, serviço, data/hora) aparecem.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 3 – Selecionar múltiplos serviços

**Descrição:** Testar o agendamento múltiplo selecionando vários serviços ao mesmo tempo.  
**Tipo de Teste:** Funcional  
**Prioridade:** Média  
**Dados de teste:** Usuário logado, múltiplos serviços disponíveis  
**Passos:**  
1. Marcar mais de um serviço nos checkboxes.  
2. Clicar em **“Solicitar Agendamento”**.  
3. Escolher data e hora.  
4. Confirmar agendamento.  

**Resultado Esperado:**  
- Solicitação enviada para todos os serviços selecionados.  
- Mensagem de sucesso exibida.  
- Detalhes dos serviços na confirmação.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 4 – Tentativa de agendamento sem selecionar serviço

**Descrição:** Verificar comportamento do sistema quando o usuário tenta agendar sem selecionar serviço.  
**Tipo de Teste:** Funcional / Validação de entrada  
**Prioridade:** Alta  
**Dados de teste:** Usuário logado, nenhum serviço selecionado  
**Passos:**  
1. Não selecionar nenhum checkbox.  
2. Clicar em **“Solicitar Agendamento”**.  

**Resultado Esperado:**  
- Mensagem de alerta: **“Selecione pelo menos um serviço”**.  
- Usuário permanece na mesma tela.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 5 – Falha ao enviar solicitação de agendamento

**Descrição:** Testar se o sistema trata corretamente falhas de comunicação ou conflito de agenda.  
**Tipo de Teste:** Teste de erro / Robustez  
**Prioridade:** Alta  
**Dados de teste:** Simular falha servidor ou conflito de horário  
**Passos:**  
1. Selecionar serviço e data/hora.  
2. Clicar em **“Solicitar Agendamento”**.  

**Resultado Esperado:**  
- Mensagem: **“Ops! Não conseguimos concluir”**.  
- Botão **“Realizar Novo Agendamento”** exibido.  
- Ao clicar, volta para seleção de data/hora.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 6 – Cancelar e refazer agendamento

**Descrição:** Validar que o usuário pode refazer o agendamento após receber erro na primeira tentativa.  
**Tipo de Teste:** Funcional / Fluxo alternativo  
**Prioridade:** Média  
**Dados de teste:** Mensagem de erro exibida em tentativa anterior  
**Passos:**  
1. Ao ver mensagem de erro, clicar em **“Realizar Novo Agendamento”**.  
2. Selecionar nova data/hora e clicar em **“Solicitar Agendamento”**.  

**Resultado Esperado:**  
- Nova solicitação enviada com sucesso.  
- Mensagem de sucesso exibida.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 7 – Validação de interface

**Descrição:** Checar se todos os elementos da interface estão visíveis, funcionais e corretamente escritos.  
**Tipo de Teste:** Teste de Interface / Usabilidade  
**Prioridade:** Média  
**Dados de teste:** Interface carregada com controles ativos  
**Passos:**  
1. Verificar presença e funcionamento dos checkboxes.  
2. Verificar texto dos botões (**“Ver perfil”**, **“Solicitar Agendamento”**).  
3. Validar mensagens exibidas (ortografia, formatação, clareza).  

**Resultado Esperado:**  
- Todos os elementos visíveis e interativos.  
- Textos corretos e consistentes.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 8 – Teste de usabilidade (fluxo completo)

**Descrição:** Validar o fluxo total do agendamento desde login até confirmação, avaliando usabilidade e tempo.  
**Tipo de Teste:** Usabilidade / Funcional  
**Prioridade:** Alta  
**Dados de teste:** Usuário válido e ambiente funcional  
**Passos:**  
1. Logar no sistema.  
2. Selecionar um profissional.  
3. Escolher um serviço.  
4. Solicitar agendamento, selecionar data/hora, confirmar.  

**Resultado Esperado:**  
- Fluxo completo sem erros.  
- Tempo médio aceitável para conclusão.  
- Confirmação clara no final.  

**Resultado Obtido:** Passou / Não passou
