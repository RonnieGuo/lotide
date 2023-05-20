const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  const tails = [];
  if (input.length < 2) {
    return tails;
  }
  for (let i = 1; i < input.length; i++) {
    tails.push(input[i]);
  }
  return tails;
};
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check the original array
const yoyo = ["Yo Yo"];
let newYoyo = tail(yoyo); // no need to capture the return value since we are not checking it
assertEqual(newYoyo.length, 0); // original array should still have 3 elements!