# 📊 Relatório de Métricas de QA — ConectaBem

> **Gerado em:** 03 de junho de 2026  
> **Repositório:** https://github.com/developmentHC/QualityAssurance  
> **Status:** Análise Completa

---

## 🔹 Visão Geral

| Métrica | Valor |
|--------|-------|
| Total de documentos | 72 arquivos .md |
| Relatórios de bugs | 10 documentados |
| Cenários de teste | 7 arquivos |
| Planos de teste | 5 docs |
| Relatórios regressivos | 5 módulos |
| Testes exploratórios | 2 relatórios |
| Cobertura de fluxos | 33% (1 de 3) |
| Bugs críticos (S1/S2) | 3 abertos |
| Bugs resolvidos | 3 |

---

## 🧪 Resultado dos Testes Regressivos

### Por Módulo

| Módulo | ✅ Passou | ❌ Falhou | 🚧 Não Impl. | ⚠️ Inválido | **Taxa de Passagem** |
|--------|----------|----------|---------------|------------|-----------------|
| Login Paciente | 4 | 1 | 4 | 2 | **57%** |
| Login Profissional | 4 | 1 | 4 | 2 | **57%** |
| Cadastro Paciente | 5 | 1 | 4 | 2 | **63%** |
| Cadastro Profissional | 5 | 1 | 4 | 2 | **63%** |
| Cadastro Inválido | 9 | 0 | 0 | 1 | **90%** |
| **TOTAL** | **27** | **4** | **16** | **9** | **63%** |

### Gráfico — Distribuição de Resultados

```
PASSOU ████████████████████ 27 (41%)
FALHOU ████ 4 (6%)
NÃO IMPL ████████████ 16 (24%)
INVÁLIDO ████████ 9 (14%)
       |----|----|----|----|----|----|
       0    10   20   30   40   50   60
```

### Gráfico — Taxa de Passagem por Módulo

```
Login Paciente        ███████████████████████████ 57%
Login Profissional    ███████████████████████████ 57%
Cadastro Paciente     █████████████████████████████ 63%
Cadastro Profissional █████████████████████████████ 63%
Cadastro Inválido     ██████████████████████████████████ 90%
                      |----|----|----|----|----|----|
                      0%   20%  40%  60%  80%  100%
```

---

## 🔥 Risco por Fluxo

| Fluxo | Descrição | Nível de Risco | CTs Executados | Status |
|-------|-----------|---------------|----------------|--------|
| **Fluxo 1** | Login e Cadastro | 🔴 Alto | 65 | ✅ Testado |
| **Fluxo 2** | Busca e Filtro | 🟠 Médio | — | ❌ Sem execução |
| **Fluxo 3** | Agendamento | ⚠️ Crítico | — | ❌ Sem execução |

### Análise de Risco

```
FLUXO 1 (LOGIN/CADASTRO)
├─ Cenários criados: ✅
├─ Relatórios executados: ✅
├─ Taxa de passagem: 63%
├─ Bugs encontrados: 8
└─ Prioridade: 🔴 ALTA (bloqueia acesso ao sistema)

FLUXO 2 (BUSCA/FILTRO)
├─ Cenários criados: ✅
├─ Relatórios executados: ❌ NÃO
├─ Taxa de passagem: —
├─ Bugs encontrados: 0 (não testado)
└─ Prioridade: 🟠 MÉDIA (falha na conversão)

FLUXO 3 (AGENDAMENTO)
├─ Cenários criados: ✅
├─ Relatórios executados: ❌ NÃO
├─ Taxa de passagem: —
├─ Bugs encontrados: 0 (não testado)
└─ Prioridade: ⚠️ CRÍTICA (impacto real no negócio)
```

---

## 🐞 Bugs Registrados

### Bugs Críticos (S1) — Bloqueadores

| ID | Nome | Módulo | Severidade | Status |
|-----|------|--------|-----------|--------|
| BUG-AUTH-001 | Falha de autenticação e inicialização do backend | Autenticação | **S1 Crítico** | 🔴 Aberto |
| BUG-422-001 | Erro 422 — userId ausente no payload | Cadastro | **S1 Crítico** | 🔴 Aberto |
| BUG-AUTH-002 | Resposta inválida do servidor após registro | Cadastro | **S1 Crítico** | 🔴 Aberto |

### Bugs Altos (S2) — Funcionalidade Afetada

| ID | Nome | Módulo | Severidade | Status |
|-----|------|--------|-----------|--------|
| BUG-FORM-001 | Cadastro profissional travado — botão continuar sem ação | Cadastro | **S2 Alto** | 🔴 Aberto |
| BUG-API-001 | Rota OTP — socket desconectado / erro TLS | API | **S2 Alto** | 🔴 Aberto |

### Bugs Médios (S3) — Melhorias Necessárias

| ID | Nome | Módulo | Severidade | Status |
|-----|------|--------|-----------|--------|
| BUG-BIZ-001 | Regra de negócio — campo Bairro rejeita valores válidos | Cadastro | **S3 Médio** | 🔴 Aberto |
| BUG-UX-001 | Falta feedback no cadastro de paciente com nome curto | Cadastro | **S3 Médio** | 🔴 Aberto |

### Bugs Resolvidos ✅

| ID | Nome | Módulo | Severidade | Status |
|-----|------|--------|-----------|--------|
| BUG-ACC-001 | Ajuste de acessibilidade — erro 422 ao clicar "Pular" | Cadastro | S2 | ✅ **Resolvido** |
| BUG-ERR-001 | Telas de erro 500/403 — botão "Tentar novamente" | Erro Handling | S3 | ✅ **Resolvido** |
| BUG-CARD-001 | Cards de profissionais — imagens 502 e rota 404 | Busca | S3 | ✅ **Resolvido** |

### Gráfico — Distribuição de Severidade

```
S1 CRÍTICO   ███████ 3
S2 ALTO      █████ 2
S3 MÉDIO     █████ 2
RESOLVIDOS   ██████ 3
            |----|----|----
            0    1    2    3
```

---

## ⚠️ Gaps e Pontos de Atenção

### 🔴 Críticos (Bloqueiam Lançamento)

- [ ] **Fluxos 2 e 3 sem execução** — cenários criados mas nenhum relatório de teste
  - Fluxo 2 (Busca/Filtro): 0 relatórios executados
  - Fluxo 3 (Agendamento): 0 relatórios executados, mas classificado como risco CRÍTICO
  
- [ ] **Facebook OAuth não implementado** — 6 casos de teste em espera
  - Login via Facebook (CT04-CT06)
  - Cadastro via Facebook (CT04-CT06)
  
- [ ] **3 bugs críticos (S1) abertos** — sistema indisponível
  - BUG-AUTH-001: Backend falha ao inicializar (SendGrid + MongoDB não configurados)
  - BUG-422-001: Cadastro retorna 422 (payload sem userId)
  - BUG-AUTH-002: Resposta 200 sem persistência (UnhandledRejection)

### 🟠 Altos (Afetam Funcionalidade)

- [ ] **Bloqueio por múltiplas tentativas de OTP (CT12)** — não implementado em nenhum módulo
  - Risco de segurança: força bruta sem proteção

- [ ] **Login simultâneo em dispositivos (CT13)** — não implementado em nenhum módulo

- [ ] **Código de verificação não expira após 5 min** — aceito além do prazo permitido

- [ ] **Rota OTP instável** — socket hang up e erros TLS recorrentes

### 🟡 Médios (Afetam Experiência)

- [ ] **Testes automatizados com Cypress** — planejados com CI/CD, mas sem execução registrada
  
- [ ] **Testes de performance (JMeter)** — planejados mas sem execução

- [ ] **Testes de segurança (OWASP ZAP)** — planejados mas sem execução

- [ ] **Cobertura de código** — não disponível (sem integração com ferramenta de coverage)

- [ ] **Inconsistência de feedback** — cadastro paciente não valida nome < 3 caracteres visualmente

---

## 📌 Resumo Executivo

O ConectaBem possui documentação de QA bem estruturada com planejamento sólido, mas a execução está concentrada no Fluxo 1 (Login/Cadastro), que apresenta uma taxa de passagem de **63%**. Os Fluxos 2 (Busca) e 3 (Agendamento) — sendo este último classificado como **risco crítico** — ainda carecem de testes de execução.

Os **3 bugs S1 críticos** bloqueiam completamente o acesso ao sistema (falha de autenticação, persistência de registro e payload malformado), impedindo validação dos fluxos superiores. A resolução desses bugs é pré-requisito para prosseguir com testes de integração e acessibilidade.

**Taxa geral de cobertura:** 63% (executável)  
**Fluxos com cobertura:** 1 de 3 (33%)  
**Bugs abertos:** 5 (3 críticos)  
**Recomendação:** Resolver bugs críticos → Executar Fluxos 2 e 3 → Automação com Cypress

---

## 🎯 Top 3 Prioridades

### 1️⃣ **Resolver BUG-AUTH-001 (S1 Crítico)** — Falha de Autenticação Backend
- **Problema:** SendGrid API Key inválida + MongoDB URI undefined
- **Impacto:** Sistema completamente indisponível (nenhum usuário consegue fazer login)
- **Ação:** Corrigir variáveis de ambiente no Vercel (SENDGRID_API_KEY, MONGODB_URI)
- **Prazo:** URGENTE (bloqueia tudo)

### 2️⃣ **Executar Testes dos Fluxos 2 e 3** — Busca e Agendamento
- **Problema:** Cenários criados mas nenhuma execução registrada (Fluxo 3 é risco crítico)
- **Impacto:** Não há validação de funcionalidades críticas do negócio
- **Ação:** 
  - Criar relatórios de execução para Busca e Filtro (Fluxo 2)
  - Criar relatórios de execução para Agendamento (Fluxo 3) com foco em consistência de estado
- **Prazo:** ALTA (bloqueia validação de produto)

### 3️⃣ **Implementar Bloqueio por Múltiplas Tentativas de OTP** — Segurança
- **Problema:** CT12 não implementado; permite força bruta sem proteção
- **Impacto:** Vulnerabilidade de segurança; risco de acesso não autorizado
- **Ação:**
  - Implementar limite de 3-5 tentativas antes de expiração forçada
  - Implementar backoff progressivo (ex: 5s, 30s, 5min)
- **Prazo:** ALTA (segurança)

---

## 📈 Métricas por Tipo de Teste

| Tipo de Teste | Status | Observações |
|-------|--------|-----------|
| **Testes Manuais Regressivos** | ✅ Parcial | 5 módulos (Fluxo 1 apenas) |
| **Testes Exploratórios** | ✅ Completo | 2 relatórios com insights |
| **Testes de API (Postman)** | 🟡 Planejado | Plano criado, sem evidência de execução |
| **Testes de Acessibilidade (WCAG)** | 🟡 Planejado | Lighthouse reports gerados, análise pendente |
| **Testes de Performance (JMeter)** | ❌ Não iniciado | Planejado mas sem execução |
| **Testes Automatizados (Cypress)** | ❌ Não iniciado | Planejado com CI/CD mas sem scripts |
| **Testes de Segurança (OWASP)** | ❌ Não iniciado | Planejado mas sem execução |
| **Cobertura de Código** | ❌ Não disponível | Sem integração de ferramentas |

---

## 📊 Histórico de Resolução

### Bugs Corrigidos Recentemente

```
Jun 2026  ✅ Ajuste de acessibilidade (erro 422 ao clicar "Pular")
Jun 2026  ✅ Telas de erro 500/403 (botão "Tentar novamente")
Jun 2026  ✅ Cards de profissionais (imagens 502, rota 404)
```

### Bugs Pendentes há Mais de 2 Sprints

```
📅 Maio 2026   BUG-AUTH-001 (falha de autenticação)
📅 Maio 2026   BUG-422-001 (erro 422 cadastro)
📅 Maio 2026   BUG-AUTH-002 (resposta inválida após registro)
📅 Maio 2026   BUG-FORM-001 (cadastro profissional travado)
```

---

## 🔄 Próximos Passos Recomendados

1. ✅ **Este mês:** Resolver os 3 bugs S1
2. ✅ **Próximo sprint:** Executar testes Fluxo 2 e Fluxo 3
3. ✅ **Sprint +2:** Implementar testes automatizados com Cypress
4. ✅ **Sprint +3:** Testes de performance e segurança
5. ✅ **Contínuo:** Manter cobertura de regressão mensal

---

## 📎 Referências

- **Planejamento de QA:** Documentação Geral/2.0 - Planejamento do QA.md
- **Métricas Utilizadas:** Documentação Geral/Métricas de Qualidade/Métricas Utilizadas.md
- **Análise de Riscos:** Análise de Riscos/Fluxo 1/analise_risco_produto.md
- **Relatórios de Bugs:** Relatorios e Comunicação/Relatorio de Bugs/
- **Testes Exploratórios:** Relatorios e Comunicação/1.0 e 2.0 - Relatorio de teste exploratorio.md

---

**Gerado automaticamente pela skill `qa-repo-analyzer`**  
*Para mais detalhes sobre cada bug ou fluxo, consulte os arquivos de relatório específicos no repositório.*
