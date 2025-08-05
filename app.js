function cadastrar() {
  // Pegando o valor digitado no campo com id="nome" e removendo espaços extras no início e no fim
  const nome = document.getElementById('nome').value.trim();

  // Pegando o valor digitado no campo com id="quantidade" e convertendo para número inteiro
  const quantidadeFamiliares = parseInt(document.getElementById('quantidade').value);

  // Calculando o custo da assinatura:
  // 150 é o valor fixo para o titular
  // Cada familiar adicional custa 30
  // Se a quantidade for inválida (NaN), usamos 0 com o operador "||"
  const custo = 150 + (quantidadeFamiliares || 0) * 30;

  // Mostrando uma mensagem com o nome da pessoa e o valor calculado
  alert(`Bem vindo ${nome}, o custo da sua assinatura mensal é de R$${custo}`);
}
