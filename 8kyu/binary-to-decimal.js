// ==========================
// INSTRUCTIONS
// ==========================

// Complete the function which converts a binary number (given as a string) to a decimal number.

// ==========================
// MY SOLUTION
// ==========================

function binToDec(bin) {
    let array = bin.split('');
    let total = 0;
    let power = 0;
    for(let i = array.length - 1; i >= 0; i--){
      if(array[i] == 1){
        total += Math.pow(array[i] * 2, power);
      }
      power++;
    }
    return total;
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function binToDec(bin){
    return parseInt(bin,2);
  }
