
// for clássico. É o mais usado quando sabemos quantas vezes queremos repetir.

// contar de 1 até 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// while Repete enquanto a condição for verdadeira.Bom quando não sabemos de antemão quantas repetições terão.
let i = 0;
let repeticoes = 20;
while (i < repeticoes){
    console.log(`Contando: ${i}`);
    i++;
}

// for..of - Serve para percorrer arrays, strings, coleções itiráveis. Ele devolve os valores
let frutas = ["maçã", "banana", "laranja", "goiaba", "uva", "abacaxi", "melancia", "mamão", "pera", "ameixa", "kiwi", "coco", "manga", "jabuticaba", "caju", "pêssego", "nectarina", "figo", "caqui", "framboesa", "amora", "pitanga", "tangerina", "limão", "graviola", "acerola", "seriguela", "maracujá",   "carambola", "lichia", "cupuaçu", "jenipapo", "umbu", "jaca"]; 
for (let fruta of frutas){
    console.log(fruta);
}


// for...in - Serve para percorrer objetos (as chaves) e devolve as propriedades (keys).
let pessoas = { nome: "Marcos", idade: 47, Cidade: "Joaçaba"};
for (let chave in pessoas){
    console.log(chave,": ", pessoas[chave]);
}

// Em arrays ele também funciona, mas retorna os índices (não é o mais indicado):

let numeros = [1,2,3,4,5,6,7,8,9];
for (let i in numeros){
    console.log(i, "=> ", numeros[i]);
}