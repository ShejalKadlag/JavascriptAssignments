
let arr = [1, 2, 3, 4, 5];

// Use array destructuring to extract the first two elements
let [first, second] = arr;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// Function to destructure object properties and return a formatted string
function formatObject({ name, age, education }) {
    return `Name: ${name}, Age: ${age}, Education: ${education}`;
  }
  
  //object
  let person = {
    name: "Neha",
    age: 21,
    education: "Mca"
  };
  
  console.log(formatObject(person));  
  