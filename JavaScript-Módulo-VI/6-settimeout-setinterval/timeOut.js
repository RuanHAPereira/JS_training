console.log("Programa iniciado!")

const timeOut = setTimeout(() => {
    console.log('3 segundos se passaram desde que o programado iniciou.')
}, 1000 * 3)

clearTimeout(timeOut)