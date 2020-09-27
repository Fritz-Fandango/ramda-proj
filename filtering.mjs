/*
 *
 * The filter() fuction filters a filterable (such as list or plain object)
 * according to the supplied predicate function.
 *
 * (A predicate is a function that returns a boolean value).
 *
 * $ node -r esm filtering.mjs
 * [ 2, 3, 4, 5, 6, 7 ]
 * [ -3, -1 ]
 * [ 0, 2, 4, 6 ]
 *
 */

import { filter } from 'ramda';

const nums = [-3, -1, 0, 2, 3, 4, 5, 6, 7];

let res = filter((x) => x > 0, nums);
console.log(res);

let res2 = filter((x) => x < 0, nums);
console.log(res2);

const isEven = (x) => x % 2 === 0;

let filtered = filter(isEven, nums);
console.log(filtered);
