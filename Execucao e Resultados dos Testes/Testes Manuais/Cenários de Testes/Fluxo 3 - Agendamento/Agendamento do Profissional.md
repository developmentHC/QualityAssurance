# Cenários de Teste — Fluxo de Agendamento Profissional  

**Software:** ConectaBem  
**QA responsável:** Mateus QA

## Cenário 1 – Visualizar agendamentos pendentes na tela inicial

**Descrição:** Testar se o profissional consegue visualizar corretamente todos os agendamentos pendentes na tela inicial.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Profissional logado, agendamentos pendentes existentes ou não  
**Passos:**  
1. Acessar a tela inicial (home do profissional).  
2. Verificar a lista de agendamentos pendentes.  

**Resultado Esperado:**  
- Sistema exibe todos os agendamentos pendentes.  
- Cada agendamento mostra nome do paciente, serviço, data e hora.  
- Se não houver pendentes, aparece mensagem: **“Não há agendamentos pendentes.”**  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 2 – Visualizar informações completas de um agendamento pendente

**Descrição:** Verificar se o profissional pode acessar a página com detalhes completos de um agendamento pendente.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Profissional logado, agendamento pendente disponível  
**Passos:**  
1. Na tela inicial, localizar um agendamento pendente.  
2. Clicar em **“Informações do Agendamento”**.  

**Resultado Esperado:**  
- Sistema redireciona para a página de detalhes.  
- Exibe paciente, serviço, data, hora e status (**“Pendente de Confirmação”**).  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 3 – Confirmar agendamento a partir da tela inicial

**Descrição:** Testar a confirmação de agendamento diretamente pela tela inicial.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Profissional logado, agendamento pendente disponível  
**Passos:**  
1. Na tela inicial, localizar o agendamento desejado.  
2. Clicar em **“Confirmar Agendamento”**.  

**Resultado Esperado:**  
- Status muda para **“Agendamento Confirmado”**.  
- Mensagem de confirmação exibida.  
- Paciente recebe notificação da confirmação.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 4 – Acessar a página “Meus Agendamentos”

**Descrição:** Verificar acesso à página que mostra o calendário completo dos agendamentos.  
**Tipo de Teste:** Funcional  
**Prioridade:** Média  
**Dados de teste:** Profissional logado com agendamentos diversos  
**Passos:**  
1. Na tela inicial, clicar em **“Ver todos os agendamentos”**.  

**Resultado Esperado:**  
- Sistema redireciona para a página **“Meus Agendamentos”**.  
- Exibe calendário com agendamentos organizados por status.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 5 – Filtrar agendamentos no calendário

**Descrição:** Testar o filtro de agendamentos por datas diferentes no calendário.  
**Tipo de Teste:** Funcional  
**Prioridade:** Média  
**Dados de teste:** Profissional com agendamentos em várias datas e status  
**Passos:**  
1. Acessar a página **“Meus Agendamentos”**.  
2. Selecionar datas diferentes no calendário.  

**Resultado Esperado:**  
- Calendário atualiza para mostrar agendamentos do dia selecionado.  
- Cada agendamento apresenta status com rótulos visuais distintos.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 6 – Confirmar agendamento pela página de informações

**Descrição:** Verificar confirmação do agendamento na página detalhada do agendamento.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Profissional na página de informações de agendamento pendente  
**Passos:**  
1. Clicar em **“Confirmar Agendamento”** na tela de informações.  

**Resultado Esperado:**  
- Status atualiza para **“Agendamento Confirmado”**.  
- Mensagem na tela muda de “Pendente de Confirmação” para “Agendamento Confirmado”.  
- Paciente recebe notificação da confirmação.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 7 – Cancelar agendamento

**Descrição:** Testar o cancelamento de um agendamento pendente ou confirmado.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Profissional logado, agendamento pendente ou confirmado  
**Passos:**  
1. Clicar em **“Cancelar Agendamento”**.  
2. Confirmar a ação, se solicitado.  

**Resultado Esperado:**  
- Status muda para **“Agendamento Cancelado”**.  
- Mensagem de confirmação exibida.  
- Paciente é notificado do cancelamento.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 8 – Tentativa de confirmar agendamento já cancelado

**Descrição:** Verificar que o sistema impede confirmação de agendamento com status cancelado.  
**Tipo de Teste:** Validação  
**Prioridade:** Média  
**Dados de teste:** Agendamento com status cancelado  
**Passos:**  
1. Acessar página de informações do agendamento cancelado.  
2. Clicar em **“Confirmar Agendamento”**.  

**Resultado Esperado:**  
- Sistema exibe mensagem: **“Agendamento já cancelado.”**.  
- Status permanece como **“Cancelado”**.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 9 – Falha ao confirmar ou cancelar agendamento

**Descrição:** Testar resposta do sistema em caso de erro de comunicação ao confirmar ou cancelar.  
**Tipo de Teste:** Robustez  
**Prioridade:** Alta  
**Dados de teste:** Simulação de falha do servidor  
**Passos:**  
1. Tentar confirmar ou cancelar agendamento.  

**Resultado Esperado:**  
- Mensagem: **“Ops! Não conseguimos concluir a ação.”**  
- Nenhuma alteração de status executada.  
- Permite nova tentativa pelo usuário.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 10 – Ver atualização automática de status

**Descrição:** Verifica se a lista de agendamentos atualiza automaticamente após ação.  
**Tipo de Teste:** Funcional  
**Prioridade:** Média  
**Dados de teste:** Profissional que confirmou ou cancelou agendamento recentemente  
**Passos:**  
1. Voltar para tela inicial ou para **“Meus Agendamentos”**.  

**Resultado Esperado:**  
- Lista atualiza com status refletindo última ação (Confirmado ou Cancelado).  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 11 – Sessão expirada durante ação

**Descrição:** Testar comportamento do sistema quando a sessão do profissional expira em meio a um processo.  
**Tipo de Teste:** Segurança / Sessão  
**Prioridade:** Alta  
**Dados de teste:** Sessão expirada no sistema  
**Passos:**  
1. Tentar acessar **“Meus Agendamentos”** ou confirmar um agendamento.  

**Resultado Esperado:**  
- Redireciona para tela de login.  
- Mensagem: **“Sessão expirada. Faça login novamente.”** exibida.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 12 – Validação de interface

**Descrição:** Verificar funcionamento dos botões, clareza dos textos e responsividade da interface.  
**Tipo de Teste:** Interface / Usabilidade  
**Prioridade:** Média  
**Dados de teste:** Interface carregada em dispositivos diversos  
**Passos:**  
1. Verificar funcionamento dos botões (**“Confirmar Agendamento”**, **“Cancelar Agendamento”**, **“Ver todos os agendamentos”**).  
2. Validar textos e mensagens exibidas.  
3. Testar visualização em dispositivos móveis.  

**Resultado Esperado:**  
- Botões funcionam corretamente.  
- Textos claros, padronizados e corretos.  
- Layout responsivo e usável em todas as telas.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 13 – Teste de fluxo completo (confirmação)

**Descrição:** Validar o fluxo completo de confirmação de agendamento desde login até notificação.  
**Tipo de Teste:** Funcional / Fluxo completo  
**Prioridade:** Alta  
**Dados de teste:** Profissional válido, agendamento pendente  
**Passos:**  
1. Logar como profissional.  
2. Visualizar agendamentos pendentes.  
3. Acessar informações de um agendamento.  
4. Confirmar o agendamento.  
5. Verificar atualização nas telas correspondentes.  

**Resultado Esperado:**  
- Fluxo ocorre sem erros.  
- Agendamento confirmado e visível nas telas.  
- Paciente notificado com sucesso.  

**Resultado Obtido:** Passou / Não passou

***

## Cenário 14 – Teste de fluxo completo (cancelamento)

**Descrição:** Validar fluxo completo de cancelamento do agendamento.  
**Tipo de Teste:** Funcional / Fluxo completo  
**Prioridade:** Alta  
**Dados de teste:** Profissional logado, agendamento pendente ou confirmado  
**Passos:**  
1. Logar como profissional.  
2. Acessar um agendamento pendente ou confirmado.  
3. Cancelar o agendamento.  
4. Verificar atualização na tela inicial e no calendário.  

**Resultado Esperado:**  
- Agendamento cancelado corretamente.  
- Status atualizado para **“Cancelado”** em todas as telas.  
- Paciente notificado do cancelamento.  

**Resultado Obtido:** Passou / Não passou

***

Quer que eu prepare estes testes para exportação ou ajude em um template padrão para execução?
