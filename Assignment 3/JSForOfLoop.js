// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Iterate through the array and each number multiplied by 2
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}


// Function to convert an iterable (like an array or string) into an array of its elements
function toArray(iterable) {
    return Array.from(iterable);
}

const exampleArray = [10, 20, 30,40,50];
console.log(toArray(exampleArray));

// Example with a string
const exampleString = "Sejal";
console.log(toArray(exampleString));
