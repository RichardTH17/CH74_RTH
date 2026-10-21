// Uso de funciones (métodos) propios de JS
console.log("PUSH");
let frutas = ["mango","manzana roja", "tuna", "kiwi"];
console.log(frutas);
frutas.push("Sandía");
console.log(frutas);
console.log("\n POP");
frutas.pop();
console.log(frutas);

console.log("\n SPLICE");
frutas.splice(1, 2, "uva");
//En la posición uno reemplaza manzana roja por uva y elimina todos los elementos hasta el indice indicado
console.log(frutas);

let numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.splice(1,4,3);
console.log(numeros);