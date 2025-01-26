// ==========================
// INSTRUCTIONS
// ==========================

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// ==========================
// MY SOLUTION
// ==========================

function expandedForm(num) {
    let array = num.toString().split('')
        
    for (let i = 0; i <= array.length - 1; i++) {
        if(array[i] !== '0'){
          array[i] = Number(array[i]) * (10 ** (array.length - i - 1))
      }
    }
    return array.filter(x => x !== '0').join(' + ')
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");


//

function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }