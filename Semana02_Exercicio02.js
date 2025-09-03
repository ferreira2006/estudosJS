/*
📝 Exercício – Função Declarada – Consumo de Combustível

Objetivo: calcular a média de quilômetros rodados por litro de combustível.
*/

// Chamando a função antes da declaração
// 🔹 Conceito: hoisting – funções declaradas podem ser chamadas antes de sua definição no código
console.log(calculaMedia(97000, 98000, 60)); 
// Aqui o JavaScript "move" a declaração da função para cima durante a compilação, então funciona normalmente.

// Declaração da função
// 🔹 Função declarada (function declaration)
// 🔹 Escopo local: variáveis declaradas dentro da função existem apenas dentro dela
// 🔹 Parâmetros: kmInicial, kmFinal, qtdeCombistivel são variáveis locais à função
function calculaMedia(kmInicial, kmFinal, qtdeCombustivel){

    // Cálculo da distância percorrida
    // 🔹 Variável 'distancia' é local à função (escopo local)
    let distancia = kmFinal - kmInicial;

    // Cálculo do consumo médio (km/l)
    // 🔹 Variável 'consumo' é local à função
    let consumo = distancia / qtdeCombustivel;

    // Retorno do valor calculado
    // 🔹 return envia o resultado de volta para quem chamou a função
    // 🔹 Template string (`...`) permite inserir variáveis dentro da string de forma legível
    // 🔹 método toFixed(2) arredonda o número para 2 casas decimais
    return `O veículo fez ${consumo.toFixed(2)} km/l`;    
}

// Chamando a função depois da declaração
// 🔹 Funciona normalmente, mostrando que a função pode ser chamada em qualquer ponto após ser declarada
console.log(calculaMedia(100000, 101200, 80));

// 🔹 Conceitos aplicados até aqui:
// 1️⃣ Função declarada (function declaration)
// 2️⃣ Parâmetros e retorno de valores
// 3️⃣ Escopo de variáveis: local (dentro da função) e global (fora da função, se existisse)
// 4️⃣ Template strings e métodos de número (toFixed)
// 5️⃣ Hoisting – chamada da função antes da declaração
