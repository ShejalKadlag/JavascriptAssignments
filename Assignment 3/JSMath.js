/* Que : Write a function that takes a number and returns its square root using Math.sqrt().
Create a program that generates a random number between 1 and 100 using Math.random() and rounds it to the nearest whole number.
 */

//function for square root
function squareRoot(number) {
    return Math.sqrt(number);
  }

  //call function
  console.log("Square Root:");
  console.log(squareRoot(64));


// Function to generate a random number between 1 and 100 and round it
function generateRandomNumber() {
    const randomNumber = Math.random() * 100; 
    return Math.round(randomNumber); // Rounds the number to the nearest whole number
}

const randomNum = generateRandomNumber();
console.log("Random number (1-100) rounded to nearest whole number:", randomNum);
