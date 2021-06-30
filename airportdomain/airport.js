class Airport {

    name = '';
    terminals = 1;
    gates = 1;
    plane_capacity = 12;
    planes = []; // incoming planes

    constructor(name, terminals, gates) {
        if (name != undefined) {
            this.name = name
        }
        if (terminals != undefined) {
            this.terminals = terminals
        }
        if (gates != undefined) {
            this.gates = gates
        }
        this.plane_capacity = terminals*gates;
    }
    addPlane(plane) {
        plane.setOrigin(this.name)
        this.planes.push(plane)
    }
    removePlane(plane) {
        const index = this.planes.indexOf(plane);
        this.planes.splice(index, 1);
    }
}

module.exports = Airport