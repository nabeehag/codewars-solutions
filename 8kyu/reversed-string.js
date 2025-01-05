// ===========================
// INSTRUCTIONS
// ===========================

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ==========================
// MY SOLUTION
// ==========================

function solution(str){
    // create empty string
    let reversedStr = ''
    
    // for each letter in the string, starting at the last, push onto the empty string
    for (let letter = str.length - 1; letter >= 0; letter--){
      reversedStr += str[letter]
    }
    
    return reversedStr
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function solution(str){
    return str.split('').reverse().join('');  
  }

const solution = str => str.split('').reverse().join('');

const solution = s => [...s].reverse().join('')

