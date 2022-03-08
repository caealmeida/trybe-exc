let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXC 1-----------------------------------------------
// for (var i = 0; i < numbers.length; i += 1) {
// 	console.log(numbers[i]);
// }

// EXC 2-----------------------------------------------
// let soma = 0;
// for (var i = 0; i < numbers.length; i += 1) {
// 	soma += numbers[i];
// }

// console.log(soma);

// EXC 3-----------------------------------------------
// let soma = 0;
// for (var i = 0; i < numbers.length; i += 1) {
// 	soma += numbers[i];
// }

// let mediaAritmetica = soma / numbers.length;
// console.log(mediaAritmetica);

// EXC 4-----------------------------------------------
// let soma = 0;
// for (var i = 0; i < numbers.length; i += 1) {
// 	soma += numbers[i];
// }

// let mediaAritmetica = soma / numbers.length;

// if (mediaAritmetica > 20) {
// 	console.log("valor maior que 20");
// } else {
// 	console.log("valor menor ou igual a 20");
// }

// EXC 5-----------------------------------------------
// let maior = numbers[0];

// for (var i = 1; i < numbers.length; i += 1) {
// 	if (numbers[i] > maior) {
// 		maior = numbers[i];
// 	}
// }

// console.log(maior);
// // ou
// console.log(Math.max(...numbers));

// EXC 6-----------------------------------------------
// let qtdImpar = 0;

// for (var i = 0; i < numbers.length; i += 1) {
// 	if (numbers[i] % 2 != 0) {
// 		qtdImpar += 1;
// 	}
// }

// if (qtdImpar > 0) {
// 	console.log(qtdImpar);
// } else {
// 	console.log("nenhum valor ímpar encontrado");
// }

// EXC 7-----------------------------------------------
// let menor = numbers[0];

// for (var i = 1; i < numbers.length; i += 1) {
// 	if (numbers[i] < menor) {
// 		menor = numbers[i];
// 	}
// }

// console.log(menor);

// EXC 8-----------------------------------------------
// let array = [];

// for (var i = 0; i < 25; i += 1) {
// 	array[i] = i + 1;
// 	console.log(array[i]);
// }

// EXC 9-----------------------------------------------
// for (var i = 0; i < 25; i += 1) {
// 	console.log(array[i] / 2);
// }

// BÔNUS-----------------------------------------------
// EXC 1-----------------------------------------------
// let aux;

// for (var i = 1; i < numbers.length; i += 1) {
// 	for (var j = 0; j < i; j += 1) {
// 		if (numbers[i] < numbers[j]) {
// 			aux = numbers[i];
// 			numbers[i] = numbers[j];
// 			numbers[j] = aux;
// 		}
// 	}
// }
// console.log(numbers);

// EXC 2-----------------------------------------------
// let aux;

// for (var i = 1; i < numbers.length; i += 1) {
// 	for (var j = 0; j < i; j += 1) {
// 		if (numbers[i] > numbers[j]) {
// 			aux = numbers[i];
// 			numbers[i] = numbers[j];
// 			numbers[j] = aux;
// 		}
// 	}
// }
// console.log(numbers);

// EXC 3-----------------------------------------------
let novoArray = [];

for (var i = 0; i < numbers.length; i += 1) {
	if (i == numbers.length - 1) {
		novoArray.push(numbers[i] * 2);
	} else {
		novoArray.push(numbers[i] * numbers[i + 1]);
	}
}

console.log(novoArray);
