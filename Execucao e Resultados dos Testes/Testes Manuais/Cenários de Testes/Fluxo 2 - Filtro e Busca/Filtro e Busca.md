# Cenários de Teste — Fluxo de Filtro e Busca
> **Responsável:** Mateus QA  
> **Software:** ConectaBem  

---

## **Cenário 1 – Realizar busca por nome de especialidade**

**Descrição:** Verificar se o usuário consegue realizar uma busca digitando o nome de uma especialidade na barra de busca.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Usuário logado, especialidade existente (ex: “Reiki”)  
**Passos:**  
1. Acessar a tela de busca.  
2. Digitar “Reiki” na **Barra de Busca**.  
3. Pressionar “Enter” ou clicar no botão de busca.  

**Resultado Esperado:**  
- O sistema exibe os profissionais da especialidade “Reiki”.  
- Nenhuma mensagem de erro é exibida.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 2 – Busca com termo inexistente**

**Descrição:** Testar se o sistema exibe corretamente uma mensagem ao pesquisar um termo não encontrado.  
**Tipo de Teste:** Funcional / Validação de erro  
**Prioridade:** Alta  
**Dados de teste:** Termo inexistente (ex: “Inexistenteterapia”)  
**Passos:**  
1. Acessar a tela de busca.  
2. Digitar o termo “Inexistenteterapia”.  
3. Clicar em “Buscar”.  

**Resultado Esperado:**  
- Sistema exibe mensagem: **“Não há profissionais com o filtro selecionado. Tente modificar as opções.”**  
- Usuário permanece na tela de busca.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 3 – Utilizar botão de filtros**

**Descrição:** Verificar se o menu de filtros é aberto corretamente e os filtros funcionam.  
**Tipo de Teste:** Funcional  
**Prioridade:** Alta  
**Dados de teste:** Filtros disponíveis (ex: Especialidade, Valor, Acessibilidade)  
**Passos:**  
1. Clicar no **Botão Filtros**.  
2. Selecionar um filtro (ex: “Acessibilidade”).  
3. Aplicar os filtros.  

**Resultado Esperado:**  
- Menu de filtros é exibido corretamente.  
- Resultados são filtrados conforme o critério selecionado.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 4 – Selecionar chip de especialidade**

**Descrição:** Validar que ao clicar em um chip de especialidade, os resultados são atualizados automaticamente.  
**Tipo de Teste:** Funcional  
**Prioridade:** Média  
**Dados de teste:** Chips visíveis (ex: “Reiki”, “Cura Prânica”)  
**Passos:**  
1. Clicar no chip “Cura Prânica”.  

**Resultado Esperado:**  
- Resultados da especialidade “Cura Prânica” são exibidos.  
- Chip selecionado fica visualmente destacado.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 5 – Adicionar e remover especialidades (chips dinâmicos)**

**Descrição:** Verificar comportamento ao adicionar ou remover chips de especialidade conforme regras de negócio.  
**Tipo de Teste:** Funcional / Regras de negócio  
**Prioridade:** Média  
**Dados de teste:** Chips configuráveis pelo sistema  
**Passos:**  
1. Clicar em um chip para adicionar/remover.  
2. Verificar atualização dos resultados.  

**Resultado Esperado:**  
- Chips são adicionados/removidos corretamente.  
- Resultados da busca são atualizados em tempo real.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 6 – Buscar por termos compostos**

**Descrição:** Validar que a barra de busca aceita termos compostos (ex: “Terapia Holística”).  
**Tipo de Teste:** Funcional / Usabilidade  
**Prioridade:** Média  
**Dados de teste:** Termo composto  
**Passos:**  
1. Digitar “Terapia Holística” na barra de busca.  
2. Pressionar Enter.  

**Resultado Esperado:**  
- Resultados compatíveis com o termo composto são exibidos.  
- Busca não retorna erro de validação.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 7 – Exibir mensagem de erro em falha de busca**

**Descrição:** Validar o comportamento do sistema em caso de erro de comunicação com o servidor.  
**Tipo de Teste:** Robustez / Tratamento de erro  
**Prioridade:** Alta  
**Dados de teste:** Simulação de falha de conexão  
**Passos:**  
1. Realizar uma busca durante falha simulada de rede.  

**Resultado Esperado:**  
- Sistema exibe mensagem: **“Não foi possível realizar a busca. Tente novamente.”**  
- Botão **“Tentar Novamente”** disponível.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 8 – Teste de interface da busca**

**Descrição:** Verificar se todos os elementos da tela de busca estão visíveis e funcionais.  
**Tipo de Teste:** Interface / Usabilidade  
**Prioridade:** Média  
**Dados de teste:** Tela carregada com todos os componentes  
**Passos:**  
1. Verificar exibição da **Barra de Busca**, **Botão Filtros** e **Chips**.  
2. Validar textos e ícones.  
3. Confirmar que todos os elementos são clicáveis.  

**Resultado Esperado:**  
- Todos os elementos aparecem corretamente.  
- Nenhum erro de exibição ou ortografia.  

**Resultado Obtido:** Passou / Não passou  

---

## **Cenário 9 – Fluxo completo de busca e filtro combinado**

**Descrição:** Testar o fluxo completo de busca combinando busca por termo e filtros.  
**Tipo de Teste:** Funcional / Fluxo completo  
**Prioridade:** Alta  
**Dados de teste:** Termo “Reiki” e filtro “Acessibilidade: Sim”  
**Passos:**  
1. Digitar “Reiki” na barra de busca.  
2. Abrir o menu de filtros e selecionar “Acessibilidade: Sim”.  
3. Aplicar filtros.  

**Resultado Esperado:**  
- Sistema exibe resultados que atendem ambos os critérios.  
- Nenhuma mensagem de erro é exibida.  

**Resultado Obtido:** Passou / Não passou  
