//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if((this.passenger + num) <= this.maximumPassengers) {
            console.log(`There's enough room for everyone!`);
            return availableRoom == true;
        } 
        else if (this.passenger <= this.maximumPassengers) {
            let tempNum = this.maximumPassengers - this.passenger;
            if (tempNum != 0) {
                let morePassengers = num - tempNum;
                console.log(`There's enough room for ${morePassengers} more passengers!`)
                return availableRoom == false;
            }
            console.log(`There's no room for anymore passengers!`);
            return availableRoom == false;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log('engine started...!!!');
            return this.started == true;
        } else {
            console.log('engine cannot start...');
            return this.started = false;
        }
    }

    scheduleService(mileage) {
        if (this.mileage > 30000) {
            console.log(`It's time to service your ${this.make} ${this.model}!`);
            return this.scheduleService == true;
        } else {
            console.log(`Your ${this.make} ${this.model} is good to go!`);
            return this.scheduleService == false;
        }
     }
}