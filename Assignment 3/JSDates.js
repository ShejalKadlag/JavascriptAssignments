/*Que : Create a JavaScript program that initializes a new Date object and logs the current date and time to the console.
Write a function that takes a date string as input and returns the corresponding Date object.
*/

// Initialize a new Date object and log the current date and time
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Function to convert a date string into a Date object
function convertToDate(dateString) {
    return new Date(dateString);
}

// Example usage of the convertToDate function
const dateInput = "2024-09-25";
const dateObject = convertToDate(dateInput);
console.log("Converted Date Object:", dateObject);


