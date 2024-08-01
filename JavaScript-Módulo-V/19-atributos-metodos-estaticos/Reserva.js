class Reserva {
    constructor(convidados, quartos, dias) {
        this.convidados = convidados
        this.quartos = quartos
        this.dias = dias
        this.total = dias * Reserva.taxaBase 
    }

    static taxaBase = 150

    static mostraTaxaBase() {
        console.log(`Taxa base é ${Reserva.taxaBase}`)
    }

    static get taxaPremium() {
        return Reserva.taxaBase * 1.5
    }
}

Reserva.mostraTaxaBase()

const reserva1 = new Reserva(3, "201", 5)
console.log(reserva1)

const reserva2 = new Reserva(2, "104", 2)
console.log(reserva2)

console.log(`A taxa premius é ${Reserva.taxaPremium}`)