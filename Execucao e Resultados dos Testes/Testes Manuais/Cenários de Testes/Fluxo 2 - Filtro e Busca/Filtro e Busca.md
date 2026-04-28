# Casos de Teste — Busca e Filtro de Profissionais
Sistema: ConectaBem  
Versão: 2.0  

---

## CT-001 — Busca por especialidade válida

| Campo | Descrição |
|------|----------|
| ID | CT-001 |
| Título | Busca por especialidade existente |
| Pré-condição | Profissionais cadastrados com especialidade "Reiki" |
| Dados de teste | Termo: "Reiki" |
| Passos | 1. Acessar tela de busca <br> 2. Inserir termo <br> 3. Executar busca |
| Resultado esperado | Lista de profissionais exibida · Contador correto |

---

## CT-002 — Busca com termo composto

| Campo | Descrição |
|------|----------|
| ID | CT-002 |
| Título | Busca com múltiplas palavras |
| Pré-condição | Dados relacionados existentes |
| Dados de teste | "Terapia Holística" |
| Passos | 1. Inserir termo composto <br> 2. Executar busca |
| Resultado esperado | Resultados relevantes exibidos |

---

## CT-003 — Busca sem resultados

| Campo | Descrição |
|------|----------|
| ID | CT-003 |
| Título | Termo inexistente |
| Pré-condição | — |
| Dados de teste | "Inexistenteterapia" |
| Passos | 1. Executar busca |
| Resultado esperado | Mensagem de nenhum resultado |

---

## CT-004 — Busca vazia

| Campo | Descrição |
|------|----------|
| ID | CT-004 |
| Título | Comportamento com campo vazio |
| Pré-condição | — |
| Dados de teste | Campo vazio |
| Passos | 1. Executar busca sem termo |
| Resultado esperado | Exibe todos ou mantém estado |

---

## CT-005 — Uso de chip de especialidade

| Campo | Descrição |
|------|----------|
| ID | CT-005 |
| Título | Seleção de chip |
| Pré-condição | Chips disponíveis |
| Dados de teste | Chip "Cura Prânica" |
| Passos | 1. Clicar no chip |
| Resultado esperado | Filtro aplicado · Chip destacado |

---

## CT-006 — Remoção de chip

| Campo | Descrição |
|------|----------|
| ID | CT-006 |
| Título | Deseleção de chip |
| Pré-condição | Chip selecionado |
| Dados de teste | — |
| Passos | 1. Clicar novamente no chip |
| Resultado esperado | Filtro removido |

---

## CT-007 — Aplicação de filtro simples

| Campo | Descrição |
|------|----------|
| ID | CT-007 |
| Título | Filtro de acessibilidade |
| Pré-condição | Profissionais com e sem acessibilidade |
| Dados de teste | Acessibilidade: Sim |
| Passos | 1. Abrir filtros <br> 2. Selecionar opção <br> 3. Aplicar |
| Resultado esperado | Apenas profissionais compatíveis exibidos |

---

## CT-008 — Combinação de filtros

| Campo | Descrição |
|------|----------|
| ID | CT-008 |
| Título | Interseção de múltiplos filtros |
| Pré-condição | Dados variados disponíveis |
| Dados de teste | Especialidade + Acessibilidade + Valor |
| Passos | 1. Aplicar múltiplos filtros |
| Resultado esperado | Resultados respeitam interseção |

---

## CT-009 — Remoção de filtros

| Campo | Descrição |
|------|----------|
| ID | CT-009 |
| Título | Limpar filtros |
| Pré-condição | Filtros ativos |
| Dados de teste | — |
| Passos | 1. Limpar filtros |
| Resultado esperado | Retorno ao estado inicial |

---

## CT-010 — Busca + filtro combinado

| Campo | Descrição |
|------|----------|
| ID | CT-010 |
| Título | Busca com filtro ativo |
| Pré-condição | — |
| Dados de teste | "Reiki" + Valor até 100 |
| Passos | 1. Buscar termo <br> 2. Aplicar filtro |
| Resultado esperado | Interseção correta |

---

## CT-011 — Persistência de filtros

| Campo | Descrição |
|------|----------|
| ID | CT-011 |
| Título | Persistência ao navegar |
| Pré-condição | Filtros aplicados |
| Dados de teste | — |
| Passos | 1. Sair da tela <br> 2. Retornar |
| Resultado esperado | Filtros mantidos |

---

## CT-012 — Paginação ou carregamento incremental

| Campo | Descrição |
|------|----------|
| ID | CT-012 |
| Título | Carregamento de muitos resultados |
| Pré-condição | Grande volume de dados |
| Dados de teste | Busca ampla |
| Passos | 1. Executar busca |
| Resultado esperado | Paginação ou scroll funcional |

---

## CT-013 — Falha de rede

| Campo | Descrição |
|------|----------|
| ID | CT-013 |
| Título | Tratamento de erro de conexão |
| Pré-condição | Simulação offline |
| Dados de teste | — |
| Passos | 1. Executar busca sem conexão |
| Resultado esperado | Mensagem de erro + retry |

---

## CT-014 — Timeout de resposta

| Campo | Descrição |
|------|----------|
| ID | CT-014 |
| Título | Resposta lenta do servidor |
| Pré-condição | Simulação de delay |
| Dados de teste | >10s |
| Passos | 1. Executar busca |
| Resultado esperado | Loading + timeout controlado |

---

## CT-015 — UI básica da busca

| Campo | Descrição |
|------|----------|
| ID | CT-015 |
| Título | Verificação de elementos principais |
| Pré-condição | Tela carregada |
| Dados de teste | — |
| Passos | 1. Visualizar tela |
| Resultado esperado | Campo, botão, chips e contador visíveis |

---

## CT-016 — Acessibilidade básica

| Campo | Descrição |
|------|----------|
| ID | CT-016 |
| Título | Navegação por teclado |
| Pré-condição | — |
| Dados de teste | — |
| Passos | 1. Navegar com teclado |
| Resultado esperado | Foco visível · Navegação funcional |

---
