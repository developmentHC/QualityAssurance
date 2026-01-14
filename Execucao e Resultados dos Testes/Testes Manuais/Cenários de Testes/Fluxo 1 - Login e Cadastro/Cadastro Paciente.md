# Plano de Testes Otimizado – Cadastro de Paciente
> **Funcionalidade**: Fluxo de Cadastro (Paciente)  
> **Sistema**: ConectaBem  
> **Versão**: 2.0 (Otimizada)  
> **Filosofia**: Testar melhor, não testar mais

---

## 📊 Resumo da Otimização
| Métrica | Original | Otimizado | Redução |
|---------|----------|-----------|---------|
| Casos de Teste | 19 | 4 | 79% |
| Páginas de Documentação | 5 | 1 | 80% |
| Tempo Estimado de Execução | ~60 min | ~15 min | 75% |

---

## 🎯 Casos de Teste Essenciais

### 🔹 **Caso 01: Fluxo Principal Completo**
**ID:** `CAD_PAC_MAIN_001`  
**Técnica:** Particionamento de Equivalência + Tabela de Decisão  
**Risco:** Alto  
**Automatizável:** Sim

#### **Descrição**
Testa o caminho feliz completo do cadastro, cobrindo múltiplos métodos de autenticação em um único fluxo.

#### **Pré-condições**
- Ambiente de teste configurado
- Contas de teste disponíveis (Google e email)

#### **Cenários Cobertos (1 teste → múltiplas validações)**
✅ **Método Google**: Conta válida + permissão concedida  
✅ **Método Email**: OTP válido dentro do prazo  
✅ **Limites de Idade**: 18 anos (mínimo) e 110 anos (máximo)  
✅ **CEP Válido**: Formato correto + existente no ViaCEP  
✅ **Preenchimento Completo**: Todas as 4 etapas  
✅ **Finalização**: Autenticação automática + redirecionamento

#### **Passos do Teste**
```gherkin
DADO que o usuário acessa o ConectaBem
QUANDO seleciona método de login {Google|Email}
E concede permissões necessárias (Google) OU valida OTP (Email)
E seleciona perfil "Paciente"
E preenche Etapa 1/4 com:
  - Nome: "Maria Silva" (≥3 caracteres)
  - Data Nascimento: "2000-01-01" (idade válida)
  - CEP: "01001-000" (formato válido + existente)
  - Endereço completo (mínimo 3 caracteres por campo)
E avança para Etapa 2/4
E preenche preferências (ou usa "pular" se permitido)
E avança para Etapa 3/4
E preenche necessidades (ou usa "pular" se permitido)
E avança para Etapa 4/4
E finaliza o cadastro
ENTÃO o sistema deve:
  - Registrar data/hora do cadastro
  - Autenticar o usuário automaticamente
  - Redirecionar para Home autenticada
  - Exibir confirmação de cadastro
