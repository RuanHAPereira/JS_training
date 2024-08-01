module.exports = class Char {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacar(alvo) {
        alvo.vida -= this.ataque - alvo.defesa
    }
}

