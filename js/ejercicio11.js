// 11. Crea un programa que solicite la fecha de nacimiento del usuario (en formato YYYY-MM-DD) y calcule su edad en días. 

const fechaActual = new Date() 

// console.log(fechaActual)

const fechaNacimiento = prompt("Ingrese su fecha de nacimiento en formato YYYY-MM-DD")
const fechaNacimientoDate = new Date(fechaNacimiento)
console.log(fechaNacimientoDate) // Muestra la fecha en objeto Date. Da un día antes de lo que yo puse como fecha de nacimiento.

const diferencia = fechaActual - fechaNacimientoDate

console.log(diferencia) // Valor en milisegundos.

const dias = diferencia / (1000 * 60 * 60  * 24) //Convierte los milisegundos a días.

console.log(dias) // 1 día menos de lo que debería ser.

