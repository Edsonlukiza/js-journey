/*Function with Conditional Statements
Functions can use if conditions to make decisions.
Example 5: Check if a Number is Even or Odd*/
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(10));  // Output: Even
console.log(checkEvenOdd(7));   // Output: Odd