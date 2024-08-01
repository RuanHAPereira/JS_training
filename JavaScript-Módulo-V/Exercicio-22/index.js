const App = require("./App")
const Emprestimo = require("./Emprestimo")

App.criarUsuario('John Doe', 'john@exemple.com')
App.criarUsuario('Jane Smith', 'jane@exemple.com')

App.deposit('john@exemple.com', 1000)

App.tranferir('john@exemple.com', 'jane@exemple.com', 200)

App.pegarEmprestimo('jane@exemple.com', 5000, 12)

console.table(App.encontrarUsuarioByEmail('john@exemple.com').conta)
console.table(App.encontrarUsuarioByEmail('jane@exemple.com').conta)

App.setNivelInteresse(0.06)
console.table(App.encontrarUsuarioByEmail('jane@exemple.com').conta.emprestimos[0].prestacoes)
console.table(Emprestimo.nivelInteresse)