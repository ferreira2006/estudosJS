/* Um array é uma lista ordenada de elementos (pode ser de qualquer tipo: números, strings, objetos...). */

// Criando arrays
let numeros = [10, 20, 30, 40];
let nomes = ["Marcos", "Karise", "Gabriel"];
let misto = [42, "texto", true, { chave: "valor" }];
let diasSemana = ["Domingo", "Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

// Acessando elementos (índice começa no 0)
console.log(numeros[0]); // 10
console.log(nomes[2]);   // Gabriel
console.log(diasSemana[1]);

// Alterando valores
numeros[1] = 99;
console.log(numeros); // [10, 99, 30, 40]


// Tamanho do array
console.log(nomes.length); // 3
console.log(diasSemana.length); // 7
