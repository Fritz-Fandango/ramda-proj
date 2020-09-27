/*
 *
 * The reject() is a complement to the filter().
 * It excludes elements of a filterable for which the predicate returns true.
 *
 * The filter() fuction filters a filterable (such as list or plain object)
 * according to the supplied predicate function.
 *
 * (A predicate is a function that returns a boolean value).
 *
 * The propEq() function returns true if the specified object property is equal,
 * in R.equals terms, to the given value; false otherwise.
 *
 * You can test multiple properties with R.whereEq.
 *
 * $ node -r esm rejecting.mjs
 * [ { name: 'John', city: 'London', born: '2001-04-01' },
 *   { name: 'Lenny', city: 'New York', born: '1997-12-11' },
 *   { name: 'Andrew', city: 'Boston', born: '1987-02-22' },
 *   { name: 'Pedro', city: 'Prague', born: '1936-03-24' },
 *   { name: 'Adam', city: 'Trnava', born: '1983-12-01' },
 *   { name: 'Robert', city: 'Prague', born: '1998-03-14' } ]
 * [ { name: 'Anna', city: 'Bratislava', born: '1973-11-12' },
 *   { name: 'Alberto', city: 'Bratislava', born: '1940-18-19' },
 *   { name: 'Roberto', city: 'Bratislava', born: '1935-05-15' } ]
 *
 */

import { filter, propEq, reject } from 'ramda';

const users = [
    { name: 'John', city: 'London', born: '2001-04-01' },
    { name: 'Lenny', city: 'New York', born: '1997-12-11' },
    { name: 'Andrew', city: 'Boston', born: '1987-02-22' },
    { name: 'Pedro', city: 'Prague', born: '1936-03-24' },
    { name: 'Anna', city: 'Bratislava', born: '1973-11-12' },
    { name: 'Alberto', city: 'Bratislava', born: '1940-18-19' },
    { name: 'Adam', city: 'Trnava', born:'1983-12-01' },
    { name: 'Roberto', city: 'Bratislava', born: '1935-05-15' },
    { name: 'Robert', city: 'Prague', born:'1998-03-14' }
];

let res = reject(propEq('city', 'Bratislava'))(users);
console.log(res);

let res2 = filter(propEq('city', 'Bratislava'))(users);
console.log(res2);
