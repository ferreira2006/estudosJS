/*
Mini Programa – Controle de Consumo de Veículos

Regras:
Cada veículo tem:
Nome do motorista
Quilometragem inicial e final
Litros de combustível consumidos
O programa deve:
Calcular a distância percorrida
Calcular o consumo médio (km/l)
Retornar uma mensagem informando:
Nome do motorista
Consumo médio
Se o consumo está acima de 12 km/l → eficiente ou abaixo → ineficiente
Variáveis:
Use variáveis globais para dados gerais do programa (como taxa de eficiência)
Use variáveis locais dentro da função para cálculos
Use blocos if/else com escopo de bloco para mensagens de eficiência
*/

/*Aqui aplicamos conceitos de:
- Variáveis globais: taxaEficiencia, motorista, placa
- Função declarada: calculaMedia()
- Parâmetros: kmInicial, kmFinal, qtdeCombistivel
- Retorno de valores: retorna um objeto {taxaEficiencia, media}
- Escopo local: media (dentro da função), taxaEficiencia (aqui também global, mas poderia ser local)
- Escopo de bloco: if/else para definir a classificação do consumo
*/

let taxaEficiencia; // variável global usada para armazenar a classificação
let motorista = "NOTORISTA"; // variável global para nome do motorista
let placa = "PLACA"; // variável global para placa do veículo

// Função declarada
function calculaMedia(kmInicial, kmFinal, qtdeCombistivel){
    // variável local: media, somente existe dentro desta função
    let media = (kmFinal - kmInicial) / qtdeCombistivel;

    // bloco de escopo if/else para definir a eficiência
    if (media > 12) {
        taxaEficiencia = "Consumo eficiente"; // global, mas poderia ser local
    } else {
        taxaEficiencia = "Consumo ineficiente";
    }

    // retorna um objeto com as informações necessárias
    return {
        taxaEficiencia,
        media
    }
}

// Chamadas da função com parâmetros diferentes
motorista = "Marcos";
placa = "BCX-2H05";
calculos = calculaMedia(55000, 56000, 55); // retorna objeto com taxaEficiencia e media
console.log(`${motorista} e seu veículo ${placa} foram classificados como: ${calculos.taxaEficiencia} com média ${calculos.media}`);

// Outra chamada da função
motorista = "Joel";
placa = "MXR-3A15";
calculos = calculaMedia(55600, 55800, 56);
console.log(`${motorista} e seu veículo ${placa} foram classificados como: ${calculos.taxaEficiencia} com média ${calculos.media}`);