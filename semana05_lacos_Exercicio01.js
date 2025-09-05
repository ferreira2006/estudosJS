
/*
Exercício: Percorrer um array de alunos e mostrar quem passou (média ≥ 7).
*/

let alunos = ["Marcos", "João", "Tadeu", "Dídimo", "Lucas"]; 
let notas = [7,6,8.5,9,5];
let contador = 0;

for (let aluno of alunos){
    let mediaFinal = notas[contador];
    console.log(`${aluno} tirou nota ${mediaFinal}`);
    
      if (notas[contador] >= 7){
        console.log(`${aluno} foi Aprovado`);
    }  else {
        console.log(`${aluno} foi Reprovado`);
    }

    contador++;
}

/*
    Outras maneiras de resolver o exercício:
*/

// Usar índice direto com for clássico ou forEach, evitando a variável contador.
for (let i=0; i < alunos.length; i++){
    let aluno = alunos[i];
    // todos perderam 1 ponto na média :)
    let mediaFinl = notas[i]-1;

    console.log(`${aluno} tirou nota ${mediaFinl}`);

    if (mediaFinl >= 7){
        console.log(`${aluno} foi Aprovado`);

    } else {
        console.log(`${aluno} foi Reprovado`);
    }
}

// Juntar aluno e nota em um objeto (mais organizado):
let alunedo = [
  { nome: "Marcos", nota: 7 },
  { nome: "João", nota: 6 },
  { nome: "Tadeu", nota: 8.5 },
  { nome: "Dídimo", nota: 9 },
  { nome: "Lucas", nota: 5 }
];

for (let aluno of alunedo){
    console.log(`${aluno.nome} tirou nota ${aluno.nota}`);
  
    if (notas[contador] >= 7){
        console.log(`${aluno.nome} foi Aprovado`);
    }  else {
        console.log(`${aluno.nome} foi Reprovado`);
    }
}


