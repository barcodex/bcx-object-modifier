# bcx-object-modifier

This tiny Node module is all about modifying some object value using predefined set of rules.

These rules are called modifiers and the object has only apply method that receives modifier name and other parameters.

We follow Node philosophy of keeping modules small and easily replaceable.
We assume that this module is used for template processing and is one of the dependencies for the bigger project.

The module is meant to be used in conjunction with other modules in order to modify any value that can be parsed out of the template.

Other Node module(s) will be responsible for parsing the templates and using the right modules to modify placeholder values.
This module will also be responsible to choosing this module or one of its alternative to do the job.
This makes it really interesting from OSS community's perspective, because everyone can adapt this module to their needs and redefine the set of modifier rules.

## Installation

```
npm install bcx-object-modifier
```

## Quick example

```js
var om = require('bcx-object-modifier');

console.log(om.apply([1,2,3], 'length', [] , [], []));
```

Here the object is meant to used to convert array to a numeric value representing its length, without any additional parameters, available data or processing options.
