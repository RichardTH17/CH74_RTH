//If

//If anidado
let loHizo = true;
let conducta = true;
if(loHizo){
    if(conducta){
        console.log("Vamos al parque")
    } else {
        console.log("Chanclazo");
    }
} else {
    console.log("Castigado");
}

//Ejemplo de IF con operadores lógicos
let usuario = "admin";
let password = "1234";
if(usuario === "admin" && password === "1234"){
    console.log("Acceso correcto");
} else{
    console.log("Acceso Denegado");
}

//Contador básico con while
let contador = 1;
while(contador <= 20){
    console.log(contador);
    contador++;
}

let suma = 0;
let numero = 1
while(suma <= 20){
    suma += numero;
    console.log(`Sumando ${numero}, total acumulado ${suma}`)
    numero++
}
console.log(`Suma final: ${suma}`)

//Usando for
for(let i = 1; i <= 5 ; i++){
    console.log(`Iteración ${i}`);
}

console.log(`\nTabla del 8: `)
for(let i = 1; i<=10; i++){
        console.log(`8 X ${i} = ${8 * i}`);
}



