// // // // // // // // 1. Create a countdown timer from 5 to 0
// // // // // // // function countdown() {
// // // // // // //     let count = 5;
// // // // // // //     const counter = setInterval(() => {
// // // // // // //         console.log(count)
// // // // // // //         count--

// // // // // // //         if (count < 0) {
// // // // // // //             console.log(`Time's up!`)
// // // // // // //             clearInterval(counter)
// // // // // // //         }
// // // // // // //     }, 1000)
// // // // // // //     // Should log: 5, 4, 3, 2, 1, 0, "Time's up!"
// // // // // // // }

// // // // // // // 2. Create a function that stops executing after 5 seconds
// // // // // // // function stopAfterFiveSeconds() {
// // // // // // //     let seconds = 0;
// // // // // // //     // Your code here
// // // // // // //     const secondRun = setInterval(() => {
// // // // // // //         console.log(seconds)
// // // // // // //         seconds++

// // // // // // //         if (seconds === 6) {
// // // // // // //             clearInterval(secondRun)
// // // // // // //         }
// // // // // // //     }, 1000)
// // // // // // //     // Should count seconds and stop after 5
// // // // // // // }

// // // // // // // 3. Create a delayed greeting function
// // // // // // // function delayedGreeting(name, delay) {
// // // // // // //     // Should greet the person after specified delay (in milliseconds)
// // // // // // //     setTimeout(() => {
// // // // // // //         console.log(`Hello ${name}`)
// // // // // // //     }, delay)
// // // // // // //     // Your code here
// // // // // // // }
// // // // // // // // // Test your functions:
// // // // // // // // countdown();
// // // // // // // // stopAfterFiveSeconds();
// // // // // // // delayedGreeting("Alice", 3000);


// // // // // // // / Task: Create and use basic callback functions

// // // // // // // 1. Create a function that takes a callback and executes it
// // // // // // function executeCallback(callback) {


// // // // // //     callback()

// // // // // // }

// // // // // // // 2. Create different callback functions to test
// // // // // // function sayHello() {
// // // // // //     // Your code here
// // // // // //     console.log('Hello')
// // // // // // }

// // // // // // function displayTime() {
// // // // // //     // Your code here
// // // // // //     const time = new Date()
// // // // // //     console.log(`${time.getHours()} : ${time.getMinutes()} :${time.getSeconds()}`)

// // // // // // }
// // // // // // // Test your callbacks:
// // // // // // executeCallback(sayHello);
// // // // // // executeCallback(displayTime);
// // // // // // // executeCallback(() => console.log("Anonymous callback"));





// // // // // // function sunni(name, callback) {
// // // // // //     console.log(name);
// // // // // //     callback()


// // // // // // }

// // // // // // function hell() {
// // // // // //     console.log("chek");
// // // // // // }

// // // // // // sunni("alfaiz", hell)



// // // // // // Task: Practice callbacks that receive parameters

// // // // // // // 1. Create a function that processes numbers and uses callback for result
// // // // // // function processNumbers(num1, num2, callback) {
// // // // // //     const sum = num1 + num2;
// // // // // //     const product = num1 * num2;
// // // // // //     // Call the callback with sum and product
// // // // // //     callback(sum, product)
// // // // // //     // Your code here
// // // // // // }

// // // // // // // 2. Create different callback functions
// // // // // // function displayResult(sum, product) {
// // // // // //     // Display the results nicely
// // // // // //     console.log(`${sum} ${product}`)
// // // // // //     // Your code here
// // // // // // }

// // // // // // function findMax(sum, product) {
// // // // // //     // Display which is larger
// // // // // //     const largeNum = Math.max(sum, product)
// // // // // //     console.log(largeNum)
// // // // // //     // Your code here
// // // // // // }

// // // // // // // Test your functions:
// // // // // // processNumbers(5, 3, displayResult);
// // // // // // processNumbers(4, 6, findMax);
// // // // // // processNumbers(2, 8, (sum, product) => {
// // // // // //     console.log(`Sum: ${sum}, Product: ${product}`);
// // // // // // });


// // // // // // Task: Create basic promises
// // // // // // 1. Create a promise that resolves after 2 seconds
// // // // // // const simplePromise = new Promise((resolve, reject) => {
// // // // // //     // Your code here
// // // // // //     setTimeout(() => {
// // // // // //         resolve('Resolve after 2 seconds')
// // // // // //     }, 2000)
// // // // // // });
// // // // // // // Use the promise:
// // // // // // simplePromise.then((result) => {
// // // // // //     console.log(result);
// // // // // // });

// // // // // // 2. Create a promise that sometimes fails
// // // // // function randomPromise() {
// // // // //     return new Promise((resolve, reject) => {
// // // // //         const random = Math.random();
// // // // //         setTimeout(() => {
// // // // //             if (random > 0.5) {
// // // // //                 // Resolve with success message
// // // // //                 // Your code here
// // // // //                 resolve('Promise is Done')
// // // // //             } else {
// // // // //                 // Reject with error message
// // // // //                 // Your code here
// // // // //                 reject('Something went wrong !')
// // // // //             }
// // // // //         }, 1000);
// // // // //     });
// // // // // }
// // // // // // Test the random promise:
// // // // // randomPromise()
// // // // //     .then((result) => {
// // // // //         console.log("Success:", result);
// // // // //     })
// // // // //     .catch((error) => {
// // // // //         console.log("Error:", error);
// // // // //     });


// // // // // 1. Create a countdown timer from 5 to 0
// // // // function countdown() {
// // // //     let count = 5;

// // // //     let number = setInterval(() => {
// // // //         if (count >= 0) {
// // // //             console.log(count--)
// // // //         } else {
// // // //             console.log("Time's up!");
// // // //             clearInterval(number);
// // // //         }
// // // //     }, 1000)
// // // //     // Should log: 5, 4, 3, 2, 1, 0, "Time's up!"
// // // // }
// // // // // countdown()


// // // // // 2. Create a function that stops executing after 5 seconds
// // // // function stopAfterFiveSeconds() {
// // // //     let seconds = 0;

// // // //     let stopTime = setInterval(() => {
// // // //         console.log(seconds++)
// // // //         if (seconds === 6) {
// // // //             clearInterval(stopTime);
// // // //         }
// // // //     }, 1000)
// // // //     // Should count seconds and stop after 5
// // // // }

// // // // // stopAfterFiveSeconds();


// // // // // / 3. Create a delayed greeting function
// // // // // function delayedGreeting(name, delay) {

// // // // //     setTimeout(() => {
// // // // //         console.log(name)
// // // // //     }, delay);
// // // // // }

// // // // // delayedGreeting("Alice", 3000);


// // // // Task: Create custom array methods using callbacks

// // // // 1. Create a custom forEach function
// // // function customForEach(array, callback) {
// // //     // Iterate through array and call callback for each element
// // //     // Your code here
// // //     for (let i = 0; i < array.length; i++) {
// // //         callback(array[i])
// // //     }
// // // }

// // // // 2. Create a custom map function
// // // function customMap(array, callback) {
// // //     const result = [];
// // //     // Transform array using callback and return new array
// // //     // Your code here
// // //     for (let i = 0; i < array.length; i++) {
// // //         result.push(callback(array[i]))
// // //     }
// // //     return result;
// // // }

// // // // 3. Create a custom filter function
// // // function customFilter(array, callback) {
// // //     const result = [];
// // //     // Filter array using callback condition
// // //     // Your code here
// // //     for (let i = 0; i < array.length; i++) {
// // //         if (callback(array[i])) {
// // //             result.push(array[i])
// // //         }
// // //     }
// // //     return result;
// // // }

// // // // Test your custom functions:
// // // const numbers = [1, 2, 3, 4, 5];

// // // customForEach(numbers, (num) => console.log(num * 2));

// // // const doubled = customMap(numbers, (num) => num * 2);
// // // console.log("Doubled:", doubled);

// // // const evens = customFilter(numbers, (num) => num % 2 === 0);
// // // console.log("Even numbers:", evens);


// // // 1. Create a function that takes a callback and executes it
// // function executeCallback(callback) {
// //     console.log("About to execute callback");
// //     setTimeout(() => {
// //         console.log("after 3 second to run");
// //         callback();
// //     }, 3000)
// // }

// // // executeCallback(() => {
// // //     console.log("Callback executed");
// // // });


// // // 2. Create different callback functions to test
// // function sayHello(callback) {
// //     console.log("Hello Everyone")
// //     callback();
// // }

// // function displayTime() {
// //     setTimeout(() => {
// //         console.log("So How are you")
// //     }, 3000)
// // }

// // // sayHello(displayTime);


// // 1. Create a function that processes numbers and uses callback for result
// function processNumbers(num1, num2, callback) {
//     const sum = num1 + num2;
//     const product = num1 * num2;
//     callback(sum, product)
// }

// // 2. Create different callback functions
// function displayResult(sum, product) {
//     // Display the results nicely
//     console.log(sum, product);
//     // console.log(product);
// }

// function findMax(sum, product) {
//     if (sum > product) {
//         console.log(sum);
//     } else {
//         console.log(product);
//     }
// }

// // Test your functions:
// processNumbers(5, 3, displayResult);
// processNumbers(4, 6, findMax);
// processNumbers(2, 8, (sum, product) => {
//     console.log(`Sum: ${sum}, Product: ${product}`);
// });

// Task: Create functions to demonstrate blocking vs non-blocking behavior

// Synchronous (blocking) function
function blockingFunction() {
    console.log("Blocking function started");
    // Simulate heavy computation with loop
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    console.log("Blocking function finished");
    return result;
}

// Asynchronous (non-blocking) function
function nonBlockingFunction() {
    console.log("Non-blocking function started");
    setTimeout(() => {
        // Simulate heavy computation with loop
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        console.log("Non-blocking function finished");
    }, 2000);
}

// Test both functions:
console.log("Before blocking call");
blockingFunction(); // Uncomment to test
console.log("After blocking call");

console.log("Before non-blocking call");
// nonBlockingFunction();
console.log("After non-blocking call");

// Question: What's the difference in behavior?