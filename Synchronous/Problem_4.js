// Task: Create basic promises

// 1. Create a promise that resolves after 2 seconds
const simplePromise = new Promise((resolve, reject) => {
  // Your code here
  setTimeout(() => {
    resolve("Resolve After 2")
  }, 2000)
});

// Use the promise:
simplePromise.then((result) => {
  console.log(result);
});


// 2. Create a promise that sometimes fails
function randomPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();

    setTimeout(() => {
      if (random > 0.5) {
        resolve("You Win")
        // Your code here
      } else {
        // Reject with error message
        reject("You Lose")
      }
    }, 1000);
  });
}

// Test the random promise:
randomPromise()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });