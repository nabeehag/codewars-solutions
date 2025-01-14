// ==========================
// INSTRUCTIONS
// ==========================

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// ==========================
// MY SOLUTION
// ==========================

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }
