// 4. Solicita al usuario un número entero y calcula la multiplicación de todos los números desde 1 hasta ese número. 

const numero = +prompt('Ingrese un numero entero')
let resultado = 1
let i = 1


while(i <= numero) {
    resultado = i * numero
    i++
    console.log(resultado)
}



