// ==========================
// INSTRUCTIONS
// ==========================

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// ==========================
// MY SOLUTION
// ==========================

function repeatStr (n, s) {
    // assign an empty string
    let string = ""
    
    // iterate over a loop n times and add s to the empty string
    for(let i = 1; i <= n; i++){
      string += s
    }
    
    // return the string
    return string;
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function repeatStr (n, s) {
    return s.repeat(n);
  }

repeatStr = (n, s) => s.repeat(n)
