// Type your code below this line!

const process = require('process');

class List_Number {
    constructor(){
        this.lista = [];
    }
}

const ListaAmigos = new List_Number();
var n = parseInt(process.argv[3]);

for(let i=1; i<n; i++){
    ListaAmigos.lista.push(process.argv[4+i]);
}
console.log(ListaAmigos.lista);

// Type your code above this line!

