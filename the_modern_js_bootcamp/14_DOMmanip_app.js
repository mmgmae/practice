// DOM Manipulation
    // the most common properties and methods

// innerText
    // includes what shows up on the page
    const h1 = document.querySelector('h1')
    h1.innerText // 'My Webpage'
    document.body.innerText // My Webpage Lorem ipsum dolor sit amet conse......
    
    // how to change the text of elements
    // NOTE: ovverwrites what was in there before
    h1.innerText = "I'm so goooood!"; 

// textContent
    // similar to innerText. Difference: includes the formatting, hidden content, and any script text inside. textContent includes EVERYTHING, on the page or not
    h1.textContent // "I'm so goooood!"

// innerHTML
    // returns the text and all other tags inside of a given element
    const form = document.querySelector('form');
    form.innerHTML // <input type="text" name="" id="" placeholder="Bear Name"> <input type="password" placeholder="password"> <input type="submit">
    // shows everything between the selected tags
    // used to change the content

    // can change HTML by writing HTML tags within a string. Useful for simple applications
    // form.innerHTML = '<b>I am a bold tag</b><button>click</button>'

    // don't just ovverride, but add with +=
    h1.innerHTML += ' hello!'

// PROPERTIES / ATTRIBUTES -- shortcut properties to access properties
    // value - retrieve the text or values in a form
        const inputs = document.querySelectorAll('input')
        inputs[0].value; // ' ' 
        inputs[0].value = 'tacos'; // 'tacos' 
        inputs[3].value // 300

    // checked - check if a checkbox is checked
        inputs[2].checked // false

    // placeholder - change placeholder text
        inputs[1].placeholder = 'new placeholder'

    // href
        const a = document.querySelector('a');
        a.href = 'dogs.com'
        a.innerText = 'updated to dogs.com'

    // src
        const img = document.querySelector('img')
        img.src = 'https://images.unsplash.com/photo-1615678815958-5910c6811c25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'


// METHODS to GET and SET ATTRIBUTES -- these properties do not have shortcuts so use this instead
    // getAttribute
    const range = document.querySelector('input[type="range"]')
    // getAttribute accepts the name of an attribute as a string
    range.getAttribute('max') // 500
 
    // setAttribute
    // takes two arguments, the thing we are trying to set, and the value we want to give it
    range.setAttribute('min', '-500')
    range.getAttribute('min') // -500


// FINDING PARENT / CHILDREN / SIBLINGS of elements
    // allow you to access related nearby elements of the one you are working with
    // often used with events

    // PARENT
        const firstLI = document.querySelector('li')
        firstLI.parentElement // <ul>...</ul>
        firstLI.parentElement.parentElement.parentElement // html

    // CHILDREN
        const ul = document.querySelector('ul')
        ul.children // HTMLCollection(3) [li.special, li, li.special]
        ul.children[0].innerText = "I changed this child!"

    // SIBLINGS
        firstLI.nextElementSibling.nextElementSibling.innerText = "this is the next NEXT sibling"

        const thirdLi = firstLI.nextElementSibling.nextElementSibling
        thirdLi.previousElementSibling.innerText = "this is the sibling before the third sibling"


// Changing Multiple Elemnts -- not just one thing at a time!
    // selecting all will give us an array of objects, so to change multiple things we just need to iterate over that array!

    const allChangeLis = document.querySelectorAll('.changeMult')
    for (let li of allChangeLis){
        li.innerText = "I CHANGED ALL OF THESE AT ONCE"
    }


// CHANGING STYLES USING JS
    //  the STYLE PROPERTY - inline styles only
            h1.style // CSSStyleDeclaration {accentColor: '', additiveSymbols: .... Big object, all are empty!
            // all are empty because... it only accesses/sets INLINE styles
            h1.style.color = 'orchid' // has updated the INLINE STYLE for h1

            // NOTE: in JS the style properties are camelCased, NOT hyphenated - (kebab-case)
            h1.style.backgroundColor = 'yellow'

    // getComputedStyle() - retrieve what styles are actually applied to an element
        const styles = getComputedStyle(h1);
        //console.log(styles) // CSSStyleDeclaration {0: 'accent-color', 1: .... 
        // CSSStyleDeclaration - a GIANT object that includes key value pairs for all possible CSS properties -- includes the current values accurate to what is being displayed, from CSS, HTML, or from JS
        styles.color //'rgb(218, 112, 214)' - the currently displayed (computed) color

    // MANIPULATING CLASSES -- a better way to add multiple styles at once. Add a class in CSS and add/remove it using JS
        const todo = document.querySelector('#todos .todo')
        todo.classList // shows an object representation of the classes on the element and provides methods add, change, toggle...

        todo.classList.add('done')

        todo.classList.remove('done')

        todo.classList.toggle('done')
        todo.classList.toggle('done')
        todo.classList.toggle('done')
        

// CREATING ELEMENTS USING JS
    const createdh2 = document.createElement('h2')
    createdh2.innerText = 'I AM A CREATED h2'
    createdh2.classList.add('special')
    // this creates the element, but it doesn't appear on the page until... you SELECT AN ELEMENT TO APPEND IT TO.
        // APPEND CHILD -- call appendChild on the parent that you want to append the element into
        // append means it will go to the end -- will be the last child
            const section = document.querySelector('section')
            section.appendChild(createdh2)

    const newImg = document.createElement('img')
    newImg.src = 'https://images.unsplash.com/photo-1685648042049-6138b9d12905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80'

    //will pass to the end of the body (even after the script tag)
    document.body.appendChild(newImg)

// APPEND to the Beginning/middle --> insertBefore
    //parent.insertBefore(newEl, elWeWantToInsertBefore)
    const newToDo = document.createElement('li')
    const newToDo2 = document.createElement('li')
    newToDo.innerText = "I AM A NEW LI, INSERTED BEFORE FIRST UL"
    newToDo2.innerText = "I AM A NEW LI, INSERTED BEFORE LAST UL"
    const parentUl = document.querySelector('ul#todos')
    const firstToDo = document.querySelector('li.todo')
    const lastToDo = document.querySelectorAll('li.todo')[2]

    parentUl.insertBefore(newToDo, firstToDo);
    parentUl.insertBefore(newToDo2, lastToDo);

// insertAdjacentElement()
    // targetElement.insertAdjacentElement(position, element) 
    // position: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

    const iTag = document.createElement('i')
    iTag.innerText = 'I am italics!'

    const firstP = document.querySelector('p')
    firstP.insertAdjacentElement('beforebegin', iTag)
    firstP.insertAdjacentElement('afterend', iTag)

// append() & prepend() (newer version)
    // can insert multiple elements at once
    firstP.append(iTag,newToDo)
    firstP.prepend(iTag,newToDo)

// removeChild
    // 
    const sectionUl = document.querySelector('section ul')
    const removeMe = sectionUl.querySelector('.special')

    const deleted = sectionUl.removeChild(removeMe)
    console.log(deleted) // <li class='special'>Peas</li>

// remove (newer version)
    h1.remove()