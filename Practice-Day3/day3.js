// Level 1


//    1

// let fname = "Rehann"
// let lname = "Raja"
// let country = "india"
// let city = "una"
// let age = 19;
// let isMarrid = false;
// let year = 2005;

// console.log(typeof (fname))
// console.log(typeof (lname))
// console.log(typeof (age))
// console.log(typeof (isMarrid))
// console.log(typeof (year))
// console.log(typeof (city))
// console.log(typeof (country))

//   2

// console.log(typeof ('10' == 10))

//   3

// let v = '9.8';
// let b = Number.parseInt(v)
// console.log(b == 10)



//  4

// let a = '10'
// let n = 10;
// console.log(a == n)
// console.log(a === n)

// let b = 11;
// let c = 21;
// console.log(b < c)
// console.log(b > c)

// let d = 111;
// let f = 11;
// console.log(d != f)
// console.log(d == f)


//   5

// console.log(4 !== 4)
// let v = "python"
// let c = "jargon"

// console.log(v.length == c.length)


//  6
// console.log(4 > 3 || 10 < 12)
// console.log(!(4 > 3))
// console.log(!(4 > 3 && 10 < 12))



//  7

// let now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())



// Level 2

// let base = prompt("enter the base :")
// let height = prompt("enter the Height :")

// let area = 0.5 * base * height
// console.log(area)





//  1

// let a = prompt("enter the a ");
// let b = prompt("enter the b ");
// let c = prompt("enter the c ");


// let perameter = (a + b + c)

// console.log(perameter)


// 2

// let length = prompt("enter the lenght ");
// let width = prompt("enter the width ");


// let perameter = 2 * (length + width);
// console.log(perameter)


// 6

// let hours = prompt("Enter hours: ")
// let rate = prompt("Enter rate per hour: ")
// earnings = hours * rate
// console.log("Your weekly earning is", earnings)



// 1

// let name = "rehann";

// let p2 = name.lenght > 7 ? "long" : "short";
// console.log(p2)



// let firstName = 'Asabeneh'
// let familyName = 'Yetayeh'

// if (firstName.length > familyName.length) {
//     console.log("first Name is Longer Than family Name")
// }
// else {
//     console.log(`family is Longer Than first Name `)

// }

// 2

// let myage = 250;
// let yourage = 25;

// let finalage = myage - yourage
// console.log(`i am  ${finalage} older You`)



// 3

// let birthYear = prompt("Enter birth year:");
// birthYear = parseInt(birthYear);

// const currentYear = 2020;
// const age = currentYear - birthYear;

// let message = `You are ${age}. `;

// if (age >= 18) {
//     message += "You are old enough to drive";
// } else {
//     const yearsLeft = 18 - age;
//     message += `You will be allowed to drive after ${yearsLeft} year${yearsLeft > 1 ? 's' : ''}.`;
// }

// alert(message);



// let myage = prompt("Enter My Age :")
// let yourage = prompt("enter Your Age :")

// let age = myage - yourage;
// let age1 = yourage - myage;

// if (myage > yourage) {
//     console.log(`i am older Than You ${age}`)
// }
// else {
//     console.log(`you older Than me ${age1}`)

// }





// let a = 4 > 3 ? "4 is Greator Than 3" : "4 is less Than 3"
// console.log(a)






// let number = prompt("enter the number :");

// if (number % 2 == 0) {
//     console.log('is even')
// }
// else {
//     console.log('is odd')

// }


// let marks = prompt("enter The Marks : ")

// if (marks > 100) {
//     console.log("A")

// }
// else if (marks > 80) {
//     console.log("B")
// }
// else if (marks > 60) {
//     console.log("C")
// }

// else if (marks > 50) {
//     console.log("D")
// }
// else {
//     console.log("fail")
// }




// let day = prompt("Enter The Day")

// switch (day) {
//     case 'Sunday':
//         console.log(`${day} is Weekend Day`)
//         break;
//     case 'Monday':
//         console.log(`${day} is Working Day `)
//         break;
//     case 'Tuesday':
//         console.log(`${day} is Working Day `)
//         break;
//     case 'Wednesday':
//         console.log(`${day} is Working Day `)
//         break;
//     case 'Thursday':
//         console.log(`${day} is Working Day `)
//         break;
//     case 'Friday':
//         console.log(`${day} is Working Day `)
//         break;
//     case 'Saturday':
//         console.log(`${day} is Weekend `)
//         break;
// }




// let month = prompt("Enter A Month : ")

// switch (month) {
//     case 'January'.toUpperCase():
//         console.log(`${month} Has 31 days`)
//         break;
//     case 'February'.toUpperCase():
//         console.log(`${month} Has 28 days`)
//         break;
//     case 'March'.toUpperCase():
//         console.log(`${month} Has 31 days`)
//         break;
//     case 'April'.toUpperCase():
//         console.log(`${month} Has 30 days`)
//         break;
//     case 'May'.toUpperCase():
//         console.log(`${month} Has 31 days`)
//         break;
//     case 'June'.toUpperCase():
//         console.log(`${month} Has 30 days`)
//         break;
//     case 'July'.toUpperCase():
//         console.log(`${month} Has 31 days`)
//         break;
//     case 'August'.toUpperCase():
//         console.log(`${month} Has 31 days`)
//         break;
//     case 'September'.toUpperCase():
//         console.log(`${month} Has 30 days`)
//         break;
//     case 'October'.toUpperCase():
//         console.log(`${month} Has 31 days`)
//         break;
//     case 'November'.toUpperCase():
//         console.log(`${month} Has 30 days`)
//         break;
//     case 'December'.toUpperCase():
//         console.log(`${month} Has 31 days`)
//         break;

// }



// let year = prompt("Enter The year :")

// if (year % 4 == 0) {
//     console.log("leap year")
// }
// else {
//     console.log("not a leap year")
// }
