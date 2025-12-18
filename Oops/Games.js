class playingGames {
    constructor(name) {
        this.names = name
        console.log("This is First Execute ")
    }
    start() {
        alert(this.names + "let's Start The Game ")
    }

    run() {
        alert(this.names + "Character Will Be Run")
    }

    jump() {
        alert(this.names + "Character Will Be Jump")
    }

    lose() {
        alert(this.names + " You Lose The Game.")
    }

    win() {
        alert(this.names + " You Are The Winner")
    }
}

let Rehann = new playingGames(" Rehann ")
let alfaix = new playingGames(" Alfaiz ")

Rehann.run()
Rehann.win()
alfaix.lose()
