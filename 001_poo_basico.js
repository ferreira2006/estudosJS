const carro = {
    marca: "Fiat",
    modelo: "Palio",
    ano: 2013,
    ligar: function() {
        console.log(`${this.marca} ${this.modelo} está ligado!`);
    }
};

carro.ligar(); // Fiat está ligado!