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

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
   console.log("The arrays are equal.")
  }
  else{
    console.log("The arrays are not equal.")
  }
};

const without = function(source, itemsToRemove) {
  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] == itemsToRemove[j]) {
        source.splice(i, 1); 
        i--;
      }
    }
    };
    return source;
  };

const words = ["hello", "hello", "world", "hello", "lighthouse"];
console.log(without(words, ["lighthouse","hello"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);