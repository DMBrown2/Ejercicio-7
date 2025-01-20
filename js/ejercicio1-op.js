// 1. Genera un número aleatorio entre 1 y 50. Permite al usuario adivinar hasta 5 veces. Si falla, dale una pista: “Más alto” o “Más bajo”. Si adivina, felicítalo; si no, imprime el número al final. 

function adivinaElNumero() {

const numeroAleatorio = Math.floor(Math.random() * 50) + 1
console.log(numeroAleatorio)    

let intentos = 5

alert("¡Bienvenido al juego de adivinar el número! Intenta adivinar un número entre 1 y 50.")


while (intentos > 0) {
        let respuestaUsuario = parseInt(prompt(`Te quedan ${intentos} intentos. Ingresa tu respuesta:`))

        if(isNaN(respuestaUsuario) || respuestaUsuario > 50 || respuestaUsuario < 1) {
       alert(`El número ingresado no es válido. Por favor, ingresa un número entre 1 y 50.`)
            continue
        } 

        if(respuestaUsuario === numeroAleatorio) {
            alert(`Felicidades! Adivinaste el número!`) 
            break
        } else if(respuestaUsuario > numeroAleatorio) {
            alert(`El número es más bajo que ${respuestaUsuario}.`)
        } else {
            alert(`El número es más alto que ${respuestaUsuario}.`)
         }

         intentos--
         
         if(intentos === 0) {
            alert(`No adivinaste el número. El número era ${numeroAleatorio}`)
         }
        }
    }

    adivinaElNumero()