/* Que: Write a function that compares two numbers and returns a string indicating which is larger, or if they are equal.
Create a program that checks if a given string is equal to "JavaScript" using both strict and loose equality checks.
*/

// Function to compare two numbers
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return `${num1} is larger than ${num2}`;
    } else if (num1 < num2) {
        return `${num1} is smaller than ${num2}`;
    } else {
        return `${num1} and ${num2} are equal`;
    }
}

const result = compareNumbers(90, 75);
console.log(result);


// Define the string to check
const str = "JavaScript";

// Strict equality check (===)
const strictEqual = str === "JavaScript";
console.log(`Strict equality check: ${str} === "JavaScript" is ${strictEqual}`);

// Loose equality check (==)
const looseEqual = str == "Java";
console.log(`Loose equality check: ${str} == "JavaScript" is ${looseEqual}`);


