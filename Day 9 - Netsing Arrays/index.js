"use strict";

/* 
Challenge #9: Nesting Arrays
============================
 
Create a function nestArray which takes 2 arrays and returns true if the first array can be nested inside the second array and false otherwise.

Constraints:
array1 can be nested inside array2 if:
-> array1's min is greater than array2's min.
-> array1's max is greater than array2's max.

Test Data: 
nestArray([1, 2, 3, 4], [0, 6]); -> true
nestArray([3, 1], [4, 0]); -> true
nestArray([9, 9, 8], [8, 9]); -> false
nestArray([1, 2, 3, 4], [2, 3]); -> false
*/

// Solution:
const nestArray = (array1, array2) =>
  Math.min(...array1) > Math.min(...array2) &&
  Math.max(...array1) < Math.max(...array2);

console.log(nestArray([1, 2, 3, 4], [0, 6]));
console.log(nestArray([3, 1], [4, 0]));
console.log(nestArray([9, 9, 8], [8, 9]));
console.log(nestArray([1, 2, 3, 4], [2, 3]));
