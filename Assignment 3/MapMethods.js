// Returns an array of keys from a Map.
 
function getKeys(map) {
    const keys = [];
    for (const key of map.keys()) {
      keys.push(key);
    }
    return keys;
  }
  
  const personMap = new Map([
    ["Sejal", 25],
    ["Kajal", 21],
    ["Kiran", 35],
    ["Rahul", 20]
  ]);
  const keys = getKeys(personMap);
  console.log(`Keys: ${keys}`);


  // use of set(), get(), has() methods
const userMap = new Map();

// set() method to add key-value pairs
userMap.set('Sejal', 21);
userMap.set('Kajal', 22);

// get() method to retrieve values
console.log(`Sejal's age: ${userMap.get('Sejal')}`); 
console.log(`Kajal's age: ${userMap.get('Kajal')}`); 

// has() method to check for keys
console.log(`Is the map have Sejal? ${userMap.has('Sejal')}`); 
console.log(`Is the map have Kajal? ${userMap.has('Neha')}`); 

// Displaying all key-value pairs
console.log('Current Map contents:');
userMap.forEach((age, name) => {
    console.log(`${name} is ${age} years old.`);
});
