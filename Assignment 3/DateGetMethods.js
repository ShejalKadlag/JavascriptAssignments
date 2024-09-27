/*Que : Create a function that takes a Date object and returns the year, month, and day using getFullYear(), getMonth(), and getDate().
Write a program that logs the current hour, minute, and second using getHours(), getMinutes(), and getSeconds().
*/

//Function to extract and return the year, month, and day from a Date object
function getYearMonthDay(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed, add 1
    const day = date.getDate();
    return { year, month, day };
}

const currentDate = new Date();
const { year, month, day } = getYearMonthDay(currentDate);
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);


// Function for current hour, minute, and second
function logCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(`Current Time: ${hours}h:${minutes}m:${seconds}s`);
}

logCurrentTime();
