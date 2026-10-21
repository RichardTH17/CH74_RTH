// Type your code below this line!
const process = require('process');

class Journey {
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
}


// Type your code above this line!

const travel = new Journey(process.argv[3], process.argv[4]);

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")