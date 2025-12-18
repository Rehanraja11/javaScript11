
function play() {
    return setTimeout(() => {
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
    }, 11000)
}

let mainDiv = document.querySelector('#clock')
let submitbtn = document.querySelector('#submit')

submitbtn.addEventListener('click', () => {
    return setTimeout(() => {
        mainDiv.style.backgroundColor = "yellow"
        submitbtn.style.backgroundColor = "white"
        submitbtn.style.color = "black"
    }, 11000)
})