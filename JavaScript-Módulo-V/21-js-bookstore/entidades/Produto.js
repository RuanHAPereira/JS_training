module.exports = class Produto {
    constructor(nome, descricao, preco, estoque = 0) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.estoque = estoque
    }

    addEstoque(quantidade) {
        this.estoque += quantidade
    }

    removerEstoque(quantidade) {
        this.estoque -= quantidade
    }
}