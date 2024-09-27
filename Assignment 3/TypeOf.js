// Function to return the type of a variable
function getTypeOf(variable) {
    return typeof variable;
  }
  
  //variables of different types
  let myString = "Hello, world!";
  let myNumber = 50;
  let myObject = { name: "Sejal", age: 21 };
  let myArray = [10, 20, 30, 40, 50];
  let myFunction = function() { return "This is a function!"; };
  
  // type of each variable
  console.log("Type of myString:", getTypeOf(myString));  // string
  console.log("Type of myNumber:", getTypeOf(myNumber));  // number
  console.log("Type of myObject:", getTypeOf(myObject));  // object
  console.log("Type of myArray:", getTypeOf(myArray));    
  console.log("Type of myFunction:", getTypeOf(myFunction)); 
  