/* 
 *
 * The product() function multiplies together all the elements of a list.
 * 
 * $ node -r esm productfun.mjs
 * 3840
 * 
 */

import { product } from 'ramda';

let nums = [2, 4, 6, 8, 10];

console.log(product(nums));
