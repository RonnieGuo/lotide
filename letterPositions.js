const letterPositions = function(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++) {
    let k = sentence[i];
    // skip spaces
    if (k === ' ') {  
      continue;
    }
    else if (results[k]) {
      results[k].push(i);
    }
    else {
      results[k] = [i];
    }
  }

  return results;
};
console.log(letterPositions("hel lo"));
// assertArraysEqual(letterPositions("hello").e, [1]);