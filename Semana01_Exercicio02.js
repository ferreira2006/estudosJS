/*
🎬 Mini Programa: Sistema de Ingressos de Cinema
📌 Regras:
Crianças até 12 anos pagam meia-entrada (50%).
Estudantes também pagam meia-entrada.
Idosos (60 anos ou mais) pagam meia-entrada.
Se for quarta-feira, todos pagam meia-entrada.
O cliente pode usar cupom DESCONTO5 para ganhar mais 5% de desconto.
🎯 O programa deve:
Receber o nome, idade, se é estudante, se é quarta-feira, se tem cupom e o valor do ingresso.
Calcular o valor final a pagar com base nas regras.
Mostrar uma frase no formato:
[Nome], [idade] anos, [Estudante ou Não], [com ou sem cupom], pagará: R$XX,XX
*/

/*
Dica rápida:
Crie uma função calculaIngresso(...) que recebe todas as infos do cliente.
Use if/else e operadores lógicos para aplicar os descontos.
Pode criar funções auxiliares para gerar strings como “Estudante / Não Estudante” ou “com / sem cupom”.
Não esquece de formatar o valor final como moeda (Intl.NumberFormat).
*/

let nome = "Marcos";
let idade = 47;
let isStudent = false;
const IDOSO = 60;
let isQuarta = false;
let cupom5 = false;
let valorIngresso = 50.00;

function calculaIngresso(idade, estudante, quarta, cupom, valor){
    let descontoFinal = 0;

    // Menor de 12 anos ou estudante pagam meia
    if (idade <= 12 || idade >= 60 || estudante || quarta) {
        descontoFinal = 0.50
    }
    
    if (cupom){
        descontoFinal += 0.05;
    }

    let valorFinal = valor * (1 - descontoFinal);

    return {
        descontoFinal: descontoFinal * 100,
        valorFinal : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorFinal)
    }
}

console.log("###### Testes de ingresso ######");

// Cliente 1: adulto, não estudante, sem cupom, não é quarta
nome = "Marcos";
idade = 47;
isStudent = false;
isQuarta = false;
cupom5 = false;
valorIngresso = 50.00;
let resultado = calculaIngresso(idade, isStudent, isQuarta, cupom5, valorIngresso);
console.log(nome + ", " + idade + " anos, " + (isStudent ? "Estudante" : "Não Estudante") + 
            (cupom5 ? ", com CUPOM5" : ", sem CUPOM5") + 
            ", " + (isQuarta ? "é quarta" : "não é quarta") + 
            " → Vai pagar: " + resultado.valorFinal + " com " + resultado.descontoFinal + "% de desconto.");

// Cliente 2: criança de 10 anos, não estudante, sem cupom, não é quarta
nome = "João";
idade = 10;
isStudent = false;
isQuarta = false;
cupom5 = false;
valorIngresso = 50.00;
resultado = calculaIngresso(idade, isStudent, isQuarta, cupom5, valorIngresso);
console.log(nome + ", " + idade + " anos, " + (isStudent ? "Estudante" : "Não Estudante") + 
            (cupom5 ? ", com CUPOM5" : ", sem CUPOM5") + 
            ", " + (isQuarta ? "é quarta" : "não é quarta") + 
            " → Vai pagar: " + resultado.valorFinal + " com " + resultado.descontoFinal + "% de desconto.");

// Cliente 3: estudante, 20 anos, com cupom, quarta-feira
nome = "Lucas";
idade = 20;
isStudent = true;
isQuarta = true;
cupom5 = true;
valorIngresso = 50.00;
resultado = calculaIngresso(idade, isStudent, isQuarta, cupom5, valorIngresso);
console.log(nome + ", " + idade + " anos, " + (isStudent ? "Estudante" : "Não Estudante") + 
            (cupom5 ? ", com CUPOM5" : ", sem CUPOM5") + 
            ", " + (isQuarta ? "é quarta" : "não é quarta") + 
            " → Vai pagar: " + resultado.valorFinal + " com " + resultado.descontoFinal + "% de desconto.");

// Cliente 4: idoso, 70 anos, não estudante, sem cupom, quarta-feira
nome = "Antonio";
idade = 70;
isStudent = false;
isQuarta = true;
cupom5 = false;
valorIngresso = 50.00;
resultado = calculaIngresso(idade, isStudent, isQuarta, cupom5, valorIngresso);
console.log(nome + ", " + idade + " anos, " + (isStudent ? "Estudante" : "Não Estudante") + 
            (cupom5 ? ", com CUPOM5" : ", sem CUPOM5") + 
            ", " + (isQuarta ? "é quarta" : "não é quarta") + 
            " → Vai pagar: " + resultado.valorFinal + " com " + resultado.descontoFinal + "% de desconto.");

