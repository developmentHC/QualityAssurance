# ConectaBem - Sistema de Agendamento e Conexão com Profissionais de Saúde

## 🚀 Visão Geral do Projeto

O ConectaBem é uma plataforma inovadora que visa conectar usuários a profissionais de diversas especialidades na área da saúde e bem-estar. Nosso objetivo é simplificar a busca, agendamento e gerenciamento de consultas, proporcionando uma experiência intuitiva e personalizada tanto para clientes quanto para profissionais.

---

## ✨ Requisitos do Projeto

### 1. Home e Navegação

*   **Navegação Principal:** Estrutura clara para acesso às principais seções do sistema.
*   **Preferências de Busca:**
    *   Cadastrar e Editar Preferências de Busca.
    *   Visualizar sugestões de profissionais baseadas no perfil (preferências, faixa de preço, localização, etc.).
*   **Especialidades e Serviços:** Listagem e detalhamento de especialidades e serviços disponíveis.

### 2. Lobby de Profissionais

*   **Pesquisa Avançada:**
    *   Pesquisar por palavras-chave, profissionais e especialidades/serviços.
    *   Visualizar lista de profissionais.
*   **Filtros de Profissionais:**
    *   Preço
    *   Localização
    *   Tipo de Pagamento
    *   Plano de Saúde
    *   Tags de Acessibilidade
*   **Favoritar Profissionais:** Opção para salvar profissionais preferidos.

### 3. Agendamento e Avaliação

*   **Agendamento:**
    *   Agendar consultas.
    *   Verificar agendas dos profissionais.
    *   Confirmar agendamentos.
    *   Cancelar agendamentos.
*   **Avaliação:** Avaliar profissionais após as consultas.

### 4. Autenticação e Conta

*   **Login:**
    *   Login com e-mail e codigo de verificação.
    *   Login com contas de outras plataformas (social login).
*   **Criar Conta:** Processo de cadastro de novos usuários.
*   **Excluir Conta:** Opção para o usuário remover sua conta da plataforma.

### 5. Perfil (Cliente e Profissional)

*   **Informações Básicas:** Cadastrar / Editar informações pessoais.
*   **Qualificações / Currículo:** Cadastrar / Editar histórico profissional (para profissionais).
*   **Especializações:** Cadastrar / Editar áreas de atuação.
*   **Acessibilidade:** Cadastrar / Editar informações sobre acessibilidade.
*   **Serviços:** Cadastrar / Editar serviços oferecidos (para profissionais).

### 6. Comunicação

*   **Chat:** Funcionalidade de chat para comunicação entre usuários e profissionais.
*   **Perguntas e Respostas:** Responder / Fazer perguntas.

### 7. Conteúdo

*   **Postar Conteúdo:** Criar e publicar conteúdo (ex: artigos, dicas).
*   **Visualizar Conteúdo:** Acessar e ler conteúdo publicado.

---

## 🖥️ Requisitos das Telas (Funcionalidades por Seção)

### 1. Busca / Pesquisa 🟢

*   **Descrição:** Ajuda o usuário a encontrar profissionais que atendam às suas necessidades e preferências.
*   **Funcionalidades:**
    *   Visualizar sugestões com base em preferências.
    *   Filtros de busca (valor, acessibilidade, distância, etc.).
    *   Resultados ranqueados.
    *   Sugestões de profissionais similares.

### 2. Agendamento / Pós-Atendimento 🟣

*   **Descrição:** Permite que o usuário agende e gerencie seus atendimentos de forma prática.
*   **Funcionalidades:**
    *   Avaliar profissional.
    *   Agendar consulta.
    *   Verificar agenda.
    *   Confirmar agendamento.
    *   Cancelar agendamento.
    *   Visualizar histórico de atendimentos.
    *   Confirmação pós-consulta.

### 3. Login e Cadastro 🟣

*   **Descrição:** Onboarding inicial e autenticação dos usuários.
*   **Funcionalidades:**
    *   Login com código / social.
    *   Criar conta.
    *   Cadastrar dados básicos e preferências iniciais.

### 4. Perfil (Profissional e Cliente) 🟢🟠

*   **Descrição:** Gestão de identidade, currículo e preferências.
*   **Funcionalidades:**
    *   Editar dados básicos do perfil.
    *   Cadastrar / editar currículo e especialidades.
    *   Acessibilidade.
    *   Serviços oferecidos.
    *   Preferências de atendimento.
    *   Excluir conta.
    *   Chat (acesso ao histórico de conversas).

### 5. Dashboard de Profissional 🟠

*   **Descrição:** Espaço para o profissional acompanhar sua atividade e recompensas.
*   **Funcionalidades:**
    *   Visualizar histórico de atendimentos.
    *   Ver movimentações financeiras (futuro?).
    *   Gerenciar conquistas e benefícios.

---

## 👤 Requisitos do Usuário (Sitemap)
O sitemap do ConectaBem foi desenvolvido para atender três cenários principais: usuários logados, profissionais logados e usuários deslogados. Essa estrutura permite uma navegação intuitiva e eficiente, adaptada às necessidades específicas de cada grupo de usuários.

### 1. Usuário Logado

*   **Home/Profissionais:** Pesquisar e filtrar profissionais por categorias (Fisioterapeuta, Quiropraxia, Cromoterapia, etc.).
*   **Minha Saúde:** Gerenciar consultas e profissionais favoritos.
*   **Perfil:** Editar informações, qualificações, especializações, serviços oferecidos e excluir a conta.
*   **Suporte:** FAQ, contatos e tutoriais.
*   **Sobre o ConectaBem:** Quem Somos, Valores e Política de Privacidade.
*   **Pesquisa:** Ferramenta de busca na plataforma.

### 2. Profissional Logado

*   **Home/Profissionais:** Pesquisar e filtrar profissionais por categorias.
*   **Minha Saúde (Dashboard Profissional):** Gerenciar consultas e responder a perguntas de clientes.
*   **Perfil:** Editar informações, serviços, especializações e excluir a conta.
*   **Suporte:** FAQ, contatos e tutoriais específicos para profissionais.
*   **Sobre o ConectaBem:** Informações institucionais.
*   **Pesquisa:** Ferramenta de busca na plataforma.

### 3. Usuário Deslogado

*   **Home/Profissionais:** Visualização de categorias profissionais.
*   **Suporte:** FAQ, contatos e tutoriais.
*   **Sobre o ConectaBem:** Informações sobre a empresa, seus valores e políticas.
*   **Pesquisa:** Funcionalidade de busca acessível para todos os usuários.
