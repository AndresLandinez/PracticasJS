/**Ejercicio 3: Calculadora de edad
Pide al usuario su edad y el algoritmo debe responder si es mayor de edad o menor de edad */

let age = prompt("\nIngrese su edad: ")
age = parseInt(age)
if ( isNaN(age)) {
    alert(" Ingrese una edad válida.!")
} else{
    if ( age >= 18 ) {
        alert(" Usted es mayor de edad!")
    } else {
        alert(" Usted es menor de edad!")
    }
}