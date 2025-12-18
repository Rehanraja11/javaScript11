// This is the callback function
function callFriend() {
    console.log("hey");
}

// This is a function that simulates doing homework
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework...`);

    // Simulate time it takes to do homework (like a delay)
    setTimeout(function () {
        console.log(`${subject} homework is done!`);
        callback(); // Call the callback function
    }, 3000);
}

// Use the function and pass the callback
doHomework("Math", callFriend);
