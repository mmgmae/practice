// DETAILS ABOUT FUNCTIONS

// SCOPE
    // variable "visibility" --> the location where a variable is defined dictates WHERE we have ACCESS to that variable

// FUNCTION SCOPE 
    // something scoped only within a function, that variable cannot be accessed outside of the function
    function lol() {
        let person = 'Tom';
        const age = 45;
    }
    lol();
    //console.log(person); // err: person is not defined
    // these are scoped to the function, do not exist outisde of it
    // multiple functions can have the same variable names, because they are scoped within the function, and do not exist outside of the function, so they can be the same without any errors.

// BLOCK SCOPE
    // blocks are denoted by {}, but not objects. IE for, while, etc loops
    if (true) {
        let randomAnimal = 'eel';
    }
    //console.log(randomAnimal); //err: randomAnimal not defined;
    if (true) {
        var randomAnimal = 'eel';
    }
    console.log(randomAnimal); //eel
    // let and const have different scoping rules than VAR -- variables declared to var can only be scoped to functions

// LEXICAL SCOPE
    // nested functions are lexically bound -- bound to the scope of their outer functions, but not the other way arround -- outer functions cannot access variables defined within inner functions
    function outer(){
        let movie = 'Amadeus';
        function inner(){
            console.log(movie.toUpperCase());
        }
        inner() // inner must be executed inside of the function nest to be effective
    }
    // inner(); err: inner is not defined -- do not have access, the scope for inner is only within outer
    outer(); //AMADEUS

// Function Expressions
    // instead of function statements, just a different syntax to define functions
    // const square = function (num) {
    //   return num * num;
    // }
    // square(7); //49

    // KEY DIFFERENCE: the function -- which itself has no name -- is stored in a variable. PS functions are objects in JS, that's why

    // the function part of this is an "anonymous function" (has no name) stored within a variable sum
    const sum = function (x, y){
        return x+ y;
    }
    console.log(sum(9,3)); // 12
    // use console.dir(sum) -> reveals underlying information of the function

    // does not have to be an anonymous function to be stored inside of a variable
    // a "named function expression", but still call it using product
    const product = function multiply(x, y) {
        return x * y;
    }
    // multiply(3,3); // undefined -> you have to call it using what it's stored in
    product(3, 3); //9

// Higher Order Functions
    // functions that operate on.with other functions. They can...
        // accept other functions as arguments
        // return a function

    // functions are objects
    // create four functions
   function add(x, y) {
    return x + y;
   }
   function subtract(x, y) {
    return x - y;
   }
   function multiply(x, y) {
    return x * y;
   }
   function divide(x, y) {
    return x / y;
   }
   // store them all in an array
   const operations = [add, subtract, multiply, divide];
   // execute form within the array
   operations[1](100,4); //96
    // We can loop over the array to run each function without hard coding it!
   for(let func of operations) {
    // func will hold one of the functions each time through the loop, and it is executed with parens
    let result = func(30,5);
    console.log(result);
   }
   // 35  25  150  6
    //functions can be treated like any other value!
   // store them in an object!
   const thing = {
    doSomething: multiply
    // the function multiply is stored as a value in this object!
   }
    //execute like this
    thing.doSomething(50, 2); // 100
    // We created a METHOD!! ^^^

// Functions as Arguments
    // higher order functions can accept other functions as arguments

    // func is an arbitrary name, anything is ok
    function callTwice(func){
        func();
        func();
    }
    function laugh() {
        console.log('haha!');
    }
    // pass in a function as an argument
    callTwice(laugh); // haha!  haha!

    // funtion + another arg
    function repeatNTimes(action, num){
        for(let i = 0; i < num; i++){
            action();
        }
    }
    repeatNTimes(laugh, 5) // (x 5) haha!

    // randomly pick a function from two arguments
    function pickOne(f1, f2) {
        let rand = Math.random();
        console.log(rand);
        if(rand < 0.5) { 
            f1();
        } else {
            f2();
        }
    }

    pickOne(laugh, outer); // 0.610... AMADEUS (random)
    pickOne(laugh, outer); // 0.146... haha!  (random)


// Functions as Return Values -- 'FACTORY FUNCTION'
    // higher order functions can return functions as the return value
    // like a 'function factory' -> the func itself returns another functions, the outer functions will make a new version / tweak the inner function and give it to you so you can use it

    function multiplyBy(num){
        // here is a great time to use an anonymous function!
        return function(x){
            return x * num;
        }
    }

    const triple = multiplyBy(3);
    triple(2); // 6

    const double = multiplyBy(2);
    double(10); // 20


// CALLBACKS
    // callback functions
    // functions that are passed into other functions to be invoked in within the outer function
    // any time we pass a function into another function and it's executed within that function

    // many built in methods expect callbacks to be passed in
    // IE callback are set up for what happens when something else happens ie a user hover

    // often anonymous functions (for one-time-use) are used as callbacks

    const btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        alert('why did you click me?');
    });

// HOISTING
    // a quirk of JS
    //works with FUNCTION DECLARATIONS and VAR

    // HOISTING WITH VAR
        console.log(animal);
        var animal = 'Tapir'; //UNDEFINED
        // The variable is defined after it is needed, so it's 'UNDEFINED'. Why not an error, like it was never defined at all? HOISTING.

        // when JS interprets code, it "HOISTS" up variable declaration (doesn't actually move it, but will run 'var animal;' first, initializing it, but leaving it undefined until 'animal = 'Tapir';' runs later)

        // JS sees VAR DECLARATIONS, runs them fist and those vars are undefined, and fills the values in later when that code actually runs in sequence

        // HOW TO AVOID -- declare and initialize variables before you use them!

    // HOISTING WITH LET AND CONST
        // Variable declarations made with let and const are not hoisted

        // console.log(shrimp); // REFERENCE ERROR - 'cannot access 'shrimp' before initialization
        let shrimp = 'Harlequin Shrimp';

    // HOISTING WITH FUNCTIONS
        // function declarations ARE hoisted! will run even if you call function before its declaration. These lines get processed first

        howl(); // awoooooo!
        function howl(){
            console.log('awoooooo!');
        }

        // function expressions are NOT hoisted.

        // hoot(); // error: hoot is not a function

        // but the variable hoot DOES exist, because it was declared with var, and it is hoisted. Therefore when calling hoot() you are trying to call "undefined"
        console.log(hoot); // undefined

        var hoot = function() {
            console.log('hoo! hoo!');
        }
        
        
