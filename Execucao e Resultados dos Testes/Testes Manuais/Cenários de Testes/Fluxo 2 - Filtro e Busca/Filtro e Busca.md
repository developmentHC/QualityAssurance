# Plano de Testes Otimizado – Busca e Filtro

> **Funcionalidade**: Filtro e Busca de Profissionais  
> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  
> **Status**: Consolidado em 4 Casos Principais

---

## 📊 Resumo da Otimização

| Métrica | Original | Otimizado | Redução |
|-------|----------|-----------|--------|
| Casos de Teste | 9 | 4 | 56% |
| Cenários Separados | 9 | 1 (estruturado) | 89% |
| Validações Dispersas | 9+ | 1 matriz | 90% |

---

## Casos de Teste

---

## CASO 1: Fluxos Principais de Busca

**ID:** BUSCA_MAIN_001  
**Descrição:** Testa todos os caminhos felizes de busca em um único fluxo

### O que este caso cobre
- Busca por especialidade
- Busca com termos compostos
- Uso de chips dinâmicos
- Aplicação de filtros básicos

### Passos Consolidados (Lista)

#### 1. Busca simples por especialidade
- Acessar a tela de busca
- Digitar **"Reiki"** na barra de busca
- Executar a busca (Enter ou botão)
- Verificar:
  - Lista de profissionais de Reiki
  - Contador de resultados exibido corretamente

#### 2. Busca com termos compostos
- Acessar a tela de busca
- Digitar **"Terapia Holística"**
- Executar a busca
- Verificar:
  - Resultados relacionados ao termo
  - Sistema não apresenta erro ou falha

#### 3. Uso de chips de especialidade
- Visualizar chip **"Cura Prânica"**
- Clicar no chip
- Verificar:
  - Chip fica visualmente destacado
  - Resultados filtrados pela especialidade
- Clicar novamente no chip
- Verificar:
  - Chip é removido
  - Resultados retornam ao estado anterior

#### 4. Aplicação de filtros básicos
- Clicar no botão **Filtros**
- Selecionar **Acessibilidade: Sim**
- Aplicar filtros
- Verificar:
  - Apenas profissionais com acessibilidade são exibidos
  - Indicação visual de filtro ativo

---

## CASO 2: Matriz de Estados e Erros

**ID:** BUSCA_ERROR_002  
**Descrição:** Centraliza todas as validações de erro e estados especiais em um único caso

### Matriz Completa de Estados

| Estado | Entrada/Ação | Comportamento Esperado | Criticidade |
|------|-------------|------------------------|------------|
| Termo inexistente | "Inexistenteterapia" | Mensagem: "Nenhum profissional encontrado. Tente outros termos." | Alta |
| Busca vazia | Campo vazio + buscar | Exibe todos profissionais ou mantém tela atual | Média |
| Caracteres especiais | "Reiki@#" | Texto tratado normalmente ou aviso exibido | Baixa |
| Múltiplos filtros | Especialidade + Acessibilidade + Valor | Interseção correta dos filtros | Alta |
| Remover filtros | Limpar filtros ativos | Retorna ao estado inicial | Média |
| Falha de rede | Buscar offline | Mensagem de erro + botão de retry | Alta |
| Timeout servidor | Resposta > 10s | Loading + timeout controlado | Média |
| Resultados paginados | Muitos resultados | Paginação ou botão "Carregar mais" | Média |
| Filtro sem resultados | Filtro restritivo | Mensagem específica informativa | Alta |

### Passo Padrão para Execução
- Para cada linha da matriz:
  - Acessar a tela de busca
  - Executar a ação descrita
  - Validar o comportamento esperado correspondente

---

## CASO 3: Combinações Complexas e Regras de Negócio

**ID:** BUSCA_COMB_003  
**Descrição:** Valida regras avançadas e combinações entre busca, filtros e persistência

### 1. Combinação busca + filtros
- Executar busca por **"Reiki"**
- Aplicar filtro **Valor: até R$100**
- Verificar:
  - Resultados respeitam ambos os critérios
  - Contador de resultados é atualizado
- Aplicar filtro **Acessibilidade: Sim**
- Verificar:
  - Interseção dos três critérios
  - Caso zero resultados, mensagem adequada é exibida

### 2. Ordem de aplicação
- Aplicar filtro A
- Executar busca por termo B
- Verificar:
  - Filtro A permanece ativo
  - Resultado final é a interseção filtro A + termo B
- Remover filtro A
- Verificar:
  - Busca mantém apenas o termo B

### 3. Persistência entre telas
- Aplicar múltiplos filtros
- Sair da tela de busca
- Retornar à tela
- Verificar:
  - Filtros continuam ativos
  - Resultados são recarregados automaticamente

### 4. Limites e performance
- Executar busca com termo amplo
- Verificar:
  - Exibição inicial limitada (20–50 itens)
  - Paginação ou scroll infinito funcional
  - Tempo de resposta menor que 3 segundos

---

## CASO 4: UI/UX e Interface

**ID:** BUSCA_UI_004  
**Descrição:** Avaliação visual, usabilidade e acessibilidade

### 1. Elementos Visíveis
- Barra de busca visível e centralizada
- Botão de filtros com ícone claro
- Chips organizados corretamente
- Contador de resultados visível
- Loading spinner durante carregamento

### 2. Comportamento Visual
- Placeholder claro no campo de busca
- Chips selecionados mudam de cor
- Filtros ativos indicados visualmente
- Estados vazio/erro com ícones adequados
- Animações suaves

### 3. Responsividade
- Mobile: campo ocupa largura adequada
- Tablet: layout se ajusta corretamente
- Desktop: distribuição equilibrada

### 4. Acessibilidade
- Navegação por teclado funcional
- Leitores de tela leem corretamente os resultados
- Contraste de cores adequado
- Indicação clara de foco

---

## Matriz de Cobertura Garantida

| Requisito | Caso | Status |
|---------|------|-------|
| Busca por especialidade | BUSCA_MAIN_001 | ✅ |
| Termo inexistente | BUSCA_ERROR_002 | ✅ |
| Botão de filtros | BUSCA_MAIN_001 | ✅ |
| Chips de especialidade | BUSCA_MAIN_001 | ✅ |
| Chips dinâmicos | BUSCA_MAIN_001 | ✅ |
| Termos compostos | BUSCA_MAIN_001 | ✅ |
| Erro de conexão | BUSCA_ERROR_002 | ✅ |
| Interface | BUSCA_UI_004 | ✅ |
| Combinação busca + filtro | BUSCA_COMB_003 | ✅ |
