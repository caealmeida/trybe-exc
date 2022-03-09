// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.

// let soma = 0;

// for (let i = 50; i <= 100; i += 1) {
// 	soma += i;
// }
// console.log(soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

// let qtdImpar = 0;

// for (let i = 1; i <= 125; i += 1) {
// 	if (i % 3 == 0) {
// 		qtdImpar += 1;
// 	}
// }

// console.log(qtdImpar);
// if (qtdImpar == 50) console.log("mensagem secreta");

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas
// pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

// let player1 = Math.floor(Math.random() * (3 - 0) + 1);
// let player2 = Math.floor(Math.random() * (3 - 0) + 1);

// console.log("player1: " + player1);
// console.log("player2: " + player2);

// if (player1 === player2) {
// 	console.log("empate");
// } else if (
// 	(player1 === 1 && player2 === 3) ||
// 	(player1 === 2 && player2 === 1) ||
// 	(player1 === 3 && player2 === 2)
// ) {
// 	console.log("Jogador 1 vence");
// } else {
// 	console.log("Jogador 2 vence");
// }

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

let idade = Math.floor(Math.random() * (110 - 0) + 1);

// console.log(idade);
// if (idade >= 18) {
// 	console.log("A pessoa é maior de idade");
// }

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
