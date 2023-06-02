// THE DOM
    // the dom is a JS representation of the HTML and CSS on the webpage
    // a bunch of objects that you can interact with via JS
    // html and css go in ... js objects come out! this is the DOM

// THE DOCUMENT OBJECT
    // DOM - document object model
    // Document -- contains representations of all the content on a page, the root of the tree, the object document

// SELECTING 
    // 1 > select  then  2 > manipulate

    // getElementById -> takes an id, finds the matching elemnt that has that id, and returns that object
        // only works if there's a single match (will only pull one, so be sure to use IDs correctly!)

        const img = document.getElementById('bear-photo')
        console.dir(img) // img#bear-photo  .... the whole object

        const p = document.getElementById('main')
        console.dir(p) // p#main .... the whole object // HTMLParagraphElement

        //NOTE: there are different categories for elements on the page, that have their own proto

    // getElementByTagName
        // selects by type of element, ie all of the images, all of the ps
        // note the S!!!! ElementSSSSS
        // will always return an HTML COLLECTION -- an array like object that is not an array
        let inputs = document.getElementsByTagName('input');
        console.dir(inputs); // HTMLCollection(3)  each element held within this collection

        let notOnPage = document.getElementsByTagName('h6');
        console.dir(notOnPage) // HTMLCollection(0)  <- collection with nothing in it

        // what to do with an HTML COLLECTION
        inputs[0]; //<input type="text" name="" id="" placeholder="Bear Name"> -- can search like an array
        // pop, push, includes... do not work
        // we can access with indeces and iterate over it. Can be turned into an array with spread or iterated over
        for(let input of inputs) {console.log(input)} 
            //  <input type="text" name="" id="" placeholder="Bear Name">
            //  <input type="password" placeholder="password">
            //  <input type="submit">
        
    // getElementsByClassName
        //ElementSSSSS
        // selecting based off of class selectors

        let special = document.getElementsByClassName('special');
        
    // don't have to select only from the document

        const ul = document.getElementsByTagName('ul')[0];
        let specialLis = ul.getElementsByTagName('special');
        
// querySelector & querySelectorAll
    // NOTE: a little worse performance, but still recommended over other methods
    // a newer all-in-one method that can do anything!

    // querySelector
        // note: only finds ONE element, gives FIRST match
        // returns one proto HTML___Element
            //   finds the first h1 element:
            document.querySelector('h1');

            // # finds first element with id of red:
            document.querySelector('#red');

            // . finds first element with class of big
            document.querySelector('.big');

            //leverage css syntax to get more specific 
            document.querySelector('section ul li.special');
            document.querySelector('input[type="password"');

    // querySelectorAll
        // will gather all of the matches into a collection
        // returns a collection --- NodeList(x) -- another type of collection that contains the HTML____Element. An array-like object

        const specials = document.querySelectorAll('.special')
        console.dir(specials) //NodeList(3) [p.special, li.special, li.special]


