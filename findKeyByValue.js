const findKeyByValue = function (inputObject, value) {
  const arr = Object.keys(inputObject);

  for (const key of arr) {
    if (inputObject[key] === value) {
      return key;
    }
  }
};
module.exports = findKeyByValue;