class Livro {
    constructor(titulo) {
        this.titulo = titulo
        this.publicado = false
        
    }

    publicar() {
        this.publicado = true
    }
}

const eragon = new Livro("Eragon")
const eldest = new Livro("Eldest")

eldest.publicar()

console.log(eragon)
console.log(eldest)

console.log([eldest, eragon] instanceof Array)