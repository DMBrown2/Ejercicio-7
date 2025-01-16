// 3. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (hay que decir todos por los que es divisible) 

//Pedir el numero
const numero = +prompt("Ingrese un numero")

// Definir el array con valores a devidir.
const array = [2, 3, 5, 7]

//Iterar el array
for(num of array) {

    //Dividir el numero por 2, 3, 5 y 7
    if(numero % num === 0) {
    //Si el resultado es 0, decir que es divisible por ese numero. 
        console.log(`El numero ${numero} es divisible por ${num}`)
    }
}
    





 

