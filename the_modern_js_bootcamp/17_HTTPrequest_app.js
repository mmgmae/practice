// MAKING HTTP REQUESTS
    // XMLHTTP -> FETCH (newer, easier),  AXIOS: library to help you make requests

// AJAX - asynchronous javascript and XML (usually use JSON, not XML now though)

// formats for sending data 
    //  XML - Extensible Markup Language 
        // the 'parent' of html
        // groups things together with tags 
            //IE <name><first>Todd</first><last>Johnson</last></name>
        // used to be more popular, will occasionally see it
        // able to be turned into a JS object

    // JSON  - Java Script Object Notation
        // NOT JS, but built to be useful in JS - a single function call to translate it
        // but can use with any language with JSON!
        // every key in JSON must be a string with "" quotes
        // cannot store more functional things ie functions
        // JSON.parse(stringOfJSON)

console.log("*********************")
console.log("XMLHttp")
console.log("*********************")
// XMLHttpRequests - the old way
    // the original way of sending requests via JS
    // does not support promises
    // weird syntax
    // XMLHttpRequests can get anything back, not just XML
    // also called "XHRs"

    //from MDN
        // function reqListener() {
        //     console.log(this.responseText);
        //   }
        
        //   const req = new XMLHttpRequest();
        //   req.addEventListener("load", reqListener);
        //   req.open("GET", "http://www.example.org/example.txt");
        //   req.send();

    // using SWAPI star wars API
        const requestDiv = document.querySelector('#request')

        alert('CLICK TO SEND REQUEST')

        const firstReq = new XMLHttpRequest();
        firstReq.addEventListener('load', function() {
            console.log('success');
            const data = JSON.parse(this.responseText)
            console.log(data)
            for(let planet of data.results){
                console.log(planet.name)
                const createdP = document.createElement('p')
                createdP.innerText = `${planet.name}`
                requestDiv.appendChild(createdP)
            }
        });
        firstReq.addEventListener('error', () => {
            console.log('XMLHTTP ERROR')
            const createdP = document.createElement('p')
            createdP.innerText = 'oops, there was an error.... 😅'
            requestDiv.appendChild(createdP)
        });
        firstReq.open('GET', 'BROKENhttps://swapi.dev/api/planets/');
        firstReq.send();
        console.log("Request Sent!")

        console.log(firstReq) // responseText: "{\"name\":\"Yavin IV\",\"rotati ....


    // the XMLHttpRequest is annoying because.... CHAINING REQUESTS HAVE to be written inside of the original request....


console.log("*********************")
console.log("FETCH")
console.log("*********************")
// FETCH = THE BETTER WAY!!
    // newer way of making requests via JS
    // supports promises!
    // no IE support :(

    // NOTE: the fetch method takes one mandatory argument -- the url -- and returns a promise that resolves to the response to that reqeust, successful or not

    // const prom = fetch('https://swapi.dev/api/planets/')
    // prom // Promise {<fulfilled>: Response}
    // const fetchDiv = document.querySelector('#fetch')

    // fetch('https://swapi.dev/api/planets/')
    //     .then((response) => {
    //         if (!response.ok) 
    //             //this will throw us to the catch
    //             throw new Error(`Status Code Error: ${response.status}`)
            
    //         return response.json()
    //     })
    //     .then((data) => {
    //         for(let planet of data.results) {
    //             console.log(planet.name)
    //             const createdP = document.createElement('p')
    //             createdP.innerText = `${planet.name}`
    //             fetchDiv.appendChild(createdP)
    //             //chaining fetch requests
    //             const filmURL = data.results[0].films[0]
    //             return fetch(filmURL);
    //         }
    //     })
    //     .then((response) => {
    //         if (!response.ok) 
    //             throw new Error(`Status Code Error: ${response.status}`)
    //         return response.json()
    //     })
    //     .then((data) => {
    //         console.log(data)
    //         const createdP = document.createElement('p')
    //         createdP.innerText = `${data.title}`
    //         fetchDiv.appendChild(createdP)
    //     })
    //     .catch((err) => {
    //         console.log('something went wrong with fetch')
    //         console.log(err);
    //         const createdP = document.createElement('p')
    //         createdP.innerText = `oops, there was an error.... 😅 ${err}`
    //         fetchDiv.appendChild(createdP)
    //     })

    // NOTE: the promise returned form fetch won't reject, even if it's a 404. Will resolve normally, and only reject on network failure or something else stopping it. a 404 is still a response to fetch

    // REFACTOR 

    const fetchDiv = document.querySelector('#fetch')

    // keep repeated logic outside of fetch! (to chain them together as .thens, they must return promises!)
    const checkStatusAndParse = (response) => {
        if (!response.ok) throw new Error(`FETCH ERROR: Status Code Error: ${response.status}`)
    
        return response.json()
    }

    const printPlanets = (data) => {
        console.log('FETCHED 10 PLANETS')
        for(let planet of data.results) {
            console.log(planet.name)
            const createdP = document.createElement('p')
            createdP.innerText = `${planet.name}`
            fetchDiv.appendChild(createdP)
        }
        // const p = new Promise((resolve, reject) => {
        //     resolve(data)
        // })
        // return p;
        // THE EASY WAY... Promise.resolve() creates a promise that is already resolved
        return Promise.resolve(data.next);
        // NOTE: using NEXT because it's a part of the API documentation
    }

    const fetchNextPlanets = (url) => {
        return fetch(url);
    }

    fetch('BROKENhttps://swapi.dev/api/planets/')
        .then(checkStatusAndParse)
        .then(printPlanets)
        .then(fetchNextPlanets)
        .then(checkStatusAndParse)
        .then(printPlanets)
        .then(fetchNextPlanets)
        .then(checkStatusAndParse)
        .then(printPlanets)
        .catch((err) => {
            console.log('FETCH ERROR')
            console.log(err);
            const createdP = document.createElement('p')
            createdP.innerText = `oops, there was an error.... 😅 ${err}`
            fetchDiv.appendChild(createdP)
        })



console.log("*********************")
console.log("AXIOS")
console.log("*********************")
// AXIOS -- the EVEN BETTER way
        // not native JS, but an external library called AXIOS (there's other, but this one is very popular!)
        // simplifies things with built in methods and callbacks
        // promise based like fetch
        // GOOD FEATURE: can be used both for browser side and server side with node.js
        // note -- parses automatically when you request

        // HOW TO USE...
            // include the external script into your HTML file (easiest way) 
                // copy the CDN from github
                // paste it into your HTML file
                // INCLUDE IT BEFORE the files that will use it
                // check if it linked in by typing axios into the terminal
                    // axios  //ƒ (){return e.apply(t,arguments)}
            // how to make a request -- look at documentation on github
        
    axios.get('https://swapi.dev/api/planets/hoihhihih').then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log('AXIOS ERROR')
        console.log(err)
    })

    // note: when the response is 404 / an error, axios will go to catch (unlike fetch) Don't have to throw the error yourself

// SEQUENTIAL AXIOS REQUESTS - CHAINED REQUESTS

// axios
//     .get('https://swapi.dev/api/planets/')
//     .then(({data}) => {
//         console.log(data)
//         console.log('first 10 axios')
//         for(let planet of data.results){
//             console.log(planet.name)
//         }
//         return axios.get(data.next);
//     })
//     .then(({data}) => {
//         console.log(data)
//         console.log('next 10 axios')
//         for(let planet of data.results){
//             console.log(planet.name)
//         }
//     })
//     .catch((err) => {
//         console.log('ERROR WITH AXIOS', err)
//     })

//REFACTOR  :

const fetchNextPlanets2 = (url = 'https://swapi.dev/api/planets/') => {
    console.log(url)
    return axios.get(url)
}
const printPlanets2 = ({data}) => {
    console.log(data)
    console.log('10 planets axios')
    for(let planet of data.results){
        console.log(planet.name)
    }
    return Promise.resolve(data.next)
}

fetchNextPlanets2()
    .then(printPlanets2)
    .then(fetchNextPlanets2)
    .then(printPlanets2)
    .catch((err) => {
        console.log('ERROR WITH AXIOS', err)
    })

