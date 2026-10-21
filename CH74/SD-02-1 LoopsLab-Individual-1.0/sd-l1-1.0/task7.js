// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];

  
  for (let i = 0; i < buzzWords.length ; i++) {
    if(i%2==0){
      console.log(i);
    }
    else{
    buzzWords[i] = "Impar";
    console.log(buzzWords[i]);
    }
  };