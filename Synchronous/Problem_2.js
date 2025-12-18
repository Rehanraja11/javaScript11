// // Task: Practice with setTimeout and setInterval

// 1. Create a countdown timer from 5 to 0
function countdown() {
    let count = 5;
    let timerCountdown = setInterval(() => {
        console.log(count)
        count--;

        if (count < 0) {
            clearInterval(timerCountdown)
            console.log("Time's up!")
        }
    }, 1000)
}



// 2. Create a function that stops executing after 5 seconds
function stopAfterFiveSeconds() {

    const interval = setInterval(() => {
        console.log('executing');
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('stops executing after 5 seconds.');
    }, 5000);




}

// 3. Create a delayed greeting function
function delayedGreeting(name, delay) {
    setTimeout(() => {
        console.log(name)
    }, delay)

}

// Test your functions:
countdown();
stopAfterFiveSeconds();
delayedGreeting("Alice", 3000);

