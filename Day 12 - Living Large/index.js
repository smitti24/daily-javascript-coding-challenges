"use strict";

/* 
Challenge #12: Living Large?
============================
 
Create a function larger() that takes a two-digit number num and determines if the swapped numbers are larger than the original number.
If the original number > swapped number, then return true, else false. If the two digit numbers are the same, it should return true

Test Data: 
larger(27) -> false"
larger(43) -> true
larger(14) -> false
larger(11) -> true
*/

// Solution:
const larger = (num) => {
  const swappedNum = +String(num).split("").reverse().join("");
  if (swappedNum === num) return true;
  else if (swappedNum < num) return true;
  else return false;
};

console.log(larger(27));
console.log(larger(43));
console.log(larger(14));
console.log(larger(11));
