/*
 *
 * The contains() function returns true if the specified value is in the list.
 * 
 * $ node -r esm containsfun.mjs
 * There is John in the list
 * There is Alberto in the list
 * 
 */

import { apply, contains, pluck } from 'ramda';

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

let isJohn = contains('John', pluck('name', users));

// Used apply() function for more added difficulty.
let isAlberto = apply(contains('Alberto'), pluck('name', users));

if(isJohn) {
    console.log('There is John in the list.');
}

if(isAlberto) {
    console.log('There is Alberto in the list.');
}
