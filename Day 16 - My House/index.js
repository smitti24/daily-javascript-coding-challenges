"use strict";

/* 
Challenge #16: My House!
============================
 
Create a function myHouse that takes a number (step) and returns the total number of matchsticks in that step.

Test Data: 
myHouse(1) -> 6
myHouse(4) -> 21
myHouse(87) -> 436

*/

// Solution:
const myHouse = (num) => {
  return num === 0 ? 0 : num * 5 + 1;
}

console.log(myHouse(1));
console.log(myHouse(2));
console.log(myHouse(4));
console.log(myHouse(87));
