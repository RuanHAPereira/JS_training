const Produto = require("./Produto");

module.exports = class Poster extends Produto {
    constructor(nome, descricao, altura, largura, preco, estoque) {
        super(nome, descricao, preco, estoque)
        this.altura = altura
        this.largura = largura
    }
}