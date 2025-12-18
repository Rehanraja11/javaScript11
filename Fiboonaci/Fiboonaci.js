let num = prompt("Enter A Number :")

let f1 = 0;
let f2 = 1;
let sum = 0;

for (let i = 0; i <= num; i++) {
    console.log(f1)
    f1 = f2;
    f2 = sum;
    sum = f1 + f2;
    document.write(sum + " ,")
}
