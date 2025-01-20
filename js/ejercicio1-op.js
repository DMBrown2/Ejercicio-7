// 1. Genera un número aleatorio entre 1 y 50. Permite al usuario adivinar hasta 5 veces. Si falla, dale una pista: “Más alto” o “Más bajo”. Si adivina, felicítalo; si no, imprime el número al final. 

function adivinaElNumero() {

const numeroAleatorio = Math.floor(Math.random() * 50) + 1
console.log(numeroAleatorio)    

let intentos = 5

alert(`Adiviná el número entre 1 y 50. Tenes 5 intentos.`)
let numeroIngresado

    while(intentos > 0) {

        numeroIngresado = parseInt(prompt(`Ingresá un número.`))

        if(isNaN(numeroIngresado) || numeroIngresado > 50 || numeroIngresado < 1) {
            parseInt(prompt(`El número ingresado no es válido. Ingresá un número entre 1 y 50.`))
            continue
        } 

        if(numeroIngresado === numeroAleatorio) {
            alert(`Felicidades! Adivinaste el número!`) 
            break
        } 
        
        else if(numeroIngresado > numeroAleatorio) {
            parseInt(prompt(`El número que ingresaste es más alto, ingresá uno más bajo. Te quedan ${intentos} intentos.`))
        } 
        
        else {
            parseInt(prompt(`El número que ingresaste es más bajo, ingresá uno más alto. Te quedan ${intentos} intentos.`))
         }

         intentos--
         
         if(intentos === 0) {
            alert(`No adivinaste el número. El número era ${numeroAleatorio}`)
         }
        }
    }

    adivinaElNumero()