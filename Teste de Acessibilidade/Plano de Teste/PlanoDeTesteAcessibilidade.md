# 🧩 Plano de Teste de Acessibilidade – ConectaBem

## 1. Objetivo
Garantir que o site possa ser utilizado por todas as pessoas, incluindo usuários com deficiências visuais, motoras, auditivas ou cognitivas, conforme as diretrizes de acessibilidade **WCAG 2.1**.  
Os testes visam identificar barreiras que possam impedir ou dificultar o uso das principais telas do sistema.

---

## 2. Escopo
As páginas incluídas neste ciclo de testes são:

1. **Tela Inicial:** verificação de menus, botões, textos, imagens e navegação.  
2. **Tela de Cadastro:** verificação de campos de formulário, rótulos (labels), mensagens de erro e foco do teclado.  
3. **Tela de Login:** verificação de campos de entrada, contraste de cores, foco e retorno de erro acessível.

---

## 3. Abordagem de Teste
Os testes de acessibilidade serão conduzidos de duas formas:

- **Automatizados:** usando ferramentas de verificação automática (Cypress + Axe) que analisam o código das páginas e identificam problemas de acessibilidade (ex: falta de rótulo, contraste insuficiente, erros de navegação).  
- **Manuais:** verificações visuais e de navegação com teclado para garantir que todos os elementos sejam acessíveis sem o uso do mouse e que o foco siga uma sequência lógica.

---

## 4. Critérios de Sucesso
Para considerar uma tela **acessível**, ela deve:

- Não apresentar erros **críticos ou graves** nos testes automatizados.  
- Permitir **navegação completa apenas pelo teclado** (usando Tab, Enter, Espaço, etc.).  
- Ter **rótulos descritivos** em todos os campos e botões.  
- Garantir **contraste adequado** entre texto e fundo.  
- Exibir **mensagens de erro compreensíveis** e associadas ao campo correspondente.  
- Apresentar **ordem de foco lógica** e visível ao navegar.

---

## 5. Itens Avaliados

| Categoria | O que é verificado | Cobertura pelo Axe | Observações |
|------------|--------------------|--------------------|--------------|
| **Estrutura semântica** | Uso correto de tags HTML (`<main>`, `<nav>`, `<header>`, `<footer>`, cabeçalhos `h1`–`h6`). | ✅ Automática | Detecta falta de hierarquia ou uso incorreto. |
| **Rótulos de elementos (labels)** | Associação de `label` a campos de formulário; botões e links com texto descritivo. | ✅ Automática | Detecta ausência de `label` ou `aria-label`. |
| **Atributos ARIA** | Presença e uso correto de atributos `aria-*` (ex: `aria-hidden`, `aria-expanded`). | ✅ Automática | Valida sintaxe e uso adequado. |
| **Contraste de cores** | Relação de contraste entre texto e fundo conforme WCAG 2.1 (nível AA/AAA). | ✅ Automática | Calcula contraste de textos e ícones. |
| **Imagens e ícones** | Existência de texto alternativo (`alt`, `aria-label`) em imagens e ícones. | ✅ Automática | Identifica imagens decorativas sem `alt` vazio. |
| **Elementos interativos** | Verifica se botões, links e inputs são interativos e acessíveis. | ✅ Automática | Checa se o elemento é focável e semanticamente correto. |
| **Títulos de página** | Verifica se existe `<title>` na página. | ✅ Automática | Requer título descritivo. |
| **Mensagens de erro associadas** | Campos com mensagens de erro relacionadas via `aria-describedby` ou similar. | ⚠️ Parcial | Detecta associação técnica, mas não clareza do texto. |
| **Foco de teclado (tabindex)** | Elementos que não são acessíveis via teclado (`tabindex="-1"` incorreto, por exemplo). | ⚠️ Parcial | Detecta ausência técnica, mas não sequência de foco. |
| **Ordem de leitura / foco** | Sequência lógica ao navegar com Tab. | ❌ Manual | Precisa ser testado manualmente. |
| **Visibilidade do foco** | Se o foco é visível ao navegar pelo teclado. | ❌ Manual | Verificação visual obrigatória. |
| **Leitura por leitores de tela** | Se o conteúdo faz sentido quando lido por leitor de tela. | ⚠️ Parcial | Detecta marcação incorreta, mas não legibilidade real. |
| **Compreensão do conteúdo** | Clareza e simplicidade dos textos, botões e mensagens. | ❌ Manual | Ferramenta não avalia linguagem. |
| **Conteúdos dinâmicos (modais, dropdowns, alerts)** | Se o foco muda corretamente e conteúdo é anunciado. | ⚠️ Parcial | Depende da implementação; requer teste manual. |
| **Navegação somente por teclado** | Possibilidade de concluir fluxos (ex: login, cadastro) sem mouse. | ❌ Manual | Deve ser validado manualmente. |
| **Tempo e movimento (animações, auto-play)** | Presença de conteúdos em movimento sem controle do usuário. | ⚠️ Parcial | Detecta apenas via atributos, não via comportamento real. |

---

### **Legenda de cobertura:**
- ✅ **Automática:** O axe verifica totalmente este aspecto.  
- ⚠️ **Parcial:** O axe detecta apenas parte (geralmente aspectos técnicos). Teste manual recomendado.  
- ❌ **Manual:** Necessita avaliação humana (ex: navegação, foco, compreensão).

---

## 6. Critérios de Aceite

- Nenhum erro **crítico** identificado pelas ferramentas de acessibilidade.  
- Todos os fluxos principais (cadastro e login) funcionam sem o uso do mouse.  
- Contrastes e textos seguem o padrão mínimo recomendado pela WCAG (nível AA).  
- Problemas menores (nível “moderado”) documentados para correção futura.

---

## 7. Riscos e Restrições

- Algumas verificações (como leitura por leitor de tela) exigem teste manual e não são totalmente cobertas pelas ferramentas automatizadas.  
- Mudanças de layout ou tema podem afetar o contraste e foco.  
- As ferramentas automáticas não avaliam a clareza de textos, apenas aspectos técnicos.

---

## 8. Resultados Esperados

- Relatório com as violações encontradas, categorizadas por gravidade (crítica, grave, moderada, leve).  
- Lista de recomendações para correções.  
- Evidência de que as telas críticas do sistema estão acessíveis conforme as boas práticas.

---

## 9. Periodicidade

Os testes de acessibilidade serão executados:

- A cada nova versão das telas principais (cadastro, login, home).  
- Sempre que houver mudança de layout, tema ou estrutura de componentes visuais.
