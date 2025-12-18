Array.prototype.myUcase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();