let valorMetro = parseFloat(prompt("Digite o valor a ser convertido."))

let opcao = parseFloat(prompt("Digite a opção referente a unidade de medida.\n1-milímetro (mm)\n2-centímetro (cm)\n3-decímetro (dm)\n4-decâmetro (dam)\n5-hectômetro (hm)\n6-quilômetro (km)"))
let resultado

switch (opcao){
    case 1:
        resultado = valorMetro * 1000
        alert("Resultado: " + resultado + " mm")
        break
    case 2: 
        resultado = valorMetro * 100
        alert("Resultado: " + resultado + " cm")
        break
    case 3:
        resultado = valorMetro * 10
        alert("Resultado: " + resultado + " dm")
        break
    case 4:
        resultado = valorMetro / 10
        alert("Resultado: " + resultado + " dam")
        break
    case 5:
        resultado = valorMetro / 100
        alert("Resultado: " + resultado + " hm")
        break
    case 6:
        resultado = valorMetro / 1000
        alert("Resultado: " + resultado + " km")
        break   
    default:
        alert("Opção inválida.")
}