localStorage.setItem(1, "Rehann Raja")
localStorage.setItem("Name1", "Rehann11")
let b = localStorage.getItem("Name")
console.log(b)
localStorage.removeItem("Name1")
localStorage.clear()


// with Arrays
// let namessssss = prompt("Enter The Name")


let allnames = ["Ronaldo", "Virat", "Dhoni", "Jethalal"]
localStorage.setItem("BestNames", JSON.stringify(allnames))


let getNames = JSON.parse(localStorage.getItem("BestNames")) || []
// getNames.push(namessssss)

localStorage.setItem("bestNames", JSON.stringify(getNames))

let recover = JSON.parse(localStorage(get))
console.log(recover)




// With Object

// let user = {
//     name: "soyab",
//     age: 25,
//     city: "una"
// };
// localStorage.setItem("user", JSON.stringify(user));



// let storedUser = JSON.parse(localStorage.getItem("user"));

// console.log(storedUser);