const without = function(source, itemsToRemove) {
  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] == itemsToRemove[j]) {
        source.splice(i, 1); 
        i--;
      }
    }
    };
    return source;
  };
  module.exports = without;