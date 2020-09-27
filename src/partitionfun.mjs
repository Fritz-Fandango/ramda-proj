/*
 *
 * The partition() function divides filterable into a two separate objects:
 * one that satisfies the predicate and one that does not.
 *
 * $ node -r esm partitionfun.mjs
 * [ -5, -1, -6 ]
 * [ 4, 3, 2, 7, 8, 9 ]
 *
 */

import { partition } from 'ramda';

const nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let [ neg, pos ] = partition((element) => element < 0, nums);
console.log(neg);
console.log(pos);
