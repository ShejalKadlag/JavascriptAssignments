/* Write a program that takes a day number (1-7) and returns the corresponding day of the week.
Create a function that evaluates a simple expression (like a small calculator) using a switch statement.*/

// Function to return the day of the week on the  day number (1-7)
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day number"; 
    }
}

const dayNumber = 6; 
console.log(`The day of the week for ${dayNumber} is ${getDayOfWeek(dayNumber)}`);


// Function for simple arithmetic expression using a switch statement
function calculate(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero";
            }
            break;
        default:
            return "Invalid operator"; 
    }
    return result;
}

const num1 = 21;
const operator = '/'; // operator (+, -, *, /) 
const num2 = 7;
console.log(`${num1} ${operator} ${num2} = ${calculate(num1, operator, num2)}`);


