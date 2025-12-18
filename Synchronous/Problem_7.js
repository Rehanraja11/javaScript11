// Task: Convert callback-based functions to promises

// Original callback version:
function loadUserData(userId, callback) {
    setTimeout(() => {
        if (userId > 0) {
            callback(null, { id: userId, name: `User${userId}`, email: `user${userId}@example.com` });
        } else {
            callback(new Error("Invalid user ID"));
        }
    }, 1500);
}

// 1. Convert to promise version:
function loadUserDataPromise(userId) {
    // Return a promise that does the same as the callback version

}

// 2. Test both versions:
console.log("Testing callback version:");
loadUserData(1, (error, data) => {
    if (error) {
        console.log("Callback Error:", error.message);
    } else {
        console.log("Callback Success:", data);
    }
});

console.log("Testing promise version:");
loadUserDataPromise(1)
    .then((data) => {
        console.log("Promise Success:", data);
    })
    .catch((error) => {
        console.log("Promise Error:", error.message);
    });

// Test with invalid ID:
loadUserDataPromise(-1)
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.log("Error caught:", error.message);
    });