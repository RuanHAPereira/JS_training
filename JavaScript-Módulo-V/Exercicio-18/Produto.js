class Produto {
    constructor(nome, descricao, preco) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.estoque = 0
    }

    addEstoque(quantidade) {
        this.estoque += quantidade
    }

    calcularDesconto(desconto) {
        return this.preco * ((100 - desconto) /100)
    }
}

const celular = new Produto("Xiaomi", "Celular Top", 1400)

console.log(celular)
//Adicionando quantidade ao estoque
celular.addEstoque(10)
console.log(`Estoque atual: ${celular.estoque}`)

//Calculando desconto
celular.calcularDesconto(10) //10%
console.log(`Preço com desconto: R$${precoComDesconto}`)