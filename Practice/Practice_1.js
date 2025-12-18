
// Practice 1





/*

const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
    pow: (a, b) => a ** b
}


console.log(calculator.add(10, 20))
console.log(calculator.sub(10, 20))
console.log(calculator.mul(10, 20))
console.log(calculator.div(10, 20))
console.log(calculator.pow(10, 20))

*/






// Practice 2





/*
// Practice different ways to access object properties
const product = {
    name: "Laptop",
    price: 999,
    "special-offer": true,
    specs: {
        ram: "16GB",
        storage: "512GB"
    }
};
//  1. Dot notation
console.log(product.name)

// 2. Bracket notation
console.log(product["price"])

// 3. Nested property access
console.log(product.specs["ram"])

// 4. Dynamic property access using variables
let dynamic = product["special-offer"]
console.log(dynamic)

*/



// Practice 3



/*

// const students = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 92 },
//     { name: "Charlie", grade: 78 },
//     { name: "Diana", grade: 96 },
//     { name: "Eve", grade: 73 }
// ];


// // 1. Use map() to create an array of just student names
// const studentNames = students.map((stud) => {
//     return stud.name
// })



// 2. Use filter() to find students with grades above 80
const studentsGrade = students.filter((student) => {
    return student.grade > 80
})



// 3. Use reduce() to calculate the average grade

const studentAverage = students.reduce((value1, value2) => {
    return value1 + value2.grade / 5
}, 0)


console.log("Student names:", studentNames);
console.log("High achievers:", studentsGrade);
console.log("Average grade:", studentAverage);



const studentsBest = students.map(actor => actor)
    .filter(actor => actor.grade > 85)
    .map(actor => actor.name)
console.log(studentsBest)

*/


// Practice 4



const inventory = [
    { name: "Apples", quantity: 50, price: 1.5 },
    { name: "Bananas", quantity: 30, price: 0.8 },
    { name: "Oranges", quantity: 25, price: 2.0 },
    { name: "Grapes", quantity: 40, price: 3.5 }
];


// 1. Use for...of to calculate total inventory value
let calculateTotal = 0
for (const allValues of inventory) {

    calculateTotal += allValues.price

}
console.log("The Sum Of All Values ", calculateTotal)



// 2. Use for...in to display all property names of first item

for (const itemName in inventory) {
    console.log(inventory[itemName].name)
}

// 3. Use regular for loop to find items with quantity > 35


for (let i = 0; i < inventory.length; i++) {
    let item = inventory[i]
    if (item.quantity > 35) {
        console.log(item)
    }
}



// 4. Use while loop to process items until total value exceeds $100

let i = 0;
let totalValue = 0;
while (i <= inventory.length && totalValue <= 100) {

    let item = inventory[i]
    // console.log(item)
    totalValue += item.quantity * item.price
    i++;

}
console.log(totalValue)




// 1. Number pyramid: 1, 12, 123, 1234, 12345

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let best = ""
    for (let j = 0; j <= rows - 1 - i; j++) {
        best += "-"
    }
    for (let k = 1; k <= i; k++) {
        best += `${k}`
    }

    document.write(best)
    document.write("<br>")
}



//  2. Multiplication table for number 7
let NumberOfSum = 7


for (let value1 = 1; value1 <= 10; value1++) {
    console.log(`${NumberOfSum} * ${value1} = ${value1 * NumberOfSum}`)
}




// 3. Fibonacci sequence (first 10 numbers)

firstNum = 0;
secondNum = 1;
sum = 0;

console.log(secondNum)
for (let i = 1; i <= 10; i++) {


    sum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;

    console.log(sum)

}

// 4. Prime numbers between 1 - 50


function isPrime(num) {
    if (num < 2) {
        return `${num} is not a prime number`
    }

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return `${num} is not a prime number`
        }
    }

    return `${num} is a prime Number`
}

console.log(isPrime(50))




// const averageSalaryByDepartment = employees.reduce((acc, emp) => {
//     if (!acc[emp.department]) {
//         acc[emp.department] = { totalSalary: 0, count: 0 };
//     }
//     acc[emp.department].totalSalary += emp.salary;
//     acc[emp.department].count += 1;
//     return acc;
// }, {});

// for (const dept in averageSalaryByDepartment) {
//     const data = averageSalaryByDepartment[dept];
//     averageSalaryByDepartment[dept] = data.totalSalary / data.count;
// }

// console.log(averageSalaryByDepartment);
