// ==========================
// INSTRUCTIONS
// ==========================  

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13   
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679       

// ==========================
// MY SOLUTION
// ==========================   

function minValue(values){
    let uniqueOrderedValues = [...new Set(values)].sort((a, b) => a - b)
    let string = ''
    for(let x in uniqueOrderedValues){
      string += uniqueOrderedValues[x]
    }
    return Number(string)
}

// ==========================
// OTHER SOLUTIONS
// ==========================

function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}

function minValue(values){
    return Number(Array.from(new Set(values)).sort().join(''))
}
