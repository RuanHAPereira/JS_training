const Autor = require("./Autor")

const usuarioX = new Autor("John Doe")

const post = usuarioX.criarPost("Titulo do Post", "Sou demais!!")

post.addComentario("Ruan", "voce é fera!")
post.addComentario("Jão", "Achei demais!")

console.log(usuarioX)
console.log(post)
