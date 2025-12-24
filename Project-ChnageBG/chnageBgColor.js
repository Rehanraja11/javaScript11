
const startcolor = function () {
    setInterval(() => {
        document.body.style.backgroundColor = randomNumber()
    }, 1000);

}
const stopcolor = function () {
    document.body.style.backgroundColor = "#fff"
}

document.querySelector('#startBtn').addEventListener("click", startcolor)
document.querySelector('#stopBtn').addEventListener("click", stopcolor)

const randomNumber = function () {
    const hexa = '0123456789ABCDEF'
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)]
    }
    return color
}

const stopnumbers = function () {

}

