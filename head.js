// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

// const assertEqual = require('./assertEqual');

/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Apple", "Apple");
assertEqual("Apple", "Banana");
*/
//Create a function head which returns the first item in the array.
const head = function(input) {
  const firstItem = input[0]; 
  return firstItem;
}
module.exports = head;