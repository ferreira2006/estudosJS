// reduce - método que reduz (ou acumula) um array inteiro em um único valor: pode ser número, string, objeto, outro array


// Somar todos os números
const numeros = [10, 20, 30, 40];
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // 100

// Encontrar o maior número
const num = [ 5, 12, 8, 130, 44];
const maior = num.reduce((acc, n) => (n > acc ? n : acc), num[0]);
console.log(`O maior é: ${maior}`); // 130

// Contar quantas vezes cada item aparece
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log(contagem);
// { maçã: 3, banana: 2, laranja: 1 }

// Média das notas de alunos
const alunos = [
  { nome: "Marcos", nota: 7 },
  { nome: "João", nota: 6 },
  { nome: "Tadeu", nota: 8.5 },
  { nome: "Dídimo", nota: 9 },
  { nome: "Lucas", nota: 5 }
];
const media = alunos.reduce((acc, aluno, _, arr) => acc + aluno.nota / arr.length, 0);
console.log(`Média da turma: ${media.toFixed(2)}`);
// Média da turma: 7.10


const numbers = [10, 20, 30];
const somar = numbers.reduce((acumulador, valorAtual) => {
  console.log(`acumulador: ${acumulador}, valorAtual: ${valorAtual}`);
  return acumulador + valorAtual;
}, 0);
console.log("Soma final:", somar);
/*
Começa com acumulador = 0 (valorInicial)
Iteração 1: 0 + 10 = 10 → acumulador vira 10
Iteração 2: 10 + 20 = 30 → acumulador vira 30
Iteração 3: 30 + 30 = 60 → acumulador vira 60
Retorna 60
*/

const fruits = ["maçã", "banana", "maçã"];
const cont = fruits.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log(cont);

// Explicação passo a passo:
// acc = {} (começa vazio)
// Iteração 1: fruta = "maçã" → acc["maçã"] = 1
// Iteração 2: fruta = "banana" → acc["banana"] = 1
// Iteração 3: fruta = "maçã" → acc["maçã"] = 2
// Resultado final: { maçã: 2, banana: 1 }