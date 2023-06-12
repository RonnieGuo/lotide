// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function (input) {
  let string = input.replace(/ /g, '');

  const output = {};
  for (const letter of string) {
    if (output[letter]){ 
      output[letter] += 1;
    }
    else {
      output[letter] = 1;
    }
  }
  console.log(assertEqual(output["e"], 3));
  return output;
}
module.exports = countLetters;

