/*
 * 
 * The flip() function returns a new function from the supplied one where its arguments are reversed.
 *
 * $ node -r esm flipfun.mjs
 * -8
 * 8
 * 
 */

import { subtract, flip } from 'ramda';

let val = subtract(2, 10);
console.log(val);

let val2= flip(subtract)(2, 10);
console.log(val2);
