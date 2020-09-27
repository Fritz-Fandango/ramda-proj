/*
 *
 * The apply() function invokes a provided function on a list of arguments.
 *
 * $ node -r esm applyfun.mjs
 * 1
 * 8
 *
 */

 import { apply } from 'ramda';

 let nums = [3, 5, 7, 8, 2, 1];

 let res = apply(Math.min, nums);
 console.log(res);

 let res2 = apply(Math.max, nums);
 console.log(res2);
