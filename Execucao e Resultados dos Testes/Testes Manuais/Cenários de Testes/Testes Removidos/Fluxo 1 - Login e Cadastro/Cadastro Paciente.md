# ❌ Testes Eliminados (Justificativa)

---

## 1. Testes Duplicados Removidos

- **CAD_PAC_SOCIAL_001** e **CAD_PAC_EMAIL_003**  
  → Fundidos no **CASO 01 – Fluxo Principal Completo**

- **CAD_PAC_DADOS_007** e **CAD_PAC_END_016**  
  → Já cobertos integralmente no fluxo principal

---

## 2. Testes de Baixo Valor Removidos

- **CAD_PAC_DADOS_010** (pular campos opcionais)  
  → Não impacta regra de negócio  
  → Testado apenas uma vez dentro do fluxo principal

- **CAD_PAC_RESTR_019** (falha de conexão)  
  → Teste de infraestrutura  
  → Não valida regra funcional do cadastro

---

## 3. Testes que Validavam o Óbvio (Removidos)

- **CAD_PAC_VALID_011 até 015** (validações individuais)  
  → Consolidados na **Tabela de Decisão – CASO 02**

- **CAD_PAC_EMAIL_004 / 005 / 006**  
  → Combinados no **CASO 03 – Exceções de Autenticação**

---

# Nova Estrutura Otimizada

- **Total de Casos:** 4 (antes: 19)  
- **Redução:** 79% na quantidade  
- **Cobertura:** 100% dos cenários essenciais

## Comparativo por Cenário

| Cenário | Casos Originais | Casos Otimizados | Ganho |
|-------|-----------------|------------------|-------|
| Autenticação | 6 | 1 | -83% |
| Validações | 5 | 1 | -80% |
| Fluxo Completo | 3 | 1 | -67% |
| Exceções | 5 | 1 | -80% |

---

# Cenários Críticos de Negócio (Nunca Remover)

## 1. Bloqueio de Duplo Cadastro

DADO que email@dominio.com já está cadastrado como Profissional  
QUANDO tento cadastrar o mesmo email como Paciente  
ENTÃO o sistema deve bloquear  
E exibir mensagem clara de conflito de perfil  

---

## 2. Regra de Idade Mínima (18+)

DADO uma data de nascimento que resulta em 17 anos  
QUANDO tento avançar no cadastro  
ENTÃO o sistema deve bloquear  
E exibir explicação legal sobre idade mínima  

---

## 3. Persistência entre Etapas

DADO que o usuário preencheu a Etapa 1/4  
QUANDO fecha o navegador  
E retorna ao sistema  
ENTÃO os dados da Etapa 1 devem estar recuperados  

---

# Técnicas Aplicadas em Cada Redução

---

## 1. Particionamento de Equivalência

**Antes:**  
Testar idade: 18, 19, 20, 21, 22… 110  

**Depois:**  
Testar apenas partições relevantes:
- 17 (inválido)
- 18 (limite mínimo)
- 65 (valor médio)
- 110 (limite máximo)
- 111 (inválido)

---

## 2. Análise de Valor Limite

**CEP**
- "12345"
- "12345-67"
- "00000-000"
- CEP válido real

**OTP**
- Vazio
- Código incorreto
- Código expirado
- Limite de tentativas excedido

---

## 3. Tabela de Decisão

| Campo Válido? | OTP Correto? | Permissão Concedida? | Resultado |
|--------------|-------------|---------------------|----------|
| Sim | Sim | Sim | Sucesso |
| Não | - | - | Erro de campo |
| Sim | Não | - | Erro de OTP |
| Sim | Sim | Não | Erro de permissão |

---

# Matriz de Cobertura Resultante

| Requisito | Coberto por | Risco | Status |
|---------|------------|-------|--------|
| RF001 – Login Social | CASO 01 + CASO 03 | Alto | OK |
| RF002 – Validação OTP | CASO 03 | Alto | OK |
| RF003 – Validação de Campos | CASO 02 | Alto | OK |
| RF004 – Fluxo em 4 Etapas | CASO 04 | Alto | OK |
| RF005 – Persistência de Dados | CASO 04 | Médio | OK |
| RF006 – Bloqueio Duplo Cadastro | Cenário Crítico 1 | Alto | OK |
| RF007 – Idade Mínima Legal | CASO 02 | Alto | OK |

---

# Benefícios da Versão Otimizada

## Redução de Esforço

- Manutenção: 4 casos vs 19  
- Execução: ~15 minutos vs ~60 minutos  
- Documentação: 1 página vs 5 páginas  

---

## Aumento de Qualidade

- Foco em risco real  
- Limites e exceções testados primeiro  
- Estrutura baseada em técnicas clássicas de teste  

---

## Sustentabilidade

- Atualização simples: nova regra → apenas CASO 02  
- Onboarding rápido de novos testers  
- Automação facilitada: casos bem definidos e estáveis  

---

**Conclusão:**  
Menos testes, mais inteligência.  
Redução drástica de esforço sem perda de cobertura — pelo contrário, com **mais foco no que realmente quebra o sistema**.
