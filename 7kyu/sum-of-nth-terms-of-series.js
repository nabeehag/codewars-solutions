// ==========================
// INSTRUCTIONS
// ==========================

// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// ==========================
// MY SOLUTION
// ==========================

function SeriesSum(n) {
    let array = []
    
    //for n iterations, complete a for loop that adds a new number to an array
    for(let i = 0; i < n; i++){
      array.push(1/(1 + (3 * i)))
    }
    
    //return the total of the array using reduce
    return `${array.reduce((acc, curr) => acc + curr, 0).toFixed(2)}`
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }

function SeriesSum(n) {
    var sum = 0;
    for(var i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
  }