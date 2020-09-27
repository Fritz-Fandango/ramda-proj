/*
 *
 * The filter() fuction filters a filterable (such as list or plain object)
 * according to the supplied predicate function.
 *
 * (A predicate is a function that returns a boolean value).
 *
 * $ node -r esm filtering2.mjs
 * [ { name: 'Peter', age: 81 },
 *   { name: 'Alberto', age: 76 },
 *   { name: 'Robert', age: 72 } ]
 *
 */

import { filter } from 'ramda';

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

const isSenior = (user) => user.age >= 70;

console.log(filter(isSenior, users));
