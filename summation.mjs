/* 
 *
 * The sum() function sums all the elements of a list.
 * 
 * $ node -r esm summation.mjs
 * 30
 * 55
 * 
 */

import { range, sum } from 'ramda';

let nums = [2, 4, 6, 8, 10];

console.log(sum(nums));

console.log(sum(range(1, 11)));
