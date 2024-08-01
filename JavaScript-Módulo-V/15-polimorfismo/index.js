class Veiculo {
    move() {
        console.log('O veículo está se movendo.')
    }
}

class Carro extends Veiculo {
    move() {
        console.log('O carro está se movendo.')
    }
}

class Barco extends Veiculo {
    move() {
        console.log('O barco está navegando.')
    }
}

class Aviao extends Veiculo {
    move(velocidade) {
        console.log(`O avião esta voando a ${velocidade} km/h`)
    }
}

const palio = new Carro()
const perolaNegra = new Barco()
const jatinho = new Aviao()

palio.move()
perolaNegra.move()
jatinho.move(80)

function start(veiculo) {
    console.log('Iniciando um veículo...')
    veiculo.move()
}

start(palio)
start(perolaNegra)
start(jatinho)