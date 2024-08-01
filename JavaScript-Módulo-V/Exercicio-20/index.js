import { Componente } from "./Componente.js";
import { Formulario } from "./Formulario.js";
import { Label } from "./Label.js";
import { Input } from "./inputs.js";

const titulo = new Componente('h1', 'body', { innerText: 'Olá, mundo!'})
console.log(titulo)
titulo.renderizar()

titulo.tag = 'h3'

titulo.build().renderizar()

const form = new Formulario('body')
const label = new Label('Nome: ', form, { htmlFor: 'nameInput'})
const input = new Input(form, { id: 'nameInput', name: 'name'})

form.renderizar()
label.renderizar()

form.addChildren(input)

form.addChildren(
    new Componente('br'),
    new Componente('br'),
    new Label('Data de nascimento: ', form, { htmlFor: 'birthdayInput'}),
    new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date'})
)