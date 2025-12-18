// while loops
// let number = 0;
// while (number < 5) {
//     console.log(number);
//     number++;
// }




// while loops with if Statment

// let num = 0;
// while (num < 5) {
//     console.log(num);
//     num++;
//     if (num == 4) {
//         break;
//     }
// }




// for loops


// for (let num = 1; num <= 11; num++) {
//     console.log(num);
// }



// for (let i = 1; i <= 10; i++) {

//     if (i % 2 == 0) {
//         console.log("Numbers is", i);
//     }
// }


// do while

// let num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num <= 20);


// let str = "Rehan Raja";

// for (const sum of str) {
//     console.log(sum)
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// arr.forEach(arr => {
//     console.log(arr)
// });





// // Problem 1

// let Correct = 11;
// let Cor = 21;
// let num;

// while (num != Correct && Cor) {
//     num = prompt("Please Enter A Correct Number : ");
// }
// console.log("Yess You Are Enter A Correct Number")



// let arr = [10, 25, 15, 10, 23, 52];

// arr.forEach((Arrays) => {
//     console.log(Arrays * 2  )
// })


// let Name = "Rehann";
// let array = Array.from(Name);
// console.log(array);

// let rehann = "Rehann Raja";

// for (const Name in rehann) {
//     console.log(rehann)
// }

// let myobj = {
//     name: "Rehan",
//     age: 19
// }

// for (const object in myobj) {
//     console.log(object)
// }




// let arr = [21, 25, 36, 45, 12, 41]

// let arrays = arr.map((arays,) => {
//     console.log(arays);
//     return arays + 5;
// })
// console.log(arrays)


// let marks = [90, 68, 80, 56, 95, 32, 100];

// let oo = marks.forEach((main) => {
//     console.log(main)
//     return main + 10
// })
// console.log(oo)



// let o = marks.map((Arrays) => {
//     console.log(Arrays);
//     return Arrays + 10
// })

// console.log(o)


// let arr = [1, 25, 36, 45, 11, 20, 32, 51, 0, 3, 5, 6, 10];

// let newarray = arr.filter((value) => {
//     // return value > 10
//     console.log(value)
// })

// // console.log(newarray)



// Pattern Style



/*

*                    *****
**                   *****
***                  *****
****                 *****
*****                *****

*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("R")
//     }
//     document.write("<br>")
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write("R")
//     }
//     document.write("<br>")
// }



/*

*****
****
***
**
*

*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         document.write("*")
//     }
//     document.write("<br>")

// }



/*

*
**
***
****
***
**
*


*/

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>")
// }
// for (let i = 1; i <= 4; i++) {
//     for (let j = 4; j >= i; j--) {
//         document.write("*");
//     }
//     document.write("<br>")
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= 1; j--) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// function chek(a) {

//     if (a % 2 == 0) {
//         console.log("even")
//     }
//     else {
//         console.log("odd")
//     }
// }

// chek(10)



// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("  *  ");
//     }
//     document.write(" <br> ");
// }
// for (let i = 1; i <= 5; i++) {
//     for (let j = 4; j >= i; j--) {
//         document.write("  *  ");
//     }
//     document.write(" <br> ");
// }


// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write("  *  ");
//     }
//     document.write(" <br> ");
// }


// let Rows = 3

// for (let i = 1; i <= Rows; i++) {
//     for (let j = 1; j <= Rows - i; j++) {
//         document.write("&nbsp")
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     for (let j = 1; j <= Rows - i; j++) {
//         document.write("&nbsp")
//     }

//     document.write("<br>")

// }



// for (let i = 2; i >= 1; i--) {
//     for (let j = Rows; j >= 1 + i; j--) {
//         document.write("&nbsp")
//     }
//     for (let j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     for (let j = 1; j <= Rows - i; j++) {
//         document.write("&nbsp")
//     }

//     document.write("<br>")

// }

// let sum = 0;

// for (let num = 1; num <= 100; num++) {
//     if (num % 2 == 0) {
//         console.log(num + " Even")
//     }
//     else {
//         console.log(num + " odd")

//     }

//     sum += num

// }
// console.log(sum)


