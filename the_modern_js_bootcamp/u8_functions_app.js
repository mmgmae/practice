// FUNCTIONS -- the basics
    // functions are reusable procedures
    // allow us to write reusable, modular code
    // we define a "chunk" of code that we can then execute at a later point

    // 2 STEP-PROCESS :  Define -> Run / Execute

    // DEFINTE A FUNCTION :
    // "function declaration" / "function statement"
    // function funcName() {
        // do something
    // }

    // define the function -- nothing runs yet...
    function grumpus() {
        console.log('go away....');
        console.log('leave me alone!');
        console.log('GO AWAY!!!');
    }

    // RUN A FUNCTION : 
    // funcName();
    // NEEDS the parens!
    grumpus();
    // go away...  leave me alone!  GO AWAY!!!

// Dice Roll Function Example
    function rollDie() {
        let roll = Math.floor(Math.random() * 6) + 1;
        console.log(`Rolled: ${roll}`);
    }
    rollDie();

    // call a function within another function!
    // function throwDice() {
    //     rollDie();
    //     rollDie();
    //     rollDie();
    //     rollDie();
    //     rollDie();
    //     rollDie();
    // }
    // throwDice();

// ARGUMENTS 
    // inputs that change the output of your function

    // the variable inside doesn't really matter, it's just a placeholder to hold the value of whatever is passed in
    function greet(person) {
        console.log(`Hello, ${person}`);
    }
    greet('Mae');
    // Hello, Mae

    function throwDice(numRolls) {
        for(let i = 0; i < numRolls; i++) {
            rollDie();
        }
    }
    throwDice(2);
    // pass in the number of dice to be rolled
    // Rolled: 3    Rolled: 2


// MULTIPLE ARGs
    // TERMINOLOGY: 
        // "argument" -- the value passed in when calling the function
        // "perameter" -- the placeholder name defined within the function declaration

    // use commas
    function sum(x, y) {
        console.log(x + y);
    }
    sum(4,5)
    // 9

    // order matters when declaring perameters
    function divide(a, b) {
        console.log(a / b);
    }
    divide(1,4);
        // 0.25
    divide(4,1);
        // 4
    // first argument passed in will be assigned to a, second will be assigned to b -- order from left to right
    divide(5);
        // NaN
    // if an expected argument is missing, it will be undefined

// the RETURN statement
    // right now our functions are only printing stuff, not returning it. We can't save the output!
    // return values can be captured, passed to another function, etc...

    // Just use the return keyword
    function add(x, y) {
        return x + y;
    }
    const answer = add(100, 200);
    console.log(answer);
    // 300
    // now we can save things in variables

    // NOTE: you can only return one value. If you need to return multiple things, return them as an array or object

    // NOTE: Return statements ends funtion execution AND specifies the value to be returned by that function

    // Multiple return statements are ok, but only one will run!

    // function isPurple(color) {
    //     if (color.toLowerCase() === 'purple'){ // this can be written as a boolean statement to refactor
    //         return true;
    //         console.log("Yay!");
    //         // ^^^ this will never run -- return statement will end function execution
    //     }
    //     else { // note: you don't need an else in a return statement, because the first return statement will end execution on it's own!
    //         return false;
    //     }
    // }

    // refactored function --
    function isPurple(color) {
        return color.toLowerCase() === 'purple';
    }

    let purpleTestOne = isPurple('blue');
    console.log(purpleTestOne); // false
    let purpleTestTwo = isPurple('PURPLE');
    console.log(purpleTestTwo); // true