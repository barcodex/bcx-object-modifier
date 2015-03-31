
// notes:
//  1. run this code from command line using "node example.js" command
//  2. in your own code, you would require('bcx-object-modifier') instead
var om = require('./index.js');

var value = [1, 2, 3];
console.log(om.apply(value, 'length', [] , [], []));
console.log(om.apply(value, 'htmlcomment', [] , [], []));
