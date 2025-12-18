class Person {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(newName) {
        this._name = newName;
    }
}

const p = new Person("Alice");

console.log(p.getName())
p.setName("Rehann")
console.log(p.getName())