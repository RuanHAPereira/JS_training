class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    login(email, senha) {
        if (this.email === email && this.senha === senha) {
            console.log("Login bem-sucedido!")
        } else {
            console.log("Email ou senha incorretos.")
        }
    }
}

const user1 = new Usuario ("Ruan Henrique","ruan94pereira", 123456)

console.log(user1)

user1.login("ruan94pereira",123456)
user1.login("ruan94pereira", 987644)
user1.login("uashuahs", 123456)