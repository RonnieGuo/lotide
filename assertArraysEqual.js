const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
   console.log("The arrays are equal.")
  }
  else{
    console.log("The arrays are not equal.")
  }
};

assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(1, 2);
assertArraysEqual("Apple", "Apple");
assertArraysEqual("Apple", "Banana");