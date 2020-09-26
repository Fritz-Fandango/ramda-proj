/*
 *
 * The pluck() function returns a new list by plucking the specified property off all objects in the list supplied.
 *  
 * $ node -r esm plucking2.mjs
 * The oldest person is 81 years old.
 * The youngest person is 25 years old.
 * 
 */

import { apply, pluck } from 'ramda';

const users = [
   { name: 'John', age: 25 },
   { name: 'Lenny', age: 51 },
   { name: 'Andrew', age: 43 },
   { name: 'Peter', age: 81 },
   { name: 'Anna', age: 43 },
   { name: 'Alberto', age: 76 },
   { name: 'Adam', age: 47 },
   { name: 'Robert', age: 72 }
];

let maxAge = apply(Math.max, pluck('age', users));

// An alternative solution uses a spread operator instead of the apply() function.
let minAge = Math.min(...pluck('age', users));

console.log(`The oldest person is ${maxAge} years old.`);
console.log(`The youngest person is ${minAge} years old.`);
