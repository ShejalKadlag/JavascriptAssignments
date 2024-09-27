/* Write a program that takes a grade as input and outputs the corresponding letter grade (A, B, C, D, F).
Create a function that checks whether a number is even or odd and logs a message to the console.
*/

function convertGrade(grade) {
    if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else if (grade >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  // Test the function
  const grade = 75;
  const letterGrade = convertGrade(grade);
  console.log(`The letter grade for ${grade} is ${letterGrade}.`);


  // Function to check if a number is even or odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}

const number = 23; 
checkEvenOrOdd(number);
