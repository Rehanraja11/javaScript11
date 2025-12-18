// how namy loops Work

/*
while
do While
for
for in
for of
for each
*/

// While Loop

// let marks = 1;

// while (marks <= 11) {
//     console.log(`This Is The End ${marks}`);
//     marks += 1;
// }
// num = 10



// let i = 1;

// function chek(n) {
//     while (i <= n) {
//         console.log(i)
//         i += 1

//         if (i == 7) {
//             break
//         }
//     }
// }
// chek(10)


// let j = 1;
// let sum = 0

// while (j <= 10) {
//     sum = sum + j
//     j++
// }

// console.log(`The Sum Of this Iteration is ${sum}`)


// let number = 0;
// while (number <= 10) {
//     if (number % 2 == 0) {
//         console.log(`A Number is Even ${number}`)
//     }
//     else {
//         console.log(`A Number is odd ${number}`)

//     }
//     number++
// }



// let count = 4;

// while (count >= 0) {
//     console.log(count)
//     count--
// }

// console.log("Happy New Year")

// let count = 1;

// while (true) {
//     console.log("A Count is ", count)
//     count++

//     if (count == 11) {
//         break;
//         // If Break Is No There So loops in infinet used
//     }
// }



// do While loops
// let value = 20;

// do {
//     console.log("The Value is ", value)
//     value++
// } while (value <= 11);


// let count = 4;

// do {
//     console.log(count)
//     count--
// } while (count >= 0)



//for loops

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// for (let a = 1; a <= 5; a++) {
//     console.log("Hey Brother How Are You")
// }


// for loops With Continue

// for (let b = 0; b <= 11; b++) {
//     if (b == 5) {
//         continue;
//     }
//     console.log(b)
// }

// for (let b = 0; b <= 11; b++) {
//     if (b == 5) {
//         break;
//     }
//     console.log(b)
// }

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 == 0) {
//         console.log(num, "Its Even Number")
//     }
//     else {
//         console.log(num, "Its odd Number")
//     }

//     if (num == 50) {
//         break;
//     }
// }


// practice

// 0 to 10 number
// for
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let nu = 0
// while (nu <= 10) {
//     console.log(nu)
//     nu++
// }


// let numm = 1
// do {
//     console.log(numm)
//     numm++
// } while (numm <= 10)


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for (let i = 5; i >= 1; i--) {
//     for (let x = 1; x <= i; x++) {
//         document.write("j")
//     }
//     document.write("<br>")

// }



// let rows = prompt("Enter A Number to Print Pattern")

// for (let i = 1; i <= rows; i++) {
//     let str = ""
//     for (let j = 0; j <= rows - 1 - i; j++) {
//         str += " "
//     }
//     for (let y = 1; y <= i; y++) {
//         str += "* "
//     }
//     console.log(str)
// }




// Dimond Pattern

// let rows = prompt("Enter A Number to Print Pattern")

// for (let i = 1; i <= rows; i++) {
//     let str = ""
//     for (let j = 0; j <= rows - 1 - i; j++) {
//         str += " "
//     }
//     for (let y = 1; y <= i; y++) {
//         str += "* "
//     }
//     console.log(str)
// }

// for (let i = rows - 1; i >= 1; i--) {
//     let str = ""
//     for (let j = 0; j <= rows - 1 - i; j++) {
//         str += " "
//     }
//     for (let y = 1; y <= i; y++) {
//         str += "* "
//     }
//     console.log(str)
// }


// Factorial Number

// let number = prompt("Enter The Number")

// fact = 1;

// for (let i = 1; i <= number; i++) {
//     fact = fact * i
// }

// console.log(fact)


// Fiboonaci Number

// let x = 0;
// let y = 1;




// for (let i = 1; i <= 10; i++) {
//     let sum = x + y;
//     console.log(x)

//     x = y;
//     y = sum;
// }

// let number = prompt("Enter A NUmber")
// if (number < 1) {
//     console.log("its Not A Prime Number ")
// }
// let store = " "
// for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         store += "Its not   Prime Number"
//         break;
//     }
//     else {
//         store += "Its Prime Number"
//         break;
//     }
//     console.log(store)
// }

// let rows = prompt("Enter The Number")
// for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= rows; j++) {
//         if (i == 1 || i == rows || j == 1 || j == rows) {
//             document.write(" *");
//         }
//         else {
//             document.write("&nbsp&nbsp&nbsp");
//         }
//     }
//     document.write("<br>");
// }
// let table = prompt("Enter The the Table Number ")
// for (let i = 1; i <= 10; i++) {
//     console.log(`${table} * ${i} = ${table * i}`)
// }

