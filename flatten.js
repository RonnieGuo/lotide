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

module.exports = flatten;