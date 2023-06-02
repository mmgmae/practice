// ARRAYS

//  to make an empty array
let students = [];

// array of strings
let shoppingList = ['cereal', 'cheese', 'ice'];

// array of random things is valid!
let myCollection = [12, 'dog', true, null, NaN];

// modifying arrays

shoppingList[1] = 'parmesan cheese';
shoppingList[shoppingList.length] = 'ice cream';
// but there's another way to add to the end! best to use this method to fix or replace already existing items


// ARRAY METHODS

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day in the Life',
    'Life on Mars'
];

// push and pop
//push -- add to the end whatever is in parens
topSongs.push('Fortunate Son');
// pop -- remove from the end -- will return that value for you. empty parens
const nextSong = topSongs.pop();

// shift and unshift
let dishesToDo = ['big platter'];
// unshift -- add to start, whatever in parents
dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('spoon');
// can unshift multiple items, but will put them in at once, and keep that order instead of stacking one by one
dishesToDo.unshift('fork', 'knife');
// shift -- remove from the start, empty parens, will return what was shifted out
dishesToDo.shift();


// concat
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts', 'leek', 'leek'];
let meats = ['steak', 'chicken breast'];
// order matters! original arrays still stay the same
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
let allFood = fruits.concat(veggies, meats);
console.log(allFood);

// includes - returns boolean if exact match found
console.log(meats.includes('shrimp'));
if (allFood.includes('steak')) {
    console.log('I can\'t eat that, I\'m vegan!');
}

// indexOf - searches for value and returns index, if not found, returns -1
console.log(veggies.indexOf('leek'));
console.log(veggies.indexOf('red onion'));

// reverse - will permanently change string
console.log(veggies.reverse());
console.log(veggies)

// join - takes an array, returns a new string by concatenating all of the elments in the array
let vegList = (veggies.join(' (._.) '));
console.log(vegList);

// slice - takes a portion of array and makes a new one with it, without destroying original array
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2, 4);
let landDweller = animals.slice(-3);
let reptiles = animals.slice(4);
console.log(swimmers);
console.log(mammals);
console.log(landDweller);
console.log(reptiles);
// make a quick copy of an array that doesn't hurt the original
let copy = animals.slice();


// splice - removes, replaces, or adds new elements in middle of array
// array.splice(start [, deleteCount[, item1[, item2[, ...]]]])
copy.splice(1, 0, 'octopus');
copy.splice(3,2)
console.log(copy);
// replace with splice!
animals.splice(0,2,'SHARK!', 'OCTOPUS!');
console.log(animals);

// sorting
let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
people.sort();
// sorted by alphabet, gets updated in place, mutated
console.log(people);

let sortableNums = [34, 10, 100000, 67, 99];
sortableNums.sort();
// sorted as [10, 100000, 34, 67, 99]?? -  not surting by numeric value, but converts elements into a string and compares their UTF code unit values
console.log(sortableNums);
// what to do instead -- pass in a function (look on MDN, will revisit later)


// nested arrays!

const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];
console.log(animalPairs[2][0]);
console.log(animalPairs[1][1]);
animalPairs[0][1] = 'stag';
console.log(animalPairs[0]);
// remember, arrays store things in order, so make sure to use them when the order matters, and needs to be preserved!


