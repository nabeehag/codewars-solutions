// ==========================
// INSTRUCTIONS
// ==========================

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// ==========================
// MY SOLUTION
// ==========================

const rps = (p1, p2) => {
    return (
      p1 === p2 ? 'Draw!' :
      (p1 === 'rock' && p2 === 'paper') || 
      (p1 === 'paper' && p2 === 'scissors') || 
      (p1 === 'scissors' && p2 === 'rock') ? 'Player 2 won!' :
      'Player 1 won!'
  )};

// ==========================
// OTHER SOLUTIONS
// ==========================

let rps1 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };

let rps2 = (p1, p2) => {
    if (p1 == p2)
    return 'Draw!';
    
    if (p1 == 'rock' && p2 == 'scissors') 
    return 'Player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper') 
    return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock') 
    return 'Player 1 won!'
    else
    return 'Player 2 won!';
};