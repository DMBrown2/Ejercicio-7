// 5. Dado un array de números [15, 42, 3, 18, 90, 67, 29], escribe un programa que encuentre e imprima el segundo número más grande del array. 

const numeros = [15, 42, 3, 18, 90, 67, 29]

    //Ordenar los numeros de mayor a menor.
    numeros.sort((a, b) => b - a)
    console.log(numeros)
    //Encontrar el de la segunda posición.
    let segundoNumero = numeros[1]
    console.log(segundoNumero)
