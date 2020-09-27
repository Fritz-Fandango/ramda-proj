/*
 *
 * The prop() function returns the specified property of an object if it exists.
 *
 * $ node -r esm propfun.js
 * John
 * 25
 *
 */

import { prop } from 'ramda';

console.log(prop('name', { name: 'John', age: 25 }));
console.log(prop('age', { name: 'John', age: 25 }));
