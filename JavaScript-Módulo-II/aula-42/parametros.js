function dobro(x){
    alert("O dobro de " + x + " é " + (x*2))
}

dobro(5)

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

dizerOla("Ruan")
dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

soma(7,6)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome,
        email,
        senha,
        tipo

    }
    console.log(usuario)
}

criarUsuario("Ruan", "ruan94@", 1234)

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
function parametrosDoJeitoCerto(usuario) {
    // ...
}
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)