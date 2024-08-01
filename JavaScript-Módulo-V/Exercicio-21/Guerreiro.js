const Char = require('./Char')

module.exports = class Guerreiro extends Char {
    constructor(nome, vida, ataque, defesa, escudo) {   
        super(nome, vida, ataque, defesa)
        this.escudo = escudo
        this.postura = 'atacando'
    }

    atacar(alvo) {
        if (this.postura === 'atacando') {
            super.ataque(alvo)
        }
    }

    mudarPostura() {
        if (this.postura === 'atacando') {
            this.postura = 'defendendo'
            this.defesa += this.escudo
        } else {
            this.postura = 'atacando'
            this.defesa -= this.escudo
        }
    }
}
