const Person = require('./Person')


class Maintenance extends Person {

    constructor(name, workID){
    super(name)
    this.workID = workID
   
}

// working progress //
    repairScooter(scooter){
        if (scooter.isBroken) {
            console.log('Repair Scooter!')
            return true
        }
    } 
}
module.exports = Maintenance
