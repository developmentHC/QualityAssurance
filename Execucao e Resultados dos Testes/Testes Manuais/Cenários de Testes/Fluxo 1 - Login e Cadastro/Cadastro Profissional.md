# Plano de Testes Otimizado – Cadastro de Profissional

> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  
> **Status**: Consolidação Inteligente  
> **Filosofia**: Reduzir 74% dos casos mantendo 100% da cobertura de risco

---

## Resumo da Otimização

| Métrica | Original | Otimizado | Redução |
|---------|----------|-----------|---------|
| Casos de Teste | 25 | 5 | 80% |
| Cenários Separados | 6 | 1 (estruturado) | 83% |
| Validações Individuais | 11 | 1 (matriz) | 91% |

---

## Casos de Teste Essenciais (5 Casos Substituem 25)

---

## Caso 01: Fluxo Principal Completo do Profissional

**ID:** CAD_PRO_MAIN_001  
**Técnica:** Particionamento de Equivalência + Tabela de Decisão Combinada  
**Risco:** Alto  
**Automatizável:** Sim  

### Descrição
Valida o fluxo completo de cadastro do profissional, cobrindo autenticação, dados pessoais, dados profissionais, especialidades, preferências e finalização.

### Matriz de Cenários Cobertos

| Componente | Cenários Incluídos | Criticidade |
|-----------|-------------------|-------------|
| Autenticação | Google com permissão / Email com OTP válido | Alta |
| Dados Pessoais | Nome (limites), Idade (18–110), CEP residencial | Alta |
| Dados Profissionais | Clínica, CPF/CNPJ, CEP profissional, Endereço | Alta |
| Especialidades | Mínimo 1 selecionada | Alta |
| Preferences | Vazio, nulo ou múltiplos itens | Média |
| Sugestão | Mínimo 1 caractere | Média |
| Finalização | Autenticação + redirecionamento | Alta |

### Dados de Teste Estratégicos

- Métodos de login: Google, Email  
- Nome: mínimo 10 caracteres  
- Idade: 18, 65 e 110  
- CEP residencial: 01001-000  
- CPF ou CNPJ em formato válido  
- CEP profissional: 20021-120  
- Especialidades: ao menos 1 selecionada  
- Sugestão: mínimo 1 caractere  

### Passos do Teste

1. Acessar o ConectaBem  
2. Realizar login via Google ou Email  
3. Selecionar o perfil Profissional  
4. Preencher dados pessoais:
   - Nome válido  
   - Data de nascimento válida  
   - CEP residencial válido  
   - Endereço residencial completo  
5. Preencher dados profissionais:
   - Nome da clínica  
   - CPF ou CNPJ conforme tipo selecionado  
   - CEP profissional válido  
   - Endereço da clínica  
   - Número maior ou igual a 1  
   - Complemento opcional  
6. Selecionar ao menos 1 especialidade  
7. Configurar Service Preferences (opcional)  
8. Inserir sugestão  
9. Finalizar o cadastro  

### Resultado Esperado

- Registro da data e hora do cadastro  
- Autenticação automática  
- Redirecionamento para Home autenticada  
- Perfil exibido como Profissional  

---

## Caso 02: Matriz Completa de Validações do Profissional

**ID:** CAD_PRO_VALID_002  
**Técnica:** Tabela de Decisão Expandida + Análise de Valor Limite  
**Risco:** Alto  
**Automatizável:** Sim  

### Matriz de Validações

| Campo | Tipo | Valor Testado | Comportamento Esperado | Regra |
|------|------|--------------|------------------------|-------|
| Nome | Inválido | Ana | Erro: mínimo 10 caracteres | Alta |
| Nome | Inválido | João  Silva | Erro: espaços duplicados | Média |
| Nome | Válido | Maria Clara Souza | Aceito | Alta |
| Idade | Inválido | 17 | Erro: mínimo 18 | Alta |
| Idade | Válido | 110 | Aceito | Alta |
| CPF/CNPJ | Inválido | Documento inválido | Erro | Alta |
| CPF/CNPJ | Válido | Documento válido | Aceito | Alta |
| CEP Profissional | Inválido | 00000-000 | CEP não encontrado | Média |
| Endereço Clínica | Inválido | Rua A | Mínimo 5 caracteres | Média |
| Número | Inválido | 0 | Número maior ou igual a 1 | Média |
| Especialidades | Inválido | Nenhuma | Obrigatório | Alta |
| Especialidades | Válido | Uma ou mais | Aceito | Alta |
| Preferences | Opcional | Vazio ou nulo | Aceito | Baixa |
| Sugestão | Inválido | Vazio | Mínimo 1 caractere | Média |

### Combinações Críticas

- Múltiplos erros simultâneos:
  - Nome inválido  
  - Idade inválida  
  - CPF inválido  
  - Nenhuma especialidade  
  Resultado esperado: múltiplas mensagens de erro e botão Continuar desabilitado  

- Transição CPF e CNPJ:
  - CPF inserido como Pessoa Jurídica gera erro  
  - CNPJ inserido como Pessoa Física gera erro  
  - Documento compatível com o tipo é aceito  

---

## Caso 03: Exceções de Autenticação e Duplicidade

**ID:** CAD_PRO_EXC_003  
**Técnica:** Particionamento de Equivalência  
**Risco:** Médio-Alto  
**Automatizável:** Sim  

### Partições Testadas

| Categoria | Cenário | Resultado Esperado | Risco |
|---------|--------|-------------------|-------|
| Autenticação | Google sem permissão | Mensagem clara | Médio |
| OTP | Código expirado | Solicitar novo | Médio |
| OTP | Cinco tentativas erradas | Bloqueio temporário | Médio |
| Duplicidade | Email já é Paciente | Bloqueio imediato | Alto |
| Duplicidade | Email já é Profissional | Bloqueio | Alto |
| Conexão | Falha ao salvar | Recuperação | Médio |

### Fluxos Críticos

- Email vinculado a Paciente:
  - Bloqueio imediato  
  - Mensagem explicativa  
  - Opções de login ou uso de outro email  

- Email já Profissional:
  - Detecção no envio do OTP  
  - Orientação para login ou recuperação de senha  

---

## Caso 04: Workflow Profissional e Persistência

**ID:** CAD_PRO_STATE_004  
**Técnica:** Transição de Estados Expandida  
**Risco:** Médio  
**Automatizável:** Parcial  

### Estados do Fluxo

- Início  
- Autenticação  
- Seleção de Perfil  
- Dados Pessoais  
- Dados Profissionais  
- Especialidades  
- Preferences e Sugestão  
- Revisão  
- Concluído  

### Transições Testadas

| Estado Atual | Ação | Condição | Resultado |
|-------------|------|----------|----------|
| Dados Pessoais | Avançar | CPF inválido | Bloqueia |
| Dados Profissionais | Avançar | Sem especialidade | Bloqueia |
| Qualquer | Salvar rascunho | Parcial válido | Salva |
| Revisão | Voltar | Especialidades | Mantém dados |
| Conexão perdida | Reconectar | Etapa intermediária | Recupera tudo |

### Persistência

- Fechamento do navegador  
- Retorno após horas  
- Redirecionamento correto  
- Dados pessoais e profissionais preservados  

---

## Caso 05: Regras Específicas de Negócio

**ID:** CAD_PRO_BUSINESS_005  
**Técnica:** Testes Baseados em Regras de Negócio  
**Risco:** Alto  
**Automatizável:** Sim  

### Regras Críticas

- CPF incompatível com tipo selecionado é rejeitado  
- CNPJ incompatível com tipo selecionado é rejeitado  
- Endereço profissional igual ao residencial é permitido com aviso  

### Matriz de Decisão – Tipo de Profissional

| Pessoa Física | CNPJ | Clínica | Resultado |
|--------------|------|---------|-----------|
| Sim | Não | Não | Cadastro individual |
| Sim | Sim | Sim | Cadastro com clínica |
| Não (Jurídica) | Sim | Sim | Cadastro empresarial |
| Não (Jurídica) | Não | - | Erro: CNPJ obrigatório |

---

## 📈 Matriz de Cobertura – Profissional

| Requisito | Casos Cobertos | Risco | Status |
|----------|---------------|-------|--------|
| RF-P01 | MAIN + VALID | Alto | OK |
| RF-P02 | MAIN + VALID | Alto | OK |
| RF-P03 | MAIN | Médio | OK |
| RF-P04 | MAIN + VALID | Baixo | OK |
| RF-P05 | EXC + BUSINESS | Alto | OK |
| RF-P06 | VALID + BUSINESS | Alto | OK |
| RF-P07 | STATE | Médio | OK |
| RF-P08 | STATE | Médio | OK |
