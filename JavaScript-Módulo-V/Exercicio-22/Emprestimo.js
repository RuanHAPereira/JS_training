const Prestacao = require("./Prestacao")

module.exports = class Emprestimo {
    static #nivelInteresse = 0.05

    static get nivelInteresse() {
        return this.#nivelInteresse
    }

    static set nivelInteresse(novoNivel) {
        this.#nivelInteresse = novoNivel
    }

    constructor(valor, numeroPrestacao) {
        this.valor = valor
        this.data = new Date()
        this.prestacao = this.calcultarPrestacao(valor, numeroPrestacao)
    }

    calcultarPrestacao(valor, numeroPrestacao) {
        const nivelInteresseMes = Emprestimo.#nivelInteresse / 12
        const valorPrestacao = (valor * (1 + nivelInteresseMes)) / numeroPrestacao
        let prestacoes = []
        for (let i = 1; i <= numeroPrestacao; i++) {
            prestacoes.push(new Prestacao(valorPrestacao, i))
        }
        return prestacoes
    }
}