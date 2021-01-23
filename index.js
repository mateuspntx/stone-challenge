// To be able to run this code you must create "items" and "emails" objects.

// You can add those objects in "data.js" file or declare them right here in this file.
// If you will not use "data.js" file, make sure to clear line 7.

const Checkout = require('./checkout');
const { items, emails } = require('./data');

// Enter "node index.js" in terminal to run
console.log(Checkout(items, emails));
