// ==========================
// INSTRUCTIONS
// ==========================

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// ==========================
// MY SOLUTION
// ==========================

function getMiddle(s) {
    let evenLength = s.slice(s.length / 2 - 1, s.length / 2 + 1)
    let oddLength = s.slice(s.length / 2, s.length / 2 + 1)
    return s.length % 2 === 0 ? evenLength : oddLength
}

// ==========================
// OTHER SOLUTIONS
// ==========================

function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
}