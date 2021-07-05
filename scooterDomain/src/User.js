const Person = require('./Person')

class User extends Person {

    constructor(name){
    super(name)
    this.currentScooter = undefined
   
}
    flagBroken(){
        this.currentScooter.reportBroken()

    }
}
module.exports = User
