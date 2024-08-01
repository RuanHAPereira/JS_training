async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

//async function executar() {
//    asyncSum(50, 33).then(result => {
//        console.log(result)
//    })
//}


async function executar() {
    const result = await asyncSum(50,33)
    console.log(result)
}
executar()