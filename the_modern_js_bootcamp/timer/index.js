// TIMER APP

// ARCHITECTURE
    // responsibilities: display a timer, show an animated border around timer
    // possible implementation:
        // - event listener to watch for a click on 'start' button
            // - draw a full border around the timer --> emit an event stating that the timer has started
            // - start counting down the timer
            // - each time the timer counts down, update the border --> emit an event that the timer has ticked
            // - each time the timer counts down, update the text
            // - if we counted down and timer reaches 0
                // - reset the border --> emit an event that the timer is done
                // - reset internal timer to get ready for another run

        // (-->) instead of segmenting the mmethod up between two separate moving parts, focus on only one and how it will communicate with the rest of the application



const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('timer started')
    },
    onTick(timeRemaining) {
        console.log('timer ticked')
        circle.setAttribute('stroke-dashoffset', 
        (perimeter * timeRemaining) / duration - perimeter
        );
    },
    onComplete() {
        console.log('timer is completed')
    }
});




// NOTES ....
    
// Determining the value of THIS
    // Did you define the function with an arrow function?
        // use console.log(this) on the first valid line above the arrow function. Value of 'this' in the arrow function will be equal to that console log
    // Did you call 'bind', 'call' or 'apply' on the function when you invoked it?
        // 'this' is equal to the first argument of 'bind', 'call' or 'apply'
    // All other cases...
        // THIS is equal to whatever is to the left of the . in the metod call

// Enforce the value of THIS 
    // 