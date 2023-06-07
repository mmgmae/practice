// ASYNCHRONOUS CODE, CALLBACKS & PROMISES
    // goal: make HTTP requests from the browser, loading data from API or sending info

// the Call Stack
    // the mechanism the JS interpreter uses to keep track of it's place in a script that calls multiple functions
    // ie: how JS 'knows' what function is currently being run and what funcitons are called from within that function, etc.

    // STACK -- a data structure like a stack of books, last thing in is on top is the first thing out. Most recently added is what's taken out first

    // view the call stack "step through" it one at a time with dev tools > Sources > Navigator > file with the code ie app.js > add a "breakpoint" (click on the line number) > call stack tab > press "step into function call" to step through code and view callstack in call stack tab

//  JS is SINGLE THREADED
    // --> JS can only run one line at a time, cannot multitask
    // this can be a problem -- our code might just stop and wait for something, like the user of the database / api. 
    // How to make it so the user doesn't just sit and wait...¥
    // -  THE TRICK: the BROWSER does the work!! - and reminds JS later!
        // browsers have web APIs that are able to handle certain takss in the background (setTimeout, making requests, etc)
        // JS passes these things off to the browser to keep track of, and then when the browser finishes, it hands it back to JS (pushed back onto the call stack)
        // easy to see visually on loupe (a website)

// ASYNCHRONOUS CALLBACKS

// CALLBACK HELL
    const hellButton = document.querySelector('#callbackHellButton')

    // if you want a bunch of these to run after each other, you have to nest setTimeouts...... this can get to be a LOT
    // setTimeout(() => {
    //     hellButton.style.transform = `translateX(100px)`;
    //     setTimeout(() => {
    //         hellButton.style.transform = `translateX(200px)`;
    //         setTimeout(() => {
    //             hellButton.style.transform = `translateX(300px)`;
    //             setTimeout(() => {
    //                 hellButton.style.transform = `translateX(400px)`;
    //                 setTimeout(() => {
    //                     hellButton.style.transform = `translateX(500px)`;
    //                 }, 1000)
    //             }, 1000)
    //         }, 1000)
    //     }, 1000)
    // }, 1000)

    //write a function that accepts a callback as an argument
    
    // const moveX = (element, amount, delay, callback) => {
    //     setTimeout( () => {
    //         element.style.transform = `translateX(${amount}px)`;
    //         if (callback) callback();
    //     }, delay)
    // }
    // moveX(hellButton, 100, 1000, () => {
    //     moveX(hellButton, 200, 1000, () => {
    //         moveX(hellButton, 300, 1000, () => {
    //             moveX(hellButton, 400, 1000, () => {
    //                 moveX(hellButton, 500, 1000)
    //             });
    //         });
    //     });
    // });

    // this IS better, but all that nesting...... what if there's an issue / failure?
    // lets have our function check if the button moves off the screen, and provide a fallback to prevent that. Also provide a callback for success, and a callback for failure

    const moveX = (element, amount, delay, onSuccess, onFailure) => {
        setTimeout( () => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;
            if(elRight + amount > bodyBoundary){
                onFailure();
            }
            else {
                
                    element.style.transform = `translateX(${currLeft + amount}px)`;
                    onSuccess();
                }
         }, delay)
    }
    // moveX(hellButton, 200, 1000, () => {
    //     moveX(hellButton, 200, 1000, () => {
    //         moveX(hellButton, 200, 1000, () => {
    //             moveX(hellButton, 200, 1000, () => {
    //                 moveX(hellButton, 200, 1000)
    //             });
    //         });
    //     });
    // });

    // needs to include success and failure callbacks

    moveX(hellButton, 100, 500, () => {
        //successCallback
        moveX(hellButton, 200, 500, () => {
            //successCallback
            moveX(hellButton, 300, 500, () => {
                //successCallback
                console.log("let's keep going!")
            }, () => {
                //failureCallback
                console.log('cannot move further!')
            })
        }, () => {
            //failureCallback
            console.log('cannot move further!')
        })
    }, () => {
        //failureCallback
        console.log('cannot move further!')
    })

    // LOOK how much you have to rewrite these success/failure callbacks!! Surely there must be an easier way!!


// PROMISES : the easier way
    // a promise is an object representing the eventual completion or failure of an asynchronous operation
    // a pattern for writing async code
    // a promise is a returned object to which you attach callbacks, isntead of passing callbacks into a function

    // promises can be PENDING, RESOLVED or REJECTED

    // const willGetYouADog = new Promise((resolve, rejet) => {
    //     // nothing in here yet
    // });
    // willGetYouADog // Promise {<pending>} <- promise object

    const willGetYouADog = new Promise((resolve, reject) => {
        // a random number for demo
        const rand = Math.random();
        if (rand < 0.5) {
            resolve();
        }
        else {
            reject();
        }
    });
    console.log(willGetYouADog) // Promise {<rejected>: undefined} or Promise {<fulfilled>: undefined}

    // THEN method -- will run if our promise is resolved
    willGetYouADog.then(() => {
        console.log('yay! We get a dog!')
    })

    // CATCH method -- what happens if the promise is rejected
    willGetYouADog.catch(() => {
        console.log('sorry, no dog')
    })


// returning promises from functions

    const makeDogPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 3000);
        });
    };

    // chain together THEN and CATCH
    makeDogPromise()
    .then(() => {
        console.log('yes you can have a dog')
    })
    .catch(() => {
        console.log('no we cannot get a dog')
    })


// resolving / rejecting with values
    // you have access to a value from within your catch and then that you can use to resolve/reject

    const fakeRequest = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    const pages = {
                        '/users': [
                            {id: 1, username: 'Bilbo'},
                            {id: 5, username: 'Samwise'}
                        ],
                        '/about' : 'this is the about page'
                    }
                    const data = pages[url]
                    if(data){
                        resolve({status: 200, data})
                    } else {
                        reject({status: 404})
                    }
                    
                }, 1000);
            })
        };

    fakeRequest('/users')
    .then((res) => {
        console.log('Status Code:', res.status)
        console.log('Data:', res.data)
        console.log('request worked')
    }).catch((res) => {
        console.log(res.status)
        console.log('request failed')
    })

    fakeRequest('/notapage')
    .then((res) => {
        console.log('Status Code:', res.status)
        console.log('Data:', res.data)
        console.log('request worked')
    }).catch((res) => {
        console.log(res.status)
        console.log('request failed because this is not a page!')
    })


// PROMISE CHAINING
    // when you need something to happen sequentially, one after the other, put the next request in the then!

    // chain .thens like this on the same level, and one catch will apply to all of them
        // thepromise()
        //     .then(
        //         return the promise's resolve
        //     )
        //     .then(
        //         return the next promise's resolve
        //     )
        //     .then(
        //         return the next promise's resolve
        //     )
        //     .catch(
        //         only needs one catch!
        //     )


// Refactoring the moving button demo with PROMISES

    const refactorBtn = document.querySelector('#refactorBtn');

    const moveX2 = (element, amount, delay) => {
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
    moveX2(refactorBtn, 50, 500)
    .then(() => moveX2(refactorBtn, 50, 500)) //using implicit returns!
    .then(() => moveX2(refactorBtn, 50, 500))
    .then(() => moveX2(refactorBtn, 50, 500))
    .then(() => moveX2(refactorBtn, 50, 500))
    .then(() => moveX2(refactorBtn, 50, 500))
    .then(() => moveX2(refactorBtn, 50, 500))
    .then(() => moveX2(refactorBtn, 50, 500))
    .then(() => moveX2(refactorBtn, 50, 500))
    .then(() => {
        console.log('done with both')
    })
    .catch(({bodyBoundary2, amount, elRight2}) => {
        console.log(`body is ${bodyBoundary2}px wide`)
        console.log(`element is at ${elRight2}px, ${amount} is too much to move`)
    })