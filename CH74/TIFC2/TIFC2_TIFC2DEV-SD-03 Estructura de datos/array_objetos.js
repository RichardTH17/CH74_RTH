// //Ejemplo de arrays y objetos en JS
// console.log("Array en JS");

// let frutas = ["mango", "manzana roja", "tuna", "uva", "fresa", "kiwi"];
// console.log(frutas)

// console.log("Sexta fruta");
// console.log(frutas[5]);


// console.log("Objetos en JS")
// let persona = {
//     nombre: "Ricardo",
//     edad: 27,
//     ciudad: "MTY",
//     país: "México",
//     direccion: {
//         estado: "CDMX",
//         municipio: "Polanco",
//         codigoPostal: 11510
//     }
// }

// console.log(persona);
// console.log(`La ciudad de la persona es:\n${persona.ciudad}`);
// console.log(persona.direccion);
// console.log(persona.direccion.codigoPostal);

// OBJETOS CON ARRAYS

// console.log("OBJETOS CON ARRAYS EN JS");

// let persona1 = {
//     nombre: "Ricardo",
//     apellido: "Teneyuque",
//     ciudad: "Monterrey",
//     cant_mascotas: 2,
//     contacto: [
//         "ricardo.teneyuque@gmail.com",
//         "123456789"
//     ]
// };
// console.log(persona1);
// console.log("Primer medio de contacto");
// console.log(persona1.contacto[0]);

console.log("ARRAY CON OBJETOS");

let estudiantes = [
    {nombre: "Ricardo", edad:20},
    {nombre: "María Fernanda", edad:20},
    {nombre: "Isaí", edad:21},
    {nombre: "Tere", edad:22},
];

console.log(estudiantes);
console.log(estudiantes[0]);
console.log(estudiantes[1].nombre);