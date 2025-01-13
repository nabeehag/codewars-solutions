// ==========================
// INSTRUCTIONS
// ==========================

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// ==========================
// MY SOLUTION
// ==========================

var countSheep = function (num){
    let sheep = ''
    for(let i = 1; i < num + 1; i++){
      sheep += i.toString() + ' sheep...'
    }
    return sheep
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }