// IF + ELSE IF + ELSE Statements
// Example 1
if (1 === 1) {
    console.log("It's True!");
}

// Example 2
let rating = 3;

if (rating === 3) {
    console.log('You are a superstar!');
}
else if (rating === 2) {
    console.log('Meets expectations');
}
else if (rating === 1) {
    console.log('Needs improvement');
}
else {
    console.log('invalid rating');
}

// Example 3
let num = 40;

if (num % 2 !== 0) {
    console.log('Odd number');
}
else if (num % 2 === 0) {
    console.log('Even number');
}

// Example 4

let highScore = 1430;
let userScore = 1200;

console.log(`This is the current high score: ${highScore}`);

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high schore of ${highScore}`);
}

console.log(`This is the current high score: ${highScore}`);