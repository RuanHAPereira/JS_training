module.exports = class Transferencia {
    constructor(remetente, recebedor, valor) {
        this.remetente = remetente
        this.recebedor = recebedor
        this.valor = valor
        this.data = new Date()
    }
}