'use strict';

// create new object
const OPTIONS = {
    name: 'test',
    width: 1248,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makePixel: function() {
        console.log(`${this.width}px`);
        console.log(`${this.height}px`);
    }
};

// add property to object
OPTIONS['background-color'] = '#fff';

// iterate over each property of an object
for (let key in OPTIONS) {
    if (typeof(OPTIONS[key]) === 'object') {
        for (let i in OPTIONS[key]) {
            console.log(`Property ${i} has value: ${OPTIONS[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has value: ${OPTIONS[key]}`);
    }
}

// get all property oj object using the built-in object method .keys
const AMOUNT_PROPERTY = Object.keys(OPTIONS).length;
console.log(AMOUNT_PROPERTY);

// run object method
OPTIONS.makePixel();

// Destructuring - is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables
const {border, bg} = OPTIONS.colors;
console.log(`Variable border: ${border} and bg: ${bg}`);