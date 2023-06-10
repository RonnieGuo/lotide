// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');
// //Test code
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });
  it("returns [3, 4] for 1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});