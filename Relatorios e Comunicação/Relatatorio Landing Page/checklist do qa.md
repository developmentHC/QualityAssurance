# Guia para PO e Design 


A ideia é simples:
antes da task nascer, o time precisa pensar no usuário REAL e não apenas no fluxo perfeito.

Esse documento ajuda PO e Design a:

* criar tarefas mais completas
* evitar dúvidas no desenvolvimento
* reduzir retrabalho
* antecipar problemas
* melhorar experiência do usuário
* criar produtos mais claros e confiáveis

---

# 1. Antes de criar uma task, pense nisso

## O usuário entende o que precisa fazer?

Perguntas importantes:

* Essa tela é fácil de entender?
* O usuário sabe qual é o próximo passo?
* Tem informação demais?
* O botão principal está claro?
* O usuário precisa “adivinhar” algo?
* O texto parece humano ou muito técnico?
* Se fosse a primeira vez usando, eu entenderia?

---

## O usuário consegue terminar a ação facilmente?

Exemplos:

* agendar consulta
* encontrar médico
* cancelar consulta
* pagar
* atualizar cadastro

Perguntas:

* Quantos cliques isso leva?
* Existe etapa desnecessária?
* Tem algo cansativo?
* O usuário consegue terminar rápido?
* Tem alguma parte que pode gerar desistência?

---

# 2. Toda task deveria responder essas perguntas

## Qual problema isso resolve?

Não basta:

> “Criar filtro de busca.”

Precisa explicar:

> “Usuários têm dificuldade para encontrar médicos rapidamente.”

---

## Como sabemos que deu certo?

Exemplos:

* mais consultas realizadas
* menos abandono
* menos suporte
* busca mais rápida
* menos erros
* mais usuários concluindo o fluxo

---

## O que o usuário ganha com isso?

Sempre pensar:

* economia de tempo
* clareza
* confiança
* facilidade
* sensação de controle
* menos ansiedade

---

# 3. O Design pensou em TODOS os estados da tela?

Isso é uma das coisas mais esquecidas.

A maioria dos designs mostra apenas:
✅ tela perfeita

Mas o produto real tem problemas.

Toda funcionalidade deveria mostrar:

---

## Loading

Quando está carregando.

Perguntas:

* o usuário percebe que está carregando?
* parece travado?
* existe feedback visual?

---

## Erro

Quando algo dá errado.

Perguntas:

* a mensagem explica o problema?
* fala como resolver?
* culpa o usuário?
* existe botão para tentar novamente?

---

## Sem resultados

Quando não encontra nada.

Exemplo ruim:

> “Nenhum resultado encontrado.”

Exemplo melhor:

> “Não encontramos médicos para esse filtro. Tente mudar especialidade ou localização.”

---

## Estado vazio

Quando o usuário ainda não tem dados.

Exemplo:

* nenhuma consulta agendada
* nenhum favorito
* nenhum histórico

Boa prática:

* explicar o que é aquela área
* mostrar próximo passo
* ensinar sem parecer tutorial

---

## Internet ruim

Perguntas:

* a tela quebra?
* o usuário entende o que aconteceu?
* existe retry?
* existe cache?
* existe feedback?

---

## Timeout

Perguntas:

* o usuário sabe que demorou demais?
* existe alternativa?
* ele consegue tentar novamente?

---

# 4. Pensar como um usuário REAL

O usuário real:

* está com pressa
* pode estar nervoso
* pode não entender tecnologia
* pode estar no ônibus
* pode ter internet ruim
* pode estar cansado
* pode ser idoso
* pode clicar errado

O sistema precisa funcionar MESMO ASSIM.

---

# 5. Perguntas que PO e Design deveriam fazer antes da task ir para desenvolvimento

## Sobre comportamento

* O que acontece depois do clique?
* Existe confirmação?
* O usuário pode voltar?
* Pode cancelar?
* Pode editar?
* O sistema salva automaticamente?
* Existe limite?
* Existe risco de perder dados?

---

## Sobre mensagens

* Os textos estão claros?
* Tem palavras difíceis?
* Está muito técnico?
* Parece humano?
* Explica o erro?
* Passa confiança?

---

## Sobre fluxo

* Existe caminho alternativo?
* O usuário consegue sair facilmente?
* Existe etapa desnecessária?
* O fluxo está muito longo?
* Tem informação repetida?

---

# 6. Coisas IMPORTANTES que normalmente ninguém pensa

## Clique duplo

O que acontece se o usuário clicar 5 vezes?

Pode:

* duplicar consulta
* cobrar duas vezes
* enviar formulário repetido

---

## Atualizar página

O usuário perde tudo?

---

## Fechar o app

Quando voltar:

* continua de onde parou?
* perdeu informações?

---

## Dados errados

Exemplos:

* CPF inválido
* telefone incompleto
* emoji no nome
* espaço extra
* letra maiúscula/minúscula
* caracteres especiais

---

## Busca

A busca entende:

* erro de digitação?
* palavras parecidas?
* sintomas?
* apelidos?
* termos populares?

Exemplo:
usuário procura:

> “dor nas costas”

mas o sistema só entende:

> “ortopedista”

---

# 7. O produto transmite confiança?

Principalmente em saúde.

Perguntas:

* parece seguro?
* parece profissional?
* informações importantes estão visíveis?
* o preço está claro?
* o convênio está claro?
* o usuário sente segurança para continuar?

---

# 8. A tela ajuda ou gera ansiedade?

Poucos times pensam nisso.

Mas UX emocional importa MUITO.

Perguntas:

* essa tela parece complicada?
* o usuário sente medo de errar?
* parece que vai cobrar algo escondido?
* parece confiável?
* o usuário sente progresso?
* o sistema tranquiliza ou assusta?

---

# 9. Checklist simples para validar uma task

## Clareza

* [ ] usuário entende sozinho
* [ ] botão principal está claro
* [ ] textos simples
* [ ] fluxo fácil de seguir

---

## Experiência

* [ ] rápido de usar
* [ ] poucos cliques
* [ ] feedback visual existe
* [ ] não parece travado

---

## Problemas e erros

* [ ] erro tratado
* [ ] loading tratado
* [ ] sem resultado tratado
* [ ] internet ruim tratada
* [ ] múltiplos cliques tratados

---

## Mobile

* [ ] funciona em celular
* [ ] teclado não cobre campo
* [ ] botão não fica escondido
* [ ] scroll funciona
* [ ] toque é confortável

---

## Acessibilidade

* [ ] fonte legível
* [ ] contraste bom
* [ ] botão fácil de enxergar
* [ ] não depende só de cor

---

# 10. Modelo de task para PO e Design

## Objetivo

Qual problema resolve?

Exemplo:

> Usuários têm dificuldade para encontrar médicos rapidamente.

---

## Resultado esperado

O que queremos melhorar?

Exemplo:

> Reduzir tempo de busca e aumentar agendamentos.

---

## Fluxo esperado

Passo a passo simples do usuário.

Exemplo:

1. Usuário pesquisa especialidade
2. Escolhe médico
3. Seleciona horário
4. Confirma consulta

---

## O que precisa existir

* loading
* erro
* vazio
* confirmação
* feedback visual
* versão mobile
* mensagens claras

---

## Casos que precisam ser pensados

* internet lenta
* nenhum médico encontrado
* clique duplo
* horário indisponível
* sessão expirada
* API fora do ar

---

# 12. Mentalidade que melhora MUITO o produto

Não pensar:

> “Como deveria funcionar?”

Pensar:

> “Como isso pode falhar na vida real?”

---

# 13. Perguntas de ouro para qualquer funcionalidade

* O usuário entende isso em 5 segundos?
* O que acontece se algo der errado?
* Isso parece confiável?
* Existe fricção desnecessária?
* O usuário sente progresso?
* O sistema ajuda ou só bloqueia?
* Está simples ou confuso?
* Como isso funciona em internet ruim?
* O usuário consegue recuperar erro facilmente?
* Isso funciona para alguém sem conhecimento técnico?

---

# 14. Coisas pequenas que mudam MUITO a experiência

* confirmação visual após ação
* mensagens humanas
* botão desabilitado durante envio
* skeleton loading
* resumo antes de confirmar
* salvar automaticamente
* feedback instantâneo
* estado vazio inteligente
* mensagens que ajudam
* prevenção de erro
* sugestões automáticas
* mostrar progresso
* explicar próximos passos

---

# 15. Exemplo prático — Busca de médicos no ConectaBem

## O usuário precisa:

* encontrar rápido
* confiar no resultado
* entender filtros
* não se sentir perdido

---

## A task deveria considerar:

### Busca

* [ ] aceita erro de digitação
* [ ] entende sintomas
* [ ] filtros simples
* [ ] resultado rápido
* [ ] ordenação clara

---

### Estados

* [ ] loading
* [ ] sem resultado
* [ ] erro de conexão
* [ ] fallback

---

### Confiança

* [ ] convênio visível
* [ ] preço claro
* [ ] avaliação clara
* [ ] especialidade clara

---

### Mobile

* [ ] filtros fáceis no celular
* [ ] botão acessível
* [ ] lista não quebra

---

# 16. Objetivo final

O melhor produto não é o mais bonito.

É o que:

* o usuário entende rápido
* resolve problema sem esforço
* transmite confiança
* funciona mesmo quando algo dá errado
* evita frustração
* parece simples de usar
