const veiculo1 = prompt("Infome o nome do primeiro veículo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veiculo"))

const veiculo2 = prompt("Infome o nome do segundo veículo:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veiculo"))

if (veiculo1 > veiculo2) {
    alert(veiculo1 + " é mais rápido que o " + veiculo2)
} else if (veiculo2 > veiculo1) {
    alert(veiculo2 + " é mais rápido que o " + veiculo1)
} else {
    alert("Ambos tem a mesma velocidade.")
}