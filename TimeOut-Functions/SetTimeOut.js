setTimeout(function () {
    console.log("Name : ", "Rehann Raja ")
}, 2000)

let makeEmial = function () {
    console.log("Email :", "rehannraja4726@gmail.com")
}
setTimeout(makeEmial, 3000)


const changeText = () => {
    document.querySelector('h1').innerText = " Rehann Raja "
}
let chnageWillSTops = setTimeout(changeText, 4000)


document.querySelector("#stopBtn").addEventListener('click', function () {
    clearTimeout(chnageWillSTops)
    console.log("CHNAGE TEXT WILL BE STOPPED")
})





