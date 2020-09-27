/*
 *
 * The find() function returns the first element of the list which matches the predicate,
 * or undefined if there is no match.
 *
 * The propEq() function returns true if the specified object property is equal,
 * in R.equals terms, to the given value; false otherwise.
 *
 * You can test multiple properties with R.whereEq.
 *
 * $ node -r esm finding2.mjs
 * { name: 'Robert', age: 72 }
 * { name: 'Peter', age: 81 }
 *
 */

import { find, propEq } from 'ramda';

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

 console.log(find(propEq('name', 'Robert'))(users));
 console.log(find(propEq('age', 81))(users));
