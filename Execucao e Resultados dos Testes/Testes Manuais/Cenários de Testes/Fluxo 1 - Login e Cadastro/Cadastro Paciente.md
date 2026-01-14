# Plano de Testes Otimizado – Cadastro de Paciente

> **Funcionalidade**: Fluxo de Cadastro (Paciente)  
> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  
> **Filosofia**: Testar melhor, não testar mais

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

### Caso 01: Fluxo Principal Completo

**ID:** CAD_PAC_MAIN_001  
**Técnica:** Particionamento de Equivalência + Tabela de Decisão  
**Risco:** Alto  
**Automatizável:** Sim

#### Descrição
Testa o caminho feliz completo do cadastro, cobrindo múltiplos métodos de autenticação em um único fluxo.

#### Pré-condições
- Ambiente de teste configurado  
- Contas de teste disponíveis (Google e Email)

#### Cenários Cobertos (1 teste → múltiplas validações)
- Login via Google com permissão concedida  
- Login via Email com OTP válido  
- Idade mínima (18) e máxima (110)  
- CEP válido (formato + ViaCEP)  
- Preenchimento das 4 etapas  
- Autenticação automática e redirecionamento  

#### Passos do Teste (Gherkin)

```gherkin
DADO que o usuário acessa o ConectaBem  
QUANDO seleciona método de login {Google | Email}  
E concede permissões necessárias (Google) OU valida OTP (Email)  
E seleciona perfil "Paciente"  
E preenche a Etapa 1/4 com:
- Nome válido (≥ 3 caracteres)  
- Data de nascimento válida  
- CEP existente e no formato correto  
- Endereço completo  

E avança para Etapa 2/4  
E preenche preferências ou pula se permitido  
E avança para Etapa 3/4  
E preenche necessidades ou pula se permitido  
E avança para Etapa 4/4  
E finaliza o cadastro  

ENTÃO o sistema deve:
- Registrar data e hora do cadastro  
- Autenticar automaticamente  
- Redirecionar para a Home autenticada  
- Exibir confirmação de cadastro  
```

#### Critérios de Aceitação
- Todos os métodos de login funcionam no mesmo fluxo  
- Validações em tempo real  
- Botão “Continuar” habilita apenas com campos válidos  
- Progresso salvo automaticamente entre etapas  
- Persistência ao recarregar a página  

---

### Caso 02: Tabela de Validações de Campos

**ID:** CAD_PAC_VALID_002  
**Técnica:** Tabela de Decisão + Análise de Valor Limite  
**Risco:** Alto  
**Automatizável:** Sim

#### Matriz de Validações

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
| Email | já cadastrado | Inválido | Email já cadastrado | Alta |
| Campo obrigatório | vazio | Inválido | Campo obrigatório | Alta |

#### Passos do Teste

```gherkin
PARA CADA linha da matriz de validações  
  DADO que estou na etapa correspondente  
  QUANDO insiro o valor testado  
  ENTÃO vejo o comportamento esperado  
  E o botão “Continuar” reflete o status correto  
```

#### Dados de Teste para Combinações

```
{
  "cenarios_criticos": [
    {
      "nome": "Jo",
      "idade": 17,
      "cep": "12345",
      "esperado": "Múltiplos erros simultâneos"
    },
    {
      "nome": "Maria",
      "idade": 18,
      "cep": "01001-000",
      "esperado": "Avança para próxima etapa"
    }
  ]
}
```

---

### Caso 03: Exceções de Autenticação

**ID:** CAD_PAC_EXC_003  
**Técnica:** Particionamento de Equivalência  
**Risco:** Médio  
**Automatizável:** Sim

#### Partições Testadas

| Cenário | Comportamento Esperado |
|-------|------------------------|
| Google sem permissão | Fluxo interrompido + mensagem clara |
| OTP incorreto | Mensagem de erro + contador |
| 5 tentativas inválidas | Bloqueio por 5 minutos |
| OTP expirado | Mensagem + opção reenviar |
| Limite de reenvios | Bloqueio por 1 hora |
| Email inválido | Erro em tempo real |

#### Cenários de Teste

```gherkin
CENÁRIO 1: Google sem permissão  
  DADO que iniciei login com Google  
  QUANDO nego a permissão  
  ENTÃO vejo mensagem explicativa  
  E retorno à tela inicial  

CENÁRIO 2: OTP inválido  
  DADO que solicitei código por email  
  QUANDO insiro código incorreto  
  ENTÃO vejo mensagem de erro  
  E após 5 tentativas sou bloqueado  

CENÁRIO 3: Limite de reenvios  
  DADO que já reenviei o código 4 vezes  
  QUANDO tento o 5º reenvio  
  ENTÃO vejo mensagem de limite atingido  
  E o botão fica desabilitado  
```

---

### Caso 04: Workflow e Persistência

**ID:** CAD_PAC_STATE_004  
**Técnica:** Transição de Estados  
**Risco:** Médio  
**Automatizável:** Parcial

#### Diagrama de Estados

```
[Início]  
↓  
[Etapa 1] ↔ validação em tempo real  
↓  
[Etapa 2] ↔ campos opcionais  
↓  
[Etapa 3] ↔ persistência  
↓  
[Etapa 4] ↔ confirmação  
↓  
[Concluído] → Home autenticada  
```

#### Transições Testadas

| De | Para | Condição | Resultado |
|----|-----|----------|----------|
| Etapa 1 | Etapa 2 | Campos válidos | Avança |
| Etapa 1 | Etapa 2 | Campos inválidos | Bloqueia |
| Etapa 2 | Etapa 3 | Pular opcional | Avança |
| Qualquer | Retorno | Fechar navegador | Recupera dados |
| Etapa 4 | Home | Finalizar | Autentica |

## Matriz de Cobertura

| Requisito | Caso | Risco | Status |
|----------|------|-------|--------|
| RF01 | CAD_PAC_MAIN_001 | Alto | OK |
| RF02 | CAD_PAC_VALID_002 | Alto | OK |
| RF03 | CAD_PAC_STATE_004 | Alto | OK |
| RF04 | CAD_PAC_CRIT_001 | Alto | OK |
| RF05 | CAD_PAC_EXC_003 | Médio | OK |

---
