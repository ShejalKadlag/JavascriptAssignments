// Declaration: declaring a variable
let myName;

// Assignment: assigning a value to a variable
myName = 'Sejal';
console.log(myName);

// Conditional: using an if-else statement to check a condition
if (myName === 'Sejal') {
  console.log('Hello, Sejal!');
} else {
  console.log('Hello, stranger!');
}

// Loop: using a for loop to iterate over an array
let colors = ['red', 'green', 'blue','yellow'];
for (let i = 0; i < colors.length; i++) {
  console.log(`The color at index ${i} is ${colors[i]}`);
}

// Function call: calling a function to perform a task
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Neha');

// Another example of a function call: calling a function to calculate the area of a rectangle
function calculateArea(side) {
  return side * side;
}
let area = calculateArea(4);
console.log(`The area of the square is ${area} square units.`);

