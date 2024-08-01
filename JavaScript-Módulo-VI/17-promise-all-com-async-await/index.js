function esperarPor(segundos) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve()
        }, segundos * 1000)
    })
}

const numeros = [4, 5, 9, 13, 77]

const quadrados = numeros.map(async(numero) => {
    await esperarPor(2)
    return numero * numero
})

console.log(quadrados)

async function executar() {
    console.time('map')

    const quadrados = await Promise.all(numbers.map(async (numero) => {
        await esperarPor(2)
        return numero * numero
    }))

    console.log(quadrados)

    console.timeEnd('map')
}

executar()