# 📋 Mapeamento WCAG → Casos de Teste (ConectaBem)

---

## 🔹 1.1.1 – Conteúdo não textual (Nível A)

### 🎯 Objetivo:

Garantir que todo conteúdo visual tenha alternativa textual

### 🧪 Casos de Teste:

* Verificar se todas as imagens possuem atributo `alt`
* Validar que ícones de ação possuem:

  * `aria-label` OU
  * texto visível
* Conferir que imagens decorativas usam `alt=""`

### 💥 Bug comum:

Ícone de "login" sem descrição → leitor de tela não interpreta

---

## 🔹 1.3.1 – Informação e relacionamentos (Nível A)

### 🎯 Objetivo:

Estrutura semântica correta

### 🧪 Casos de Teste:

* Validar uso correto de:

  * `<label>` associado ao `<input>`
* Verificar headings:

  * Apenas 1 `h1`
  * Hierarquia correta (`h1 → h2 → h3`)
* Conferir uso de:

  * `<main>`, `<nav>`, `<header>`, `<footer>`

### 💥 Bug comum:

Input sem label → acessibilidade quebrada

---

## 🔹 1.4.3 – Contraste mínimo (Nível AA)

### 🎯 Objetivo:

Texto legível

### 🧪 Casos de Teste:

* Validar contraste mínimo:

  * 4.5:1 texto normal
  * 3:1 texto grande
* Testar botões, links e mensagens de erro

### 💥 Bug comum:

Texto cinza claro em fundo branco

---

## 🔹 1.4.4 – Redimensionamento de texto (Nível AA)

### 🎯 Objetivo:

Suporte a zoom

### 🧪 Casos de Teste:

* Aplicar zoom de **200%**
* Verificar:

  * Layout não quebra
  * Texto não sobrepõe
  * Scroll horizontal não aparece (quando não necessário)

---

## 🔹 2.1.1 – Teclado (Nível A)

### 🎯 Objetivo:

Uso completo sem mouse

### 🧪 Casos de Teste:

* Navegar usando apenas TAB
* Acessar:

  * Botões
  * Links
  * Inputs
* Acionar elementos com ENTER/SPACE

### 💥 Bug comum:

Botão não focável

---

## 🔹 2.4.3 – Ordem de foco (Nível A)

### 🎯 Objetivo:

Navegação lógica

### 🧪 Casos de Teste:

* Pressionar TAB sequencialmente
* Validar:

  * Ordem segue layout visual
  * Sem "pulos" inesperados

---

## 🔹 2.4.4 – Propósito do link (Nível A)

### 🎯 Objetivo:

Links compreensíveis

### 🧪 Casos de Teste:

* Verificar se links possuem texto claro:

  * ❌ "Clique aqui"
  * ✅ "Ir para cadastro"

---

## 🔹 2.4.7 – Foco visível (Nível AA)

### 🎯 Objetivo:

Usuário deve ver onde está

### 🧪 Casos de Teste:

* Navegar com TAB
* Validar:

  * Destaque visível no elemento focado

### 💥 Bug comum:

outline: none sem substituição

---

## 🔹 3.3.1 – Identificação de erro (Nível A)

### 🎯 Objetivo:

Usuário entende o erro

### 🧪 Casos de Teste:

* Submeter formulário inválido
* Validar:

  * Mensagem aparece
  * Campo com erro identificado

---

## 🔹 3.3.2 – Labels ou instruções (Nível A)

### 🎯 Objetivo:

Campos compreensíveis

### 🧪 Casos de Teste:

* Verificar todos inputs possuem:

  * Label visível OU
  * `aria-label`

---

## 🔹 3.3.3 – Sugestão de erro (Nível AA)

### 🎯 Objetivo:

Ajudar o usuário a corrigir

### 🧪 Casos de Teste:

* Inserir dados inválidos
* Validar:

  * Mensagem explica como corrigir

### 💥 Bug comum:

"Erro no campo" (sem contexto)

---

## 🔹 4.1.2 – Nome, função e valor (Nível A)

### 🎯 Objetivo:

Compatibilidade com leitores de tela

### 🧪 Casos de Teste:

* Testar com leitor de tela
* Validar:

  * Botões são anunciados corretamente
  * Inputs têm nome acessível
  * Componentes customizados possuem role

---

# 🔥 Casos de Teste Transversais (SUPER IMPORTANTES)

---

## 🔹 Navegação completa sem mouse

### 🧪 Caso:

* Realizar login completo só com teclado

---

## 🔹 Leitor de tela (NVDA)

### 🧪 Caso:

* Navegar na tela de login
* Validar leitura:

  * "Campo email"
  * "Botão entrar"

---

## 🔹 Zoom 200%

### 🧪 Caso:

* Aplicar zoom
* Validar responsividade

---

## 🔹 Conteúdos dinâmicos

### 🧪 Caso:

* Abrir modal
* Validar:

  * Foco vai para modal
  * Foco fica preso
  * ESC fecha modal

---

# 📊 Estrutura de Caso de Teste (modelo)

Você pode documentar assim:

**ID:** A11Y-001
**Critério WCAG:** 2.1.1
**Título:** Navegação por teclado
**Passos:**

1. Pressionar TAB
2. Navegar pela página
   **Resultado esperado:**

* Todos elementos acessíveis via teclado

---

# 🧠 Dica profissional 

Sempre registre bug assim:

> ❌ Violação WCAG 2.4.7 – Foco não visível no botão de login

Isso mostra maturidade de QA
