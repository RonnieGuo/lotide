// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const eqArrays = function(arr1, arr2){
  
  if (arr1.length === arr2.length) {

    for (const item of arr1) {
      if (!arr2.includes(item)) {
        return false;
      }
     
    }  
    return true;
  }
  return false;
};

module.exports = eqArrays;