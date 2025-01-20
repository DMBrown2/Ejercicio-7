// 9. Dado un array de números [8, 15, 23, 42, 16, 4, 10, 7, 19], escribe un programa que recorra el array y sume solo los elementos que están en posiciones pares (índices 0, 2, 4, etc.). 

//Recorrer el array para encontrar los elementos en posiciones pares.

const numeros = [8, 15, 23, 42, 16, 4, 10, 7, 19]
let indicesPares = []

numeros.forEach((num, idx) => {

    if(idx % 2 === 0) {
        indicesPares.push(num)
    }

})

// console.log(indicesPares)


//Sumar los elementos que se encuentran en esas posiciones.

let total = 0
indicesPares.forEach((num) => {
    total += num
})

console.log(total)

