function games() {
    let freeFire = "Playing The Free Fire"
    let pubg = "Playing The pubg"

    function playGame() {
        setTimeout(() => {
            console.log(`introvert Players  ${pubg}`)
        }, 1000)
        setTimeout(() => {
            console.log(`extrovert Players  ${freeFire}`)
        }, 2000)
    }
    return playGame()

}
games()