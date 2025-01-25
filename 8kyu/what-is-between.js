// ==========================
// INSTRUCTIONS
// ==========================

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// ==========================
// MY SOLUTION
// ==========================

function between(a, b) {
    let array = []
    for(let i = a; i <= b; i++){
      array.push(i)
    }
    return array
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

