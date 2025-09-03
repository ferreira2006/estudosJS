/* Herança permite criar uma classe filha que herda propriedades e métodos de uma classe pai. */
class Pessoa {
  #nome;
  #cpf;
  #dataNasc;
  #telefone;


  constructor(nome, cpf, dtNasc, telefone) {
    this.#nome = nome;
    this.#cpf = cpf;
    this.#dataNasc = dtNasc;
    this.#telefone = telefone;
  }


  setNome(nome) {
    this.#nome = nome;
  }
  getNome() {
    return this.#nome;
  }
  setCpf(cpf) {
    this.#cpf = cpf;
  }
  getCpf() {
    return this.#cpf;
  }
  setDtNasc(dtNasc) {
    this.#dataNasc = dtNasc;
  }
  getDtNasc() {
    return this.#dataNasc;
  }
  setTelefone(telefone) {
    this.#telefone = telefone;
  }
  getTelefone() {
    return this.#telefone;
  }


  toString() {
    return this.#nome;
  }
}


let marcos = new Pessoa(
  'Marcos Ferreira',
  '02502515904',
  '20/06/1978',
  '49991183986'
);
let gabriel = new Pessoa(
  'Gabriel Ferreira',
  '0905321900',
  '06/06/2007',
  '49999779074'
);

let karise = new Pessoa(
  'Karise Schmidt',
  '02030201979',
  '22/01/1977',
  '49999327892'
);


console.log(
  `Nome: ${marcos.getNome()} CPF: ${marcos.getCpf()} Nascimento: ${marcos.getDtNasc()} Telefone: ${marcos.getTelefone()}`
);
marcos.setTelefone('49991127283');
console.log(
  `Nome: ${marcos.getNome()} CPF: ${marcos.getCpf()} Nascimento: ${marcos.getDtNasc()} Telefone: ${marcos.getTelefone()}`
);


console.log(`toString(): Nome: ${marcos.toString()}`);


class Arquiteto extends Pessoa {
  #documentoCRA;


  constructor(nome, cpf, dtNasc, telefone, documentoCRA) {
    super(nome, cpf, dtNasc, telefone);
    this.#documentoCRA = documentoCRA;
  }


  getDocumentoCRA() {
    return this.#documentoCRA;
  }
  setDocumentoCRA(documentoCRA) {
    this.#documentoCRA = documentoCRA;
  }


  toString() {
    return `${super.toString()} CRA: ${this.#documentoCRA}`;
  }
}


let marcosFormado = new Arquiteto(
  'Marcos Arquiteto',
  '9872347281',
  '30/01/1967',
  '47988132845',
  '9876546'
);


console.log(
  `Nome: ${marcosFormado.getNome()} CRA: ${marcosFormado.getDocumentoCRA()}`
);


console.log(
  `Nome: ${marcosFormado.getNome()} CRA: ${marcosFormado.getDocumentoCRA()} CPF: ${marcosFormado.getCpf()} Nascimento: ${marcosFormado.getDtNasc()} Telefone: ${marcosFormado.getTelefone()}`
);


console.log(`toString() do Arquiteto: ${marcosFormado.toString()}`);
