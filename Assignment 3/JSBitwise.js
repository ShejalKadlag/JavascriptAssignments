
let num1 = 5;  // Binary: 101
let num2 = 6;  // Binary: 110

// Bitwise AND (&)
let andResult = num1 & num2;
console.log("Bitwise AND:", andResult);  

// Bitwise OR (|)
let orResult = num1 | num2;
console.log("Bitwise OR:", orResult);  

// Bitwise NOT (~) on num1
let notResult = ~num1;
console.log("Bitwise NOT of num1:", notResult);  

// Bitwise NOT (~) on num2
let notResult2 = ~num2;
console.log("Bitwise NOT of num2:", notResult2);  


// function that takes two binary strings and returns their bitwise XOR result

function binaryXOR(binStr1, binStr2) {
    // Convert the binary strings to numbers
    let num1 = parseInt(binStr1, 2);
    let num2 = parseInt(binStr2, 2);
  
    // Calculate bitwise XOR 
    let xorResult = num1 ^ num2;
    return xorResult.toString(2);
  }
  let binStr1 = "101";
  let binStr2 = "011";
  console.log(`Bitwise XOR: ${binStr1} ^ ${binStr2} = ${binaryXOR(binStr1, binStr2)}`);



