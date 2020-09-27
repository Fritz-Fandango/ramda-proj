/*
 *
 * The where() function allows to create complex queries on objects.
 *
 * The equals() function returns true if its arguments are equivalent, false otherwise.
 * Handles cyclical data structures.
 * Dispatches symmetrically to the equals methods of both arguments, if present.
 *
 * The filter() function filters a filterable (such as list or plain object)
 * according to the supplied predicate function.
 *
 * (A predicate is a function that returns a boolean value).
 *
 * The startsWith() function checks if a list starts with the provided sublist.
 * Similarly, checks if a string starts with the provided substring.
 *
 * $ node -r esm where_fun.js
 * [ { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
 *   { name: 'Alberto', city: 'Bratislava', born: '1940-12-11' },
 *   { name: 'Roberto', city: 'Bratislava', born: '1935-05-15' } ]
 * [ { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
 *   { name: 'Alberto', city: 'Bratislava', born: '1940-12-11' } ]
 * [ { name: 'Pedro', city: 'Prague', born: '1936-03-24' },
 *   { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
 *   { name: 'Alberto', city: 'Bratislava', born: '1940-12-11' },
 *   { name: 'Roberto', city: 'Bratislava', born: '1935-05-15' } ]
 *
 */

import moment from 'moment';
import { equals, filter, startsWith, where } from 'ramda';

const users = [
    { name: 'John', city: 'London', born: '2001-04-01' },
    { name: 'Lenny', city: 'New York', born: '1997-12-11' },
    { name: 'Andrew', city: 'Boston', born: '1987-02-22' },
    { name: 'Pedro', city: 'Prague', born: '1936-03-24' },
    { name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
    { name: 'Alberto', city: 'Bratislava', born: '1940-12-11' },
    { name: 'Adam', city: 'Trnava', born: '1983-12-01' },
    { name: 'Roberto', city: 'Bratislava', born: '1935-05-15' },
    { name: 'Robert', city: 'Prague', born: '1998-03-14' }
];

const getAge = (date) => {
    return moment.duration(moment() - moment(date, 'YYYY-MM-DD', true)).years();
}

let res = filter(where({
    city: equals('Bratislava')
}))(users);

console.log(res);

let res2 = filter(where({
    city: equals('Bratislava'),
    name: startsWith('A')
}))(users);

console.log(res2);

let res3 = filter(where({
    born: (date) => getAge(date) > 40
}))(users);

console.log(res3);
