const Person = require('./Person')

class Passenger extends Person {

    seatNumber;

    constructor(name, seatNumber){
    super(name)
    this.seatNumber = seatNumber
}
}
module.exports = Passenger
