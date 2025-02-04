export abstract class Vehicle { // abstract classes can't be instantiated, they are meant to be extended by other classes
    abstract getNumberOfSeats(): number; // this will require the child classes to implement this method
}

export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    // getNumberOfTeslaSeats() {
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    // getNumberOfAudiSeats() {
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    // getNumberOfToyotaSeats() {
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    // getNumberOfHondaSeats() {
    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}