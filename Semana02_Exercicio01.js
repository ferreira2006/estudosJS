

/*
📝 Exercício – Função Declarada
Objetivo: criar uma função que calcule a média de 3 notas e retorne a mensagem se o aluno passou ou não.

Regras:
- A função deve ser uma função declarada.
- Deve receber 3 notas como parâmetros.
- Calcular a média.
- Retornar uma string dizendo:
  "Aluno aprovado com média X" se média ≥ 7
  "Aluno reprovado com média X" se média < 7
- Testar chamando a função antes e depois da declaração (hoisting).
*/

console.log("hoistring: função calculaMedia chamada antes da declaração. Média: " + calculaMedia(10, 8, 5.5));

/*
// Tentando chamar ANTES da atribuição
// console.log("Função expressão:", calculaMediaComoExpressao(10, 8, 5.5)); 

// ReferenceError: Cannot access 'calculaMedia' before initialization
// Função anônima atribuída a variável
/*  const calculaMediaComoExpressao = function(n1, n2, n3) {
        return (n1 + n2 + n3) / 3;
    };
*/

// variável declarada no escopo global (acessível em todos os locais do código)
let nome = "NOME"


// 🔹 Função declarada (function declaration) → sofre hoisting (pode ser chamada antes da definição).
// 🔹 Recebe 3 parâmetros (nota1, nota2, nota3).
// 🔹 Usa operadores matemáticos (+ e /) para calcular a média.
function calculaMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3; // 🔹 retorna o valor calculado
}

// 🔹 Outra função declarada, que recebe como parâmetros um nome (string) e uma média (número).
// 🔹 Demonstra escopo local → variáveis `mediaFormatada` e `resultado` só existem dentro da função.
function aprovacao(nome, media){
    let mediaFormatada = media.toFixed(2); // 🔹 método de number → limita casas decimais
    let resultado = "";

    // 🔹 Estrutura condicional (if/else) + operador de comparação (>=)
    if (media >= 7) {
        // 🔹 Template string → interpolação de variáveis dentro de uma string
        resultado = `Aluno ${nome} aprovado com média ${mediaFormatada}`;
    } else {
        resultado = `Aluno ${nome} reprovado com média ${mediaFormatada}`;
    }

    return resultado; // 🔹 retorno da função (string com o resultado final)
}

// 🔹 Testes: variável `nome` é alterada antes de cada chamada da função
// 🔹 `calculaMedia` é chamada primeiro, depois `aprovacao` usa o resultado.
nome = "Marcos"
console.log(aprovacao(nome, calculaMedia(4, 6.5, 7.3)));

nome = "João"
console.log(aprovacao(nome, calculaMedia(5, 6.3, 7.0)));

nome = "Pedro"
console.log(aprovacao(nome, calculaMedia(8, 3.5, 8.8)));

nome = "Juca"
console.log(aprovacao(nome, calculaMedia(6.5, 8.5, 7.3)));
