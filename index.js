const readline = require("readline");

// Interface para ler entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para calcular o saldo de partidas e determinar o nível do jogador
function calcularSaldoElevel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias >= 101) {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Solicitar ao usuário as vitórias e derrotas
rl.question("Digite o número de vitórias: ", (vitoriasInput) => {
  const vitorias = parseInt(vitoriasInput);
  rl.question("Digite o número de derrotas: ", (derrotasInput) => {
    const derrotas = parseInt(derrotasInput);
    console.log(calcularSaldoElevel(vitorias, derrotas));
    rl.close();
  });
});
