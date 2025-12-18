
// Task: Create custom array methods using callbacks

// 1. Create a custom forEach function
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// 2. Create a custom map function
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// 3. Create a custom filter function
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Test your custom functions:
const numbers = [1, 2, 3, 4, 5];

console.log("custom ForEach output:");
customForEach(numbers, (num) => console.log(num * 2));

const doubled = customMap(numbers, (num) => num * 2);
console.log("Doubled:", doubled);
const evens = customFilter(numbers, (num) => num % 2 === 0);
console.log("Even numbers:", evens);
