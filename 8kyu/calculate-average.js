// ==========================
// INSTRUCTIONS
// ==========================

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// ==========================
// MY SOLUTION
// ==========================

function findAverage(array) {
    // assign an initial total
    let total = 0
    
    // iterate through each item in the array and add to total
    for(let num in array){
      total += array[num]
    }
    
    // return the total / array's length
    return array.length > 0 ? total / array.length : 0
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }

