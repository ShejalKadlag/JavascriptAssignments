/* Que: Write a function that checks if a number is positive, negative, or zero, and returns a boolean for each case.
Create a program that uses boolean expressions to evaluate whether a person is eligible to vote (age 18 or older).
*/

// Function to check if a number is positive, negative, or zero
function checkNumberType(num) {
    return {
        isPositive: number > 0,
        isNegative: number < 0,
        isZero: number === 0
    };
}
const number = -15;
const result = checkNumberType(checkNumberType(number));
console.log(`Is ${number} positive?`, result.isPositive);
console.log(`Is ${number} negative?`, result.isNegative);
console.log(`Is ${number} zero?`, result.isZero);


// Function to check if a person is eligible to vote 
function isEligibleToVote(age) {
    return age >= 18; 
}

const age = 21;
if (isEligibleToVote(age)) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}
