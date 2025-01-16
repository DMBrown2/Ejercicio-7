// 1. Dado un array de números [10, 20, 30, 40, 50, 60], crea un programa que calcule e imprima el promedio de los números en el array. 

const array = [10, 20, 30, 40, 50, 60]
let promedio = 0

for (const num of array) {
    promedio += num / array.length

}

console.log(promedio)