# 📘 Documentação Básica — Bots de Reunião no Discord

## 🎯 Objetivo

Esses bots servem para:

* Gravar reuniões em canais de voz
* Transcrever automaticamente (speech-to-text)
* Gerar resumo (no caso do NotesBot)
* Permitir download de áudio e transcrição

---

# 🤖 1. NotesBot — Comandos principais

## ▶️ Iniciar gravação (entrada do bot)

```
/join
```

**Descrição:**
Faz o bot entrar no canal de voz e iniciar a gravação + transcrição automaticamente. ([NotesBot][1])

---

## ⏹️ Finalizar gravação (saída do bot)

```
/leave
```

**Descrição:**

* O bot sai do canal
* Processa o áudio
* Retorna:

  * 📄 Transcrição completa
  * 🧠 Resumo com IA
  * 📌 Ações e decisões
  * 🔊 Áudio (MP3) ([NotesBot][2])

---

## ⚙️ Configurar comportamento

```
/config
```

**Descrição:**
Permite ajustar:

* Idioma (ex: português)
* Tipo de resumo (bugs, tarefas, etc.) ([NotesBot][3])

---

## 💳 Gerenciar plano (opcional)

```
/subscribe
/cancel
```

**Descrição:**
Gerencia assinatura e tempo de gravação disponível ([NotesBot][4])

---

## 📊 Fluxo completo (NotesBot)

```
1. Entrar no canal de voz
2. /join
3. Realizar reunião normalmente
4. /leave
5. Receber resumo + transcrição + áudio
```

---

# 🤖 2. SeaVoice — Comandos principais

## ▶️ Iniciar transcrição (entrada do bot)

```
/recognize [language]
```

Exemplo:

```
/recognize pt
```

**Descrição:**

* Bot entra no canal de voz
* Começa a transcrever em tempo real no chat
* Suporta múltiplos idiomas ([Discord Bots][5])

---

## ⏹️ Finalizar sessão

Não há comando direto obrigatório — a sessão termina quando:

* Todos saem do canal
  **ou**
* Bot é parado/reiniciado ([Discord Bots][5])

---

## 📥 Retorno dos dados da gravação

Após finalizar:

* 📄 Transcrição completa (arquivo)
* 🎬 Arquivo SRT (legendas)
* 🔊 Link para download do áudio (expira em 24h) ([Discord Bots][5])

---

## 🔊 Texto para fala (TTS)

```
/speak [voice] [text]
```

Exemplo:

```
/speak Orca Hello team
```

**Descrição:**
Converte texto em áudio no canal de voz ([Discord Bots][5])

---

## ⚙️ Configuração de usuário

```
/user_config
```

Permite definir:

* Voz padrão
* Preferências de TTS

---

## 📊 Fluxo completo (SeaVoice)

```
1. Entrar no canal de voz
2. /recognize pt
3. Conversar normalmente (transcrição em tempo real)
4. Sair do canal
5. Receber arquivos (texto + áudio)
```

---

# ⚖️ Comparação rápida

| Função                    | NotesBot | SeaVoice   |
| ------------------------- | -------- | ---------- |
| Entrada no canal          | /join    | /recognize |
| Saída do canal            | /leave   | Automático |
| Transcrição               | ✅        | ✅          |
| Resumo com IA             | ✅        | ❌          |
| Áudio download            | ✅        | ✅          |
| Transcrição em tempo real | ❌        | ✅          |
| TTS (fala)                | ❌        | ✅          |

---

# 💡 Dicas práticas (nível QA / uso profissional)

* Use **NotesBot** para:

  * Reuniões de sprint
  * Daily
  * Refinamento (gera ações automaticamente)

* Use **SeaVoice** para:

  * Aulas
  * Transcrição ao vivo
  * Acessibilidade (TTS)
