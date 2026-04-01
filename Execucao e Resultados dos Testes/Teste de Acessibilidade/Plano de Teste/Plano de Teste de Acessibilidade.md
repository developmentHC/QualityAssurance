# Plano de Teste de Acessibilidade – ConectaBem (Atualizado)

---

## 1. Objetivo

Garantir que o sistema ConectaBem seja utilizável por todas as pessoas, incluindo usuários com deficiências visuais, motoras, auditivas e cognitivas, seguindo as diretrizes do **W3C** através da:

* **WCAG 2.1** e evolução para **WCAG 2.2**

Os testes têm como objetivo:

* Identificar barreiras de acessibilidade
* Garantir conformidade com nível **AA**
* Validar a experiência real de usuários com tecnologias assistivas

---

## 2. Escopo

### Telas incluídas:

1. **Tela Inicial**

   * Navegação (menus, links)
   * Estrutura semântica
   * Conteúdo visual e textual

2. **Tela de Cadastro**

   * Formulários
   * Validação e mensagens de erro
   * Navegação por teclado

3. **Tela de Login**

   * Inputs e autenticação
   * Feedback de erro
   * Foco e usabilidade

---

## 3. Abordagem de Teste

A estratégia será baseada em **três pilares fundamentais**:

---

### 🔹 3.1 Testes Automatizados

#### ✔ Cypress + Axe

* Execução automatizada integrada ao fluxo de testes
* Identificação de:

  * Falta de labels
  * Problemas de ARIA
  * Estrutura inválida
  * Contraste

#### ✔ Lighthouse

* Executado via DevTools (Chrome)
* Avalia:

  * Score geral de acessibilidade
  * Contraste
  * Estrutura da página
  * Boas práticas

#### ✔ axe DevTools

* Extensão para validação manual assistida
* Complementa o Cypress

#### ✔ WAVE

* Análise visual da página
* Identificação de erros diretamente na interface

📌 **Importante:**
Relatórios dessas ferramentas devem ser:

* Exportados
* Armazenados
* Anexados como evidência de teste

---

### 🔹 3.2 Testes Manuais (ESSENCIAIS)

Testes manuais são obrigatórios para garantir qualidade real.

#### ✔ Navegação por teclado

* Uso de:

  * TAB
  * SHIFT + TAB
  * ENTER
  * ESPAÇO

Validações:

* Ordem de foco lógica
* Todos os elementos acessíveis
* Nenhum bloqueio de navegação

---

#### ✔ Teste sem mouse

* Usuário deve conseguir completar:

  * Cadastro
  * Login
  * Navegação principal

---

#### ✔ Leitor de tela

Ferramentas recomendadas:

* NVDA (Windows)
* VoiceOver (Mac)

Validações:

* Leitura correta de:

  * Botões
  * Links
  * Inputs
* Uso correto de:

  * `aria-label`
  * `aria-describedby`
* Fluxo compreensível

---

#### ✔ Zoom e responsividade

* Testar com **200% de zoom**

Validações:

* Conteúdo não quebra
* Texto continua legível
* Sem sobreposição de elementos

---

#### ✔ Verificação visual

* Contraste
* Tamanho de fonte
* Indicador de foco visível

---

### 🔹 3.3 Testes Baseados na WCAG

Todos os testes devem ser rastreados com base nos critérios da WCAG:

Exemplos:

* 1.4.3 → Contraste mínimo
* 2.1.1 → Teclado acessível
* 3.3.2 → Labels e instruções
* 4.1.2 → Nome, função e valor

---

## 4. Critérios de Sucesso

Uma tela será considerada acessível quando:

* Não houver erros **críticos ou graves**
* Navegação completa via teclado funcionar
* Todos os elementos tiverem:

  * Nome acessível
  * Função clara
* Contraste atender nível AA
* Foco visível e lógico
* Leitor de tela interpretar corretamente

---

## 5. Itens Avaliados (Expandido)

(Seção mantida, mas com reforço conceitual)

Além dos itens já definidos, incluir:

* Zoom 200%
* Teste sem mouse
* Comportamento de modais (foco preso corretamente)
* Feedback auditivo (leitor de tela)
* Estados de erro acessíveis

---

## 6. Critérios de Aceite (Atualizado)

Para aprovação:

* ✔ Score ≥ **90/100** no Lighthouse
* ✔ Nenhum erro crítico no Axe
* ✔ Fluxos principais acessíveis por teclado
* ✔ Teste com leitor de tela validado
* ✔ Teste com zoom 200% aprovado
* ✔ Evidências documentadas

---

## 7. Riscos e Restrições (Atualizado)

* Ferramentas automatizadas cobrem apenas ~30–40% dos problemas
* Problemas cognitivos não são detectados automaticamente
* Leitores de tela podem ter comportamentos diferentes
* Alterações visuais podem quebrar acessibilidade rapidamente

---

## 8. Resultados Esperados (Melhorado)

Entrega final deve conter:

* Relatórios de:

  * Lighthouse
  * axe DevTools
  * WAVE
* Evidências (prints ou vídeos)
* Lista de bugs com:

  * Critério WCAG violado
  * Severidade
  * Passos para reprodução
* Recomendações técnicas

---

## 9. Periodicidade (Melhorado)

Os testes devem ocorrer:

* A cada release
* A cada mudança de UI
* Em regressões
* Antes de deploy em produção

✔ Testes automatizados → contínuos (CI/CD)
✔ Testes manuais → por ciclo de entrega

---

## 🧠 Diretriz Profissional 

**Nunca confiar apenas em ferramentas automatizadas.**

Sempre incluir:

* Navegação apenas por teclado
* Teste com leitor de tela
* Zoom 200%
* Uso sem mouse

---
