// Simple Promise UseCase Example

// function resturant() {
//     return new Promise((resolve, reject) => {

//         const isfood = false
//         if (isfood) {
//             resolve("Your Food is Ready")
//         }
//         else {
//             reject("Food is Empty")
//         }
//     })
// }

// resturant().then((r) => {
//     console.log(r)
// }).catch((error) => {
//     console.log(error)
// })



// Promise.All And Promise.race

// const orderFood = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Your Food is Ready")
//     }, 2000)
// })
// const orderdrink = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Your Drink is Ready")
//     }, 1500)
// })
// const orderdessert = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Your Dessert is Ready")
//     }, 500)
// })
// //      all() all Are The True
// Promise.all([orderFood, orderdrink, orderdessert])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((erroe) => {
//         console.log(erroe)
//     })



let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Your Work is Complated")
    }, 2000)
})

myPromise.then((x) => {
    console.log(x)
})