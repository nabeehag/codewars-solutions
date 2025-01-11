// ==========================
// INSTRUCTIONS
// ==========================

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// ==========================
// MY SOLUTION
// ==========================

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function removeExclamationMarks(s) {
    return s.split('').filter(x => x !== '!').join('')
  }
