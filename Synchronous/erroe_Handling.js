// let num1 = prompt("Enter A First Number :");

// let num2 = prompt("Enter a Second Number: ")

// let x = parseInt(prompt("Enter To  The Total Multiply"))

// if (isNaN(num1) || isNaN(num2) || isNaN(x)) {
//     throw Error("Its Not Valid Please Enter Only Numbers");

// }


// let Sum = parseInt(num1) + parseInt(num2);

// try {

//     console.log("The Sum is", Sum * x)
// }

// catch (error) {
//     console.log("Are Bhai Error Aa Raha Hai Kya tuje PAta Nahi hai Bhidu")
// }


// Error Handling

// async function DataChek() {
//     try {
//         const myData = await fetch(`https://randomuser.me/api`)
//         const resp = await myData.json()
//         console.log(resp)
//     }
//     catch (error) {
//         console.log("Aapke Lag Gaye Hai Guru : ", error)
//     }
// }
// DataChek()




// function into(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divided By  Zero")
//     }
//     return a / b
// }

// try {
//     console.log(into(2500, 25))
// }
// catch (error) {
//     console.error(error)
// }

// try {
//     let result = 10 / 0;
//     console.log(result); // Infinity
//     throw new Error("Something went wrong!");
// } catch (error) {
//     console.error("Caught an error:", error);
// }




// function sum(n1, n2) {
//     const sum = n1 / n2
//     try {

//         if (n2 === 0) {
//             throw new Error("Can Not Divided By Zero")

//         }
//         return sum
//     }
//     catch (hey) {
//         console.log(hey)
//     }
//     finally {
//         console.log("Achha Hua  ")
//     }
// }

// console.log(sum(10, 10))
