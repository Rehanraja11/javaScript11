class gameZone {
    constructor(name, age) {
        this.names = name
        this.ages = age
    }

    playFreefire() {
        console.log("playing Free Fire");
    }
}

class gameZone11 extends gameZone {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary
    }
    playPubg() {
        setTimeout(() => {
            console.log(`Hey ${this.names} Your age Is ${this.ages} And You Play  Pubg`)
        }, 3000)
    }
    expectSalary() {
        setTimeout(() => {
            alert(`And ${this.names} You expect The Salary is ${this.salary}`)
        }, 5000)
    }
}

let RehannBhai = new gameZone11("Rehann", 18, 111000)

RehannBhai.playFreefire()
RehannBhai.playPubg()
RehannBhai.expectSalary()