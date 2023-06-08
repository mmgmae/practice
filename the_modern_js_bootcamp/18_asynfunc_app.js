// ASYNC & AWAIT
    // async functions -- syntactical sugar for promises

    // two new keywords
        // async 
        // await 

// ASYNC 
    // use in front of a function declaration / expression -- designates it as an async function
    // asunc functions always return a promise
    // if the fucntion returns a value, the prmise will be resolved with that value
    // if the function throws an exception, the promise will be rejected

    async function greet() {
        return 'HELLO!';
    }
    // async makes the function return a PROMISE, and the value that the promise was returned with
    greet() // Promise {<fulfilled>: 'HELLO!'}
    // USE THEN to access that value after the promise was resolved!
    greet().then((val) => {
        console.log('PROMISE RESOLVED WITH', val);
    })
    // PROMISE RESOLVED WITH HELLO!

    async function add(x,y) {
        return x+y;
    }
    add(1,2) // Promise {<fulfilled>: 3}

    add(1,2).then((sum) => {
        console.log('THE PROMISE RESOLVED, THE ANSWER IS:', sum)
    })
    //THE PROMISE RESOLVED, THE ANSWER IS: 3


    // IF THE PROMISE IS NOT RESOLVED
        // thow an error!
    async function add2(x,y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw 'X and Y must be numbers!';
        }
        return x + y;
    }

    add2('e', 'r')
        .then((val) => {
        console.log('PROMISE RESOLVED WITH: ', val)
        })
        .catch((err) => {
        console.log('PROMISE REJECTED WITH: ', err)
        }) 

    // ASYNC keyword is a wayyyyy easier way to return promises


// AWAIT
    // we can only use the await keyword inside of functions declared with async
    // await will pause the execution of the function, waiting for a promise to be resolved

    async function getPlanets() {
        try {
            const res = await axios.get('NOPEhttps://swapi.dev/api/planets/');
            console.log(res.data); // only runs once the previous line is complete (the axios promise is resolved)
        } catch (e) {
            console.log('ERROR:', e)
        }
    }

    getPlanets(); // {count: 60, next: 'https://swapi.dev/api/planets/?pa.....

    // one option for error handling with catch: (if you dont want to include the try catch block in the function itself)
    // getPlanets().catch((err) => {
    //     console.log('ERROR CATCH:', err)
    // })


// MULTIPLE AWAITS IN ONE FUNCTION
    const moveX = (element, amount, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                const bodyBoundary2 = document.body.clientWidth;
                const elRight2 = element.getBoundingClientRect().right;
                const currLeft2 = element.getBoundingClientRect().left;
                if(elRight2 + amount > bodyBoundary2){
                    reject({bodyBoundary2, elRight2, amount});
                }
                else {
                    
                        element.style.transform = `translateX(${currLeft2 + amount}px)`;
                        resolve();
                    }
            }, delay)
        })
    }
    const asyncDiv = document.querySelector('#async')
    const planet = document.querySelector('#asyncPlanet')

    async function animateRight(el, amt) {
        await moveX(el, amt, 1000)
        await moveX(el, amt, 1000)
        await moveX(el, amt, 1000)
        await moveX(el, amt, 1000)
        await moveX(el, amt, 1000)
        await moveX(el, amt, 1000)
        await moveX(el, amt, 1000)
    }

    animateRight(planet, 100).catch((err) => {
        console.log('THATS ALL WE CAN MOVE', err)
        animateRight(planet, -50);
    })


// PARALLEL VS SEQUENTIAL REQUESTS

// SEQUENTIAL REQUEST
async function get3PokemonS() {
    // These happen sequentially : one must go and return before the next one starts
    // doesn't need to be in sequence here because the requests are not dependent on the return of another one
    // here poke1,2,3 are storing values
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
    console.log('sequential:', poke1.data.name)
    console.log('sequential:', poke2.data.name)
    console.log('sequential:', poke3.data.name)
}
get3PokemonS(); // bulbasaur  ivysaur  venusaur


// PARALLEL REQUEST
async function get3PokemonP() {
    // These happen all at the same time
    // don't await when you send off the request, await it after
    // here poke4,5,6 ARE the promises!!
    // all of these get requested at the same time, and we'll await them as they come back -- much faster!!
    const prom4 = axios.get('https://pokeapi.co/api/v2/pokemon/4')
    const prom5 = axios.get('https://pokeapi.co/api/v2/pokemon/5')
    const prom6 = axios.get('https://pokeapi.co/api/v2/pokemon/6')
    // now we are collecting those values from the resolved promises
    const poke4 = await prom4;
    const poke5 = await prom5;
    const poke6 = await prom6;
    console.log('parallel: ', poke4.data.name)
    console.log('parallel: ', poke5.data.name)
    console.log('parallel: ', poke6.data.name)
}
get3PokemonP(); // charmander  charmeleon  charizard


// REFACTORING WITH PROMISE.ALL - sending requests in parallel

async function get3PokemonPR() {
    const prom7 = axios.get('https://pokeapi.co/api/v2/pokemon/7')
    const prom8 = axios.get('https://pokeapi.co/api/v2/pokemon/8')
    const prom9 = axios.get('https://pokeapi.co/api/v2/pokemon/9')
    // PROMISE HELPER METHOD - accepts an array of promises
    const results = await Promise.all([prom7, prom8, prom9])
    console.log('results of promise.all: ', results) // (3) [{…}, {…}, {…}] - an array containing three response objects - the values those promises are returned with
    printPokemon(results)
}
function printPokemon(results) {
    for(let pokemon of results) {
        console.log('parallel refactor: ', pokemon.data.name)
    }
}
get3PokemonPR(); //squirtle   wartortle  blastoise