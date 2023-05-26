const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log (eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false