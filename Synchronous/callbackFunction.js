function chekCallback(name) {
    console.log("Hey  " + name)
}

function main(callback) {
    callback("Sahil")
}

main(chekCallback)



function getuser(n, callback) {
    console.log("Hello", n)
    callback();
}

function Goodby() {
    console.log("Goodby")
}

getuser("Rehann", Goodby)


function getuser(callback) {
    console.log("Fetching The Data...")

    setTimeout(() => {
        console.log("DaTa Fetch :")
        callback()
    }, 2000)
}

function fetchuser() {
    console.log("Data Proggres")
}

getuser(fetchuser)





