class Carro {
   
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }


    ligar(){
        console.log(`${this.marca} ${this.modelo} ${this.ano} está ligado!`);
    }


    idadeCarro(anoAtual){
        return anoAtual - this.ano;
    }
}


const palio = new Carro("Fiat", "Palio", 2013);
const civic = new Carro("Honda", "Civic", 2010);
const fusca = new Carro("VW", "Fusca", 1985);


palio.ligar();


console.log(`Ano do Civic: ${civic.idadeCarro(2025)}`);
