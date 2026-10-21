//Pide la entrada al usuario para hacer operaciones
const prompt = require('prompt-sync')();

//Letrero de como inciar una calculadora
console.log("CALCULADORA BASICA\n");

const name = prompt("Ingresa tu nombre: ");

console.log(`Bienvendido ${name}`);
//Solicitamos entradas, números

var numero1 = parseFloat(prompt("Ingresa el primer numero: "));
var numero2 = parseFloat(prompt("Ingresa el segundo numero: "));

//Realizamos los resultados
console.log("\nRESULTADOS ");
var resultado = console.log(`El resultado de la suma es: ${numero1+numero2}`)
console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
let resta = numero1 - numero2;
console.log(`El resultado de la resta es: ${resta}`);
//biblioteca Math
console.log(`${numero1} ^ ${numero2} = ${Math.pow(numero1, numero2)}`)
