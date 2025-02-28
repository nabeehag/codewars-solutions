// ==========================
// INSTRUCTIONS
// ==========================

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// ==========================
// MY SOLUTION
// ==========================

var number=function(array){
    let array2 = []
    for(let i = 1; i <= array.length; i++){
      array2.push(`${i}: ${array[i - 1]}`)
    }
    return array2
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

