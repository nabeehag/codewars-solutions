// ===========================
// INSTRUCTIONS
// ===========================

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// ==========================
// MY SOLUTION
// ==========================

function bmi(weight, height) {
    // assign a bmi variable with parameters
    let bmi = weight / (height ** 2)
    
    // if bmi <= 18.5 return "Underweight"
    if (bmi <= 18.5) {
      return "Underweight"
    }
    // if bmi <= 25.0 return "Normal"
    else if (bmi <= 25.0) {
      return "Normal"
    }
    // if bmi <= 30.0 return "Overweight"
    else if (bmi <= 30.0) {
      return "Overweight"
    } else {
    // if bmi > 30 return "Obese"
    return "Obese";  
    }
  }

// ==========================
// OTHER SOLUTIONS
// ==========================

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                   bmi <= 25 ? "Normal" :
                                   bmi <= 30 ? "Overweight" : "Obese";

function bmi(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
  }
}

