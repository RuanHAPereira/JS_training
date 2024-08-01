const Database = require("./Database")
const Autor = require("./entidades/Autor")
const Livro = require("./entidades/Livro")
const Usuario = require("./entidades/Usuario")

module.exports = class App {
    static #database = new this.Database()

    criarUsuario(nome, email, senha) {
        const usuario = new Usuario(nome, email, senha)
        App.#database.salvarUsuario(usuario)
    }

    getUsuarios() {
        App.#database.find('usuarios')
    }

    criarAutor(nome, nacionalidade, bio) {
        const autor = new Autor(nome, nacionalidade, bio)
        App.#database.salvarAutor(autor)
    }

    getAutor() {
        return App.#database.find('autores')
    }

    criarLivro(titulo,sinopse, genero, paginas, autor, descricao, preco, estoque) {
        const livro = new Livro(titulo,sinopse, genero, paginas, autor, descricao, preco, estoque)
        App.#database.salvarLivro(livro)
    }

    addLivro(nomeLivro, quantidade) {
        App.#database.addLivroEstoque(nomeLivro, quantidade)
    }

    getLivros() {
        return App.#database.find('livros')
    }

    criarPoster(nome, descricao, altura, largura, preco, estoque) {
        const poster = new Poster(nome, descricao, altura, largura, preco, estoque)
        App.#database.salvarPoster(poster)
    }

    addPoster(nomePoster, quantidade) {
        App.#database.addPostersEstoque(nomePoster, quantidade)
    }

    getPoster() {
        return App.#database.find('posters')
    }

    criarPedido(itens, usuario) {
        const pedido = new Pedido(itens, usuario)
        App.#database.salvarPedido(pedido)
        pedido.data.itens.forEach(({ produto.nome, quantidade}) => {
            if (produto instanceof Livro) {
                App.#database.
            }
        });
    }
}