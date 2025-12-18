let Numbers = [1, 2, 3, 4, 5, 5, 25, 3, 6, 1, 2, 5, 11];
// let all = ["Rehann", 11, true, null, undefined]
// // console.log(all)

// Numbers.push(6)
// Numbers.pop()
// console.log(Numbers)

// all.shift()
// all.unshift(121)
// console.log(all)

// console.log(Numbers.concat(all))
// console.log(Numbers.slice(1, 4))

// Numbers.sort()
// Numbers.reverse();
// console.log(Numbers)



// for each is the use case is the for each method are not a give a new an array
// map method are make return a new array 
//  Filter Method are working a chek the condition and filterd a value
// reduce method are 2 argumnet and like a sum array to firstl sum t value and after a 1 value 



//  for each Metod 


let Marks = [90, 14, 12, 55, 69, 36, 21]

// let are = Marks.forEach((Arra) => {
//     console.log(Arra)

// })


// map method

// let Area = Marks.map((Value, index) => {
//     console.log(Value, index)
//     return Value + index
// })

// console.log(Area)




//  Filter method
// its Chek a Return Value

// let Arr = [10, 2, 3, 5, 4, 6, 2, 10, 11, 2, 12]
// let values = Arr.filter((Value) => {
//     console.log(Value)
//     return Value > 5
// })

// console.log(values)


//   Reduce Method

// let arrays = [12, 32, 5, 1, 21, 25]

// let valuesss = arrays.reduce((value1, value2) => {
//     return value1 + value2;
// })

// console.log(valuesss)



// let sum = arrays.reduce((v1, v2) => {
//     return v1 * v2;
// })

// console.log(sum)



// lets practice

// let annarray = [12, 11, 20, 22, 45];
// let value = prompt("Enter A New Value")
// value = Number.parseInt(value)
// annarray.push(value)

// console.log(annarray)
// let annarray
// let value
// while (value != 0) {
//     annarray = [12, 11, 20, 22, 45];
//     value = prompt("Enter A New Value")
//     value = Number.parseInt(value)
//     annarray.push(value)
// }
// console.log(annarray)

// let arr = [20, 52, 62, 1, 23, 51, 220, 10]
// let newarr = arr.filter((Value) => {
//     return Value % 10 == 0
// })

// console.log(newarr)



// let arr = [20, 52, 62, 1, 23, 51, 220, 10]

// let square = arr.map((a) => {
//     return a * a
// })

// console.log(square)

// let arr = [1, 2, 3, 4, 5]
// let fact = arr.reduce((f1, f2) => {
//     return f1 * f2;
// })

// console.log(fact)







//  Gusse The Number
// let a = Math.random() * 15
// let b = Math.floor(a)
// console.log(b)
// let Try = 0;

// let yournumber
// while (b != yournumber) {
//     yournumber = prompt("Enter A number Right Number");
//     Try++

// }
// alert(`You Are Enter A right Number it's A ${b} and You are Tryed a ${Try}`);

// if (Try <= 1) {
//     alert("Your knowledge is 100%");
// }
// else if (Try <= 3) {
//     alert("Your knowledge is 80%");
// }
// else if (Try <= 5) {
//     alert("Your knowledge is 50%");
// }
// else if (Try <= 7) {
//     alert("Your knowledge is 30%");
// }


// let sum = 0
// let arr = [10, 21, 36, 54]
// arr.forEach((N) => {
//     console.log(N)
//     sum += N;
// })
// console.log(sum)

// let arr = [10, 21, 36, 54]
// let arraaay = arr.map((nu, index) => {
//     console.log(nu, index)
//     return nu + index + 10;
// })
// console.log(arraaay)



// let arr = [10, 21, 36, 54, 55]
// let filterd = arr.filter((uff) => {
//     return uff > 50;
// })

// console.log(filterd)

// let arr = [1, 2, 3, 4, 5]

// let redur = arr.reduce((v1, v2) => {
//     return v1 * v2
// })

// console.log(redur)

// let arr = [22, 54, 85, 11, 54, 25, 11]

// let some = arr.reduce((valuesees, val) => {
//     return valuesees + val
// })
// console.log("This is the Value is reduce of ", some)

const arrayss = [20, 12, 55, 41, 21, 22, 11, 5]


// arrayss.push(111)
// arrayss.pop()

// arrayss.unshift(1222)
// arrayss.shift()
// arrayss.reverse()
// console.log(arrayss)


// let arrrrrray = arrayss.forEach((values) => {
//     return values
// })
// console.log(arrrrrray)


// let arrrrrray = arrayss.map((values) => {
//     return values + 11

// })
// console.log(arrayss)

// let marks = [1, 2, 3, 4, 5]
// let score = marks.reduce((val1, val2) => {
//     return val1 * val2
// })
// console.log(score)



// Array As Object


// let arr = [
//     { name: "rehann", age: 19 },
//     { name: "Sakir", age: 23 },
//     { name: "Sejan", age: 24 },

// ]

// console.log(arr)