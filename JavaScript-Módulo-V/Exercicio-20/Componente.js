export class Componente {
    #element = null

    constructor(tag, parent, opcoes) {
        this.tag = tag
        this.parent = parent
        this.opcoes = opcoes
        this.build()
    }

    //metodo para somente leitura do #element
    //nao pode ser modificado
    getElement() {
        return this.#element
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.opcoes)
        return this
    }

    renderizar() {
        if (this.parent instanceof Componente) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}

