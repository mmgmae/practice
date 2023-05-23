// OBJECTS -- the core of JS

    // object literal with {}
    // const is commonly used, because the variable points to a reference, and the contents of the object can still be changed
    // note: order doesn't matter! this will show up in console as alphabetical order 
    const fitBitData = {
        totalSteps : 308727,
        totalMiles : 211.7,
        avgCalorieBurn : 5755,
        workoutsThisWeek : '5 of 7',
        avgGoodSleep : '2:13',
        tags: ['sad', 'happy', 'excited', 'bored']
    };
    console.log(fitBitData);

    // how to access information with . syntax
    console.log(fitBitData.totalMiles);
    // 211.7

    // keys are converted into strings, even if they are numbers or booleans
    const numbers = {
        100: 'one hundred',
        16: 'sixteen',
        '99balloons' : 'great song!',
        'my cat' : 'adorable'
    }
    // will not let you access data with dot syntax ie numbers.100 because 100 is an unexpected number error
    // use this instead!
    // ACCESSING DATA WITH ARRAY BRACKETS
    console.log(numbers['100']);
    // one hundred
    // here 100 is converted into a string, and it's used to search for a matching key

    // Why else use string brackets? Sometimes property names are not valid js identifiers (ie my cat (with a space) and 99balloons (cannot start with a number))
    console.log(numbers['my cat']);
    // adorable
    console.log(numbers['99balloons']);
    // great song!


    // using a variable to access object data
    let myMood = 'tags';
    console.log(fitBitData[myMood]);
    // ['sad', 'happy', 'excited', 'bored']
    // this is used if you have a dynamic value that you need to use to retrieve information

    // something like this works too!
    console.log(numbers['my' + ' ' + 'cat']);
    // adorable

    // dot notation is the simplest and cleanest, but it's not always usable, like when using a variable, dynamic value, or an invalid identifier as a key name, so use [] then


// UPDATING AND ADDING PROPERTIES
    // updating properties
    fitBitData.workoutsThisWeek = '6 of 7';
    fitBitData.totalMiles += 7.5;

    console.log(fitBitData.workoutsThisWeek);
    // 6 of 7
    console.log(fitBitData.totalMiles);
    // 219.2

    // adding a new property
    fitBitData.heartStillBeating = true;
    console.log(fitBitData);

    // can add new properties with . or []
    const userReviews = {};
    userReviews['queenBee49'] = 4.0;
    userReviews.user2345 = 2.0;


// ARRAYS AND OBJECTS inside of OBJECTS
    const student = {
        firstName : 'David',
        lastName : 'Jones',
        strengths : ['music', 'art'],
        exams : {
            midterm: 92,
            final : 88
        }
    };
    // accessing nested objects with dot syntax
    let testAvg = (student.exams.midterm + student.exams.final) / 2;
    console.log(testAvg);
    // 90

    // accessing nested arrays with index
    console.log(student.strengths[0]);
    // music


    // common nesting format - objects within an array - order of objects is important, but you store more inforation together in that order
    const shoppingCart = [
        {
            product : 'Jenga',
            price : 8.88,
            quantity : 1
        },
        {
            product : 'Echo Dot',
            price : 29.99,
            quantity : 3
        },
        {
            product : 'Fire Stick',
            price : 39.99,
            quantity : 1
        }
    ]



// OBJECTS AND REFERENCE TYPES
    const palette = {
        red : '#eb4d4b',
        yellow : '#f9ca24',
        blue : '#30336b'
    };

    const palette2 = palette;
    // palette stores a reference to the object in memory, so both palette and palette2 are pointing to the same reference, neither store the actual object itself
    palette2.green = '#01f876';
    // this changes both palette and palette2 because objects are reference types, just like arrays! So people usually use const unless there's a good reason not to


// ARRAY / OBJECT EQUALITY -- they behave the same way

    let nums = [1, 2, 3];
    let mystery = [1, 2, 3];

    console.log(nums === mystery) 
    // false
    // becuase nums and mystery are storing references to location in memory, not the arrays themselves. That's what's being compared.

    let moreNums = nums;
    console.log(nums === moreNums);
    // true
    // because they are pointing to the same reference!

    // if you want to compare contents of arrays, then use loops or other methods, to manually compare every elemeny in an array to another array