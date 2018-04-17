const numberModule = require('./number-module'); // don't need .js
console.log(numberModule); // consoles an object
// when you get an error that's like "expecting function but got object"
// it's something to do with this

const numberArray = require('./number-array');

const addinator =require('./addinator') // when you have assignments, you should have semicolon

console.log(addinator(numberArray));

// create a killer whale (scary) creature
// log that creature
const Creature = require('./creature');
console.log(new Creature('killer whale', 'scary'));