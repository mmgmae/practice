// OOP (OBJECT ORIENTED PROGRAMMING), PROTOTYPES, CLASSES, & the NEW OPERATOR

// OBJECT PROTOTYPES
    // __proto__ <- the template object, contains methods, so that every array, object, etc doesnt each need a copy of every method
    // prototypes are the mechanism by which JS objects inherit features form one another
    // objects can have a PROTOTYPE OBJECT, which acts as a template object

    // this includes everything on the Array prototypes.
    // Array.prototype is where the methods are stored! It's the template object
    Array.prototype // constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

    // you can define your own type of object and set it's prototype to the array prototype to have access to all array methods

    // __proto__ VS Array.prototype....
        // Array.prototype : the ACTUAL TEMPLATE OBJECT where the methods / properties are added
        // __proto__ : a REFERENCE - a property name on each made array to reference the prototype object. don't often need to do anything with this one


//  INTRO TO OOP
    // the organization of our code is broken up into patterns / recipes for objects - repeatable recipes for other objects to be based on

// FACTORY FUNCTIONS -- not so great for oop
    // one way of making objects based off of a pattern / recipe and hold methods
    // not the main way most people create objects from a pattern

    // Why isn't it commonly used?
        // every time you make a new object with your factory function, the functions inside of each object have to be reacreated every time, and every object you make stores a unique copy of that function in itself
        // instead, we want the function to be stored in one spot, and have every object we make using that pattern refer to that single method, defined in only one location


// CONSTRUCTOR FUNCTIONS
    // most programming languages don't have soemthing weird like this!

    // caputalize the first letter as a style thing, so you know it's a constructor function
    function Color(r,g,b) {
        this.r = r;
        this.g = g;
        this.b = b;
        console.log(this)
    }

    // to define a function to the prototype and not the invdividual crated objects, we need to define it outside of the constructor function like this...
    // syntax: Object.prototype.functionName = function declaration...
    //NOTE: do not use arrow functions because of issues with this
    Color.prototype.rgb = function() {
        const {r, g, b} = this;
        return `rgb${r}, ${g}. ${b}`;
    }

    Color.prototype.hex = function() {
        const {r, g, b} = this;
        return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    Color.prototype.rgba = function(a = 1.0) {
        const {r, g, b} = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

// THE NEW OPERATOR
    // to create an object with your constructor function you must use NEW
    // when calling with NEW...
        // creates a blank, plain JS obkect
        // passes the newly created object as the THIS context (otherwise this refers to the window...)
        // returns THIS if the function doesn't return it's own object

    const color1 = new Color(244, 40, 100); // Color {r: 244, g: 40, b: 100} -> prototype -> rgb: ƒ (),  constructor: f Color(r,g,b)
    const color2 = new Color(0,0,0)

    // here we prove that they share the same functions, rather than having unique instances of them
    color1.hex === color2.hex // true

    // using our methods
    color1.hex() // '#f42864'
    color2.hex() // '#000000'

    color1.rgba() // 'rgba(244, 40, 100, 1)'
    color2.rgba() // 'rgba(0, 0, 0, 1)'

    const protoDiv = document.querySelector('#proto')
    protoDiv.style.backgroundColor = color1.rgba(0.3);



// JS CLASSES -- syntatical sugar version of constructor functions, same functionality

    //NEED TO HAVE 
        // class keyword
        // capitalize the first letter when creating classes or costructor functions
        // add a constructor -- a function that will execute immeditately when a new color is created

    class Color2 {
        constructor(r, g, b, name) {
            // console.log('inside constructor')
            // console.log(r, g, b)

            //these will be added as properties on the object that gets created with this class
            this.r = r;
            this.g = g;
            this.b = b;
            this.name = name;
        }
        // can add methods directly inside of the class, don't have to append later!
        // use this special shorthand method syntax
        greet(){
            return `HELLO FROM ${this.name}!`; 
        }
        rgb(){
            // THIS used inside of a class THIS refers to the instance of the class, the individual created object (not prototype, not the function, not the window)
            return `rgb${this.r}, ${this.g}. ${this.b}`;
        }
        hex(){
            const {r, g, b} = this;
            return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }

    }
    
    // create new objects with NEW keyword
    //const c1 = new Color2(255, 255, 84) // 'inside constructor'  255 255 84 <-- will automatically run what's inside of the constructor function

    const c1 = new Color2(255, 67, 89, 'tomato');
    c1 // Color2 {r: 255, g: 67, b: 89, name: 'tomato'}

    c1.greet() // 'HELLO FROM tomato!'

    const c2 = new Color2 (255, 255, 255, 'white');
    c2.greet() // 'HELLO FROM white!'

    c1.rgb() // 'rgb255, 67. 89'
    c1.hex() // '#ff4359'
 
    // proving that they point to the same function, and don't just both have their own copies...

    c1.hex == c2.hex // true


// EXTENDS & SUPER -- keywords that have to do with subclassing -- inheritance -- sharing functionality between classes

    // class Cat {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     eat(){
    //         return `${this.name} is eating`
    //     }
    //     mewo(){
    //         return 'MEOW!'
    //     }
    // }

    // const monty = new Cat('Monty', 9)
    // monty.eat() // 'Monty is eating'

    // class Dog {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     eat(){
    //         return `${this.name} is eating`
    //     }
    //     bark(){
    //         return 'WOOF!'
    //     }
    // }

    // const wyatt = new Dog('Wyatt', 13)
    // wyatt.eat() // 'Wyatt is eating'

    // DUPLICATED FUNCTIONALITY? move it into a seperate standalone class that both of the classes that want to use it can 'EXTEND'


    class Pet {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        eat(){
            return `${this.name} is eating`
        }
    }

    class Cat extends Pet {
        // how to add extra functionality to the cosntructor JUST for cat?? -- SUPER
        // SUPER -- references the class that we are extending from
        constructor(name, age, livesLeft = 9){
            super(name, age)
            this.livesLeft = livesLeft;
        }
        meow(){
            return 'MEOW!'
        }
    }

    class Dog extends Pet {
        bark(){
            return 'WOOF!'
        }
    }


    // extending from Pet will use the constructor from Pet if none is found in Dog
    const wyatt = new Dog('Wyatt', 13)
    wyatt.eat() // 'Wyatt is eating'
    wyatt.bark() // 'WOOF!'

    // NOTE: if i had another method on Dog called eat(), then calling eat will call the dog version!!
        // if JS doesn't find a function on the Dog prototype, it will look up to what has been extended to find the function, if it's not there, it looks on the object prototype

// SUPER - a reference to the SUPERclass (what we are extending from)
