// =======================
// 🐾 POO em JavaScript
// =======================

// Classe "abstrata" (não pode ser instanciada diretamente)
// No JS não existe abstract nativo, mas podemos simular
class Animal {
  #nome; // Encapsulamento → propriedade privada

  constructor(nome) {
    if (this.constructor === Animal) {
      throw new Error("Classe abstrata não pode ser instanciada!");
    }
    this.#nome = nome; // Inicializa o campo privado corretamente
  }

  // Método abstrato simulado → forçamos subclasses a implementar
  falar() {
    throw new Error("Método abstrato deve ser implementado!");
  }

  // Getters e Setters (boas práticas de encapsulamento)
  getNome() {
    return this.#nome;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  toString() {
    return this.#nome;
  }
}

// =======================
// Classe filha → Cachorro
// =======================
class Cachorro extends Animal {
  #especie;

  constructor(nome, especie) {
    super(nome); // chama o construtor da classe pai
    this.#especie = especie;
  }

  // Polimorfismo → sobrescreve "falar" do pai
  falar() {
    console.log(`${super.getNome()} late: Au Au`);
  }

  getEspecie() {
    return this.#especie;
  }

  setEspecie(especie) {
    this.#especie = especie;
  }

  toString() {
    return `${this.#especie} ${super.getNome()}`;
  }
}

// =======================
// Classe filha → Gato
// =======================
class Gato extends Animal {
  #especie;

  constructor(nome, especie) {
    super(nome);
    this.#especie = especie;
  }

  // Polimorfismo → sobrescreve "falar" do pai
  falar() {
    console.log(`${super.getNome()} mia: Miau Miau`);
  }

  getEspecie() {
    return this.#especie;
  }

  setEspecie(especie) {
    this.#especie = especie;
  }

  toString() {
    return `${this.#especie} ${super.getNome()}`;
  }
}

// =======================
// Testando polimorfismo
// =======================

// Criando instâncias de subclasses
const dog = new Cachorro("Chico", "Cachorro");
const cat = new Gato("Mima", "Felino");

// Colocando todos em um array
const animais = [dog, cat];

// Iterando → todos têm o método "falar", mas o comportamento varia
animais.forEach(animal => {
  animal.falar(); // polimorfismo em ação
});
