// ==========================
// INSTRUCTIONS
// ==========================

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// ==========================
// MY SOLUTION
// ==========================

function betterThanAverage(classPoints, yourPoints) {
    // find the class average
    const classAverage = classPoints.reduce((acc, curr) => {return acc + curr}, 0) / classPoints.length
  
    // check if your score is greater than the class average
    return yourPoints > classAverage
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
