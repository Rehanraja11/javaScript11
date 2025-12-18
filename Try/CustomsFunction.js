console.log("hello")
// customForEach





// function ownForEach(items, callback) {
//     for (let i = 0; i < items.length; i++) {
//         callback(items[i], i, items)
//     }
// }

// let values = [50, 42, 35, 65]

// function get(z, index, arr) { console.log(`${index} of ${z}`, arr) }
// ownForEach(values, get)





// customMap





// function ownMap(items, callback) {

//     let thefinalResult = []
//     for (let i = 0; i < items.length; i++) {
//         thefinalResult.push(callback(items[i]))
//     }


//     return thefinalResult
// }


// let fruits = ["Apple", "Banana", "Graps", "Pinaple"]
// let chekFruits = ownMap(fruits, function (fruit) {
//     return fruit
// })
// console.log(chekFruits)


// customFilter





// function ownfilter(arrays, callback) {
//     let filterdResult = []
//     for (let i = 0; i < arrays.length; i++) {
//         if (callback(arrays[i])) {
//             filterdResult.push(arrays[i])
//         }
//     }
//     return filterdResult
// }

// let names = ["Rehann", "Hasnain", "Soyab", "abbasBhai", "Alfaiz"]

// function mainFilters(z) {
//     return z.length < 7
// }

// let finalFilterd = ownfilter(names, mainFilters)
// console.log(finalFilterd)




// customReduce




// function ownReduce(arr, reducefunc, initial) {
//     let acc = initial;

//     for (let i = 0; i < arr.length; i++) {
//         acc = reducefunc(acc, arr[i]);
//     }
//     return acc;
// }

// const numbers = [1, 2, 3, 4];

// const total = ownReduce(numbers, (a, b) => a + b, 0);
// console.log(total);

function ownfoe(items, callback, acc, ...callback1) {

    for (let i = 0; i < items.length; i++) {
        acc = (callback(acc, items[i]))
    }
    return acc
}

let arrays = [10, 52, 65, 45, 66]

let thefinall = ownfoe(arrays, (z, c) => {
    return z + c
}, 0, (x, y) => {
    return x - y
}
)
console.log(thefinall)




// Custom indexOf function
// function customIndexOf(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }


// const fruits = ["apple", "banana", "cherry"];
// console.log(customIndexOf(fruits, "banana"));





// function customSome(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) return true;
//     }
//     return false;
// }


// console.log(customSome([1, 2, 3], n => n > 2));








function customEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) return false;
    }
    return true;
}
console.log(customEvery([2, 4, 6], n => n % 2 === 0));


// function customSort(arr, compareFn) {
//     let n = arr.length;


//     let sortedArr = arr.slice();

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {

//             if (compareFn(sortedArr[j], sortedArr[j + 1]) > 0) {
//                 // Swap elements
//                 let temp = sortedArr[j];
//                 sortedArr[j] = sortedArr[j + 1];
//                 sortedArr[j + 1] = temp;
//             }
//         }
//     }
//     return sortedArr;
// }


// let numbers = [5, 2, 9, 1, 5, 6];

// let sortedNumbers = simpleSort(numbers);

// console.log(sortedNumbers);

