// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(text) {
	// retirado de: https://pt.stackoverflow.com/questions/313882/como-remover-espa%C3%A7o-em-branco
	text = text.replace(/\s/g, "");
	let reverse = text.split("").reverse().join("");
	if (reverse === text) {
		return true;
	} else {
		return false;
	}
}

// let input = "socorram me subi no onibus em marrocos";
// console.log(verificaPalindrome(input));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(numeros) {
	let maiorIndex = 0;

	for (let index in numeros) {
		if (numeros[index] > numeros[maiorIndex]) {
			maiorIndex = index;
		}
	}

	return maiorIndex;
}

// let input = [2, 3, 6, 7, 10, 1];
// console.log(maiorValor(input));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(numeros) {
	let menorIndex = 0;

	for (let index in numeros) {
		if (numeros[index] < numeros[menorIndex]) {
			menorIndex = index;
		}
	}

	return menorIndex;
}

// let input = [2, 4, 6, 7, 10, 0, -3];
// console.log(menorValor(input));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de
// todos os números de 1 até N.

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o
// final da string word . Considere que a string ending sempre será menor que a string word.
