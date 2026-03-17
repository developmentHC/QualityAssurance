# Fluxo 2 - Busca e Pesquisa

## Tela Home Paciente - Desktop

> **"Rever este botão, para que ele serve necessariamente?"**

### 🔍 Observação do QA
Se o botão não tiver uma função clara ou for redundante, considerar sua remoção para evitar ruído visual.

### 🎨 Retorno do Design
É legal para agilizar a pesquisa quando o usuário estiver em uma página fora da página da "Home". Ao invés de voltar para página "Home" só para efetuar uma pesquisa.

<p align="center">
  <img width="967" height="341" alt="image" src="https://github.com/user-attachments/assets/7682e1e6-ed5d-46c8-b5f3-65df8a1734ca" />
</p>

> **"Há esta barra de pesquisa e o botão de pesquisa no header. Qual a diferença?"**

### 🔍 Observação do QA
A presença de dois elementos relacionados à busca pode gerar **ambiguidade na experiência do usuário**, pois não fica claro se ambos executam a mesma função ou se possuem comportamentos diferentes. Recomenda-se validar se ambos são realmente necessários. Caso tenham finalidades distintas (por exemplo, busca global vs. busca contextual), isso deve ser **explicitado visualmente ou através de rótulos mais claros**. Caso contrário, considerar **padronizar ou unificar o mecanismo de busca** para reduzir confusão.

### 🎨 Retorno do Design
É legal para agilizar a pesquisa quando o usuário estiver em uma página fora da página da "Home". Ao invés de voltar para página "Home" só para efetuar uma pesquisa.

<p align="center">
  <img width="798" height="235" alt="image" src="https://github.com/user-attachments/assets/fc2c0241-f572-432e-97b8-94220b796c85" />
</p>

> **"O usuário pode confundir os destaques da semana com os filtros de busca. Exemplo: o usuario acha que se digitar no input e colocar um filtro irá atualizar os destaques da semana"**

### 🔍 Observação do QA
Existe um possível problema de **hierarquia e associação visual** entre os componentes da tela. Os elementos de busca e os "Destaques da semana" podem parecer parte do mesmo fluxo de filtragem, levando o usuário a acreditar que os resultados exibidos serão atualizados com base na pesquisa realizada. Recomenda-se **separar visualmente essas seções**, utilizando espaçamento maior, divisores, títulos mais claros ou até blocos distintos na interface. Outra possibilidade é deixar explícito que os destaques são **conteúdo fixo ou recomendado**, independente da busca realizada.

### 🎨 Retorno do Design
Talvez seria interessante colocar os "destaques da semana" como uma aba do filtro. A gente poderia colocar o button dele com mais destaque pra diferenciar no filtro.

<p align="center">
  <img width="734" height="469" alt="image" src="https://github.com/user-attachments/assets/b479ed1a-44f4-4e70-bf73-aada1eb4e0f1" />
</p>

---

## Tela Menu Filtros Busca - Desktop

> **"Recomendação: colocar um filtro igual o da distancia profissional. Neste caso o valor da consulta seria preenchido pelo profissional junto com metodo de pagamento e etc.(este fluxo ainda está para ser criado)"**

### 🔍 Observação do QA
Sugere-se a inclusão de um **filtro de valor da consulta**, seguindo o mesmo padrão visual e de interação utilizado no filtro de distância do profissional, para manter consistência na experiência do usuário. Esse filtro permitiria que pacientes encontrem profissionais dentro de uma faixa de preço específica.

### 🎨 Retorno do Design
Em andamento

<p align="center">
  <img width="273" height="104" alt="image" src="https://github.com/user-attachments/assets/2111f446-008f-4bf2-aa74-54b01c83e50c" />
</p>
