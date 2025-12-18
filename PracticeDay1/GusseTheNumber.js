//  Gusse The Number

let a = Math.random() * 15
let b = Math.floor(a)
console.log(b)
let Try = 0;

let yournumber
while (b != yournumber) {
    yournumber = prompt("Enter A number Right Number");
    Try++

}
alert(`You Are Enter A right Number it's A ${b} and You are Tryed a ${Try}`);

if (Try <= 1) {
    alert("Your knowledge is 100%");
}
else if (Try <= 3) {
    alert("Your knowledge is 80%");
}
else if (Try <= 5) {
    alert("Your knowledge is 50%");
}
else if (Try <= 7) {
    alert("Your knowledge is 30%");
}