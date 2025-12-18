// let sum = (a, b) => a + b
// console.log("This is the Arrow ShortHandFunction" + sum(3, 5))


// let arr = [10, 25, 45, 15, 25, 12]

// let chek = arr.filter((values) => {
//     return values > 25
// })

// console.table(chek)

// function hellow(j) {
//     for (let i = 1; i <= j; i++) {
//         if (i % 2 == 0) {
//             console.log("All Are Even Number " + i)
//         }
//         else {
//             console.log("All Are Odds Number " + i)

//         }
//     }
// }
// hellow(100)




let value1 = prompt("Enter The First Value : ");
let value2 = prompt("Enter The Second Value : ");
let operators = prompt("Enter Operators  + , -, *, /");
value1 = Number.parseInt(value1)
value2 = Number.parseInt(value2)
let result;

switch (operators) {
    case '+':
        result = value1 + value2;
        console.log(result)
        break;
    case '-':
        result = value1 - value2;
        console.log(result)
        break;
    case '*':
        result = value1 * value2;
        console.log(result)
        break;
    case '/':
        result = value1 / value2;
        console.log(result)
        break;
}

