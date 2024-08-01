import { Componente } from "./Componente.js";

export class Label extends Componente {
    constructor(texto, parent, opcoes) {
        super('label', parent, Object.assign({} , opcoes, {textContent: texto}))
    }
}