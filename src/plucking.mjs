/*
 *
 * The pluck() function returns a new list by plucking the specified property off all objects in the list supplied.
 *
 * $ node -r esm plucking.mjs
 * [ 25, 51, 43, 81, 43, 76, 47, 72 ]
 * [ 'John',
 *   'Lenny',
 *   'Andrew',
 *   'Peter',
 *   'Anna',
 *   'Alberto',
 *   'Adam',
 *   'Robert' ]
 *
 */

 import { pluck } from 'ramda';

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

console.log(pluck('age', users));
console.log(pluck('name', users));
