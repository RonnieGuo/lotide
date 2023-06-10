// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); 
// assertEqual(result[0], "Lighthouse"); 
// assertEqual(result[1], "Labs"); 

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test case: Check array with 1 item
// const yoyo = ["Yo Yo"];
// let newYoyo = tail(yoyo); 
// assertEqual(newYoyo.length, 0); 


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result[1], "Labs"); 
  });
});