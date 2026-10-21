//Formas de declarar variables
var nombre; //Declaración (gloabal/function scope)
let edad; //Declaración (block scope) -> Cambiará su valor más adelante
const PI = 3.1416; //Declaración + asignación (variable constante)

//Asignación de valores
nombre = "Ricardo Teneyuque"; //Asignación a variable declarada
edad = 27;

//Declaración + asignación de forma directa
var pais = "México";
let ciudad = "Monterrey";
const GRAVEDAD = 9.8;

//Multiples declaraciones
let a = 5, b = 3, c= 21;

//Reasignación solo se puede con let y var
let calificacion = 10;
calificación = 8;

console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}`);

