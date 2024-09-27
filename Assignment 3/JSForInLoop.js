// Creating a person object
const person = {
    name: "Sejal",
    age: 22,
    job: "Software Developer",
    city: "Pune"
};

//use for...in loop
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Sums all numeric properties of an object using a for...in loop.
function sumNumericProperties(obj) {
    let sum = 0;
    for (const property in obj) {
      if (typeof obj[property] === "number") {
        sum += obj[property];
      }
    }
    return sum;
  }
  
  // Test the function
  const person1 = {
    name: "Neha Sharma",
    age: 30,
    job: "Software Engineer",
    height: 170,
    weight: 75
  };
  
  const sum = sumNumericProperties(person1);
  console.log(`The sum of the numeric properties is ${sum}.`);

