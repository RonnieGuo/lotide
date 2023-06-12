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

module.exports = middle;
