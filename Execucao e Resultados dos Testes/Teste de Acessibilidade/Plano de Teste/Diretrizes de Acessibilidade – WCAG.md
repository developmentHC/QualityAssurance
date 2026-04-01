Aqui está um **documento completo, detalhado e explicativo** sobre a WCAG, estruturado como material de estudo e referência para QA 👇

---

# 📘 Diretrizes de Acessibilidade – WCAG (Guia Completo para QA)

---

## 1. O que é a WCAG?

A **WCAG (Web Content Accessibility Guidelines)** é um conjunto de diretrizes internacionais criadas pelo **W3C**, com o objetivo de tornar conteúdos digitais acessíveis para todas as pessoas, incluindo usuários com deficiência.

As versões mais utilizadas atualmente são:

* **WCAG 2.1**
* WCAG 2.2 (extensão da 2.1, com novos critérios)

---

## 2. Estrutura da WCAG

A WCAG é organizada em uma hierarquia clara:

### 🔹 Nível 1: Princípios (4 pilares)

### 🔹 Nível 2: Diretrizes

### 🔹 Nível 3: Critérios de sucesso (testáveis)

### 🔹 Nível 4: Técnicas (como implementar)

---

## 3. Os 4 Princípios Fundamentais (POUR)

A base da WCAG são 4 princípios. Um site acessível precisa ser:

---

### 3.1 Perceptível (Perceivable)

👉 O conteúdo deve ser apresentado de forma que os usuários consigam perceber.

#### Problema que resolve:

* Pessoas cegas, com baixa visão ou daltonismo

#### Exemplos práticos:

* Imagens com texto alternativo (`alt`)
* Legendas em vídeos
* Contraste adequado

---

#### 📌 Principais critérios:

**1.1.1 Conteúdo não textual**

* Todas as imagens devem ter descrição (`alt`)
* Ícones devem ter significado acessível

---

**1.2 Mídia (vídeo e áudio)**

* Legendas para vídeos
* Transcrição de áudio
* Audiodescrição (nível mais alto)

---

**1.4 Distinguível**

* Contraste mínimo:

  * 4.5:1 (texto normal)
  * 3:1 (texto grande)
* Não depender apenas de cor
* Permitir zoom até 200%

---

### 💡 Exemplo real de erro:

Botão vermelho com erro, mas sem texto → usuário daltônico não entende

---

---

### 3.2 Operável (Operable)

👉 A interface deve ser utilizável por qualquer pessoa.

#### Problema que resolve:

* Pessoas com deficiência motora ou que não usam mouse

---

#### 📌 Principais critérios:

**2.1 Teclado acessível**

* Tudo deve funcionar com teclado
* Sem dependência de mouse

---

**2.2 Tempo suficiente**

* Usuário deve ter tempo para ler/interagir
* Evitar auto logout rápido

---

**2.3 Convulsões**

* Evitar flashes rápidos (risco de epilepsia)

---

**2.4 Navegável**

* Ordem de foco lógica
* Links descritivos
* Títulos claros
* "Pular para conteúdo" (skip link)

---

### 💡 Exemplo real:

Usuário não consegue acessar botão porque ele não recebe foco → falha crítica

---

---

### 3.3 Compreensível (Understandable)

👉 O conteúdo e a interface devem ser fáceis de entender.

#### Problema que resolve:

* Pessoas com deficiência cognitiva ou baixa alfabetização

---

#### 📌 Principais critérios:

**3.1 Legibilidade**

* Linguagem simples
* Evitar termos técnicos desnecessários

---

**3.2 Previsibilidade**

* Interface consistente
* Elementos não mudam comportamento inesperadamente

---

**3.3 Assistência de entrada**

* Inputs devem ter:

  * Labels
  * Instruções
  * Mensagens de erro claras

---

### 💡 Exemplo:

Erro: "Invalid input" ❌
Melhor: "Digite um e-mail válido" ✅

---

---

### 3.4 Robusto (Robust)

👉 O conteúdo deve funcionar com diferentes tecnologias.

#### Problema que resolve:

* Compatibilidade com leitores de tela e dispositivos assistivos

---

#### 📌 Principais critérios:

**4.1 Compatibilidade**

* HTML semântico correto
* Uso adequado de ARIA
* Nome, função e valor definidos corretamente

---

### 💡 Exemplo:

Botão feito com `<div>` sem role → leitor de tela não reconhece

---

---

## 4. Critérios de Sucesso (A, AA, AAA)

Cada regra da WCAG possui níveis de conformidade:

---

### 🟢 Nível A (básico)

* Requisitos mínimos
* Sem isso, site é inacessível

---

### 🟡 Nível AA (padrão de mercado)

* Recomendado para produtos reais
* Exigido em muitos países

✔ Esse é o nível que você para testar e validar como QA

---

### 🔵 Nível AAA (avançado)

* Alto nível de acessibilidade
* Nem sempre viável implementar tudo

---

---

## 5. Exemplos de Critérios Importantes para QA

Aqui estão os mais usados no dia a dia:

---

### ✔ 1.4.3 – Contraste mínimo

* Texto legível contra o fundo

---

### ✔ 2.1.1 – Teclado

* Tudo acessível via teclado

---

### ✔ 2.4.3 – Ordem de foco

* Navegação lógica com TAB

---

### ✔ 3.3.2 – Labels e instruções

* Campos explicados corretamente

---

### ✔ 4.1.2 – Nome, função e valor

* Elementos interpretáveis por leitores de tela

---

## 6. Técnicas da WCAG (Como implementar)

A WCAG também fornece técnicas como:

* Uso correto de HTML semântico
* Associação de label + input
* Uso de `aria-label`, `aria-describedby`
* Estrutura de headings (`h1` → `h6`)

---

## 7. O que a WCAG NÃO cobre bem

Importante para QA:

* Clareza real do texto (isso é subjetivo)
* UX ruim (mesmo sendo tecnicamente acessível)
* Fluxos complexos demais

👉 Por isso testes manuais são essenciais

---

## 8. Aplicação prática para QA

Como você usa a WCAG no dia a dia:

---

### ✔ Criando testes

Você transforma critérios em cenários:

* "Verificar se todos inputs possuem label"
* "Validar navegação por teclado"
* "Testar contraste mínimo"

---

### ✔ Reportando bugs

Sempre vincule ao critério:

Exemplo:

* Violação WCAG 1.4.3 – Contraste insuficiente

---

### ✔ Validando acessibilidade real

Combine:

* Ferramentas automáticas
* Testes manuais
* Leitor de tela

---

---

## 9. Resumo Conceitual

| Princípio     | Ideia central                   |
| ------------- | ------------------------------- |
| Perceptível   | Usuário consegue ver/ouvir      |
| Operável      | Usuário consegue usar           |
| Compreensível | Usuário entende                 |
| Robusto       | Funciona em qualquer tecnologia |

---

## 🔥 Conclusão

A WCAG não é só um checklist — é um **modelo de qualidade**.

Um sistema acessível:

* Funciona sem mouse
* Funciona com leitor de tela
* Funciona com zoom
* Funciona para todos
