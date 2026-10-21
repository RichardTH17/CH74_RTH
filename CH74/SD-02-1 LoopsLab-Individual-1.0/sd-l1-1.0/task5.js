const prompt = require('prompt-sync')();

var n = parseFloat(prompt("Ingresa número: "));

for (let i = 1; i <= n; i++) {
  if(i%3==0 && i%5==0){
      if(i%7==0){
        console.log("FizzBuzzWoof")
      }
      else{
      console.log("FizzBuzz");
      }
  }
  else{
    if(i%3==0){
      if(i%7==0){
        console.log("FizzWoof")
      }
      else{
      console.log("Fizz");
      } 
    }
    else if(i%5==0){
      if(i%7==0){
        console.log("BuzzWoof")
      }
      else{
      console.log("Buzz");
      }
    }
    else if(i%7==0){
      console.log("Woof")
    }
    else{
      console.log(`${i}`);
    }
  }
}