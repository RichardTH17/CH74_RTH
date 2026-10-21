const prompt = require('prompt-sync')();

var n = parseFloat(prompt("Ingresa número: "));
var arreglo = [];

for (let i = 1; i <= n; i++) {
  if(i%3==0 && i%5==0){
      if(i%7==0){
        console.log("FizzBuzzWoof")
        arreglo.push(i);
      }
      else{
      console.log("FizzBuzz");
      arreglo.push(i);
      }
  }
  else{
    if(i%3==0){
      if(i%7==0){
        console.log("FizzWoof")
        arreglo.push("FizzWoof");
      }
      else{
      console.log("Fizz");
      arreglo.push("Fizz");
      } 
    }
    else if(i%5==0){
      if(i%7==0){
        console.log("BuzzWoof")
        arreglo.push("BuzzWoof");
      }
      else{
      console.log("Buzz");
      arreglo.push("Buzz");
      }
    }
    else if(i%7==0){
      console.log("Woof");
      arreglo.push("Woof");
    }
    else{
      console.log(`${i}`);
      arreglo.push(i);
    }
  }
}

console.log(arreglo);