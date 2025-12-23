let choices = ['snack', 'water', 'gun'];
let computer = choices[Math.floor(Math.random() * choices.length)];
let user = prompt("Enter your choice (snack, water, gun):").toLowerCase();

if (user === computer) {
    console.log("It's a draw!");
} else if (
    (user === 'snack' && computer === 'water') ||
    (user === 'water' && computer === 'gun') ||
    (user === 'gun' && computer === 'snack')
) {
    console.log("You win!");
} else {
    console.log("Computer wins!");
}
