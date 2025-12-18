// Task: Create functions to demonstrate blocking vs non-blocking behavior 

// Synchronous (blocking) function
function blockingFunction() {
    console.log("Blocking function started");
    // Simulate heavy computation with loop
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    console.log("Blocking function finished");
    return result;
}

// Asynchronous (non-blocking) function
function nonBlockingFunction() {
    console.log("Non-blocking function started");
    setTimeout(() => {
        // Simulate heavy computation with loop
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        console.log("Non-blocking function finished");
    }, 2000);

}

// Test both functions:
console.log("Before blocking call");
blockingFunction(); // Uncomment to test
console.log("After blocking call");

console.log("Before non-blocking call");
nonBlockingFunction();
console.log("After non-blocking call");

// Question: What's the difference in behavior?
// 1 : Java Script execute Synchronous code
// firts  loop run after next line execute
// Blocking function started
//  Blocking function finished
// Now Non-blocking function started


// 2 : Before non-blocking call
// When use Set timeout run after 4 second
// Non-blocking function started
// After non-blocking call
// After The 4 Second call
// Non-blocking function finished
