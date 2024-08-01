const Char = require('./Char')

module.exports = class Mago extends Char {
    constructor(nome, vida, ataque, defesa, magia) {
        super(nome, vida, ataque, defesa)
        this.magia = magia
    }

    atacar(alvo) {
        alvo.vida -= (this.ataque + this.magia) - alvo.defesa
    }

    heal(alvo) {
        alvo.vida += this.magia * 2
    }
}
