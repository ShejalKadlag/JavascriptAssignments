const numbersArray = [22, 32, 40, 49, 52, 60, 72, 45];

// Loop to find the first number greater than 50
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 50) {
        console.log(`The first number greater than 50 is: ${numbersArray[i]}`);
        break; 
    }
}

// Function to loop through numbers 1 to 100 and break if a number is divisible by 13
function findDivisibleBy13() {
    for (let i = 1; i <= 100; i++) {
        if (i % 13 === 0) {
            console.log(`Found a number divisible by 13: ${i}`);
            break; // Exit the loop
        }
    }
}

findDivisibleBy13();
