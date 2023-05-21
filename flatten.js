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

const flatten = function(nestedArr) {
  let flattened = [];
  for (let i = 0; i < nestedArr.length; i++){
    if (Array.isArray(nestedArr[i])){
      for (let j = 0; j < nestedArr[i].length; j++){
        flattened.push(nestedArr[i][j]);
    }
  }
    else {
      flattened.push(nestedArr[i]);
    }
  }
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
