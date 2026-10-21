// Validar correos electrónicos
import validator from "validator";

const correo = "aranza@gmail.com";

const resultado = validator.isEmail(correo);

console.log(resultado); //Output: true