class Airport {

    static airportList = []
    
    name = '';
    planes = []; 

    constructor(name) {
        if (name != undefined) {
            this.name = name
        }
       this.constructor.airportList.push(this)
    }
    addPlane(plane) {
        plane.setOrigin(this.name)
        this.planes.push(plane)
    }
    removePlane(plane) {
        const index = this.planes.indexOf(plane);
        this.planes.splice(index, 1);
    }
    static getAirports(){
        return this.airportList
    }
}

    console.log(Airport.getAirports())

module.exports = Airport