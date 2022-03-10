// 1- crie um algoritmo que retorne o fatorial de 10

// const parametro = 5;
// let fatorial = 1;

// for (let i = parametro; i > 0; i -= 1) {
// 	fatorial *= i;
// }

// console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana"
//seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar
// se seu algoritmo está funcionando corretamente.

// const palavra = "tryber";
// let resultado = "";

// for (let i = palavra.length - 1; i >= 0; i -= 1) {
// 	resultado += palavra[i];
// }

//ou
// resultado = palavra.split("").reverse().join("");

// console.log(resultado);

// 3- Considere o array de strings abaixo
let array = ["java", "javascript", "python", "html", "css"];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere
// o número de caracteres de cada palavra.

// let maior = array[0];
// let menor = array[0];

// for (let i = 1; i < array.length; i += 1) {
// 	if (array[i].length > maior.length) {
// 		maior = array[i];
// 	}
// 	if (array[i].length < menor.length) {
// 		menor = array[i];
// 	}
// }

// console.log("Maior: " + maior);
// console.log("Menor: " + menor);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que
// retorne o maior número primo entre 0 e 50.

// const parametro = 50;
// let primos = [];
// let maiorPrimo = 0;

// for (let i = parametro; i > 1; i -= 1) {
// 	let ehPrimo = true;
// 	for (let j = 2; j < i; j += 1) {
// 		if (i % j === 0) {
// 			ehPrimo = false;
// 			break;
// 		}
// 	}
// 	if (ehPrimo) {
// 		maiorPrimo = i;
// 		break;
// primos.push(i);
// 	}
// }

// console.log(primos);
// console.log("Maior primo é: " + maiorPrimo);

//
// BONUS ****************************************************
// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer,
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

const parametro = 7;
let result = "";

// for (let i = 0; i < parametro; i += 1) {
// 	for (let j = 0; j < parametro; j += 1) {
// 		result += "*";
// 	}
// 	result += "\n";
// }

// console.log(result);

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos
// de base.

// for (let i = 0; i < parametro; i += 1) {
// 	for (j = 0; j < i + 1; j += 1) {
// 		result += "*";
// 	}
// 	result += "\n";
// }

// console.log(result);

// 3- Agora inverta o lado do triângulo.

// for (let i = 0; i <= parametro; i += 1) {
// 	for (j = 0; j < parametro; j += 1) {
// 		if (j < parametro - i) {
// 			result += ".";
// 		} else {
// 			result += "*";
// 		}
// 	}
// 	result += "\n";
// }

// console.log(result);

// 4- Por fim, faça uma pirâmide com n asteriscos de base

// for (let i = 0; i <= parametro; i += 1) {
// 	for (j = 0; j < i; j += 1) {
// 		if (j < parametro - i) {
// 			result += " ";
// 		} else {
// 			result += "*";
// 		}
// 	}
// 	result += "\n";
// }

// console.log(result);

// 5- Faça uma pirâmide com n asteriscos de base, que seja vazia no meio

//TODO:
// for (let i = 0; i <= parametro; i += 1) {
// 	for (j = 0; j < i; j += 1) {
// 		if (j < parametro - i) {
// 			result += " ";
// 		} else {
// 			result += "*";
// 		}
// 	}
// 	result += "\n";
// }

// console.log(result);

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

// const numero = 10;
// let ehPrimo = true;

// for (let i = 2; i < numero; i += 1) {
// 	if (numero % i === 0) {
// 		ehPrimo = false;
// 		break;
// 	}
// }

// if (ehPrimo) {
// 	console.log("É primo");
// } else {
// 	console.log("Não é primo");
// }
