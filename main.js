class Ingrediente {
    constructor(nome, quantidade) {
        this._nome = nome
        this._quantidade = quantidade
    }

    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

    get quantidade() {
        return this._quantidade
    }

    set quantidade(novaQuantidade) {
        this._quantidade = novaQuantidade
    }

    estoque() {
        console.log(`O ingrediente ${this.nome} ainda possui ${this.quantidade} no estoque`)
    }

}

const chocolate = new Ingrediente("Chocolate", 3)
const farinha = new Ingrediente("Farinha", 10)

chocolate.nome = "Chocolate branco"
chocolate.quantidade = 1

console.log(chocolate)

chocolate.estoque()
farinha.estoque()