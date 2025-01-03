// ==========================
// INSTRUCTIONS
// ==========================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9


// ==========================
// MY SOLUTION
// ==========================

function squareSum(numbers){
    // assign a sum variable
    let sum = 0
    
    // for each number in numbers, square it and add it to the sum
    for (let num in numbers){
      sum += (numbers[num] ** 2)
    }
    
    // return the sum
    return sum
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }

