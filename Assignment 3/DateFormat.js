/*QUE : Create a function that formats a given Date object into a string in the format "MM/DD/YYYY".
Write a program that logs the current date in three different formats: ISO format, locale string format, and a custom format of your choice.
*/

// Function to format a Date object as "MM/DD/YYYY"
function formatDate(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so we add 1
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// a new Date object 
const currentDate = new Date();

// current date in ISO format
console.log("ISO Format:", currentDate.toISOString());

//current date in locale string format
console.log("Locale String Format:", currentDate.toLocaleString());

//current date in custom "MM/DD/YYYY" format using the formatDate function
console.log("Custom Format (MM/DD/YYYY):", formatDate(currentDate));
