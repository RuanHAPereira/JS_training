class Carteira {
    #quantidade 
    #usuario
    constructor() {
        this.#quantidade = 100.99 * 100
    }

    get quantidade () {
        return this.#quantidade / 100
    }

    set usuario(novoUsuario) {
        if (typeof novoUsuario === 'string') {
            this.#usuario = novoUsuario
        } else {
            console.log("Nome de usuario precisa ser uma string.")
        }
        
    }

    get usuario() {
        return this.#usuario
    }
}

const minhaCarteira = new Carteira()

console.log(minhaCarteira.quantidade)

minhaCarteira.usuario = "Ruan"

console.log(minhaCarteira.usuario)