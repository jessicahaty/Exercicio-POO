class Ingrediente {
    constructor(nome, quantidade) {
        this.nome = nome
        this.quantidade = quantidade
    }
}

const Chocolate = new Ingrediente("Chocolate", 3)

console.log(Chocolate)