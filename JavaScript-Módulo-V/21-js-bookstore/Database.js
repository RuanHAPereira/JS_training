module.exports = class Dados {
    #armazem = {
        autores: [],
        livros: [],
        posters: [],
        pedidos: [],
        usuarios: []
    }

    find(key) {
        return this.#armazem(key)
    }

    salvarAutor(autores) {
        this.#armazem.autores.push(autores)
    }

    encontrarLivroPeloNome(nomeLivro) {
        return this.#armazem.livros.find(b => b.nome === nomeLivro)
    }

    salvarLivro(livro) {
        const existeLivro = this.encontrarLivroPeloNome(livro.nome)
        if (!existeLivro) {
            this.#armazem.livros.push(livro)
        }
    }

    addLivrosNoArmazem(nomeLivro, quantidade) {
        const livro = this.encontrarLivroPeloNome(nomeLivro)
        livro?.addLivrosNoArmazem(quantidade)
    }

    removerLivroDoArmazem(nomeLivro, quantidade) {
        const livro = this.encontrarLivroPeloNome(nomeLivro)
        livro?.removerLivroDoArmazem(quantidade)
    }

    encontrarPosterPeloNome(nomePoster) {
        return this.#armazem.posters.find(p => p.nome === nomePoster)
    }

    salvarPoster(poster) {
        const existePoster = this.encontrarPosterPeloNome(poster.nome)
        if (!existePoster) {
            this.#armazem.posters.push(poster)
        }
    }

    addPosterNoArmazem(nomePoster, quantidade) {
        const poster = this.encontrarPosterPeloNome(nomePoster)
        poster?.addPosterNoArmazem(quantidade)
    }

    removerPosterDoArmazem(nomePoster, quantidade) {
        const poster = this.encontrarPosterPeloNome(nomePoster)
        poster?.removerPosterDoArmazem(quantidade)
    }

    salvarUsuario(usuario) {
        const usuarioExiste = this.#armazem.usuarios.find(u => u.email === usuario.email)
        if (!usuarioExiste) {
            this.#armazem.usuarios.push(usuario)
        }
    }

    salvarPedido(pedido) {
        this.#armazem.pedidos.push(pedido)
    }

    mostrarArmazem() {
        console.table(this.#armazem.autores)
        console.table(this.#armazem.livros)
        console.table(this.#armazem.posters)
        console.table(this.#armazem.usuarios)
        console.table(this.#armazem.pedidos.map(pedido => pedido.data))

    }
}