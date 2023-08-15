/**Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, 
el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18 */

const user = prompt("Ingrese su nombre: ")
let age = prompt("Ingrese su edad: ")
let country = prompt("Ingrese su pais de residencia:")
let city = prompt("Ingrese su ciudad de residencia:")
age = parseInt(age)
country = country.toLowerCase()
city = city.toLowerCase()

if ( age >= 18 && country == "canada" && city == "toronto" ) {
    alert("Bienvenido " +user+ "\nEres benficiario de la BECA!")
} else {
    alert("Estimado " +user+ " Lamentamos informarle que no eres beneficiario de la BECA =(")
}