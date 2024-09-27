//Creates a custom iterable object that get numbers from 1 to 5.
 
class CustomIterable {
    [Symbol.iterator]() {
      let i = 1;
      return {
        next() {
          if (i <= 5) {
            return { value: i++, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  }
  
  const customIterable = new CustomIterable();
  
  // Test the custom iterable
  for (const value of customIterable) {
    console.log(value);
  }
  

  // Function to convert an iterable to an array
function iterableToArray(iterable) {
    return Array.from(iterable);         //Array.from use to convert iterable to array
}

const resultArray = iterableToArray(customIterable);
console.log(resultArray); 
