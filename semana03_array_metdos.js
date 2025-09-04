

// Método push adiciona item ao final do array
let frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas);


// Método pop remove o último item do array
frutas.pop();
console.log(frutas);

// Método map cria um novo array transformando seus itens
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(n => n * 2);
console.log(numerosDobrados);

// Método filter cria um novo array com itens que atendem a condição
let idades = [12, 22, 30, 12];
let adultos = idades.filter(idade => idade >= 18);
console.log(adultos); // 22, 30
