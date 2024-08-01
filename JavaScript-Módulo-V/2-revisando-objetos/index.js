const livro = {
    titulo: "Eragon",
    paginas: 468,
    publicado: true,
    estoque: 20,
    tag: ["fantasia","aventura", "medieval"],
    autor:{
        nome: "Christopher Paolini"
    },

    addEstoque(quantidade) {
        this.estoque += quantidade
    },
    save: function () {
        //salva o livro no banco de dados
    }
}

console.log(livro)