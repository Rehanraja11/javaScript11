document.body.style.backgroundColor = "black"
document.body.style.color = "white"
let username;
document.getElementById("theSubmit").onclick = function () {
    username = document.getElementById("mytext").value;
    document.getElementById("headingg").textContent = `Hey ${username}`

}


