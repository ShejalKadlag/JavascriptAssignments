//array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map method
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//filter method
const numbersGreaterThan5 = numbers.filter(num => num > 5);
console.log(numbersGreaterThan5); // [6, 7, 8, 9, 10]

//reduce method
const sumOfNumbers = numbers.reduce((acc, current) => acc + current, 0);
console.log(sumOfNumbers); // 55

