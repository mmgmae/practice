// CHALLENGE 1 -- password validator
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
    if(password.length >= 8){
        if(password.indexOf(' ') === -1) {
            if(password.indexOf(username) === -1){
                return true;
            }
        }
    }
    return false;
}

// CHALLENGE 2 -- average
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

// CHALLENGE 3 - Pangrams
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false


function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(lowerCased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}

