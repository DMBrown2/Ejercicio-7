// 8. Dado un array de números [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6], escribe un programa que cree un nuevo array solo con los números positivos y lo imprima.

const array1 = [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6]
const array2 = []

for(num of array1) {
    if(num > 0) {
        array2.push(num)
    }
}

console.log(array2)

