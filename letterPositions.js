const letterPositions = function(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++) {
    let k = sentence[i];
    // skip spaces
    if (k === ' ') {  
      continue;
    }
    else if (results[k]) {
      results[k].push(i);
    }
    else {
      results[k] = [i];
    }
  }

  return results;
};

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
console.log(letterPositions("hel lo"));
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
