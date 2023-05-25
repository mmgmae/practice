// LOOPS -- doing things repeatedly with our code

// FOR LOOPS
    // for (
    //    [initialExpression];      -- initial value
    //    [condition];              -- when to run the loop
    //    [incrememntExpression]    -- how to change the value each time
    // )

    for(let i = 1; i <= 10; i++){
    // i is commonly used, means nothing
    //  ++ increment is most common, but you can use anything ie i+=3
        console.log('hello', i)
    // will print the incrementing i value along with hello
    }

    //print first 20 squares
    for(let num = 1; num <= 20; num++) {
        console.log(`${num} x ${num} = ${num * num}`);
    }

    // starting high and subtract from i
    for (let i = 50; i>= 0; i -= 10) {
        console.log(i);
    }

    // down from 200 at intervals of 25
    for (let i = 200; i >= 0; i -= 25) {
        console.log(i);
    }

// INFINITE LOOPS
    // beware of infinite loops. An infinite loop is a loop where the ending condition is never met
    //  ie: let i = 20; i >= 0; i++
    // i will ALWAYS be greater than zero, and the loop will never not be true!

// for loops + arrays
    // to loop over an array, start at 0 and conintue to the last index (length-1)

    const animals = ['lions', 'tigers', 'bears'];
    for (let i = 0; i < animals.length; i++) {
        console.log(i, animals[i]);
    }
    // 0 'lions'
    // 1 'tigers'
    // 2 'bears'

    // print characters in a string in reverse order
    const word = 'stressed';
    for (let i = word.length -1; i >= 0; i--) {
        console.log(word[i]);
    }
    // d e s s e r t s

    // demo: avg grade across all students
    const myStudents = [
        {
            firstName: 'Zeus',
            grade: 86
        },
        {
            firstName: 'Artemis',
            grade: 97
        },
        {
            firstName: 'Hera',
            grade: 72
        },
        {
            firstName: 'Apollo',
            grade: 90
        }
    ];
    let sumOfGrades = 0;
    let numOfStudents = myStudents.length;

    for (let i = 0; i < numOfStudents; i++) {
        sumOfGrades += myStudents[i].grade
    }

    let avgGrade = sumOfGrades / numOfStudents;
    console.log(`The class average is ${avgGrade}`);
    // The class average is 86.25

// NESTED LOOPS
    // every time outer loop runs, inner loop completes a full cycle
    for(let i = 1; i <=4; i++) {
        console.log('Outer loop:', i);
        for(let j = 4; j >=0; j-=2){
            console.log('     Inner loop', j);
        }
    }

// WHILE LOOPS
    // a while loop coninues to run as long as its test condition is true
        // while(SOME-CONDITION-IS-TRUE) {
        //      run the code inside here while the condition is true
        // }

    //have to initialize counter variable beforehand
    let j = 0;
    while (j <= 5) {
        console.log(j);
        // increment the variable inside the loop
        j++;
    }
    // 0 1 2 3 4 5
    // while loops are not recommended in this situation, where a for loop could easily be used, because it's better to not initialize a variable outside of the loop unless you have to

    // a better use for a while loop - when writing a loop where you don't know how many times it's going to run
    // ie: continue to have game logic loop as long as the player hasn't lost the game

    gameOver = true;
    while (!gameOver) {
        console.log('the game is still going!')
    }
    console.log('you lost the game')

    // number guessing game where a random number is generated, and JS has to guess the number

    // how I did it
    console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~')
    console.log('The JS Guessing Game Begins!')
    console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~')

    let targetNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`the mystery number is : ${targetNumber}`)
    let guessingNumber =  Math.floor(Math.random() * 10) + 1;
    let numofGuesses = 1;

    while (targetNumber !== guessingNumber) {
        console.log(`Guess #${numofGuesses} : ${guessingNumber}`)
        guessingNumber = Math.floor(Math.random() * 10) + 1;
        numofGuesses ++;
    }
    console.log(`Guess #${numofGuesses} : ${guessingNumber} -- correct!`)
    console.log(`You won, JS! It only took you ${numofGuesses} guesses!`);


    // how colt did it
    // const target = Math.floor(Math.random() * 10);
    // let guess = Math.floor(Math.random() * 10);

    // while (guess !== target) {
    //     console.log(`Target: ${target} Guess: ${guess}`);
    //     guess = Math.floor(Math.random() * 10);
    // }
    // console.log(`Target: ${target} Guess: ${guess}`);
    // console.log('You win!');

// THE BREAK KEYWORD
    // break;
    // will stop the execution of a loop
    // can be used in a for loop, but it's uncommon, because you can just write the for loop to stop where you want

    for (let i = 0; i< 10; i++) {
        console.log(i);
        if (i === 5) {
            break;
        }
    }
    // 0 1 2 3 4 5

    // when breaking inside of nested loops, will not stop the whole loop

    // BREAK IN WHILE LOOPS
    // rewrite guessing game in a while loop with break

    console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~')
    console.log('Guessing Game with While and Break')
    console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~')

    const targetNum = Math.floor(Math.random() * 10);
    let guessNum = Math.floor(Math.random() * 10);

    // seems like in infinite loop, but the break will stop it!
    while(true) {
        if(targetNum === guessNum) break;
        console.log(`Target: ${targetNum} Guess: ${guessNum}`);
        guessNum = Math.floor(Math.random() * 10);
    }
    console.log(`Target: ${targetNum} Guess: ${guessNum}`);
    console.log(`You win!`);

    // not best approach -- easy to get into infinite loops, and "while true" isn't self-explanatory, and so it's not very clear code to read intuitively