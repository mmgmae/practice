// APPLYING FUNCTIONS TO COLLECTIONS OF DATA

// ARRAY CALLBACK METHODS
    // arrays come with many built-in methods that accept callback functions
    // running a function once per element in an array

// forEach
    // accepts a callback function & calls the function once per element in the array

    const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
    // works with existing functions or an anonymous function like this
    numbers.forEach(function(num){
        console.log(num * 2);
    })
    // 40 42 44 46 48 50 52 54

    // if you want to use the index, add a second perameter in the callback (it knows the second perameter will refer to index) to capture the index
    numbers.forEach(function(num, idx){
        console.log(idx, num);
    })
    // 0 20  1 21  2 22  ...

    // can also use for loop or for of loop for cases like this, but this is also convenient!

// Map
    // builds a new array with the results of calling a callback on every element in the array
    // can be used to duplicate an array, transform an array, or get parts of arrays and store it in a new array! The original is unchanged

    const doubles = numbers.map(function(num){
        return num * 2;
    })
    console.log(doubles); // [40, 42, 44, 46, 48, 50, 52, 54]
    // NOTE: be sure to add return, or map will create an array of undefineds

    // map a new array containing an object for each element saying if it's even or odd
    const numDetail = numbers.map(function(n){
        return {
            value: n,
            isEven: n % 2 === 0
        }
    })
    console.log(numDetail); //0: {value: 20, isEven: true}  1: {value: 21, isEven: false} ....

    const words = ['asap', 'byob', 'rsvp', 'diy'];

    const formattedText = words.map(function(word){
        return word.toUpperCase().split('').join('.');
    })
    console.log(formattedText); // ['A.S.A.P', 'B.Y.O.B', 'R.S.V.P', 'D.I.Y']
    console.log(words); // ['asap', 'byob', 'rsvp', 'diy']


// ARROW FUNCTIONS --> a syntactically compact alternative to a regular function expression
    // no function keywords, just (x) and => and sometimes {}
    const multiply = (x, y) => {
        return x * y;
    }
    multiply(2, 3) // 6

    const isEven = (num) => {
        return num % 2 === 0;
    }
    isEven(47) // false

    // making them even more compact!
        // parens are optional if there's only one parameter
        const square = x => {
            return x * x;
        }
        // use empty parens for functions with no parameters
        const singASong = () => {
            return 'lalalala!';
        }

// IMPLICIT RETURN -- arrow functions with no return keyword or {} when the return is implied by the context -- there's only one thing that can be returned, so it's implied!
    // if your function is simple enough that you are ONLY returning ONE expression, you can rewrite with () instead of {}, and leave off return keyword
        const isEven2 = num => (
            num % 2 === 0
        );

        // one-liner implicit return -- use when it'll fit, doesnt need () if it's on one line
        const isEven3 = num => num % 2 === 0;
        
    const doubles2 = numbers.map(n => n * 2);
    console.log(doubles2); //[40, 42, 44, 46, 48, 50, 52, 54]

// FIND - returns the value of the first element in the array that satisfies the provided testing function
    // array.find(callback function) 

    let movies = [
        'The Fantastic Mr. Fox',
        'Mr. and Mrs. Smith',
        'Mrs. Doubtfire',
        'Mr. Deeds'
    ]

    const movie = movies.find(movie => {
        return movie.includes('Mrs');
    })
    console.log(movie); //Mr. and Mrs. Smith

// FILTER
    // Creates a new array with all elements that pass the test implemented by the provided function
    // filter out subsets of an array, if the elment passes the test of the function, it will be returned in the result
    // doesnt update or mutate the original, just creates a new array

    // filter accepts a 'test function' -- a function that returns TRUE or FALSE
    const oddFilter = numbers.filter(n => n % 2 === 1);
    console.log(oddFilter); // [21, 23, 25, 27]

    // can be used to propogate search results
    const books = [
        {title: 'Clifford The Red Dog'},
        {title: 'The Long Way Home'},
        {title: 'That One'}
    ]

    const query = 'The';
    const result = books.filter(book => {
        const title = book.title.toLowerCase();
        return title.includes(query.toLowerCase())
    })
    console.log(result); //0: {title: 'Clifford The Red Dog'}  1: {title: 'The Long Way Home'}

// SOME & EVERY
    // both every and some are boolean methods that return true or false, and accepts boolean callbacks as a test

    // EVERY -- tests whether ALL elements in the array pass the provided function, returns a boolean value
    // SOME -- similar to every, but returns true if ANY of the array elements pass the test function

    const words2 = ['dog', 'dig', 'log', 'bag', 'wag'];

    const all3Letters = words2.every(word => word.length === 3);
    console.log(all3Letters) //true

    const includeO = words2.some(word => word.includes('o'));
    console.log(includeO); //true

    const includeOEvery = words2.every(word => word.includes('o'));
    console.log(includeOEvery); //false

// SORT 
    // default is to convert numbers to strings, and sort them as strings
    // to make it do what we want, we pass in a "compare function"
    // arr.sort(compareFunc(a,b))
    // has two perameters, return a number ...
        // returns < 0 --> sort a before b
        // returns 0 --> leave a and b unchanged
        // returns > 0 --> sort b before a

    const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

    const ascSort = prices.sort((a, b) => a - b);
    console.log(ascSort); // [12, 35.99, 99.99, 400.5, 3000, 9500]  smallest -> largest

    const descSort = prices.sort((a,b) => b - a);
    console.log(descSort); // [9500, 3000, 400.5, 99.99, 35.99, 12]  largest -> smallest

    // NOTE: sort MUTATES the original array!



// REDUCE 
    // executes a reducer function on each element of the array, resulting in a SINGLE VALUE
    // ie: sum, finding the maximum value, tallying votes
    // callback format: a callback with at least two perameters. 1st one stores end result of reduce, second one represents each individual element in the array

    // summing every element in an array
    let summing = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    console.log(summing); // 35

    // finding the maximum value
    const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
    const maxGrade = grades.reduce((max, currVal) => {
        if(currVal > max) return currVal;
        return max;
    })
    console.log(maxGrade); // 99

    // NOTE: can pass in initial starting value 
    const summing2 = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
        return sum + currVal;
    }, 1000) // starts the accumulator with this value ...
    console.log(summing2); // 1150

    // tallying 
    const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
        // initial value set as an empty object!
    const results = votes.reduce((tally, val) => {
        if(tally[val]) {
            tally[val]++;
        } else {
            tally[val] = 1;
        }
        return tally
    }, {})
    console.log(results); // {y: 7, n: 6}
