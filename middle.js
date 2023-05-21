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

const middle = function(arr){
  let arrMiddle = [];
  if (arr.length <= 2){
    arrMiddle = [];
  }
  else if (arr.length % 2 === 1){
    let i = Math.floor(arr.length / 2);
    arrMiddle.push(arr[i]);
  }
  else{
    arrMiddle.push(arr[arr.length / 2 - 1]);
    arrMiddle.push(arr[arr.length / 2]);
  }
  return arrMiddle;
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);