const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
//Test code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);