// Creates a Map that associates names with ages and logs each key-value pair.
 
const personMap = new Map([
    ["Sejal", 25],
    ["Neha", 30],
    ["Kajal", 21],
    ["Priya", 20]
  ]);
  
  console.log("Person Map:");
  for (const [name, age] of personMap) {
    console.log(`Name: ${name}, Age: ${age}`);
  }

// Converts an array of key-value pairs into a Map.
 
function arrayToMap(keyValuePairs) {
    const map = new Map();
    for (const [key, value] of keyValuePairs) {
      map.set(key, value);
    }
    return map;
  }
  
  // Test the function
  const keyValuePairs = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4]
  ];
  const map = arrayToMap(keyValuePairs);
  console.log("Map:");
  for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
  }