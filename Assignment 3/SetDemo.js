//Creates a Set from an array of numbers and log its size.
const numbers = [1, 4, 3, 4, 5, 2, 3, 4, 5, 6];
const numberSet = new Set(numbers);

console.log(`Set size: ${numberSet.size}`);


// Adds and removes elements from a Set.
const mySet = new Set([1, 2, 3,4,5]);

console.log(`Initial Set: ${[...mySet]}`);

// Add an element
mySet.add(9);
console.log(`After adding 9: ${[...mySet]}`);

// Remove an element
mySet.delete(2);
console.log(`After removing 2: ${[...mySet]}`);

// Check if an element is present
console.log(`Is 3 present? ${mySet.has(3)}`);

// Remove all elements
mySet.clear();
console.log(`After clearing: ${[...mySet]}`);

