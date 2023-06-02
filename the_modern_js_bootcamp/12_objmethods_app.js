// OBJECT METHODS & 'THIS' KEYWORD

// SHORTHAND PROPERTIES
    //  easy way to create an object literal when you have variables and you want to create a property where the key is the name of the value and the value is the value

    // function getCard() {
        // const value = pick(values);
        // const suit = pick(suits)
        // RETURNS AN OBJ WITH value : x , suit : x
        // return {
            // value,
            // suit
        // };
    // }

// COMPUTED PROPERTIES
    // add a property with a dynamic key

    const role = 'host';
    const person = 'Joe Bob';
    const role2 = 'director'
    const person2 = 'Jimmy James'
    const team = {
        [role]: person,
        [role2]: person2 
    }
    console.log(team); // {host: 'Joe Bob', director: 'Jimmy James'}

// ADDING METHODS TO OBJECTS
    // we can add functions as properties on objects -- we call them METHODS!
    // group functions together into a cohesive unit!
    // PS there's newer syntax for this next...
    const math = {
        add: function(x,y){
            return x+y;
        },
        multiply: function(x,y){
            return x*y;
        }
    }
    // access the function with . notation, and use parens to execute. It's a method! Just like the Math object!
    math.add(2,1); //3

    // When functions are added as properties in an object, they are called methods

// METHOD SHORTCUT SYNTAX
    const math2 = {
        sum(x,y) {
            return x+y;
        },
        mult(x,y) {
            return x * y;
        }
    }
    // the function name will be taken as the key with this syntax!
    math2.sum(50,10); //60

// 'THIS' KEYWORD
    // a reference to the current execution scope, gives an object back, but that object changes depending on the scope

    function sayHi() {
        console.log('hi!')
        console.log(this);
    }
    sayHi(); // hi!  Window{Window: Window}........ ' THE WINDOW '
    // THE WINDOW == the global scope in the browser. When a function is defined, it gets added as a method to the window object
    // variables declared with VAR get added to the window, but let and const are not...

// THIS in METHODS
    const person3 = {
        first: 'Lucy',
        last: 'Loo',
        nickName: 'Luce',
        fullName() {
            console.log(this.first, this.last);
        }
    }
    person3.fullName(); //Lucy Loo
    // here, 'THIS' is the object itself! The value of this is set to the object that this is inside of

// WHY DOES THIS MATTER?
    // why do you care about the current object you are inside of?
    // so you can have a method that is aware of the other content in it's object!
    // now objects can be used not just for containers for functions, but now we can interact with other values or methods within this self contained world!

// THIS: Invocation Context
    // the value of this depends on the invocation context of the function it is used in
    // the value will change depending on how the function is executed, not just where it is written!

    // this is usually referring to the left of the dot in...
    // person.printBio() 
    // if there's nothing to the left, this is the global execution scope / the window
    // printBio()

    //how you execute the function will change the invocation context

// THIS -> ARROW FUNCTIONS
    // arrow functions do not get their own version of this, no matter how it is called
    // this in arrow functions will always be the this of the parent function where it is defined
    // this is why we don't generally use arrow functions when defining methods

    // this is useful sometimes...

    const annoyer = {
        phrases: ['literally', 'cray cray', 'I can\'t even', 'totes!', 'yolo', 'can\'t stop, won\'t stop'],
        pickPhrase(){
            const{
                phrases
            } = this;
            const idx = Math.floor(Math.random() * phrases.length);
            return phrases[idx]
        },
        start(){
            // here this sets timerID to the object so it can be accessed in other methods!
            this.timerID = setInterval(()=> {
                console.log(this.pickPhrase())
            }, 1000)
        },
        stop(){
            clearInterval(this.timerID);
            console.log('its over!')
        }
    }

// DECK of Cards Demo

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck(){
        const {suits, values, deck} = this;
        for(let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
    },
    drawCard() {
        const card =  this.deck.pop()
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
        for(let i = 0; i < numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    }
}