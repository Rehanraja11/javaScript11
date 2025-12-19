
function setAlarm(second) {
    return setTimeout(() => {
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
    }, second * 1000)
}

let a = prompt("Enter You Want to Set ALarm ")
setAlarm(parseInt(a))

let mainDiv = document.querySelector('#clock')
let submitbtn = document.querySelector('#submit')

submitbtn.addEventListener('click', () => {
    return setTimeout(() => {
        mainDiv.style.backgroundColor = "yellow"
        submitbtn.style.backgroundColor = "white"
        submitbtn.style.color = "black"
    }, 10000)
})