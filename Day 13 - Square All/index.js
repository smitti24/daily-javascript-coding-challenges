"use strict";

/* 
Challenge #13: We are Square
============================
 
Create a function squareAll that squares every digit of a number n.

Test Data: 
squareAll(9119) -> 811181
squareAll(2483) -> 416649
squareAll(3212) -> 9414
*/

// Solution:
const squareAll = (num) => {
  return +num.toString().split("").map(number => (number ** 2)).join('');
}

console.log(squareAll(9119));
console.log(squareAll(2483));
console.log(squareAll(3212));
