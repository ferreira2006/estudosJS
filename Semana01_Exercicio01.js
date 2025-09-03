/*
🛒 Mini Programa: Sistema de Desconto em Loja
📌 Regras:
Se o cliente for estudante OU tiver menos de 12 anos, ganha 10% de desconto.
Se o cliente tiver 60 anos ou mais, ganha 15% de desconto.
Se tiver cupom especial (CUPOM10), ganha mais 10% de desconto acumulado.
*/ 

// ====== Declaração de variáveis (strings, números e booleanos) ======
let nome = "Marcos";       // string: nome do cliente
let idade = 65;            // number: idade do cliente
let estudante = false;     // boolean: se é estudante ou não
let desconto = 0.0;        // number: desconto inicial (não usado diretamente)
let cupom10 = false;       // boolean: se tem cupom ou não
let valorCompra = 0.0;     // number: valor da compra

// ====== Função principal que calcula o desconto ======
function aplicaDesconto(valorCompra, idade, isStudent, cupom){
    let descontoFinal = 0; // começa com 0 de desconto

    // Operador lógico (|| OU) e de comparação (<)
    if (isStudent || idade < 12){
        descontoFinal = 0.10; // 10% se estudante OU menor de 12 anos
    }

    // Operador de comparação (>=)
    if (idade >= 60){
        descontoFinal = 0.15; // 15% se tiver 60 anos ou mais
    }

    // Operador lógico (if com boolean)
    if (cupom){
        descontoFinal += 0.10; // soma mais 10% se tiver cupom
    }

    // Operação matemática: valor - (valor * desconto)
    let valorFinal = valorCompra - (valorCompra * descontoFinal);

    // Retorna um objeto com desconto em % e valor formatado em moeda brasileira
    return {
        descontoFinal: (descontoFinal * 100).toFixed(0) + "%", // multiplicação * e concatenação +
        valorFinal: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorFinal)
    }
}

// ====== Funções auxiliares com operador ternário (?) ======
function estudanteString(isStudent){
    // Se for true → "Estudante", senão → "Não Estudante"
    return isStudent ? "Estudante" : "Não Estudante";
}

function cupomString(temCupom){
    // Se for true → "com CUPOM10", senão → "sem CUPOM10"
    return temCupom ? "com CUPOM10" : "sem CUPOM10";
}

// ====== Casos de teste ======
console.log("--------"); // imprime separador
console.log("--------");

// Primeiro cliente
nome = "Marcos";          // atribuição de string
idade = 47;               // atribuição de number
estudante = false;        // atribuição de boolean
cupom10 = false;          // atribuição de boolean
valorCompra = 100.00;     // atribuição de number

// Chama a função e guarda o resultado
let resultado = aplicaDesconto(valorCompra, idade, estudante, cupom10);

// Concatenação de strings com +
console.log(nome + ", "+ estudanteString(estudante) + ", "+ cupomString(cupom10) 
+ " e com idade de " + idade + " anos, " 
+ "acumulou " + resultado.descontoFinal + " de desconto e vai pagar: " + resultado.valorFinal);

console.log("--------");
console.log("--------");

// Segundo cliente
nome = "João";
idade = 10;
estudante = true;
cupom10 = false;
valorCompra = 100.00;
resultado = aplicaDesconto(valorCompra, idade, estudante, cupom10);
console.log(nome + ", "+ estudanteString(estudante) + ", "+ cupomString(cupom10) 
+ " e com idade de " + idade + " anos, " 
+ "acumulou " + resultado.descontoFinal + " de desconto e vai pagar: " + resultado.valorFinal);

console.log("--------");
console.log("--------");

// Terceiro cliente
nome = "Lucas";
idade = 15;
estudante = true;
cupom10 = true;
valorCompra = 100.00;
resultado = aplicaDesconto(valorCompra, idade, estudante, cupom10);
console.log(nome + ", "+ estudanteString(estudante) + ", "+ cupomString(cupom10) 
+ " e com idade de " + idade + " anos, " 
+ "acumulou " + resultado.descontoFinal + " de desconto e vai pagar: " + resultado.valorFinal);

console.log("--------");
console.log("--------");

// Quarto cliente
nome = "Antonio";
idade = 10;
estudante = true;
cupom10 = true;
valorCompra = 100.00;
resultado = aplicaDesconto(valorCompra, idade, estudante, cupom10);
console.log(nome + ", "+ estudanteString(estudante) + ", "+ cupomString(cupom10) 
+ " e com idade de " + idade + " anos, " 
+ "acumulou " + resultado.descontoFinal + " de desconto e vai pagar: " + resultado.valorFinal);

console.log("--------");
console.log("--------");

// Quinto cliente
nome = "Seu Orcar";
idade = 75;
estudante = false;
cupom10 = true;
valorCompra = 100.00;
resultado = aplicaDesconto(valorCompra, idade, estudante, cupom10);
console.log(nome + ", "+ estudanteString(estudante) + ", "+ cupomString(cupom10) 
+ " e com idade de " + idade + " anos, " 
+ "acumulou " + resultado.descontoFinal + " de desconto e vai pagar: " + resultado.valorFinal);
