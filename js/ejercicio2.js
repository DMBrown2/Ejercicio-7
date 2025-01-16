// 2. Dado un array de palabras, crea un programa que devuelva un nuevo array con palabras que tengan más de 5 letras. Por ejemplo: ["casa", "programación", "sol", "javascript", “texto”, “html”, “bootstrap”, “css”, “nodejs”] debería devolver ["programación", "javascript"]. 

const array1 = ["casa", "programación", "sol", "javascript", "texto", "html", "bootstrap", "css", "nodejs"]
const array2 = []

//Recorrer el array original:

for (const palabra of array1) {
    
    if (palabra.length > 5) {

//Crear un nuevo array con palabra.
    array2.push(palabra)
    }
}

console.log(array2)

