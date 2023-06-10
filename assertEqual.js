// FUNCTION IMPLEMENTATION
/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\uD83D\uDE00" + " Assertion Passed: " + actual + "===" + expected);
  } else {
    console.log("Assertion Failed: " + actual + "!==" + expected);
  }

};
*/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};


module.exports = assertEqual;