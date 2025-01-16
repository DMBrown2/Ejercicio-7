// 6. Escribe un programa que solicite al usuario un número que represente grados Celsius y conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32. 

const gradosCelsius = +prompt('Ingrese los grados Celsius') 

const gradosFahrenheit = (gradosCelsius * 9/5) + 32

alert(`Los grados Fahrenheit son: ${gradosFahrenheit}`)
