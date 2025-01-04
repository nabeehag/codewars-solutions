// ==========================
// INSTRUCTIONS
// ==========================

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// ==========================
// MY SOLUTION
// ==========================

function boolToWord( bool ){
    if(bool === true){            // if bool is true, then return "Yes"
      return "Yes"
    } else {                      // if bool is false, then return "No"
      return ("No")
    }
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }


let boolToWord = bool => bool ? 'Yes' : 'No';

