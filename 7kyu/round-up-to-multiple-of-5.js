// ==========================
// INSTRUCTIONS
// ==========================

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// ==========================
// MY SOLUTION
// ==========================

function roundToNext5(n){
    if(n % 5 === 0){
      return n
    }else if(n === Math.abs(n)){
      return n + (5 - (Math.abs(n % 5)))
    }else{
      return n -(n % 5)
    }
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }

function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }
