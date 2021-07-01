const Passenger = require("./passenger");


class Plane {
    constructor(flightNum) {
        this.flightNum = flightNum;
        this.passengers = [];
        this.cabinCrew = [];
    }
    boardPerson(person) {
        if (person instanceof Passenger) {
            console.log("Person is a Passenger")
            this.passengers.push(person);
        } else {
            console.log("Person is part of cabin crew")
            this.cabinCrew.push(person)

        }

    }
    setOrigin(origin) {
        this.origin = origin;
    }
    setDestination(destination) {
        this.destination = destination;
    }

}

module.exports = Plane;