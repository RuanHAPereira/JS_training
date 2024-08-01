class Comentario {
    constructor(usuario, conteudo) {
        this.usuario = usuario
        this.conteudo = conteudo
        this.criar = new Date()
    }
}

module.exports = Comentario