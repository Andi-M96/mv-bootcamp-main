

class Scooter {
    constructor(id) {
        this.id = id
        this.isBroken = false
        this.batteryLife = 100
        this.currentUser = undefined
    }
    reportBroken() {
        this.isBroken = true
    }

    charge() {
        if (!this.isBroken){
            this.batteryLife = 100
            return true;
      } 
        
    }
    hire(user) {
        if (this.batteryLife !=100) {
            console.log('Not Charged!');
            this.charge();
            return false
        } else {
            this.currentUser = user
            user.currentScooter = this 
            console.log('Journey Started');
            return true
        }
    }
    return() {
        this.batteryLife = 0;
        this.isBroken = true
        console.log('Your Journey Has Now Ended');
    }

}

module.exports = Scooter