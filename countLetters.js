const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function (input) {
  let string = input.replace(/ /g, '');
  //console.log(string);
  const output = {};
  for (const letter of string) {
    if (output[letter]){ 
      output[letter] += 1;
    }
    else {
      output[letter] = 1;
    }
  }
  return output;
}

console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }));
