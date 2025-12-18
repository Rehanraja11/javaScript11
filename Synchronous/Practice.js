// console.log("Start");

// setTimeout(() => {
//     console.log("Middle");
// }, 1000);

// console.log("End");




// let shouldFail = true;

// let myPromise = new Promise((resolve, reject) => {
//     // Your code here
//     if (shouldFail) {
//         resolve("Success")
//     }
//     else {
//         reject("Fail")
//     }
// });

// myPromise
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));


// function riskyOperation() {
//     if (Math.random() > 0.5) {
//         throw new Error("Something went wrong!");
//     }
//     return "All good!";
// }

// try {
//     // Call riskyOperation safely
// } catch (err) {
//     console.error("Caught an error:", err.message);
// }

// Your task:
// function delayHello() {
//     // return a promise that resolves after 2 seconds
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello")
//         })
//     })
// }

// delayHello().then((data) => {
//     console.log(data)
// })





// function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data loaded")
//         }, 1000)
//     })
// }

// getdata().then((e) => {
//     console.log(e)
// }).catch((error) => {
//     console.log(error)
// })
// // Your task: write a version that returns a Promise


// function p1() {
//     return new Promise(res => setTimeout(() => res('one'), 1000));
// }
// function p2() {
//     return new Promise(rej => setTimeout(() => rej('two'), 2000));
// }
// function p3() {
//     return new Promise(res => setTimeout(() => res('three'), 1000));
// }

// // Your task: run all three in parallel and log ['one', 'two', 'three']

// Promise.all([p1(), p2(), p3()]).then((data) => {
//     console.log(data)
// })
//     .catch((error) => {
//         console.log(error)
//     })


// Task: Create basic promises

// 1. Create a promise that resolves after 2 seconds
const simplePromise = new Promise((resolve, reject) => {
    // Your code here
    setTimeout(() => {
        resolve("Promise Resolved")
    }, 200)
});

// Use the promise:
simplePromise.then((result) => {
    console.log(result);
});



// 2. Create a promise that sometimes fails
function randomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        setTimeout(() => {
            if (random > 0.5) {
                // Resolve with success message
                resolve("True")
            } else {
                // Reject with error message
                reject("Fails")
            }
        }, 1000);
    });
}

// Test the random promise:
randomPromise()
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });