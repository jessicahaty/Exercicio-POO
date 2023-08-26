class Bolo {
    constructor(sabor, tamanho) {
        this._sabor = sabor
        this._tamanho = tamanho
    }

    get sabor() {
        return this._sabor
    }

    set sabor(novoSabor) {
        this._sabor = novoSabor
    }

    get tamanho() {
        return this._tamanho
    }

    set tamanho(novoTamanho) {
        this._tamanho = novoTamanho
    }

    decorar() {
        console.log(`O Bolo de ${this.sabor} de tamanho ${this._tamanho} esta sendo decorado !`)
    }


}

class BoloMorango extends Bolo {
    constructor(cobertura) {
        super("Morango", "Grande")
        this.cobertura = cobertura
    }

    decorar() {
        console.log(`O Bolo de ${this.sabor} de tamanho ${this._tamanho} com cobertura de ${this.cobertura} esta sendo decorado !`)
    }
}

class BoloAbstrado {
    constructor() {
        if (this.constructor === BoloAbstrado) {
            throw new Error ("Não é possivel instanciar uma classe abstrata")
        }
    }

    prepararMassa() {
        throw new Error ("Método abstrato - deve ser implementado nas subclasses")
    }
}

class BoloLaranja extends BoloAbstrado {
    constructor() {
        super()
    }

    prepararMassa() {
        console.log("Preparando a massa para o bolo de laranja")
    }
}

const boloLaranja = new BoloLaranja
console.log(boloLaranja)
boloLaranja.prepararMassa()



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

const boloLimao = new Bolo("Limao", "Pequeno")
const boloChocolate = new Bolo("Chocolate", "Grande")

const chocolate = new Ingrediente("Chocolate", 3)
const farinha = new Ingrediente("Farinha", 10)

boloChocolate.tamanho = "Medio"

chocolate.nome = "Chocolate branco"
chocolate.quantidade = 1

boloChocolate.decorar()
boloLimao.decorar()

chocolate.estoque()
farinha.estoque()

const boloMorango = new BoloMorango("Creme")
boloMorango.decorar()