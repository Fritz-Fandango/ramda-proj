/*
 *
 * The add() function adds two values, and the subtract() function subtracts two values.
 * 
 * $ node -r esm add_sub.mjs
 * 7
 * -3
 * -1
 * 
 */

import { add, subtract } from 'ramda';

console.log(add(2,5));
console.log(subtract(2,5));

let res = add(add(2,5), subtract(2, 10));
console.log(res);
