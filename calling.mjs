/*
 *
 * The call() function invokes a provided function on arguments separated by comma.
 * 
 * $ node -r esm calling.mjs
 * 3
 * [ 'x', 'x', 'x', 'x', 'x' ]
 * [ 1, 2, 3 ]
 * 
 */

import { call, add, repeat } from 'ramda';

let res = call(add, 1, 2);
console.log(res);

console.log(call(repeat, 'x')(5));

call(console.log, [1, 2, 3]);
