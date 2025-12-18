class Car {
    startEngine() {
        console.log("Engine started");
    }

    stopEngine() {
        console.log("Engine stopped");
    }

    _fuelInjection() {
        console.log("Injecting fuel...");
    }

    drive() {
        this._fuelInjection();
        console.log("Car is moving");
    }
}

// Using the Car class
const myCar = new Car();

myCar.startEngine();
myCar.drive();
myCar.stopEngine();



// An Abstraction Is The use To code is not ReWrite Mehod One Time You Use And After USE Multiple times 