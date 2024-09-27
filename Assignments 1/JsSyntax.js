// Variable declarations
let name = 'sejal kadlag';
let age = 21;
const isAdmin = true;

// Function definition
function greetUser() {
  if (isAdmin) {
    console.log(`Hello, admin ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}
// Control structure: conditional statement
if (age >= 18) {
  console.log('You are eligible to vote.');
} else {
  console.log('You are not eligible to vote.');
}

// Function call
greetUser();
