// Task: Practice callbacks that receive parameters

// 1. Create a function that processes numbers and uses callback for result
function processNumbers(num1, num2, callback) {
    const sum = num1 + num2;
    const product = num1 * num2;
    callback(sum, product);
}

// 2. Create different callback functions
function displayResult(sum, product) {
    console.log(`The sum is ${sum} The Product is ${product}`);

}

function findMax(sum, product) {
    const max = sum > product ? sum : product;
    console.log(`The larger value is ${max}`);
}

// 3. Test your functions:
processNumbers(5, 3, displayResult);
processNumbers(4, 6, findMax);
processNumbers(2, 8, (sum, product) => {
    console.log(`Sum: ${sum}, Product: ${product}`);
});

