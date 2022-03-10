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

const parametro = 50;
// let primos = [];
let maiorPrimo = 0;

for (let i = parametro; i > 1; i -= 1) {
	let ehPrimo = true;
	for (let j = 2; j < i; j += 1) {
		if (i % j === 0) {
			ehPrimo = false;
			break;
		}
	}
	if (ehPrimo) {
		maiorPrimo = i;
		break;
		// primos.push(i);
	}
}

// console.log(primos);
console.log("Maior primo é: " + maiorPrimo);
