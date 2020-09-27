/*
 *
 * The length() function returns the number of elements in the list.
 *
 * $ node -r esm lengthfn.mjs
 * 12
 * 7
 *
 */

import { length, uniq } from 'ramda';

let nums = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 7];

let n1 = length(nums);
console.log(n1);

let n2 = length(uniq(nums));
console.log(n2);
