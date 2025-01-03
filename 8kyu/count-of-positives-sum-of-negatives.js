// ==========================
// INSTRUCTIONS
// ==========================

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// ==========================
// MY SOLUTION
// ==========================

function countPositivesSumNegatives(input) {
    // check if the input array is null or empty
    if (input == null || input.length == 0) {
      return []
    }
    
    let countPositive = 0;
    let sumNegative = 0;
    
    // iterate through the array
    for (let item in input) {
      // if positive, count 1
      if (input[item] > 0) {
        countPositive++
      }
      // if negative, add to sum
      else if (input[item] < 0) {
        sumNegative += input[item]
      }
    } 
    // return array of [count, sum]
    return [countPositive, sumNegative]
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}