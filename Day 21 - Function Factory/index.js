"use strict";

/* 
Challenge #20: Function Factory
============================
 
Create a function makePlusFunction that takes a base number as an argument. This function should return another function which takes
a new argument, and returns the sum of the base number and the new argument.

Test Data: 
const plusFive = makePlusFunction(5);
plusFive(2) -> 7

*/

// Solution:

function makePlusFunction(num) {
  return function(x) {
    return num + x;
  }
}

const plusFive = makePlusFunction(5);
console.log(plusFive(2));


const plusThree = makePlusFunction(10);
console.log(plusFive(3));


