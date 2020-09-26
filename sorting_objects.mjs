/* 
 *
 * The sortBy() function sort the list according to the supplied function.
 * 
 * $ node -r esm sorting_objects.mjs
 * Sorted by age:
 * [ { name: 'John', age: 25 },
 *   { name: 'Andrew', age: 43 },
 *   { name: 'Anna', age: 43 },
 *   { name: 'Adam', age: 47 },
 *   { name: 'Lenny', age: 51 },
 *   { name: 'Robert', age: 72 },
 *   { name: 'Albert', age: 76 },
 *   { name: 'Peter', age: 81 } ]
 * Sorted by name:
 * [ { name: 'Adam', age: 47 },
 *   { name: 'Albert', age: 76 },
 *   { name: 'Andrew', age: 43 },
 *   { name: 'Anna', age: 43 },
 *   { name: 'John', age: 25 },
 *   { name: 'Lenny', age: 51 },
 *   { name: 'Peter', age: 81 },
 *   { name: 'Robert', age: 72 } ]
 * 
 */

import { prop, sortBy } from 'ramda';

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

console.log('Sorted by age:');

let sortedByAge = sortBy(prop('age'), users);
console.log(sortedByAge);

console.log('Sorted by name:');

let sortedByName = sortBy(prop('name'), users);
console.log(sortedByName);
