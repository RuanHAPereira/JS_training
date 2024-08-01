class Endereco {
    constructor(rua, numero, bairro, cidade, uf) {
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.uf = uf
    }

    enderecoCompleto() {
        return `Rua ${this.rua}, nº ${this.numero}, ${this.bairro}, ${this.cidade}, ${this.uf}`
    }
}

module.exports = Endereco