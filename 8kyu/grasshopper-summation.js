// ==========================
// INSTRUCTIONS
// ==========================

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// ==========================
// MY SOLUTION
// ==========================

var summation = function (num) {
  
    // assign a total
    let sum = 0
   
    // iterate through a for loop that adds to i to the total
    for(let i = 1; i <= num; i++){
      sum += i
    }
   
    // return result
    return sum
 }

// ==========================
// OTHER SOLUTIONS
// ==========================

const summation = n => n * (n + 1) / 2;

function summation(num) {
    return num * (num + 1) / 2
  }