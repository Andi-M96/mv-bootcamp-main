

class Scooter {
    constructor(id) {
        this.id = id
        this.isBroken = false
        this.batteryLife = 100
        this.currentUser = undefined
    }
    reportBroken() {
        isBroken = true
    }

    charge() {
        if (!this.isBroken){
            return true;
      } else {
            return false
      } 
        
    }
    hire(user) {
        if (this.batteryLife !=100) {
            console.log('Not Charged!');
            this.charge();
        } else {
            this.currentUser = user
            user.currentScooter = this 
            console.log('Journey Started');
        }
    }

    return() {
        this.batteryLife = 0;
        this.isBroken = true
        console.log('Your Journey Has Now Ended');
    }

}

module.exports = Scooter