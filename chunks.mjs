/*
 *
 * With splitEvery() function, we can split a list into chunks of specified length.
 *
 * $ node -r esm chunks.mjs
 * [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
 * [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
 *
 */

import { splitEvery } from "ramda";

let nums = [ 1, 2, 3, 4, 5, 6 ];

console.log(splitEvery(2, nums));
console.log(splitEvery(3, nums));
