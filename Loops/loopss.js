let count = 10;

let i = 1;
while (i <= count) {
    console.log(count + " Hey")
    i++;
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    maths: "",
    english: 90,
    history: "",
    test: null
};

var cleanedStudent = {};

for (var key in student) {
    if (
        student[key] !== "" &&
        student[key] !== null &&
        student[key] !== undefined
    ) {
        cleanedStudent[key] = student[key];
    }
}

console.log(cleanedStudent);
