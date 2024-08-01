const Char = require('./Char.js')

module.exports = class Ladino extends Char {
    atacar(alvo) {
        alvo.vida -= (this.ataque - alvo.defesa) *2 
    }
}
