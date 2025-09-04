// objeto simples
let pessoa = {
  nome: "Marcos",
  idade: 47,
  profissao: "Desenvolvedor"
};

// odemos acessar as propriedades com ponto (.) ou colchetes ([]).
console.log(pessoa.nome);  // Marcos
console.log(pessoa["idade"]); // 47
console.log(pessoa["nome"]); // Marcos


// dicionando e removendo propriedades
pessoa.telefone = "49991183986";  // adiciona
delete pessoa.profissao;          // remove
console.log(pessoa);


// Métodos (funções dentro de objetos)
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  ligar: function() {
    console.log("O carro está ligado!");
  }
};
carro.ligar(); // 


// Dentro de um método, this se refere ao próprio objeto que chamou o método
// Isso evita ter que repetir o nome da variável/objeto
let aluno = {
  nome: "Gabriel",
  notas: [8, 7, 9],
  media: function() {
    let soma = this.notas.reduce((acc, n) => acc + n, 0);
    return soma / this.notas.length;
  }
};

console.log(aluno.nome + " tem média " + aluno.media()); 
// Gabriel tem média 8


/*
Propriedades → dados.
Métodos → funções dentro do objeto.
this → referência ao objeto atual.
*/