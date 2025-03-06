/*Arrow Functions (Shorter Syntax)
Arrow functions are a shorter way to write functions in JavaScript.
Example 7: Convert Function to Arrow Function*/

// Regular function
function square(num) {
  return num * num;
}

// Arrow function
const square = (num) => num * num;

console.log(square(4));  // Output: 16