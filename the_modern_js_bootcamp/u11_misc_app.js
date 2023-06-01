// MISC JS FEATURES


// DEFAULT PERAMETERS
    // inside of the () use = to assign the default value
    // anything can be a default value, objects and arrays are ok!
    // order matters, of course!, so default perameters need to be at the end!
    function multiply(a, b = 1) {
        return a * b;
    }
    console.log(multiply(4)); // 4

// SPREAD ...
    // allows iterables to be EXPANDED, behaves differently depending on where it is usesd
    // spread is three ...

    // spread for FUNCTION CALLs
        // explands an iterable into a list of arguments
        // spreads each of these array items into Math.max as individual arguments
        const nums = [45, 23, 34, 7, 5]
        console.log(Math.max(...nums)); // 45

    // spread for ARRAY LITERALs
        // create a new array using an existing array. Speads the elements form one array into a new array
        // combine arrays, make a copy of an array, etc...

        const cute = ['dog', 'cat', 'rabbit'];
        const scary = ['spider', 'shark', 'dinosaur'];
        const busakawa = ['pug', 'hyena'];

        const allCuties = [...cute, ...busakawa, 'naked cats'];
        console.log(allCuties); // ['dog', 'cat', 'rabbit', 'pug', 'hyena', 'naked cats']

        const scaryCopy = [...scary];
        console.log(scary === scaryCopy); // false -> does not point to same place in memory, you made a copy with spead!

    // spread for OBJECT LITERALs 
        // copies properties from one object into another object literal
        // make copies of objects or make combinations of objects

        const feline = {
            legs: 4,
            family: 'Felidae'
        };
        const canine = {
            family: 'Caninae',
            furry: true
        }

        const dog = {
            ...canine,
            isPet: true,
            adorable: true
        }
        console.log(dog); //{family: 'Caninae', furry: true, isPet: true, adorable: true}


// REST -> looks like spread (...), but it's NOT!
    //collects things into a single array -- used when you have objects that accept infinite arguments

    // The ARGUMENTS OBJECT -- (the old way) keyword: arguments
        // available inside every function
        // an array-like object, NOT an array (has a length property, does not have any array methods)
        // contains all the arguments passed to the function
        // not available inside of arrow functions!

    // REST PERAMETERS - collects all remaining arguments into an actual array
        // ...
        // use ... and decide on the name of the array containing all arguments
        function restSum(...nums) {
            return nums.reduce((total, currentVal) => {
                return total + currentVal;
            })
        }
        restSum(4,5,6,7); // 22 -- this function can take any number of arguments with no issue!

    // use to collect remaining arguments not matched to a perameter
    function fullName(first, last, ...titles) {
        console.log('first', first);
        console.log('last', last);
        console.log('titles', titles);
    }
    fullName('john', 'smith', 'iii', 'prince'); //first john   last smith   titles (2) ['iii', 'prince']
        

// DESTRUCTURING
    // a short syntax to 'unpack' values from arrays and properties from objects into distinct variables

    // destructuring ARRAYS
        // unpack specific values out of that array into specific values
        const raceResults = [
            'Joe',
            'Alice',
            'Noemi',
            'Jay',
            'Alex',
            'Kevin'
        ];
        // goes into the array, and in ORDER, sets the first three in the array to these variable names
        const [gold, silver, bronze] = raceResults;
        console.log(gold); // Joe
        console.log(silver); // Alice
        console.log(bronze); // Noemi

        //how to skip through elements -- use a comma for each skipped index
        const [first , , , fourth] = raceResults;
        console.log(first); // Joe
        console.log(fourth); // Jay

        // can use rest to collect the rest of the array into a new variable
        const [winner, ...runnerUp] = raceResults;
        console.log(winner); // Joe
        console.log(runnerUp); // ['Alice', 'Noemi', 'Jay', 'Alex', 'Kevin']

    // destructuring OBJECTS
        // unpack elements of an object into variables outside of it, based off of the name of the property
        const pet = {
            firstName: 'Missy',
            lastName: 'Rose',
            breed: 'Bichon Frise',
            status: 'adorable'
        }
        //instead of array bracket, use {}, single out the properties you want (order doesn't matter). If it finds the property name it will store it as a variable with the same name
        const {firstName, lastName} = pet
        console.log(firstName); // Missy
        console.log(lastName); // Rose

        // how to save it to a different variable name (keyword : newVariableName)
        const {breed: type} = pet;
        // console.log(breed); // undefined
        console.log(type); // Bichon Frise

        // save the REST ... 
        const {firstName: petName, ...details} = pet;
        console.log(petName); // Missy
        console.log(details); // {lastName: 'Rose', breed: 'Bichon Frise', status: 'adorable'}
        
    // NESTED destructuring
        const drawer = [{
            item: 'pencil',
            num: 3,
        },
        {
            item: 'pen',
            num: 10,
        },
        {
            item: 'paper clip',
            num: 3
        }
        ]

        const [,{item: thing}] = drawer;
        console.log(thing); //pen   [in the array ,(the second place, skip the first){inside the object, find value for item}]

    // destructuring PERAMETERS
        // used inside of a function definition where perameters are defined, to extract / unpack values from whatever is passed in

        function print({
            firstName,
            lastName,
            breed
        }) {
            console.log(`${firstName} ${lastName} the ${breed}`)
        }
        print(pet); //Missy Rose the Bichon Frise

        // works with arrays as well
        const response = [
            'HTTP/1.1',
            '200 OK',
            'application/json'
        ]
        function parseResponse([protocol, statusCode, contentType]){
            console.log(`Status: ${statusCode}`)
        }
        parseResponse(response); //Status: 200 OK