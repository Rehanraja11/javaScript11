let resturant = new Promise((resolve, reject) => {
    // let order = prompt("Enter The Menu You Want"); 

    setTimeout(() => {
        if (order === "Chiken") {
            resolve("Your Order is Ready")
        } else {
            reject("Your Order is Not Ready")
        }
    }, 3000)
})

resturant.then((orders) => {
    console.log(orders)
}).catch((error) => {
    console.log(error)
})