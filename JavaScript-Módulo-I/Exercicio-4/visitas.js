const turista = prompt("Qual seu nome, turista?")
let cidades = ""
let contador = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contador++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)") 
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contador +
    "\nCidades visitadas:\n" + cidades
  )