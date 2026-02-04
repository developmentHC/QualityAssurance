# Falha - Regra de negócio do campo Bairro bloqueia valores válidos

**Descrição**
A validação do campo Bairro exige no mínimo 3 caracteres, porém existem bairros válidos com apenas 2 letras. Essa regra impede o cadastro de endereços legítimos e precisa ser ajustada para refletir corretamente o domínio do negócio.

---

**Passos para reproduzir**
1. Entrar na página de cadastro de paciente - https://conecta-bem-front.vercel.app/auth/registro-paciente
2. No formulário, preencher o campo “CEP Residencial” com o valor “01001-000” (Praça da Sé)

---

**Resultado Esperado**
Os campos de endereço devem ser preenchidos automaticamente com os dados retornados pelo CEP, permitindo a continuidade do cadastro sem bloqueios.

---

**Resultado Obtido**
O sistema exibe erro de validação no campo “Bairro”, pois o valor retornado (“Sé”, com 2 caracteres) não atende à regra mínima de 3 caracteres, impedindo o avanço no cadastro.

---

**Evidência**

<img width="537" height="700" alt="falha_campo_bairro" src="https://github.com/user-attachments/assets/d79808d7-a9cc-4bd8-a3af-94d6d02946ce" />
