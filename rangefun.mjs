/*
 *
 * The range() function returns a list of numbers from the start value (inclusive) to the end value (exclusive).
 *
 * $ node -r esm rangefun.mjs
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10
 * 11
 *
 */

import { range } from 'ramda';

console.log(range(1, 10));

let vals = range(2, 12);

vals.map( x => console.log(x));
