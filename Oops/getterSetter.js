class antic {
    constructor(name) {
        this._name = name
    }
    fly() {
        console.log("Udta Hi Rahu")
    }
    get myname() {
        return this._name
    }
    set setmyname(newname) {
        this._name = newname
    }
}

let alfaix = new antic("Rehann")
alfaix.fly()