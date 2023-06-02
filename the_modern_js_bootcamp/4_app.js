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


// nesting conditionals

let password = "hello kitty";

if (password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Valid password");
    }
    else{
        console.log("Password cannot include spaces.");
    }
}
else {
    console.log("Password must be longer");
}

//  truthy and falsy demo

let mystery = "";

if(mystery) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}

// LOGICAL OPERATORS
//  && -- logical and

let pass = "lemons";

if(pass.length >= 6 && pass.indexOf(' ') === -1) {
    console.log("Valid Password");
}
else {
    console.log("Invalid Password");
}


let guess = 11;

if (guess >= 1 && guess <= 10){
    console.log("Number is between 1 and 10");
}
else {
    console.log("Please guess a number between 1 and 10")
}

// || -- logical or

let age = 30;

if(age < 6 || age >= 65){
    console.log("You get in for free!");
}
else(
    console.log("$10 please!")
)

// let color = prompt('What color do you like?')
let color = 'blue';

if(color === 'purple' || color === 'lilac' || color === 'violet'){
    console.log('Me too!');
}
else(
    console.log('Oh... I think purple is the best color...')
)


// ! -- not operator

let loggedInUser;

if(!loggedInUser){
    console.log('Please log in to view this page');
}

let flavor = "lemon";

if(!(flavor === 'grape' || flavor === 'cherry')){
    console.log("We don't have that flavor!")
}


// switch statement demo

let day = 6;
switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('It\'s the weekend!');
        break;
    default:
        console.log('Invalid Weekday')
}


// ternary operator

let luckyNum = 8;

luckyNum === 7 ? console.log('Your number is lucky!') : console.log('Your number isn\'t very lucky...')


let status = 'online';
let statusColor = status === 'offline' ? 'red' : 'green';