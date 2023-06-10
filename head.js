const assertEqual = require('./assertEqual');

/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Apple", "Apple");
assertEqual("Apple", "Banana");
*/
//Create a function head which returns the first item in the array.
const head = function(input) {
  const firstItem = input[0]; 
  return firstItem;
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");