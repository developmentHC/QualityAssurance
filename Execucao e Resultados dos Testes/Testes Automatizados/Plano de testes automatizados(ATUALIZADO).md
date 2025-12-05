# 🧪 Plano de Testes Automatizados

## 📘 1. Identificação

**Projeto:** ConectaBem – Sistema de Saúde  
**Responsáveis pela Automação QA:** Miguel e Mateus  
**Ambiente de Testes:** [Homologação / QA]  
**CI/CD:** [Fluxo de CI & CD](https://github.com/developmentHC/QualityAssurance/blob/main/Testes%20Automatizados/Fluxo%20do%20ci%20%26%20cd.md?plain=1)  
**Ferramentas de Automação:**  
- **Framework de testes:** Cypress  
- **Integração Contínua:** GitHub Actions  
- **Acessibilidade:** cypress-axe / Lighthouse no DevTools  
- **Code Review:** SonarQube (análise estática de código)  
- **Relatórios:** Cypress Cloud e GitHub Actions  
- **Gerenciamento de pipelines:** GitHub Workflows / GitHub Actions  

---

## 🎯 2. Objetivo

Este plano define a estratégia e o escopo dos **testes automatizados** que serão implementados no projeto, garantindo a **qualidade contínua** por meio do pipeline de **CI/CD**.  
O objetivo é assegurar que **funcionalidades críticas, integrações e acessibilidade da aplicação** sejam validadas automaticamente a cada entrega (deploy, merge, ou pull request).  

Além disso, será utilizada a ferramenta **SonarQube** para **análise de qualidade do código**, contribuindo para detectar falhas técnicas, vulnerabilidades e más práticas antes que o código seja integrado ao ambiente principal.

---

## 🧩 3. Escopo dos Testes Automatizados

### 🔹 3.1 Testes de Integração(validar se os frontend envia corretamente para a api )

Os testes de integração visam verificar se os módulos e componentes do sistema se comunicam corretamente, simulando trocas reais entre o **frontend, backend e banco de dados**.

**Objetivos:**
- Garantir que endpoints da API retornem dados esperados.  
- Validar respostas em JSON, códigos HTTP e tempos de resposta.  
- Assegurar que os componentes do front recebam e exibam corretamente os dados processados pelo backend.  
- Detectar falhas na comunicação entre serviços (ex.: autenticação, CRUD, e agendamentos).

**Principais Casos de Teste:**
1. Login → API retorna token e dados de usuário válidos.  
2. Agendamento → Criação e retorno de dados do paciente e médico.  
3. Atualização de dados → Sincronização entre front e banco.  
4. Logout → Revogação do token e encerramento da sessão.

---

### 🔹 3.2 Testes End-to-End (E2E) é apenas 10% da automação com o fluxo de ponta a ponta do usuario

Os testes E2E simulam o **comportamento do usuário real**, validando o fluxo completo da aplicação desde o login até a execução das principais funcionalidades.

**Objetivos:**
- Garantir que o sistema funcione de ponta a ponta.  
- Validar fluxos de autenticação, navegação e interação.  
- Detectar regressões em funcionalidades críticas após novas implementações.  
- Validar compatibilidade em diferentes navegadores (cross-browser).

**Principais Casos de Teste(Paciente/Profissional/Deslogado):**
1. **Login e Logout:** Usuário acessa, autentica e encerra sessão corretamente.  
2. **Cadastro de Usuário:** Fluxo completo de registro, validação de campos e confirmação.  
3. **Agendamento de Consulta:** Seleção de médico, horário e confirmação da consulta.  
4. **Edição de Perfil:** Alteração de dados pessoais e salvamento persistente.  
5. **Dashboard:** Visualização de dados, filtros e navegação entre módulos.  


---

### 🔹 3.3 Testes de Acessibilidade(testar se o site está acessivel para multiplos usuarios)

Os testes de acessibilidade garantem que o sistema possa ser utilizado por todos os usuários, incluindo pessoas com deficiências visuais, auditivas ou motoras.

**Objetivos:**
- Assegurar conformidade com o padrão **WCAG 2.1**.  
- Validar semântica e estrutura do HTML (uso correto de headings, labels, alt text).  
- Detectar contrastes inadequados e elementos não navegáveis por teclado.  
- Avaliar a performance de leitura por leitores de tela.

**Principais Casos de Teste:**
1. Todos os botões e links possuem **labels acessíveis** (`aria-label`, `alt`, `title`).  
2. Todos os campos de formulário possuem **associação com labels**.  
3. O site é totalmente **navegável pelo teclado** (sem uso de mouse).  
4. O **contraste de cores** atende o nível AA mínimo.  
5. **Feedbacks visuais e sonoros** são apresentados corretamente após ações (erro, sucesso).  
6. Uso de ferramentas **cypress-axe** e **Lighthouse** integradas ao pipeline de CI/CD.

---

## ⚙️ 4. Integração com CI/CD(CI/CD deu erro está para ser arrumado)

Os testes serão executados automaticamente em cada **push, merge request ou deploy**, dentro do pipeline CI/CD definido no repositório QA.  
O pipeline é responsável por:
- Instalar dependências e executar o build.  
- Executar o **SonarQube** para análise estática de código.  
- Rodar os testes de integração e E2E em paralelo.  
- Validar a acessibilidade via **cypress-axe** e **Lighthouse**.  
- Gerar relatórios no **Cypress Cloud** e GitHub Actions.  
- Bloquear merges se algum teste ou análise falhar.

📄 **Referência:** [Fluxo do CI & CD](https://github.com/developmentHC/QualityAssurance/blob/main/Testes%20Automatizados/Fluxo%20do%20ci%20%26%20cd.md?plain=1)

---

## 📊 5. Critérios de Sucesso

| Tipo de Teste       | Cobertura Esperada | Frequência | Gatilho CI/CD | Resultado Esperado |
|---------------------|-------------------|-------------|----------------|--------------------|
| Integração          | 70% dos endpoints principais | Diária | Push / Merge | Nenhum erro HTTP |
| End-to-End          | 10% dos fluxos críticos | Diária / PR | Deploy / Merge | Todos fluxos aprovados |
| Acessibilidade      | 100% das telas principais | Semanal | Deploy QA | Score ≥ 90 (Lighthouse) |

---

## 🧠 6. Conclusão

A automação dos testes de **integração**, **E2E**, **acessibilidade** e formarão uma base sólida para garantir qualidade, segurança e manutenibilidade do sistema ConectaBem.  
