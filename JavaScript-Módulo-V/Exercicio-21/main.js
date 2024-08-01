const Ladino = require ("./Ladino.js")
const Mago = require ("./Mago.js")
const Guerreiro = require ("./Guerreiro.js")

const ladino = new Ladino('Ladino', 100, 20, 10)
const mago =  new Mago('Mago', 70, 10, 5, 30)
const guerreiro = new Guerreiro('Guerreiro', 120, 15, 25, 15)

console.table({ ladino, mago, guerreiro})

guerreiro.mudarPostura()
ladino.atacar(guerreiro)

console.table({ ladino, mago, guerreiro})
