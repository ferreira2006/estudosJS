
// if é a forma básica de controle de fluxo.
let idade = 21;

if (idade >= 18 ){
    console.log("Maior de idade");
}

// if aninhados (um dentro do outro)
let temCNH = false;

if (idade >= 18){
    if (temCNH){
        console.log("Tem CNH, pode dirigir");
    } else {
        console.log("Tem idade, mas não tem CNH");
    }
} else {
    console.log("Menor de idade, não pode dirigir");
}


