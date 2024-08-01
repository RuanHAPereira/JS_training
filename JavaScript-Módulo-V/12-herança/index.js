class Propriedade {
    constructor(area, preco) {
        this.area = area
        this.preco = preco
    }

    metroQuadrado() {
        return this.preco/ this.area
    }
}

class Casa extends Propriedade {}

const terreno = new Propriedade(250, 70000)
const casarao = new Casa(180, 300000)

console.log(terreno)
console.log(casarao)
console.log(casarao instanceof Propriedade)

class Apartamento extends Propriedade {
    constructor(numero, area, preco) {
        //this.area = area -> da erro
        super(area,preco)
        this.numero = numero
    }

    piso() {
        return this.numero.slice(0, -2)
    }
}

const apto = new Apartamento("101B", 47, 145000 )

console.log(apto)
console.log(apto.metroQuadrado())
console.log(apto.piso())