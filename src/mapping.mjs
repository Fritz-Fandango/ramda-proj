/*
 *
 * The map() function maps a provided function on each of the container's values.
 *
 * The call() function invokes a provided function on arguments separated by comma.
 *
 * The repeat() function returns a fixed list of size n containing a specified
 * identical value.
 *
 * $ node -r esm mapping.mjs
 * [ 4, 8, 10, 12, 14, 16, 18 ]
 * [ true, true, false, true, false, true, false ]
 * [ 0.22019193556521865,
 *   0.415950206671615,
 *   0.8770997167119405,
 *   0.23393806619678315,
 *   0.8181008680173825 ]
 *
 */

import { call, map, repeat } from 'ramda';

let nums = [2, 4, 5, 6, 7, 8, 9];

let res = map(x => x * 2, nums);
console.log(res);

const isEven = (x) => x % 2 === 0;

let res2 = map(isEven, nums);
console.log(res2);

let repeated = map(call, repeat(Math.random, 5));
console.log(repeated);
