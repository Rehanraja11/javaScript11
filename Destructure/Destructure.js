const colors = ["red", "green", "blue"];


const [firstColor, ...rest] = colors;


const arr = []
arr.push(firstColor, ...rest)
console.log(arr)

arr.forEach((z) => {
    console.log("=>", z, "<=")
})
