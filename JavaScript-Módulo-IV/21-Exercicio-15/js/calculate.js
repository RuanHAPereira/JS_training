export default function calculate() {
    const resultInput = document.querySelector('#result')
    resultInput.value = "Erro nos parametros"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}