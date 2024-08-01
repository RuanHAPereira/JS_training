const primeiroNome = prompt("Informe o primeiro nome:")
const sobrenome = prompt("Informe o sobrenome:")
const campoDeEstudo = prompt("Informe o campo de estudo:")
const anoDeNascimento = prompt("Ano de nascimento:")

alert(
    "Usuário cadastrado com sucesso!!\n" +
    "\nNome completo: " + primeiroNome + "" + sobrenome +
    "\nCampo de estudo:" + campoDeEstudo +
    "\nIdade:" + (2024 - anoDeNascimento)
)