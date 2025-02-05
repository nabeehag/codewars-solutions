// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// Input: 3 numbers: begin, end, step (positive, non-zero integers)

// Output: 1 number: sum based on the input conditions

function sumOfSequence(begin, end, step){
    // total variable
    let total = 0

    // iterate from begin to end in increments of step
    for(let i = begin; i<= end; i += step){
        //add the incremented numbers to total
        total += i
    }

    // return total
    console.log(total)
}

sumOfSequence(2, 2, 2) // 2
sumOfSequence(2, 6, 2) // 12
sumOfSequence(1, 5, 1) // 15
sumOfSequence(1, 5, 3) // 5
sumOfSequence(9, 5, 1) // 0
