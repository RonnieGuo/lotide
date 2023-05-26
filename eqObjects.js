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
  if (eqArrays(arr1, arr2)){
    for (const item of arr1) {
     if (arr1[item] !== arr2[item]) {
       return false;
     }
   }
   return true;
  }
  else {return false;}
};
/*
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
*/

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log (eqObjects(shirtObject , anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), false);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
