# Plano de Teste de Acessibilidade – ConectaBem

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
Os testes de acessibilidade serão conduzidos de três formas complementares:

- **Automatizados (Cypress + Axe):**  
  Ferramentas de verificação automática que analisam o código das páginas e identificam problemas de acessibilidade (ex: falta de rótulo, contraste insuficiente, erros de navegação).  

- **Automatizados via Lighthouse (DevTools):**  
  Avaliação executada diretamente nas **Ferramentas de Desenvolvedor do Chrome**, utilizando o **Lighthouse** para gerar relatórios de pontuação e oportunidades de melhoria.  
  Essa análise complementa o Axe, fornecendo uma visão geral da **performance de acessibilidade**, contrastes, estrutura de navegação e possíveis problemas de elementos dinâmicos.  

- **Manuais:**  
  Verificações visuais e de navegação com teclado para garantir que todos os elementos sejam acessíveis sem o uso do mouse e que o foco siga uma sequência lógica.  
  Também serão realizados testes com leitores de tela (NVDA ou VoiceOver) para confirmar a interpretação correta dos elementos da página.

---

## 4. Critérios de Sucesso
Para considerar uma tela **acessível**, ela deve:

- Não apresentar erros **críticos ou graves** nos testes automatizados (Axe e Lighthouse).  
- Permitir **navegação completa apenas pelo teclado** (usando Tab, Enter, Espaço, etc.).  
- Ter **rótulos descritivos** em todos os campos e botões.  
- Garantir **contraste adequado** entre texto e fundo.  
- Exibir **mensagens de erro compreensíveis** e associadas ao campo correspondente.  
- Apresentar **ordem de foco lógica** e visível ao navegar.  
- Alcançar **pontuação mínima de 90/100** no indicador de acessibilidade do **Lighthouse**.

---

## 5. Itens Avaliados

| Categoria | O que é verificado | Cobertura pelo Axe | Cobertura pelo Lighthouse | Observações |
|------------|--------------------|--------------------|----------------------------|--------------|
| **Estrutura semântica** | Uso correto de tags HTML (`<main>`, `<nav>`, `<header>`, `<footer>`, cabeçalhos `h1`–`h6`). | ✅ Automática | ✅ Parcial | Detecta falta de hierarquia ou uso incorreto. |
| **Rótulos de elementos (labels)** | Associação de `label` a campos de formulário; botões e links com texto descritivo. | ✅ Automática | ✅ Automática | Detecta ausência de `label` ou `aria-label`. |
| **Atributos ARIA** | Presença e uso correto de atributos `aria-*`. | ✅ Automática | ⚠️ Parcial | Valida sintaxe, mas não contexto de uso. |
| **Contraste de cores** | Relação de contraste entre texto e fundo conforme WCAG 2.1. | ✅ Automática | ✅ Automática | Calcula contraste de textos e ícones. |
| **Imagens e ícones** | Existência de texto alternativo (`alt`, `aria-label`). | ✅ Automática | ✅ Parcial | Lighthouse indica imagens sem texto alternativo. |
| **Elementos interativos** | Botões, links e inputs acessíveis. | ✅ Automática | ✅ Parcial | Checa se são focáveis e semanticamente corretos. |
| **Títulos de página** | Existência e descrição do `<title>`. | ✅ Automática | ✅ Automática | Requer título descritivo. |
| **Mensagens de erro associadas** | Campos com mensagens associadas via `aria-describedby`. | ⚠️ Parcial | ⚠️ Parcial | Detecta associação técnica, não clareza. |
| **Foco de teclado (tabindex)** | Elementos acessíveis via teclado. | ⚠️ Parcial | ⚠️ Parcial | Detecta ausência técnica, não sequência. |
| **Ordem de leitura / foco** | Sequência lógica ao navegar com Tab. | ❌ Manual | ⚠️ Parcial | Lighthouse pode sugerir melhorias, mas teste é manual. |
| **Visibilidade do foco** | Se o foco é visível ao navegar pelo teclado. | ❌ Manual | ⚠️ Parcial | Deve ser verificado visualmente. |
| **Leitura por leitores de tela** | Clareza da leitura por NVDA/VoiceOver. | ⚠️ Parcial | ❌ Manual | Necessário teste manual completo. |
| **Compreensão do conteúdo** | Clareza e simplicidade de textos e botões. | ❌ Manual | ❌ Manual | Ferramentas não avaliam linguagem. |
| **Conteúdos dinâmicos (modais, dropdowns, alerts)** | Foco e anúncio correto do conteúdo. | ⚠️ Parcial | ⚠️ Parcial | Requer validação manual. |
| **Navegação somente por teclado** | Fluxos completos sem uso do mouse. | ❌ Manual | ⚠️ Parcial | Deve ser validado manualmente. |
| **Tempo e movimento (animações, auto-play)** | Controle do usuário sobre animações. | ⚠️ Parcial | ⚠️ Parcial | Detecta via atributos, não comportamento. |

---

## 6. Critérios de Aceite

- Nenhum erro **crítico** identificado pelas ferramentas (Axe + Lighthouse).  
- Todos os fluxos principais (cadastro e login) funcionam sem o uso do mouse.  
- Contrastes e textos seguem o padrão mínimo da WCAG (nível AA).  
- Pontuação mínima de **90/100** na aba de **Acessibilidade do Lighthouse**.  
- Problemas menores (nível “moderado”) documentados para correção futura.

---

## 7. Riscos e Restrições

- Algumas verificações (como leitura por leitor de tela) exigem teste manual.  
- Mudanças de layout ou tema podem afetar contraste e foco.  
- O Lighthouse fornece uma visão geral, mas não substitui testes manuais detalhados.  
- Ferramentas automáticas não avaliam clareza de linguagem nem adequação de conteúdo.

---

## 8. Resultados Esperados

- Relatório consolidado com as violações encontradas (Axe + Lighthouse + testes manuais).  
- Categorização por gravidade (crítica, grave, moderada, leve).  
- Lista de recomendações e evidências de correção.  
- Confirmação de que as telas críticas estão acessíveis conforme boas práticas e diretrizes WCAG.

---

## 9. Periodicidade

Os testes de acessibilidade serão executados:

- A cada nova versão das telas principais (cadastro, login, home).  
- Sempre que houver mudança de layout, tema ou estrutura visual.  
- **Teste com Lighthouse** realizado ao final de cada ciclo de desenvolvimento, como verificação geral da qualidade de acessibilidade.
