import { Componente } from "./Componente.js";

export class Formulario extends Componente{
    constructor(parent, opcoes) {
        super('form', parent, opcoes)
    }

    addChildren(...children) {
        children.forEach(child => {
            this.getElement().appendChild(child.getElement())
        })
    }
}