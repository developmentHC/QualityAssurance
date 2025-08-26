# 📋 Relatório de Testes - Cards de Profissionais

## 🔗 Links
- **Design de Referência (Figma):** [Fluxo base](https://www.figma.com/design/JFNgLEfOSw4kJmBh2gHHQQ/Squad-Design_ConectaBem--Copy-?node-id=3498-33452&p=f&t=NTC8mZdirp5ZsBU0-0)  
- **Ambiente testado:** [conectabems-projects.vercel.app](https://conecta-bem-front-git-feat-update-c-62582b-conectabems-projects.vercel.app)  
- **Testadores**: Victor e Miguel
---

## 🧪 Ambiente de Testes
- **Sistema Operacional:** Windows 11  
- **Navegador:** Firefox v142.0 (64 bits)  

---

## ❌ Erros e Melhorias Encontradas

### 1. Tags de Profissionais/Especialidade
- Espaçamento incorreto em relação ao design.
- **Evidência visual:** [Jam.dev](https://jam.dev/c/a0c035c6-b923-4773-aafe-686196cb4e60)  

### 2. Imagens dos Cards
- **Bug de carregamento**: imagens dos profissionais não estão sendo exibidas.
- **Evidência visual:** [Jam.dev](https://jam.dev/c/a0c035c6-b923-4773-aafe-686196cb4e60)    
- **Erro identificado no DevTools**:  
```

OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_UNAUTHORIZED
GET [https://conecta-bem-front-git-feat-update-c-62582b-conectabems-projects.vercel.app/\_next/image?url=https://randomuser.me/api/portraits/men/45.jpg\&w=640\&q=75](https://conecta-bem-front-git-feat-update-c-62582b-conectabems-projects.vercel.app/_next/image?url=https://randomuser.me/api/portraits/men/45.jpg&w=640&q=75)
Status: 502 (Vercel)

```
- Indica falha na autorização para otimização de imagens externas via Vercel.  

---

### 3. Avaliações
- O número de avaliações aparece como **"5"**, mas no design esperado está no formato **"5.0"**.  
- Problema ocorre nos **dois primeiros cards à esquerda**.  
- **Evidência visual:** [Jam.dev](https://jam.dev/c/a0c035c6-b923-4773-aafe-686196cb4e60)  

---

### 4. Texto de Avaliações
- Texto "(20 avaliações)" está na **mesma cor que os demais textos no site**,  
- No design, deveria estar em **tom mais claro** para diferenciar.  
- **Evidência visual:** [Jam.dev](https://jam.dev/c/a0c035c6-b923-4773-aafe-686196cb4e60)  
---

## ⚠️ Erros de API e Navegação (DevTools)

### 🔹 Erro de Imagem
```

OPTIMIZED\_EXTERNAL\_IMAGE\_REQUEST\_UNAUTHORIZED
Servidor: Vercel
Status: 502
URL: /\_next/image?url=[https://randomuser.me/api/portraits/men/45.jpg\&w=640\&q=75](https://randomuser.me/api/portraits/men/45.jpg&w=640&q=75)

```
- Ocorre durante o carregamento de imagens externas (`randomuser.me`).  
- Motivo: bloqueio de otimização de imagens externas no ambiente Vercel (falta de configuração/whitelist).  

### 🔹 Erro de Navegação (Perfil)
```

GET [https://conecta-bem-front-git-feat-update-c-62582b-conectabems-projects.vercel.app/profissional/2?\_rsc=1ld0r](https://conecta-bem-front-git-feat-update-c-62582b-conectabems-projects.vercel.app/profissional/2?_rsc=1ld0r)
Status: 404

```
- A rota de perfil de profissional não foi encontrada.  
- Impacto: ao tentar acessar o perfil, o usuário recebe **página 404**.  

---

## 📌 Conclusão
- **Problemas visuais:** espaçamento de tags, cor de textos e posicionamento de botões precisam ser ajustados para seguir o design do Figma.  
- **Problemas funcionais:** falhas de carregamento de imagens e erro 404 ao acessar o perfil de profissional.  
- **Recomendação:** revisar configuração de imagens no Vercel e alinhar rotas/perfis com o backend.  
