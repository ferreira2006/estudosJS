// Curto-circuito lógico (&& e ||)


// Usando && (executa só se for verdadeiro):
let logado = true;
logado && console.log("Usuário logado");
// Só imprime se logado for true


// Usando || (pega o primeiro valor verdadeiro)
let nome = "";
let nomePadrao = nome || "Visitante";
console.log(nomePadrao);