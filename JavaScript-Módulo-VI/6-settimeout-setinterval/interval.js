console.log("Iniciando programa!")

let seconds = 0
const intervaloID = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds}.`)
    if (seconds > 10) {
        clearInterval(intervaloID)
        console.log("Tempo esgotado! Encerrando...")
    }
}, 1000 * 3)