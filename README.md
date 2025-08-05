# 🛩️ Formulário de Cadastro de Associados - Aeroclube

Este projeto é um formulário simples feito em HTML e JavaScript, voltado para o cadastro de associados de um aeroclube. Ele realiza o cálculo automático da mensalidade com base na quantidade de familiares informada.

## ✨ Funcionalidades

- Campo **Nome**: aceita até 100 caracteres.
- Campo **Email**: aceita apenas emails válidos e até 100 caracteres.
- Campo **Quantidade de Familiares**: aceita apenas números entre 0 e 6.
- Botão **Cadastrar**: ao ser clicado, dispara uma função em JavaScript que exibe uma mensagem de boas-vindas com o custo da mensalidade.

## 💰 Cálculo da Mensalidade

A mensalidade base é de R$150, acrescida de R$30 para cada familiar adicional.

**Exemplos:**
- Com 0 familiares: R$150
- Com 2 familiares: R$150 + (2 × R$30) = R$210
- Com 5 familiares: R$150 + (5 × R$30) = R$300

## 🧠 Lógica da Aplicação

A lógica foi desenvolvida em JavaScript puro e inclui:
- Coleta dos valores digitados nos campos do formulário.
- Conversão e validação dos dados.
- Cálculo do custo com base na fórmula.
- Exibição de um alerta personalizado com nome e valor final da assinatura.

## 👩‍💻 Objetivo

Este projeto faz parte dos meus estudos em desenvolvimento web. Ele demonstra habilidades básicas em HTML, validação de formulários, manipulação de DOM e lógica com JavaScript.
