# Plano de Testes — Cadastro de Profissional
**Sistema:** ConectaBem | **Versão:** 2.0

---

## Resumo

| Métrica                    | Original | Otimizado | Redução |
|---------------------------|----------|-----------|---------|
| Casos de Teste             | 25       | 5         | 80%     |
| Cenários Separados         | 6        | 1         | 83%     |
| Validações Individuais     | 11       | 1         | 91%     |

---

## CAD_PRO_MAIN_001 — Fluxo Principal Completo

| Info | Detalhe |
|------|---------|
| Técnica | Particionamento de Equivalência + Tabela de Decisão |
| Risco | Alto |
| Automatizável | Sim |

| Componente | Cenários Incluídos | Criticidade |
|-----------|-------------------|-------------|
| Autenticação | Google com permissão / Email com OTP válido | Alta |
| Dados Pessoais | Nome (limites), Idade (18–110), CEP residencial | Alta |
| Dados Profissionais | Clínica, CPF/CNPJ, CEP profissional, Endereço | Alta |
| Especialidades | Mínimo 1 selecionada | Alta |
| Preferences | Vazio, nulo ou múltiplos itens | Média |
| Sugestão | Mínimo 1 caractere | Média |
| Finalização | Autenticação + redirecionamento | Alta |

| # | Passo | Detalhe |
|---|-------|---------|
| 1 | Acessar o ConectaBem | — |
| 2 | Realizar login | Google ou Email |
| 3 | Selecionar perfil | Profissional |
| 4 | Etapa — Dados Pessoais | Nome ≥10 chars · Data nascimento · CEP residencial · Endereço completo |
| 5 | Etapa — Dados Profissionais | Nome da clínica · CPF ou CNPJ · CEP profissional · Endereço · Número ≥1 · Complemento (opcional) |
| 6 | Etapa — Especialidades | Selecionar ao menos 1 |
| 7 | Etapa — Preferences | Configurar (opcional) |
| 8 | Etapa — Sugestão | Inserir mínimo 1 caractere |
| 9 | Finalizar cadastro | — |

| Resultado Esperado | Critério de Aceitação |
|--------------------|-----------------------|
| Registro de data/hora do cadastro | Ambos os métodos de login funcionam |
| Autenticação automática | Validações em tempo real |
| Redirecionamento para Home autenticada | Botão Continuar só habilita com campos válidos |
| Perfil exibido como Profissional | Progresso salvo e persistente ao recarregar |

---

## CAD_PRO_VALID_002 — Validações de Campos

| Info | Detalhe |
|------|---------|
| Técnica | Tabela de Decisão + Análise de Valor Limite |
| Risco | Alto |
| Automatizável | Sim |

| Campo | Tipo | Valor Testado | Comportamento Esperado | Criticidade |
|-------|------|--------------|------------------------|-------------|
| Nome | Inválido | "Ana" | Erro: mínimo 10 caracteres | Alta |
| Nome | Inválido | "João  Silva" | Erro: espaços duplicados | Média |
| Nome | Válido | "Maria Clara Souza" | Campo aceito | Alta |
| Idade | Inválido | 17 | Erro: mínimo 18 anos | Alta |
| Idade | Válido | 110 | Campo aceito | Alta |
| CPF/CNPJ | Inválido | Documento inválido | Erro de validação | Alta |
| CPF/CNPJ | Válido | Documento válido | Campo aceito | Alta |
| CEP Profissional | Inválido | "00000-000" | CEP não encontrado | Média |
| Endereço Clínica | Inválido | "Rua A" | Erro: mínimo 5 caracteres | Média |
| Número | Inválido | 0 | Erro: número ≥1 | Média |
| Especialidades | Inválido | Nenhuma | Campo obrigatório | Alta |
| Especialidades | Válido | Uma ou mais | Campo aceito | Alta |
| Preferences | Opcional | Vazio ou nulo | Campo aceito | Baixa |
| Sugestão | Inválido | Vazio | Erro: mínimo 1 caractere | Média |

**Combinações críticas:**

| Cenário | Campos com erro | Resultado |
|---------|----------------|-----------|
| Múltiplos erros | Nome inválido · Idade inválida · CPF inválido · Sem especialidade | Múltiplos erros simultâneos · Botão desabilitado |
| CPF como PJ | CPF inserido em campo Pessoa Jurídica | Erro de tipo de documento |
| CNPJ como PF | CNPJ inserido em campo Pessoa Física | Erro de tipo de documento |
| Documento compatível | Tipo correto selecionado | Campo aceito |

---

## CAD_PRO_EXC_003 — Exceções de Autenticação e Duplicidade

| Info | Detalhe |
|------|---------|
| Técnica | Particionamento de Equivalência |
| Risco | Médio-Alto |
| Automatizável | Sim |

| Cenário | Comportamento Esperado | Risco |
|---------|------------------------|-------|
| Google sem permissão | Mensagem clara + retorno à tela inicial | Médio |
| OTP expirado | Mensagem + opção de reenvio | Médio |
| 5 tentativas OTP erradas | Bloqueio temporário | Médio |
| Email já vinculado a Paciente | Bloqueio imediato + mensagem explicativa + opções de ação | Alto |
| Email já vinculado a Profissional | Detecção no envio do OTP · Orientação para login ou recuperação | Alto |
| Falha ao salvar | Mensagem de erro + recuperação de dados | Médio |

---

## CAD_PRO_STATE_004 — Workflow e Persistência

| Info | Detalhe |
|------|---------|
| Técnica | Transição de Estados |
| Risco | Médio |
| Automatizável | Parcial |

| De | Para | Condição | Resultado |
|----|------|----------|-----------|
| Dados Pessoais | Dados Profissionais | CPF inválido | Bloqueia ✗ |
| Dados Profissionais | Especialidades | Sem especialidade | Bloqueia ✗ |
| Qualquer etapa | Rascunho | Dados parcialmente válidos | Salva ✓ |
| Revisão | Especialidades | Voltar | Mantém dados ✓ |
| Conexão perdida | Reconexão | Etapa intermediária | Recupera tudo ✓ |
| Fechamento do navegador | Retorno | Qualquer etapa | Recupera dados ✓ |

---

## CAD_PRO_BUSINESS_005 — Regras de Negócio

| Info | Detalhe |
|------|---------|
| Técnica | Testes Baseados em Regras de Negócio |
| Risco | Alto |
| Automatizável | Sim |

| Pessoa Física | CNPJ | Clínica | Resultado |
|:---:|:---:|:---:|---------|
| Sim | Não | Não | Cadastro individual ✓ |
| Sim | Sim | Sim | Cadastro com clínica ✓ |
| Não (PJ) | Sim | Sim | Cadastro empresarial ✓ |
| Não (PJ) | Não | — | Erro: CNPJ obrigatório ✗ |

> Endereço profissional igual ao residencial é **permitido** com aviso ao usuário.

---

## Matriz de Cobertura

| Requisito | Casos Cobertos | Risco | Status |
|-----------|---------------|-------|--------|
| RF-P01 | MAIN_001 + VALID_002 | Alto | ✓ OK |
| RF-P02 | MAIN_001 + VALID_002 | Alto | ✓ OK |
| RF-P03 | MAIN_001 | Médio | ✓ OK |
| RF-P04 | MAIN_001 + VALID_002 | Baixo | ✓ OK |
| RF-P05 | EXC_003 + BUSINESS_005 | Alto | ✓ OK |
| RF-P06 | VALID_002 + BUSINESS_005 | Alto | ✓ OK |
| RF-P07 | STATE_004 | Médio | ✓ OK |
| RF-P08 | STATE_004 | Médio | ✓ OK |
