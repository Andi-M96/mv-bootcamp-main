 class Plane { 
    constructor(flightNum) {
        this.flightNum = flightNum;
        this.passengers = [];
    }
    boardPassenger(passenger) {
        this.passengers.push(passenger);    
    }
    setOrigin(origin) {
        this.origin = origin;
    }
    setDestination(destination) {
        this.destination = destination;
    }
  
}

module.exports = Plane;