const process = require('process');

function Mail(subject, message) {
    this.subject = subject;
    this.message = message;
  }
  
  // Type your code below this line!
  
  const newMail = new Mail(process.argv[3], process.argv[4]);
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message);

