// Synchronous
// Asynchronous
// setTimeout
// setInterval
// callbacks
// Promises
// Async Await








// // Synchronous

// console.log("hey");
// console.log("i Am");
// console.log("Rehann Raja");




// // Asynchronous

// console.log("Hey")
// setTimeout(() => {
//og("I am Rehann     console.l Raja")
// }, 1000)
// console.log("Java Script")


// setTimeout
// setTimeout(() => {
//     console.log(" Digital Clock")
// }, 1000)




// setInterval(() => {
//     console.log("Delay Messege 1 ")
// }, 3000)


// // callbacks
// // this is () => a Call back
// // simple a callBack Is a Function



// setInterval(() => {
//     const now = new Date()
//     console.log(now.toLocaleTimeString())
// }, 1000)

// setTimeout(() => {
//     console.log("Hey Brother")
// }, 1000)



// its a Call Back Function

// function hello(callBack) {
//     console.log("hello")
//     callBack()
// }

// function leave() {
//     setTimeout(() => {
//         console.log("Leave")
//     }, 2000)

// }

// hello(leave)

// sum(disp, 20, 14)

// function sum(callBack, a, b,) {
//     let result = a + b;
//     callBack(result)
// }

// function disp(result) {
//     console.log("the result is ", result)
// }





// Promise

// const fetchData = () => {
//     return new Promise((resolve, rejects) => {
//         const Succes = false

//         if (Succes) {
//             resolve("Finally Data Resolve")
//         }
//         else {
//             rejects("error Data rejects")
//         }
//     })
// }

// fetchData().then((messege) => console.log(messege)).catch((er) => console.log(er));



// const num = new Promise((res, rej) => {
//     if (5 < 11) {
//         return res("finally")
//     }
//     else {
//         return rej("error")
//     }
// })

// num.then((er) => console.log(er)).catch((sr) => console.log(sr));


// const make = () => {
//     return new Promise((resolve, rejects) => {
//         if ("33" == 33) {
//             resolve("yess")
//         }
//         else {
//             rejects("uffff")
//         }
//     })
// }

// make().then((yess) => console.log(yess)).catch((uf) => console.log(uf))



// const myPromise = new Promise((res, rej) => {
//     if (26 > 25 + false) {
//         res("Yes its a true ")
//     }
//     else {
//         rej("No its not A true ")
//     }
// })

// myPromise.then((yes) => console.log(yes)).catch((no) => console.log(no))

// myPromise.then(() => {
//     console.log("hey ");

// })

// myPromise.then(() => {
//     console.log("You Can");

// })

// myPromise.then(() => {
//     console.log("Do it");
// })



const valuee = () => {
    return new Promise((res, rej) => {
        if (22 === "22") {
            res('Yes Its True ')
        }
        else {
            rej('its false')
        }
    })
}




const my = new Promise((res, rej) => {
    setTimeout(() => {
        res("I HAVE WORKING A TO ASYNC AWAIT")
    }, 2000)

})


// ITS USING A async await

async function hey() {
    console.log("Namaste Java Script")
    const val = await my;
    console.log(val)

}

// hey()


// using a Older way

// async function chek() {
//     my.then(resp => console.log(resp))
//     console.log("I am A Rehann Raja")

// }

// chek()





// const my = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Hey Namasete Java Script")
//     }, 6000)
// })

// const my1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Hey Namasete Java Script 1")
//     }, 5000)
// })

// async function yes() {
//     const noty = await my
//     console.log(noty)


//     const noty1 = await my1
//     console.log(noty1)
// }

// yes()


// async function getData() {

//     const storeData = await fetch(`https://randomuser.me/api/`)
//     const finalData = await storeData.json()
//     console.log(finalData)



//     const storeData1 = await fetch(`https://randomuser.me/api/`)
//     const finalData1 = await storeData1.json()
//     console.log(finalData1)
// }

// getData()




// async function getData() {
//     try {
//         const storeData = await fetch(`https://randomuser.me/api/`)
//         const finalData = await storeData.json()
//         console.log(finalData)
//     }
//     catch (error) {
//         console.log("The Error Is : ", error)
//     }

// }

// getData()

// const url = `https://randomuser.me/api/`
// async function hey() {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// hey()



// function doMath(a, b, operation) {
//     return operation(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }


// console.log(doMath(8, 7, add));
// console.log(doMath(10, 3, multiply));

// Promise

// function getData() {
//     return new Promise((resolve, rejects) => {
//         setTimeout(() => {
//             const number = 2;

//             if (number >= 11) {
//                 resolve("Data fetch SuccesFully .!")
//             }
//             else {
//                 rejects("Data Not fetch")
//             }
//         }, 2500);
//     })
// }

// async function fetchData() {
//     try {
//         const messg = await getData()
//         console.log(messg)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }


// fetchData()


// function getname() {
//     return new Promise((resolve, rejects) => {
//         let name = prompt("Enter Your Name")
//         setTimeout(() => {
//             if (name == "Rehann") {
//                 resolve("Yes You Win")
//             }
//             else {
//                 rejects("You Lose")
//             }
//         }, 10000)

//     })
// }

// async function fetchname() {
//     try {
//         const theResult = await getname()
//         console.log(theResult)
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

// fetchname()

// ✅ 1. Create a Simple Promise
// Your task: create a promise that resolves after 2 seconds

// const myPromise = new Promise((resolve, rejects) => {
//     // write code here
//     setTimeout(() => {
//         resolve("The Promise Are Resolved")
//     }, 2000)
// });


// // Then, log the result using .then()
// myPromise.then((e) => {
//     console.log(e)
// })

// ✅ 2. Create a Promise that rejectss

// function checkNumber(num) {
//     // return a Promise
//     return new Promise((resolve, rejects) => {
//         if (num < 10) {
//             rejects("Number too small")
//         }
//         else {
//             resolve("Valid number")
//         }
//     })
// }

// checkNumber(11)
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));


// ✅ 3. Convert setTimeout to a Promise

// function delay(ms) {
//     // return a Promise that resolves after ms milliseconds
//     return new Promise((resolve, rejects) => {
//         resolve()
//     })
// }

// delay(3000).then(() => console.log("3 seconds passed!"));

// function fetchUserData(userId) {
//     return new Promise((resolve, rejects) => {
//         setTimeout(() => {
//             resolve(userId)
//         }, 1000)
//     })
// }

// fetchUserData(101).then(data => console.log(data));



// function getUser(userId) {
//     const users = [101, 102, 103];

//     // return a Promise: resolve if found, rejects if not

//     return new Promise((res, rej) => {
//         if (users.includes(userId)) {
//             res(userId)
//         }
//         else {
//             rej("Not Found")
//         }
//     })
// }

// getUser(101)
//     .then(user => console.log("Found:", user))
//     .catch(err => console.error("Error:", err));




// const p1 = Promise.resolve("A");
// const p2 = new Promise(resolve => setTimeout(() => resolve("B"), 1000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("C"), 5000));

// // Use Promise.all to wait for all and then log the array
// Promise.all([p1, p2, p3]).then((p) => {
//     console.log(p)
// })
//     .catch((error) => {
//         console.log(error)
//     })



// TODO: Implement a delay of 1 second
// function greetAsync() {
//     // return a Promise

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello from the Promise!")
//         }, 1000)

//     })

// }

// greetAsync().then((message) => {
//     console.log(message); // Expected: "Hello from the Promise!"
// });



// function checkNumber(n) {
//     // return a Promise that resolves or rejectss
//     return new Promise((resolve, rejects) => {
//         if (n > 0) {
//             resolve("The Number Are Valid")
//         }
//         else {
//             rejects("Negative number not allowed")
//         }
//     })
// }

// checkNumber(11)
//     .then(msg => console.log("Success:", msg))
//     .catch(err => console.error("Error:", err));



// function wait(ms) {
//     // Return a promise that resolves after ms milliseconds
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }

// wait(2000).then(() => console.log("Waited 2 seconds!"));


// function double(num) {
//     return Promise.resolve(num * 2);
// }

// // TODO: Chain .then() to double 2 three times
// double(2).then((e) => {
//     console.log(e)
//     return double(e)
// }).then((z) => {
//     console.log(z)
//     return double(z)
// }).then((y) => {
//     console.log(y)
//     return double(y)
// })



// const a = new Promise(resolve => setTimeout(() => resolve("A"), 1000));
// const b = new Promise(resolve => setTimeout(() => resolve("B"), 2000));
// const c = new Promise(resolve => setTimeout(() => resolve("C"), 3000));

// // TODO: Use Promise.all to print the result

// Promise.all([a, b, c]).then((found) => {
//     console.log(found)
// }).catch((not) => {
//     console.log(not)
// })







// function fetchData(success) {
//     return new Promise((resolve, rejects) => {
//         setTimeout(() => {
//             success ? resolve("Data loaded!") : rejects("Fetch failed");
//         }, 1000);
//     });
// }

// // Call this function with both true and false and handle both outcomes
// fetchData(false).then((yes) => {

//     console.log(yes)
// })
//     .catch((error) => {
//         console.log(error)
//     })



// function unstableTask() {
//     return new Promise((resolve, rejects) => {
//         const success = Math.random() > 0.5;
//         success ? resolve("Succeeded!") : rejects("Failed!");
//     });
// }

// // TODO: Retry the task up to 3 times
// unstableTask().then((e) => {
//     console.log(e)
//     return unstableTask(e)
// }).then((Z) => {
//     console.log(Z)
//     return unstableTask(Z)
// }).then((yes) => {
//     console.log(yes)
//     return unstableTask(yes)
// })


// function login(username, password) {
//     return new Promise((resolve, rejects) => {
//         setTimeout(() => {
//             if (username === "admin" && password === "1234") {
//                 resolve("Login successful");
//             } else {
//                 rejects("Invalid credentials");
//             }
//         }, 2000);
//     });
// }

// async function loginUser() {
//     try {
//         const response = await login("admin", "1234");
//         console.log(response);
//     } catch (err) {
//         console.error("Login failed:", err);
//     }
// }

// loginUser();



function calculate(a, b, callback) {
    return callback(a, b)
}

function addition(a, b) {
    console.log(a + b)
}
function Subtarction(a, b) {
    console.log(a - b)
}
calculate(10, 20, addition)
calculate(10, 20, Subtarction)




// function fetchUser(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`User ${id}`), 1500);
//     });
// }

// // TODO: Call fetchUser(7) and log the result
// fetchUser(7).then((e) => {
//     console.log(e)
// }).catch((z) => {
//     console.log(z)
// })

// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runSteps() {
//     console.log("Step 1");
//     await wait(1000);

//     console.log("Step 2");
//     await wait(1000);

//     console.log("Step 3");
// }

// runSteps();



// // Your task:
// function waiting() {
//     setTimeout(() => {
//         console.log("Done waiting!")
//     }, 2000)
// }
// async function waitAndPrint() {
//     // Your code here
//     const response = await waiting()
//     return response
// }

// waitAndPrint(); // Should print "Done waiting!" after 2 seconds

// // Your task:
// async function fetchFirstUser() {
//     const getuserdetaild = await fetch('https://randomuser.me/api/')
//     const fnalusr = await getuserdetaild.json()
//     console.log(fnalusr)
// }

// fetchFirstUser(); // Should print the name of the first user



// Your task:
// let url = 'https://randomur.me/api/' // i Had A error in Api
// async function fetchWithError() {
//     // Your code here
//     try {
//         const getapi = await fetch(url)
//         const response = await getapi.json()
//         console.log(response)
//     }
//     catch (e) {
//         console.log("Invalid Url Please Chek The Url", e)
//     }

// }

// fetchWithError(); // Should print "Failed to fetch"




// console.log("Start");

// setTimeout(() => {
//     console.log("Async operation");
// }, 2000);

// console.log("End");

// Expected Output:
// Start
// End
// (after 2 sec) Async operation

// ✅ Try: Explain why "End" comes before "Async operation".
// ans : because the log[end] is the synchronouse operation is not Waiting for the Asynce operations


// const myPromise = new Promise((resolve, rejects) => {
//     // Your code here
//     setTimeout(() => {
//         resolve("Resolved!")
//     }, 1000)
// });

// myPromise.then((result) => {
//     console.log(result); // "Resolved!"
// });



// const randomPromise = new Promise((resolve, rejects) => {
//     const success = Math.random() > 0.5;
//     setTimeout(() => {
//         if (success) resolve("Success!");
//         else rejects("Failed!");
//     }, 1000);
// });

// // Your code here using .then and .catch
// randomPromise.then(s => console.log(s)).catch(e => console.log(e))

// async function fetchPost() {
//     // Fetch the post using fetch() and async/await
//     try {
//         const getapi = await fetch('https://randomuser.me/api/')
//         const fetchedData = await getapi.json()
//         console.log(fetchedData)
//     }
//     catch (e) {
//         console.log(e)
//     }

// }

// fetchPost();


// function delay(ms) {
//     // Return a Promise that resolves after ms
//     return new Promise((resolve) => {
//         resolve
//     }, ms)
// }

// async function test() {  
//     console.log("Start");
//     await delay(2000);
//     console.log("End after 2 seconds");
// }

// test();

// function itself(callBack) {
//     callBack()
// }

// function HeyGoodDay() {
//     setTimeout(() => {

//         console.log("its a call the Function")
//     }, 1000);
// }


// itself(HeyGoodDay)


// function doMath(a, b, callback) {
//     callback(a, b)
// }

// function add(a, b) {
//     console.log("Sum is:", a + b);
// }

// doMath(5, 10, add); // Output: "Sum is: 15"

// function isEvenNumber(num) {
//     return new Promise((resolve, rejects) => {
//         if (num % 2 == 0) {
//             resolve("Even number")
//         }
//         else {
//             rejects("Odd number")
//         }
//     })
// }



// isEvenNumber(5).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })



// const fristPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Resolved FirstPromise")
//     }, 2000)
// })

// const secondPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Resolved SecondPromise")
//     }, 2000)
// })

function calculate(a, b, callback) {
    return callback(a, b)
}

function addition(a, b) {
    console.log(a + b)
}
function Subtarction(a, b) {
    console.log(a - b)
}
calculate(10, 20, addition)
calculate(10, 20, Subtarction)

