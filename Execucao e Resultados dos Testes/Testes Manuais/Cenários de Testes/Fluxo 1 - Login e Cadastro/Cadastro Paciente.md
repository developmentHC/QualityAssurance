# Caso de Teste Único — Agendamento de Paciente

**ID:** AGEND_001  
**Título:** Validação completa do fluxo de agendamento (funcional, regras, erros e UX)  
**Sistema:** ConectaBem  
**Versão:** 2.0  

---

## Pré-condições
- Usuário logado como paciente  
- Profissional com serviços cadastrados  
- Agenda com horários disponíveis  
- Integrações ativas (backend, rede, etc.)

---

## Dados de Teste
- Serviços com diferentes durações (ex: 30min, 60min)  
- Datas válidas, passadas e limites  
- Horários disponíveis e indisponíveis  
- Cenários de erro simulados (timeout, falha servidor)  

---

## Passos

### 1. Acesso e Visualização
1. Acessar perfil de um profissional  
2. Validar exibição de:
   - Nome, especialidade, serviços, avaliações  
3. Verificar estrutura da UI (layout, botões, checkboxes)

---

### 2. Seleção de Serviços
4. Tentar avançar **sem selecionar serviço**  
   - Validar mensagem de erro  

5. Selecionar **1 serviço**  
6. Selecionar **múltiplos serviços**  
   - Validar soma de duração  

---

### 3. Agendamento (Data e Hora)
7. Tentar selecionar:
   - Data passada → deve bloquear  
   - Horário fora do expediente → deve bloquear  
   - Horário ocupado → deve exibir erro  

8. Selecionar data e horário válidos  

9. Validar:
   - Respeito à antecedência mínima (ex: 24h)  
   - Compatibilidade de duração dos serviços  

---

### 4. Fluxo de Confirmação
10. Confirmar agendamento  
11. Validar:
   - Mensagem de sucesso  
   - Exibição correta dos dados (serviço, data, hora)  

---

### 5. Tratamento de Erros
12. Simular:
   - Falha de rede  
   - Timeout (>15s)  
   - Conflito de agenda  

13. Validar:
   - Mensagens apropriadas  
   - Opção de retry  
   - Não duplicação de agendamento  

---

### 6. Regras de Negócio
14. Tentar:
   - Agendar com menos de 24h  
   - Ultrapassar limite diário  
   - Selecionar serviço indisponível  

15. Validar bloqueios e mensagens  

---

### 7. Navegação e Estado
16. Avançar e voltar etapas  
17. Validar persistência (ou limpeza) dos dados conforme regra  
18. Simular expiração de sessão  
   - Validar redirecionamento para login  

---

### 8. UX e Usabilidade
19. Validar:
   - Feedback visual (erro, sucesso, loading)  
   - Clareza das mensagens  
   - Estados dos botões  

20. Executar fluxo completo como usuário novo  
   - Validar conclusão < 2 minutos  
   - Sem necessidade de ajuda externa  

21. Validar:
   - Responsividade (mobile)  
   - Navegação por teclado (TAB)  

---

## Resultado Esperado
- Fluxo completo executado com sucesso em cenários válidos  
- Todas as validações bloqueando corretamente cenários inválidos  
- Regras de negócio aplicadas corretamente  
- Sistema resiliente a falhas  
- Experiência do usuário clara, consistente e funcional  

---

## Observação
Este caso consolidado reduz a quantidade de testes, porém aumenta a complexidade de execução e dificulta a identificação de falhas específicas. Recomenda-se uso complementar com casos mais granulares para cobertura detalhada.
