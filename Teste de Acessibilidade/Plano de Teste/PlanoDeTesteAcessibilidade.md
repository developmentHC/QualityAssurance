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

| Categoria | O que será verificado | Exemplo de problema |
|------------|-----------------------|----------------------|
| **Textos e rótulos** | Se todos os campos e botões têm descrição visível ou acessível. | Botão com texto “Clique aqui” sem contexto. |
| **Contraste de cores** | Se textos e ícones têm contraste suficiente com o fundo. | Texto cinza sobre fundo claro. |
| **Navegação por teclado** | Se é possível acessar todos os elementos sem o mouse. | Campos que não recebem foco. |
| **Mensagens de erro** | Se as mensagens são claras e indicam o campo com erro. | “Erro 400” em vez de “E-mail inválido”. |
| **Imagens e ícones** | Se possuem descrição alternativa (texto alternativo). | Ícone sem descrição. |

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
