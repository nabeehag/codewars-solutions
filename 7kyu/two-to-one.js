// ==========================
// INSTRUCTIONS
// ==========================

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// ==========================
// MY SOLUTION
// ==========================

function longest(s1, s2) {
    let array = (s1 + s2).split('').sort()
    let arrayNew = []
    for(let i = 0; i < array.length; i++){
      if(arrayNew.includes(array[i]) === false){
        arrayNew += array[i]
      }
    }
    return arrayNew
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
