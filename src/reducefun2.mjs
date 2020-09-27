/*
 *
 * The reduce() function aggregates list values into a single value.
 * It applies a function against an accumulator and each element in
 * the list (from left to right) to reduce it to a single value.
 *
 * With splitEvery() function, we can split a list into chunks of specified length.
 *
 * The following example calculates the expression: 1 * 2 + 3 * 4 + 5 * 6.
 *
 * $ node -r esm reducefun2.mjs
 * 44
 *
 */

import { splitEvery, reduce } from 'ramda';

const nums = [1, 2, 3, 4, 5, 6];

let ret = reduce((acc, x) => acc + x[0] * x[1], 0, splitEvery(2, nums));
console.log(ret);
