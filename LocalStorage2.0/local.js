localStorage.setItem(1, "Rehann Raja")
localStorage.setItem("Name1", "Rehann11")
let b = localStorage.getItem("Name")
// console.log(b)
localStorage.removeItem("Name1")
localStorage.clear()


// with Arrays



let allNames = ["Rehann", "Abbas", "Soheb", "Alfaix", "Faizal"]
localStorage.setItem("Names", JSON.stringify(allNames))


let recoverName = JSON.parse(localStorage.getItem("Names"))
console.log(recoverName)

// With Object
// let user = {
//     name: "soyab",
//     age: 25,
//     city: "una"
// };
// localStorage.setItem("user", JSON.stringify(user));


// let storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser);