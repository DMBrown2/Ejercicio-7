// 10. Dado un array con elementos repetidos [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4], crea un programa que devuelva un nuevo array sin duplicados.

const arrayRepetido = [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1, 5, 8, 7, 4]

//#Identificar los elementos iguales del array y descartarlos.

const arraySinRepetir = []

//Recorrer el array y comparar cada elemento con los demás elementos.
for (let i = 0; i < arrayRepetido.length; i++) {
    // console.log(arrayRepetido[i])
    // console.log(arrayRepetido.indexOf(arrayRepetido[i]))

//Si el elemento se repite, descartarlo. Si el elemento no se repite, agregarlo a un nuevo array.
    if (arrayRepetido.indexOf(arrayRepetido[i]) === i) {
        arraySinRepetir.push(arrayRepetido[i])
    }
}

console.log(arraySinRepetir)



