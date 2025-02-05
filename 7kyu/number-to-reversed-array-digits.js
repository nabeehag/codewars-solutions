// Given a random, non-negative number, you have to return the digits of this number in an array with reverse order.

// Input: ONLY number from 0 to infinity integer
// Output: Type ARRAY of NUMBERS in reverse order

function reverseDigits(num){
    // Convert the num into a string, then split the string at each character
    let array = String(num).split('')

    // New array for the reversed digits
    let newArray = []

    // Iterate over the array from end to start
    for(let i = array.length - 1; i >= 0; i--){
        // Add the Number into a new array in reverse order
        newArray.push(Number(array[i]))
    }

    // Return the new array
    return newArray
}

// Examples: 
// reverseDigits(436) -> [6, 3, 4]
// reverseDigits(0) -> [0]
// reverseDigits(12) -> [2, 1]
// reverseDigits(12345678) -> [8, 7, 6, 5, 4, 3, 2, 1]

console.log(reverseDigits(436))
console.log(reverseDigits(0))
console.log(reverseDigits(12))
console.log(reverseDigits(12345678))