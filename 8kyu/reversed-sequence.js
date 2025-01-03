// ==========================
// INSTRUCTIONS
// ==========================

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// ==========================
// MY SOLUTION
// ==========================

const reverseSeq = n => {
    // assign an array to a variable
    let sequence = []
    
    // iterate and subtract from n and push that number into the array until you reach n > 0
    for (let i = n; i > 0; i--){
      sequence.push(i)
    }
    
    // return the array variable
    return sequence;
  };

// ==========================
// OTHER SOLUTIONS
// ==========================

const reverseSeq2 = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };

const reverseSeq3 = n => {
    return Array(n).fill(0).map((e, i) => n - i );
    };