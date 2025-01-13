// ==========================
// INSTRUCTIONS
// ==========================



// ==========================
// MY SOLUTION
// ==========================

var number = function(busStops){
    return busStops.reduce((acc, curr) => {
      return acc + curr[0] - curr[1]
    }, 0)
  }
  

// ==========================
// OTHER SOLUTIONS
// ==========================


