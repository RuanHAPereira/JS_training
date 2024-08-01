function areaTriangulo(){
    const base = parseFloat(prompt("Digite a base do triangulo: "))
    const altura = parseFloat(prompt("Digite a altura do triangulo:"))

    return (base * altura)/2
}

function areaRetangulo(){
    const base = parseFloat(prompt("Digite a base do retangulo:"))
    const altura = parseFloat(prompt("Digite a altura do retangulo:"))

    return base*altura
}

function quadrado(){
    const lado = parseFloat(prompt("Informe o lado do quadrado:"))

    return lado*lado
}

function trapezio(){
    const baseMaior = parseFloat(prompt("Informe a base maior:"))
    const baseMenor = parseFloat(prompt("Informe a base menor:"))
    const altura = parseFloat(prompt("Informe a altura:"))

    return (baseMaior+baseMenor)*altura/2
}

function circulo(){
    const raio = parseFloat(prompt("Informe o raio do circulo:"))
    const pi = 3.14

    return pi*raio*raio
}

function menu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triangulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n" 
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = menu()
        let resultado 

        switch (opcao) {
            case "1":
                resultado = areaTriangulo()
                break
            case "2":
                resultado = areaRetangulo()
                break
            case "3":
                resultado = areaQuadrada()
                break
            case "4":
                resultado = trapezio()
                break
            case "5":
                resultado = circulo()
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
                break    
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }
    
    } while (opcao !== "6");
}

executar()