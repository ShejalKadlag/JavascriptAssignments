// Returns the intersection of two arrays as a Set.
 
function intersection(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
  
    const intersectionSet = new Set();
    for (const element of set1) {
      if (set2.has(element)) {
        intersectionSet.add(element);
      }
    }
  
    return intersectionSet;
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];
  const intersectionResult = intersection(array1, array2);
  console.log(`Intersection: ${[...intersectionResult]}`);


  // The use of has(), delete(), and clear() methods of a Set.
 
const mySet = new Set([1, 2, 3, 4, 5]);

console.log(`Initial Set: ${[...mySet]}`);

// Check if an element is present using has()
console.log(`Is 3 present? ${mySet.has(3)}`);

// Remove an element using delete()
mySet.delete(2);
console.log(`After removing 2: ${[...mySet]}`);

// Remove all elements using clear()
mySet.clear();
console.log(`After clearing: ${[...mySet]}`);