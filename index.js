var colors = require('colors');

exports.printMe =  (msg, color) => {
    if (!color) color = 'red';
    console.log(msg[color]);
}

