function Livro(titulo,paginas,tags,autor) {
    this.titulo = titulo
    this.paginas = paginas
    this.tags = tags
    this.autor = autor
    this.publicado = false
    this.estoque = 0
    this.addEstoque = function addEstoque(quantidade) {
        this.estoque += quantidade
    }
    this.save = function () {
        //salva o livro no banco de dados
    }
}

const autor = { nome: "Christopher Paolini"}
const tags = ["fantasia", "aventura", "medieval"]
const eragon = new Livro("Eragon", 468, tags, autor)

eragon.addEstoque(20)

const eldest = new Livro("Eldest", 644, tags, autor)

const ficao = new Livro("Jornada do Além", 350, tags, autor)

console.log(eragon)
console.log(eldest)
console.log(ficao)