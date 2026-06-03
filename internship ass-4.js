// Student Details
let studentName = "Vijay";
let marks = 78;
let attendance = 82;
let department = "CS";

console.log("Student Name:", studentName);
console.log("Marks:", marks);
console.log("Attendance:", attendance + "%");

// 1 & 2. Pass or Fail using if-else
if (marks >= 35) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

// 3. Grade using if-else if ladder
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 35) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// 4. Department using switch statement
switch (department) {
    case "CS":
        console.log("Department: Computer Science");
        break;
    case "IT":
        console.log("Department: Information Technology");
        break;
    case "CE":
        console.log("Department: Computer Engineering");
        break;
    case "ME":
        console.log("Department: Mechanical Engineering");
        break;
    default:
        console.log("Department: Invalid Department");
}

// 5. Attendance Eligibility using Ternary Operator
let eligibility = attendance >= 75
    ? "Eligible for Exam"
    : "Not Eligible for Exam";

console.log("Exam Eligibility:", eligibility);


// Looping Statements


// For Loop: Print numbers 1 to 20
console.log("\nFor Loop (1 to 20):");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// While Loop: Print even numbers 2 to 20
console.log("\nWhile Loop (Even Numbers 2 to 20):");
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}

// Do-While Loop: Print numbers 10 to 1
console.log("\nDo-While Loop (10 to 1):");
let reverse = 10;
do {
    console.log(reverse);
    reverse--;
} while (reverse >= 1);


// Break Statement

console.log("\nBreak Example:");
for (let i = 1; i <= 20; i++) {
    if (i === 15) {
        break;
    }
    console.log(i);
}


// Continue Statement

console.log("\nContinue Example:");
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}