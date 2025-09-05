
// Destructuring - Extrai valores de arrays ou objetos de forma simples.

// Exemplo com array
let frutas = ["maçã", "banana", "laranja"];
let [ primeira, segunda] = frutas;

console.log(primeira); // maçã
console.log(segunda); // banana

// Exemplo com objeto
let aluno = {nome: "Marcos", idade: 47, nota: 9};
let { nome, nota } = aluno;

console.log(`${nome} tirou nota ${nota}`);



