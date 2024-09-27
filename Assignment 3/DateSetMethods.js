/* Create a function that takes a Date object and modifies it to set a new day, month, and year using setDate(), setMonth(), and setFullYear().
Write a program that changes the current date to the first day of the next month.
*/

// Function to set new day, month, and year to a given Date object
function setNewDate(date, day, month, year) {
    date.setFullYear(year);
    date.setMonth(month - 1); // Months are zero-indexed, subtract 1
    date.setDate(day);
    return date;
}

let exampleDate = new Date(); // Current date
console.log("Original Date:", exampleDate);
let modifiedDate = setNewDate(exampleDate, 20, 10, 2025); // Set to October 20, 2025
console.log("Modified Date:", modifiedDate);


// Function to change the current date to the first day of the next month
function setToFirstDayNextMonth(date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    // If the current month is December, move to January of the next year
    if (currentMonth === 11) {
        date.setFullYear(currentYear + 1); // Move to next year
        date.setMonth(0); 
    } else {
        date.setMonth(currentMonth + 1); // Move to next month
    }

    date.setDate(1); // Set to the first day of the month
    return date;
}

let currentDate = new Date(); // Get the current date
console.log("Original Date:", currentDate);
let nextMonthDate = setToFirstDayNextMonth(currentDate); // Set to first day of next month
console.log("Updated Date (First Day of Next Month):", nextMonthDate);
