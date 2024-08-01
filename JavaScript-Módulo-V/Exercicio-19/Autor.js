const Postagem = require("./Postagem")

class Autor {
    constructor(nome) {
        this.nome = nome
        this.postagens = []
    }

    criarPost(titulo, conteudo) {
        const novoPost = new Postagem(titulo, conteudo, this)
        this.postagens.push(novoPost)
        return novoPost
    }
}

module.exports = Autor