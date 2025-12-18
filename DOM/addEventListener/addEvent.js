

// Add EventListener 

let bulbs = document.querySelector("#bulb")
let addBTN = document.querySelector("button")

let flag = 0;
addBTN.addEventListener("mousemove", function () {
    if (flag == 0) {

        bulbs.style.backgroundColor = "White"

        addBTN.innerHTML = "OFF"
        addBTN.style.backgroundColor = "black"
        addBTN.style.color = "white"
        flag = 1
        console.log("yes")
    }
    else {
        bulbs.style.backgroundColor = "black"
        addBTN.innerHTML = "ON"
        addBTN.style.backgroundColor = "white"
        addBTN.style.color = "black"
        flag = 0;
        console.log("no")


    }
})


