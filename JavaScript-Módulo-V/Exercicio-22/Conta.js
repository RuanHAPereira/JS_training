const Deposito = require("./Deposito")
const Transferencia = require("./Transferencia")
const Emprestimo = require("./Emprestimo")

module.exports = class Conta {
    #balanco = 0

    constructor(proprietario) {
        this.proprietario = proprietario
        this.depositos = []
        this.emprestimos = []
        this.transferencias = []
    }

    get balanco() {
        return this.#balanco
    }

    deposito(valor) {
        const deposito = new Deposito(valor)
        this.#balanco += valor
        this.deposito.push(deposito)
    }

    pegarEmprestimo(valor, numeroPrestacao) {
        const emprestimo = new Emprestimo(valor, numeroPrestacao)
        this.#balanco += valor
        this.emprestimos.push(emprestimo)
    }

    tranferir(recebedor,valor) {
        if(this.proprietario === recebedor) {
            this.#balanco += valor
        } else {
            this.#balanco -= valor
        }

        const transferencia = new Transferencia(this.proprietario, recebedor, valor)
        this.transferencias.push(transferencia)
    }
}