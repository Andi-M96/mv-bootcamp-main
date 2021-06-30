class Bag {    
    constructor(weight) {
        if (!weight) {
            throw new Error('Bag must have weight');
        }
        this.weight = weight
    }
}

module.exports = Bag;

