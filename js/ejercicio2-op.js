// 2. Crea un programa que permita jugar al usuario "Piedra, Papel o Tijera" contra la computadora. La computadora debe elegir una opción aleatoria y el programa debe indicar quién ganó. 

alert("¡Bienvenido al juego de piedra, papel o tijera!")
let opciones = ["piedra", "papel", "tijera"]
let eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)]
console.log(eleccionComputadora)

let eleccionUsuario = prompt("Ingresa tu elección: piedra, papel o tijera.")
eleccionUsuario = eleccionUsuario.toLowerCase()

function jugar() {
    if (eleccionUsuario !== "piedra" && eleccionUsuario !== "papel" && eleccionUsuario !== "tijera") {
        return alert("Por favor, ingresa una opción válida.")
    }

    if (eleccionUsuario === eleccionComputadora) {
        return alert("Es un empate!")

    } else if ((eleccionUsuario === "piedra" && eleccionComputadora === "tijera") || (eleccionUsuario === "papel" && eleccionComputadora === "piedra") || (eleccionUsuario === "tijera" && eleccionComputadora === "papel")) {
        return alert("Felicitaciones, ganaste!")
        
    } else {
        return alert("Lo siento, perdiste!")
    }
}

jugar(eleccionUsuario, eleccionComputadora)