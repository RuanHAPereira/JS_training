module.exports = class Prestacao {
    constructor(valor, numero) {
        this.valor = valor
        this.numero = numero
        this.status = "pendente"
    }

    marcarComoPago() {
        this.status = "pago"
    }
}