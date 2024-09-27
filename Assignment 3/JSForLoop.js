
 // Prints all even numbers from 1 to 100.
function printEvenNumbers() {
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  printEvenNumbers();

  
 // Calculates the factorial of a number using a for loop.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Test the function
  const n = 4;
  const result = factorial(n);
  console.log(`The factorial of ${n} is ${result}.`);