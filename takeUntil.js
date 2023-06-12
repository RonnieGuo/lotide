// Create a takeUntil function that takes in an array, and a callback function
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)){
      results.push(item);
    }
    else{
      break;
    }
  }
  return results;
}

module.exports = takeUntil;
