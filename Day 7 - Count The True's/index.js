"use strict";

/* 

Challenge #7: Count the true's?
============================
 
Create a fucntion countTrue which takes an array with only boolean values (true and false) and returns the number of 'true' values.

Test Data: 
countTrue([true, false, false, true, false]); -> 2
countTrue([false, false, false, false]); -> 0

*/

// Solution:

const countTrue = (arr) => {
  let countTrue = 0;

  arr.forEach((element) => {
    element && countTrue++;
  });

  return countTrue;
};

const countTrueFiltered = (arr) => arr.filter(Boolean).length;

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));

console.log(countTrueFiltered([true, false, false, true, false]));
console.log(countTrueFiltered([false, false, false, false]));
