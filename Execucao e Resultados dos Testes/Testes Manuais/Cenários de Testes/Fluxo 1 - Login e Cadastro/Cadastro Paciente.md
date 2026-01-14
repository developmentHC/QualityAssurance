# Plano de Testes Otimizado – Cadastro de Paciente

> **Funcionalidade**: Fluxo de Cadastro (Paciente)  
> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  

---

## Resumo da Otimização

| Métrica | Original | Otimizado | Redução |
|--------|----------|-----------|---------|
| Casos de Teste | 19 | 4 | 79% |
| Páginas de Documentação | 5 | 1 | 80% |
| Tempo Estimado de Execução | ~60 min | ~15 min | 75% |

---

## Casos de Teste Essenciais

---

## Caso 01: Fluxo Principal Completo

**ID:** CAD_PAC_MAIN_001  
**Técnica:** Particionamento de Equivalência + Tabela de Decisão  
**Risco:** Alto  
**Automatizável:** Sim  

### Descrição
Valida o caminho feliz completo do cadastro de paciente, cobrindo múltiplos métodos de autenticação em um único fluxo.

### Pré-condições
- Ambiente de teste configurado  
- Contas de teste válidas (Google e Email)

### Cenários Cobertos
- Login via Google com permissão concedida  
- Login via Email com OTP válido  
- Idade mínima (18) e máxima (110)  
- CEP válido (formato e ViaCEP)  
- Preenchimento das 4 etapas do cadastro  
- Autenticação automática e redirecionamento final  

### Passos do Teste

1. Acessar o sistema ConectaBem  
2. Selecionar o método de login (Google ou Email)  
3. Realizar autenticação:
   - Conceder permissões (Google) **ou**
   - Validar OTP (Email)  
4. Selecionar o perfil **Paciente**  
5. Preencher a **Etapa 1/4**:
   - Nome válido (mínimo 3 caracteres)  
   - Data de nascimento válida  
   - CEP existente e em formato correto  
   - Endereço completo  
6. Avançar para a **Etapa 2/4**:
   - Preencher preferências **ou** pular  
7. Avançar para a **Etapa 3/4**:
   - Preencher necessidades **ou** pular  
8. Avançar para a **Etapa 4/4**  
9. Finalizar o cadastro  

### Resultado Esperado
- Registro da data e hora do cadastro  
- Autenticação automática  
- Redirecionamento para a Home autenticada  
- Confirmação visual de cadastro  

### Critérios de Aceitação
- Ambos os métodos de login funcionam no mesmo fluxo  
- Validações em tempo real  
- Botão **Continuar** habilita apenas com campos válidos  
- Progresso salvo automaticamente  
- Persistência ao recarregar a página  

---

## Caso 02: Tabela de Validações de Campos

**ID:** CAD_PAC_VALID_002  
**Técnica:** Tabela de Decisão + Análise de Valor Limite  
**Risco:** Alto  
**Automatizável:** Sim  

### Matriz de Validações

| Campo | Valor Testado | Tipo | Comportamento Esperado | Criticidade |
|------|--------------|------|-----------------------|-------------|
| Nome | "Jo" | Inválido | Erro: mínimo 3 caracteres | Alta |
| Nome | "Ana" | Válido | Campo aceito | Alta |
| Idade | 17 | Inválido | Erro: mínimo 18 anos | Alta |
| Idade | 18 | Válido | Campo aceito | Alta |
| Idade | 110 | Válido | Campo aceito | Alta |
| Idade | 111 | Inválido | Erro: máximo 110 | Alta |
| CEP | "12345" | Inválido | Erro de formato | Média |
| CEP | "00000-000" | Inválido | CEP não encontrado | Média |
| CEP | "01001-000" | Válido | Autocompleta endereço | Média |
| Email | Já cadastrado | Inválido | Email já cadastrado | Alta |
| Campo obrigatório | Vazio | Inválido | Campo obrigatório | Alta |

### Passos do Teste

Para cada linha da matriz:
1. Acessar a etapa correspondente  
2. Inserir o valor testado  
3. Validar mensagem ou comportamento  
4. Verificar estado do botão **Continuar**

### Combinações Críticas

- **Cenário 1 – Múltiplos erros**
  - Nome: Jo  
  - Idade: 17  
  - CEP: 12345  
  - Resultado: múltiplos erros simultâneos  

- **Cenário 2 – Fluxo válido**
  - Nome: Maria  
  - Idade: 18  
  - CEP: 01001-000  
  - Resultado: avanço de etapa  

---

## Caso 03: Exceções de Autenticação

**ID:** CAD_PAC_EXC_003  
**Técnica:** Particionamento de Equivalência  
**Risco:** Médio  
**Automatizável:** Sim  

### Partições Testadas

| Cenário | Comportamento Esperado |
|-------|------------------------|
| Google sem permissão | Mensagem clara + retorno |
| OTP incorreto | Erro + contador |
| 5 tentativas inválidas | Bloqueio por 5 minutos |
| OTP expirado | Mensagem + reenvio |
| Limite de reenvios | Bloqueio por 1 hora |
| Email inválido | Erro em tempo real |

### Cenários

- **Google sem permissão**
  - Negar permissão
  - Exibir mensagem
  - Retornar à tela inicial

- **OTP inválido**
  - Inserir código incorreto
  - Exibir erro
  - Bloquear após 5 tentativas

- **Limite de reenvio**
  - Atingir limite
  - Exibir mensagem
  - Desabilitar botão

---

## Caso 04: Workflow e Persistência

**ID:** CAD_PAC_STATE_004  
**Técnica:** Transição de Estados  
**Risco:** Médio  
**Automatizável:** Parcial  

### Estados do Fluxo

- Início  
- Etapa 1 (validação em tempo real)  
- Etapa 2 (campos opcionais)  
- Etapa 3 (persistência)  
- Etapa 4 (confirmação)  
- Concluído (Home autenticada)  

### Transições Testadas

| De | Para | Condição | Resultado |
|----|-----|----------|----------|
| Etapa 1 | Etapa 2 | Campos válidos | Avança |
| Etapa 1 | Etapa 2 | Campos inválidos | Bloqueia |
| Etapa 2 | Etapa 3 | Pular opcional | Avança |
| Qualquer | Retorno | Fechar navegador | Recupera dados |
| Etapa 4 | Home | Finalizar | Autentica |

---

## Matriz de Cobertura

| Requisito | Caso | Risco | Status |
|----------|------|-------|--------|
| RF01 | CAD_PAC_MAIN_001 | Alto | OK |
| RF02 | CAD_PAC_VALID_002 | Alto | OK |
| RF03 | CAD_PAC_STATE_004 | Alto | OK |
| RF04 | CAD_PAC_CRIT_001 | Alto | OK |
| RF05 | CAD_PAC_EXC_003 | Médio | OK |
