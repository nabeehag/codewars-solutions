// ==========================
// INSTRUCTIONS
// ==========================

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// ==========================
// MY SOLUTION
// ==========================

function removeEveryOther(arr){
    let newArray = []
    for(let i = 0; i < arr.length; i++){
      i % 2 === 0 ? newArray.push(arr[i]) : null
    }
    return newArray
}

// ==========================
// OTHER SOLUTIONS
// ==========================

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}

function removeEveryOther(arr){
    var newArr=[];
    for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
    return newArr;
}
