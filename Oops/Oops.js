class Cafe {
    constructor(name) {
        this.names = name
        console.log("Constructor Is Already Run's")
    }

    cofee() {
        alert(`Hey ${this.names} Your Cofeee is Ready`)
    }

    tea() {
        setTimeout(() => {
            alert(`Hey ${this.names} Your Tea is Ready`)
        }, 3000)
    }

    bun() {
        alert(`Hey ${this.names} Your Bun is Ready`)
    }
}

let AlfaizSunni = new Cafe("Alfaiz")
let RehannRaja = new Cafe("Rehann")
let HasnainMakati = new Cafe("Hasnain")


AlfaizSunni.bun()
RehannRaja.tea()
HasnainMakati.cofee()
