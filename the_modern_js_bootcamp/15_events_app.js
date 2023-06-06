// DOM EVENTS
    // only need one method to work with all DOM events!
    // examples of events: clicks, drags, drops, hovers, scrolls, form submit, key presses, focus/blur, mouse wheel, double click, copy/paste, audio start, screen resize, printing, etc...

    // the thing        the event type      the code to run
    //ie: button            click           change the color
    //ie: input          hits return       get search results
    //ie: image            mouseover      display the img caption

// Ways to NOT add events...

    // can add JS inline on HTML. Can call a function inline or type the whole thing. NOT RECOMMENDED.
        // <button onclick="alert('you clicked me')">Click me!</button>
        // add ON to the front of the JS event name to make it work inline HTML: onmouseover, onclick, ...

    // select the button and add even listener property to it via JS. NOT RECOMMENDED
        const clicker = document.querySelector('#clicker')
        // this line sets onclick property to the HTML, so don't just add = alert('!') yet or it will run automatically, not on click. You have to write a function so it will actually run on click!
        //this method is not good because it can be overwritten, you can't have multiple of the same events
        clicker.onclick = function(){
            console.log('I am the clicker!')
        }
        clicker.ondblclick = function(){
            console.log('Woah!! A double click!')
        }

        
// The Way to Do It: addEventListener
    // specify the event type and a callback to run
    // thing.addEventListener('event', function() {
    //     this runs after event
    // })

    const eventListenerButton = document.querySelector('#listener')
    eventListenerButton.addEventListener('click', function(){
        alert('clicked!')
    })
    // can have multiple event listeners for same event and element!
    eventListenerButton.addEventListener('click', function(){
        console.log('this is a second set alert for this listener')
    })

    eventListenerButton.addEventListener('mouseover', function() {
        eventListenerButton.innerText = 'CLICKY TIME!!!!!!'
    })
    eventListenerButton.addEventListener('mouseout', function() {
        eventListenerButton.innerText = 'Event Listener Button'
    })

    // can add things to the whole page with window!
    window.addEventListener('scroll', function() {
        console.log('stop scrolling!')
    })

// Annoying Button Demo
    const annoyingButtonDiv = document.querySelector('.annoying-button')
    const annoyingButton = document.querySelector('.annoying-button button')

    annoyingButtonDiv.classList.add('annoying-button-style')
    annoyingButton.classList.add('annoyingBtn-style')

    annoyingButton.addEventListener('mouseover', function(){
        console.log('Haha! You missed!');
        const height = Math.floor(Math.random() * window.innerHeight);
        const width = Math.floor(Math.random() * window.innerWidth);

        annoyingButton.style.left = `${width}px`;
        annoyingButton.style.top = `${height}px`;
    })

    annoyingButton.addEventListener('click', function(){
        annoyingButton.innerText = '😭You got me!😭'
        annoyingButton.style.backgroundColor = 'blue'
        annoyingButtonDiv.style.backgroundColor = 'grey'
    })

    window.addEventListener('scroll', function() {
        annoyingButtonDiv.classList.remove('annoying-button-style')
        annoyingButton.classList.remove('annoyingBtn-style')
    })

// How to attach event listeners to MULTIPLE ELEMENTS
    // use a loop!

    const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'indigo',
        'violet'
    ];

    const changeColor = function(){
        const h1Colors = document.querySelector('#colors')
        // in this case, this refers to wherever I'm attaching the event listener (box)
        h1Colors.style.color = this.style.backgroundColor;
    }
    const container = document.querySelector('#boxes')
    for(let color of colors){
        const box = document.createElement('div');
        box.style.backgroundColor = color;
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('click', changeColor)
    }


// THE EVENT OBJECT
    // the event object automatically gets passed into callbacks in event listeners -- can be captured
    // contains info about that exact event -- where it was on the screen, the path of the element you clicked, what buttons were pressed, the timestamp, etc etc etc

    document.body.addEventListener('keypress', function(event){
        console.log(event); //KeyboardEvent {isTrusted: true, key: 's', code: .....
    })


// KEY EVENTS
    const input = document.querySelector('.keys input')

    // KEYDOWN - fires when any key is pressed, not just if something is inputted. Will also fire continuously on hold
    input.addEventListener('keydown', function(e) {
        console.log(`KEYDOWN ${e}`);
    })

    // KEYUP - fires when a key is released, any key, change input or not
    input.addEventListener('keyup', function(e) {
        console.log(`KEYUP ${e}`);
    })
    
    // KEYPRESS - keypress only considers changes / characters being visually put in input (return yes, delete no)
    input.addEventListener('keypress', function(e) {
        console.log(`KEYPRESS ${e}`);
    })


// FORM EVENTS
    const form = document.querySelector('#signup-form')

    // submit event -- will still reload the page, prevent that by using preventDefault
    // form.addEventListener('submit', function(e) {
    //     alert('submitted')
    //     console.log(e); // SubmitEvent {isTrusted: true, submitter: input, ty.....
    //     e.preventDefault();
    // })

    // preventDefault -- will prevent the default form -- ie will not send you to another url when you click submit

    // extracting data from form with JS
    const formDiv = document.querySelector('.form-events')
    const creditCardInput = document.querySelector('#cc')
    const termsCheckbox = document.querySelector('#terms')
    const veggieSelect = document.querySelector('#veggie')

    form.addEventListener('submit', function(e) {
        alert('submitted')
        console.log('cc', creditCardInput.value)
        console.log('terms', termsCheckbox.checked)
        console.log('veggieSelect', veggieSelect.value)

        const returnPhrase = document.createElement('p')

        if (termsCheckbox.checked === true){
            returnPhrase.innerText = `You have agreed to sell your soul for $1,000,000 in exchange for 1 ${veggieSelect.value}`
        } else {
            returnPhrase.innerText = `You have NOT agreed to sell your soul for $1,000,000 in exchange for 1 ${veggieSelect.value}`
        }

        formDiv.appendChild(returnPhrase);

        e.preventDefault();
    })


// INPUT AND CHANGE EVENTS
    // an automatically updating way to grab data in sych in inputs to an object, even before submit is pressed

    //INPUT EVENT
    // this object stays in sych with what's inputted in the form
    const formData = {};
    creditCardInput.addEventListener('input', e => {
        console.log(e) //InputEvent {isTrusted: true, data: 'w', isComposing....
        formData['cc'] = e.target.value;
    })
    formData // {cc: 'dadsfadfs'}

    // the name of the input in the HTML can be used as the key in the object as well

    //CHANGE EVENT
    //not just typing, but losing focus (blurring) from the input will make it a change event. VS input is triggered any time there is a new event