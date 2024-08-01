const nave = {
    nome: 'X-Wing',
    velocidade: 0
}

function acelerar(nave: { nome: string; velocidade: number }, velocidade: number) {
    nave.velocidade = velocidade
}

acelerar(nave, 50)