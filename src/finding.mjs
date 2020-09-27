/*
 *
 * The find() function returns the first element of the list which matches the predicate,
 * or undefined if there is no match.
 *
 * The findLast() function returns the last element of the list which matches the predicate,
 * or undefined if no element matches.
 *
 * $ node -r esm finding.js
 * 5
 * 9
 *
 */

import { find, findLast } from 'ramda';

const isPostive = (x) => x > 0;

let values = [-1, 0, -4, 5, 6, -1, 9, -2];

let val = find(isPostive, values);
console.log(val);

let val2 = findLast(isPostive, values);
console.log(val2);
