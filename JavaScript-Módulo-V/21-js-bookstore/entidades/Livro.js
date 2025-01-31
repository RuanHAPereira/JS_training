const Produto = require("./Produto");

module.exports = class Livro extends Produto {
    constructor(titulo, sinopse, genero, paginas, autor, descricao, preco, estoque = 0) {
        super(`Livro: ${titulo}`, descricao, preco, estoque)
        this.titulo = titulo
        this.sinopse = sinopse
        this.genero = genero
        this.paginas = paginas
        this.autor = autor
    }
}