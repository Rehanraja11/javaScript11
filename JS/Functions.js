// Simple Function

/*
function xyz() {
    console.log("Hey Function")
}
xyz()
*/



// Function Declartion
// its a Function Declaration

/*
Collage()
function Collage() {
    console.log("Arb")
    console.log("Arb")
    console.log("Arb")

}
*/

// Function Expression
// its Function Store in A Variable


/*
const Marks = function (v1, v2) {
    let result = v1 + v2
    return result    // its Return a Value in A new Function
    console.log(result) // its only result not a return any Values
}

console.log(Marks(10, 5))
// console.log(Marks(10, 1))
*/


// function With Perameters

/*
function logginchek(username) {
    return `${username} Just Logged in`
}

console.log(logginchek(11))

*/

// function as Object

// let user = {
//     username: "Rehann",
//     age: 18,
//     price: 10000
// }


// function manyusers(onusers) {
//     console.log(onusers.username);
//     console.log(onusers.age);
//     console.log(onusers.price);

// }

// manyusers(user)




// const chekevenOdd = function (values) {
//     if (values % 2 == 0) {
//         return `${values} even`
//     }
//     else {
//         return `${values} odd`
//     }
// }

// console.log(chekevenOdd(12))




// Call Back Function 
// function hello(callback) {
//     console.log("hello");
//     callback()
// }

// function Goodby() {
//     console.log("Goodby");
// }

// hello(Goodby)

// Arrow Function

// const add = (a, b) => {
//     return a + b
// }

// console.log(add(10, 25))

// // simple Way These  no Return Keyword used
// const addtwo = (a, b) => a + b


// console.log(addtwo(10, 25))

//  Practice 
// xyz1()
// function xyz1() {
//     console.log("Declaration")
// }
// const user = function () {
//     console.log("Expresion Used ")
// }



// function sum(sum1) {
//     return `Hey My Name is Rehann And My Age is ${sum1} `
// }
// console.log(sum(20))




// const functi = function (A, B) {
//     return A + B
// }

// console.log(functi(10, 25))



// const ar = () => {
//     console.log("Khwaja ji 11")
// }
// ar()


// const addt = (a, b) => a + b

// console.log(addt(11, 25))



// recursion  


// const names = (n) => {
//     if (n === 0) {
//         console.log("code Has Been Done")
//         return
//     }
//     else {
//         console.log("Code is Doing ")
//         names(n - 1)
//     }
// }

// names(10)


// const Fact = (f) => {
//     if (f === 1) {
//         return 1
//     }
//     let fact = f * Fact(f - 1)
//     return fact

// }

// console.log(`The  Factorial Is the `, Fact(5))


// last Practice of Function 
//expression 


/*
const ownfunction = function () {
    return ("Hey Function")
}

console.log(ownfunction())

//declaration 

function freez(a, b) {
    let d = a + b;
    return d
}

console.log(freez(102, 8, 11))

//Call Back
function sayhello() {
    console.log("Hello")
    saybye()
}
function saybye() {
    console.log("Bye")
}
sayhello()

// arrow Function 

const name = () => {
    return "Raja"
}
console.log(name())


const sums = (number1, number2) => console.log(number1 + number2);
// console.log(sums(10, 20))
sums(20, 50)




// Recursion 

const recrsive = (endd) => {
    if (endd === 0) {
        console.log(" I Am Rehann not a Raja")
        return
    }
    else {
        console.log(" I Am Raja not a Rehann ")
        recrsive(endd - 1)
    }
}

recrsive(11)



const fact = (numbers) => {
    if (numbers === 1) {
        return 1
    }
    let factz = numbers * fact(numbers - 1)
    return factz

}

console.log(fact(6))

*/


function calc(val1, Val2, op) {

    switch (op) {
        case "+":
            return val1 + Val2;
            break;
        case "-":
            return val1 - Val2;
            break;
        case "*":
            return val1 * Val2;
            break;
        case "/":
            return val1 / Val2;
            break;
    }

}

console.log(calc(10, 25, "*"))