// ==========================
// INSTRUCTIONS
// ==========================

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// ==========================
// MY SOLUTION
// ==========================

function fakeBin(x){
    // create a new empty string
    let binary = ''
    // split the string into an array, then iterate over the array, adding fake binary numbers to the empty string one at a time
    x.split('').forEach((element) => element < 5 ? binary += '0' : binary += '1')
    // return the new string
    return binary
}

// ==========================
// OTHER SOLUTIONS
// ==========================

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}