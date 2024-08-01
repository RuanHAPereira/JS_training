const Comentario = require("./Comentario")

class Postagem {
    constructor(titulo, conteudo, autor) {
        this.titulo = titulo
        this.conteudo = conteudo
        this.autor = autor
        this.comentarios = []
        this.criarAt = new Date()
    }

    addComentario(usuario, conteudo) {
        this.comentarios.push(new Comentario(usuario, conteudo))
    }

}

module.exports = Postagem