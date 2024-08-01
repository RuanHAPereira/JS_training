const Endereco = require("./Endereco");
const Pessoa = require("./Pessoa");

const cep = new Endereco("Rua Ari Jorge Fonceca", 200, "Vila Orlandelia", "Barra Mansa", "RJ")
const user1 = new Pessoa("Ruan", cep)

console.log(user1)
console.log(user1.endereco.enderecoCompleto())