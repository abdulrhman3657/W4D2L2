let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

let namesCounter = 0;

for (let i = 0; i < students.length; i++){

    if(students[i].startsWith('A') || students[i].startsWith('a')) {
        console.log(students[i])
    }

    if(students[i].length > 4) {
        namesCounter++;
    }

}

console.log(namesCounter);

let studentsUpper = students.map((name) => {
    return name.toUpperCase();
})

console.log(studentsUpper);

console.log(students.find((name) => {
    return name.includes("R") ||  name.includes("r")
}))

console.log(students.sort())

console.log(students.includes("Omar"))

let letterCounter = 0;

for (let i = 0; i < students.length; i++){
    letterCounter += students[i].length
}

console.log(letterCounter);

let even_letter_students = []

for (let i = 0; i < students.length; i++){

    if (students[i].length % 2 == 0) {
        even_letter_students.push(students[i]);
    }

}

console.log(even_letter_students);


let Reverse = []

for (let i = 0; i < students.length; i++){
    Reverse.push(students[i].split('').reverse().join(''));
}

console.log(Reverse);


console.log(students.filter((name) => {
    return !name.includes("o") && !name.includes("O")
}))


// let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

let newArr = [ ["Ali", [85, 90, 78]], ["Sara", [99, 100, 56]], ["Ahmed", [85, 90, 78]], ["Lana", [85, 90, 78]], ["Omar", [85, 90, 78]], ["Noor", [85, 90, 78]]];

students.push(newArr);

// students[6]

console.log("-----------------")

let StudentSum = 0;

let studentsList = students[6]

for (let i = 0; i < studentsList.length; i++) {

    // console.log(studentsList[i])

    for(let j = 0; j < studentsList[i][1].length; j++) {
        StudentSum += studentsList[i][1][j];
    }
    studentsList[i].push(StudentSum /studentsList[i][1].length)
    StudentSum = 0
}

console.log(studentsList)

