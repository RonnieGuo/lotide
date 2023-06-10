// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(input) {
  const tails = [];
  if (input.length < 2) {
    return tails;
  }
  for (let i = 1; i < input.length; i++) {
    tails.push(input[i]);
  }
  return tails;
};


module.exports = tail;