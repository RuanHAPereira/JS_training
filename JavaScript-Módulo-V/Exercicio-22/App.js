const Emprestimo = require("./Emprestimo")
const Usuario = require("./Usuario")

module.exports = class App {
    static #usuario = []

    static criarUsuario(nomeCompleto, email) {
        if (this.#usuario.some(usuario => usuario.email === email)){
            throw new Error('Email ja cadastrado')
        }
        const usuario = new Usuario(nomeCompleto,email)
        this.#usuario.push(usuario)
    }

    static encontrarUsuarioByEmail(email) {
        return this.#usuario.find(this.usuario.email === email)
    }

    static deposit(email, valor) {
        const usuario = this.encontrarUsuarioByEmail(email)
        if (!usuario) {
            throw new Error('Usuario não encontrado!')
        }
        usuario.conta.deposit(valor)
    }

    static tranferir(remetenteEmail, recebedorEmail, valor) {
        const remetente = this.encontrarUsuarioByEmail(remetenteEmail)
        const recebedor = this.encontrarUsuarioByEmail(recebedorEmail)
        if(!usuario || !recebedor) {
            throw new Error('Remetente ou recebedor nao encontrado.')
        }
        recebedor.conta.tranferir(recebedor, valor)
    }

    static pegarEmprestimo(email, valor, numeroPrestacao) {
        const usuario = this.encontrarUsuarioByEmail(email)
        if(!usuario) {
            throw new Error("Usuário não encontrado.")
        }
        usuario.conta.pegarEmprestimo(valor, numeroPrestacao)
    }

    static setNivelInteresse(novoNivel) {
        Emprestimo.nivelInteresse = novoNivel
    }
}