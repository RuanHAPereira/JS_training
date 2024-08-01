class Conta {
    #senha
    #saldo = 8000
    constructor(usuario) {
        this.email = usuario.email
        this.#senha = usuario.senha
    }

    acessarSaldo(email, senha) {
        if (this.#autenticar(email, senha)) {
            return this.#saldo
        } else {
            return null 
        }
    }

    #autenticar(email, senha)  {
        return this.email === email && this.#senha === senha
    }

}

const usuario = {
    email: "ruan94pereira@gmail.com",
    senha: "123456"
}

const minhaConta = new Conta(usuario)

console.log(minhaConta)
console.log(minhaConta.acessarSaldo("ruan94pereira@gmail.com", "123456"))