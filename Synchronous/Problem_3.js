// Task: Create and use basic callback functions

// 1. Create a function that takes a callback and executes it
function executeCallback(callback) {
    console.log("About to execute callback");
    callback();
    console.log("Callback executed");
}

// 2. Create different callback functions to test
function sayHello() {
    console.log("Hello from callback!");
}

function displayTime() {
    console.log("Current time is:", new Date().toLocaleTimeString());
}

// 3. Test your callbacks:
executeCallback(sayHello);
executeCallback(displayTime);
executeCallback(() => console.log("Anonymous callback"));
