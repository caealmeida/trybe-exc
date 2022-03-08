// EXC 5-------------------------------------
// const a = (b = 45);
// const c = 90;

// if (a < 0 || b < 0 || c < 0) {
// 	console.log("valor invalido");
// } else if (a + b + c == 180) {
// 	console.log("true");
// } else {
// 	console.log("false");
// }

// EXC 6-------------------------------------
// let peça = "rainha";

// switch (peça.toLowerCase()) {
// 	case "peão":
// 		console.log("***PEÃO***");
// 		console.log("apenas movimentos para frente, uma casa por vez.");
// 		console.log("capturas movendo diagonalmente.");
// 		break;
// 	case "bispo":
// 		console.log("***BISPO***");
// 		console.log("se move em uma linha reta diagonalmente no tabuleiro.");
// 		break;
// 	case "torre":
// 		console.log("***TORRE***");
// 		console.log("se move em uma linha reta horizontalmente e verticalmente no tabuleiro.");
// 		break;
// 	case "cavalo":
// 		console.log("***CAVALO***");
// 		console.log(
// 			"move-se duas casas horizontalmente ou verticalmente, e então, uma casa a mais em um angulo reto.Formando um 'L'"
// 		);
// 		break;
// 	case "rainha":
// 		console.log("***RAINHA***");
// 		console.log("pode se mover verticalmente, horizontalmente e diagonalmente.");
// 		break;
// 	case "rei":
// 		console.log("***REI***");
// 		console.log("pode se mover para qualquer casa adjacente");
// 		break;
// 	default:
// 		console.log("peça inexistente.");
// 		break;
// }

// EXC 8------------------------------------------
// const a = 5;
// const b = 9;
// const c = 2;

// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
// 	console.log("true");
// } else console.log("false");

// EXC 9------------------------------------------
// const a = 6;
// const b = 4;
// const c = 2;

// if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
// 	console.log("true");
// } else console.log("false");

// EXC 11-------------------------------------------
let salarioBruto = 3000;
let salarioINSS = 0;
let salarioLiquido = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
	salarioINSS = salarioBruto - salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
	salarioINSS = salarioBruto - salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
	salarioINSS = salarioBruto - salarioBruto * 0.11;
} else if (salarioBruto >= 5189.82) {
	salarioINSS = salarioBruto - 570.88;
}

if (salarioINSS > 0 && salarioINSS <= 1903.98) {
	salarioLiquido = salarioINSS;
} else if (salarioINSS <= 2826.65) {
	salarioLiquido = salarioINSS - (salarioINSS * 0.075 - 142.8);
} else if (salarioINSS <= 3751.05) {
	salarioLiquido = salarioINSS - (salarioINSS * 0.15 - 354.8);
} else if (salarioINSS <= 4664.68) {
	salarioLiquido = salarioINSS - (salarioINSS * 0.225 - 636.13);
} else if (salarioINSS > 4664.68) {
	salarioLiquido = salarioINSS - (salarioINSS * 0.275 - 869.36);
}

console.log("Salário: R$ " + salarioLiquido);
