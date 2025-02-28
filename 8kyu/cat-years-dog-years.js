// ==========================
// INSTRUCTIONS
// ==========================

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// ==========================
// MY SOLUTION
// ==========================

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = humanYears < 2 ? 15 : humanYears < 3 ? 15 + 9 : 15 + 9 + 4*(humanYears - 2);
    let dogYears = humanYears < 2 ? 15 : humanYears < 3 ? 15 + 9 : 15 + 9 + 5*(humanYears - 2);
    return [humanYears,catYears,dogYears];
}

// ==========================
// OTHER SOLUTIONS
// ==========================

var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}
