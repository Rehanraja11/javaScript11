
// // Use if/else if/else to return letter grade
// // A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: 0-59
// // Also handle invalid inputs




// // const calculateGrade = (score) => {

// //     if (score >= 90 && score <= 100) return "A"
// //     else if (score >= 80 && score <= 89) return "B"
// //     else if (score >= 70 && score <= 79) return "C"
// //     else if (score >= 60 && score <= 69) return "D"
// //     else if (score >= 0 && score <= 59) return "F"
// //     else return "invalid Input"

// // };

// // // Test with various scores
// // const students = [
// //     { name: "Alice", maths: 85, science: 80, english: 75, hindi: 88, gujarati: 89 },
// //     { name: "Bob", maths: 89, science: 81, english: 55, hindi: 78, gujarati: 90 },
// //     { name: "Charlie", maths: 55, science: 58, english: 65, hindi: 71, gujarati: 70 },
// //     { name: "Diana", maths: 25, science: 30, english: 52, hindi: 38, gujarati: 49 },
// //     { name: "Eve", maths: 65, science: 60, english: 70, hindi: 58, gujarati: 49 }
// // ];
// // for (const stud of students) {
// //     let totalMarks = 0
// //     let average = 0
// //     let subjectCount = 0

// //     for (const key in stud) {
// //         if (key !== "name") {
// //             totalMarks += stud[key]
// //             subjectCount++
// //         }
// //         average = totalMarks / subjectCount
// //     }

// //     let grade = calculateGrade(average)
// //     console.log(stud.name, grade);

// // }





// const users = [
//     { username: "admin", password: "admin123", role: "admin" },
//     { username: "user1", password: "pass123", role: "user" },
//     { username: "user2", password: "mypass", role: "user" },
// ];


// const authenticateUser = (username, password) => {
//     let loginSucces = users.find(v => v.username === username && v.password === password)

//     if (loginSucces) {
//         console.log(`login successfully ${loginSucces.role}`)
//     }
//     else {
//         console.log(`invalid Username And Password`)

//     }





// };
// console.log(authenticateUser("user2", "mypass"))

// const authenticateRole = (role) => {
//     const userRole = users.find(r => r.role === role)
//     switch (userRole.role) {
//         case "admin":
//             return "You Are A Admin ";
//             break;
//         case "user":
//             return "You Are A user ";
//             break;
//         default:
//             return `invalid Users`

//     }


//     console.log(authenticateRole("user"))









// // // Use conditionals to:
// // // 1. Check if user exists
// // // 2. Verify password
// // // 3. Return appropriate message based on role
// // // Use both if/else and switch statements
