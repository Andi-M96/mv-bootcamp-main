const Person = require('./Person');



class CabinCrew extends Person {

    flightRole;

    constructor(name, flightRole){
        super(name)
        this.flightRole = flightRole
    }

}

module.exports = CabinCrew;

