/* 
 *
 * We can also use the built-in R.lt and R.gt comparators.
 * 
 * Ramda makes a comparator function out of a function that reports whether 
 * the first element is less than the second.
 * 
 * Ramda lt function returns true if the first argument is less than the second; false otherwise.
 * 
 * Ramda gt function returns true if the first argument is greater than the second; false otherwise.
 * 
 * $ node -r esm sort_reverse.mjs
 * sorting:
 * [ 1, 2, 3, 4, 5, 6, 8 ]
 * [ 8, 6, 5, 4, 3, 2, 1 ]
 * 
 */

import { comparator, gt, lt, sort } from 'ramda';

let nums = [3, 1, 4, 2, 8, 5, 6];

console.log('sorting:');

// sort ascending
console.log(sort(comparator(lt), nums));

// sort descending
console.log(sort(comparator(gt), nums));
