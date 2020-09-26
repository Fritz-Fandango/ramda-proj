/* 
 *
 * The sort() function returns a copy of the list, sorted according to the comparator function. 
 * The comparator function accepts two values at a time and returns a negative number 
 * if the first value is smaller, a positive number if it is larger, and zero if they are equal.
 * 
 * The reverse() function returns a new list or string with the elements or characters in reverse order.
 * 
 * $ node -r esm sort_reverse.js
 * sorting:
 * [ 1, 2, 3, 4, 5, 6, 8 ]
 * [ 8, 6, 5, 4, 3, 2, 1 ]
 * reversing:
 * [ 6, 5, 8, 2, 4, 1, 3 ]
 * tserof
 * 
 */

import { reverse, sort } from 'ramda';

let nums = [3, 1, 4, 2, 8, 5, 6];

console.log('sorting:');

// sort ascending
console.log(sort((x, y) => x - y, nums));

// sort descending
console.log(sort((x, y) => y - x, nums));

console.log('reversing:');

// reversing
console.log(reverse(nums));
console.log(reverse('forest'));
