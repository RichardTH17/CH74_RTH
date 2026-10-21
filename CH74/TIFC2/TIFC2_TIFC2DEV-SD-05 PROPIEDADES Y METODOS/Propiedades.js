//Importan bibliotecas
let cadena = "Hola, Cohorte 74!!";

console.log("Propiedades: \n");
console.log(cadena);
console.log(cadena.length);

//Métodos: Función asociada a un objeto
console.log("\nMétodos para cadenas: \n")
console.log(cadena.toLocaleUpperCase());
console.log(cadena.toLowerCase())
console.log(cadena.substring(6,13));
console.log(cadena.split(" "));
console.log(cadena.includes("roble"));
console.log(cadena.replace("74","75"));

//Método constructor 
//Definir propiedades de un objeto

let persona = {
    nombre: "Beto",
    edad: 80,
    ciudad: "Coahuila"
}

console.log("Propiedades: Acceso \n");
console.log(persona.nombre);
//Agregar una nueva propiedad
persona.profesion = "Carnicero";
console.log(persona);

console.log("Ejemplos con Math\n");
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(4.4));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.2));
console.log(Math.max(1,5,7));
console.log(Math.min(1,5,7));
