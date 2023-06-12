const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);
 
  if (arr1.length === arr2.length) {

    for (const item of arr1) {
       // check keys
      if (!arr2.includes(item)) {
        return false;
      }
      // check value
      if (arr1[item] !== arr2[item]) {
        return false;
      }
    }  
    return true;
  }
  return false;
    
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)){
    console.log(`Assertion Passed: ${inspect(actual)}`);
   }
   else{
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
   }
};
module.exports = assertObjectsEqual;