let str = "RehanRaja "

let chek = str.split(" ").map((word) => {
    return word.split("").reverse().join("")

})
console.log(chek)

let arrryee = [1, 2, 35, 45]

console.log(arrryee.concat(arrryee))


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 5) {

            document.write("* ")
        }
        else {
            document.write("&nbsp&nbsp&nbsp")
        }

    }
    document.write("<br>")
}

let num = prompt("Enter the Number to Revers")

n = num
let rev = 0

while (num != 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10)
}
if (n == rev) {
    console.log("Its Palindrome Number ")
}
else {
    console.log("Its Not Palindrome Number ")

}


