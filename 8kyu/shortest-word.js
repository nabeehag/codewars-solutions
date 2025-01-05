// ==========================
// INSTRUCTIONS
// ==========================

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// ==========================
// MY SOLUTION
// ==========================

function findShort(s){
    // split the string at each space and create an array of the words
    let array = s.split(' ')
    
    // set the shortest to equal the length index of 0
    let shortest = array[0].length
    
    // iterate through index of each item in array
    for(let word in array){
      // if the length of string is less than shortest, now shortest = index
      if(array[word].length < shortest) shortest = array[word].length
    }
    return shortest
}

// ==========================
// OTHER SOLUTIONS
// ==========================

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}
