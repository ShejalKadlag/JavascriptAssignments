/* Que : Write a function that generates a random integer between two specified values.
Create an array of 10 random numbers and write a program to find the maximum and minimum values.
 */

// Function to generate a random integer between two specified values
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInteger(20, 100);
console.log(`Random number between 20 and 100: ${randomNumber}`);


//function to generate random integers
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// Create an array to store the random numbers
const randomNumbers = [];

// random numbers between 1 and 100
for (let i = 0; i < 10; i++) {
  randomNumbers.push(randomInteger(1, 100));
}

// Find the maximum and minimum values
const max = Math.max(...randomNumbers);
const min = Math.min(...randomNumbers);

// results
console.log("Random Numbers:");
console.log(randomNumbers);
console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);

