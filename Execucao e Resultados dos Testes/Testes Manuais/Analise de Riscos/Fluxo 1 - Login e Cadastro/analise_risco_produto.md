# Análise de Risco – Visão Geral do Produto

## Contexto
Plataforma web de cadastro e conexão entre **pacientes** e **profissionais da saúde**, com:
- Autenticação e criação de conta  
- Busca e filtro de profissionais  
- Agendamento de atendimentos  

Envolve **dados sensíveis**, múltiplos perfis e ações com impacto no mundo real.

---

## Visão Consolidada dos Fluxos

| Fluxo | Objetivo | Nível de Risco |
|------|---------|---------------|
| Fluxo 1 – Login/Cadastro | Permitir acesso e criação de conta | 🔴 Alto |
| Fluxo 2 – Busca e Filtro | Encontrar profissionais adequados | 🟠 Médio |
| Fluxo 3 – Agendamento | Concretizar atendimento | ⚠ Crítico |

---

## Fluxo 1 – Login e Cadastro

**Principais riscos**
- Falha de autenticação (OTP / Google)
- Dados inválidos ou inconsistentes
- Falta de feedback em erros ou bloqueios
- Riscos básicos de segurança

**Impacto**
- Usuário não consegue acessar o sistema
- Perda de confiança logo na entrada
- Possíveis impactos legais (LGPD)

**Risco consolidado:** 🔴 Alto  
**Foco de testes:** validações, mensagens de erro, segurança e estabilidade

---

## Fluxo 2 – Busca e Filtro

**Principais riscos**
- Resultados incorretos ou incompletos
- Combinação de filtros falhando
- Estados vazios ou de erro mal tratados
- Performance com grande volume de dados

**Impacto**
- Usuário não encontra profissionais
- Redução de conversão para agendamento

**Risco consolidado:** 🟠 Médio  
**Foco de testes:** lógica de filtros, estados de erro, performance e UX

---

## Fluxo 3 – Agendamento (Paciente e Profissional)

**Principais riscos**
- Conflito de horários
- Estados inconsistentes (pendente, confirmado, cancelado)
- Regras de negócio inválidas
- Falha de comunicação entre as partes

**Impacto**
- Conflitos reais entre usuários
- Perda de credibilidade da plataforma
- Alto custo de suporte

**Risco consolidado:** ⚠ Crítico  
**Foco de testes:** regras de negócio, transições de estado, fluxo end-to-end

---

## Prioridade Geral de Testes

1. ⚠ **Agendamento**
2. 🔴 **Login e Cadastro**
3. 🟠 **Busca e Filtro**

---

## Riscos Transversais
- UX inconsistente entre fluxos
- Sessão expirada em ações críticas
- Mensagens genéricas de erro
- Performance em horários de pico
- Exposição excessiva de dados sensíveis
