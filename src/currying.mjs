/*
 *
 * Currying is the process of transforming a function that expects multiple parameters into another function that,
 * when supplied fewer parameters, returns a new function that awaits the remaining ones.
 *
 * $ node -r esm currying.mjs
 * [ 2, 3, 4 ]
 *
 */

import { map, add } from 'ramda';

let addOneToAll = map(add(1));
let res = addOneToAll([1, 2, 3]);

console.log(res);
