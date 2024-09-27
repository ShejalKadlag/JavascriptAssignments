// Function to validate an email using a regular expression
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  let email1 = "shejalk@gmail.com";
  let email2 = "test-email@com";
  
  console.log("Is email1 valid?", validateEmail(email1));  
  console.log("Is email2 valid?", validateEmail(email2));  

  // Function to extract all digits from a string
function extractDigits(str) {
    const digitRegex = /\d+/g;
    return str.match(digitRegex);
  }
  
  // Example usage
  let inputStr = "My phone number is 968-013-45-30";
  let digits = extractDigits(inputStr);
  
  console.log("Extracted digits:", digits);  
  
  