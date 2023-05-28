const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

 const findKey = function(Object1, callback){
  const arr = Object.keys(Object1);
  for (let key of arr) {
    if (callback(Object1[key])) {
      return key;
    }
  }
  return undefined;
 }

// findKey function: takes in an object and a callback.
// It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const output = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
console.log(output);
assertEqual(output, "noma");

const output3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"
console.log(output3);
assertEqual(output3, "Akaleri");