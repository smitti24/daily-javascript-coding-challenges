"use strict";

/* 
Challenge #15: Travelling Salesman Problem
============================
 
Create a function paths which takes a number n which is the total number of cities a salesman has to visit.
The function should calculate and return the total number of possible paths they could take, visiting each city
once before returning home.

Test Data: 
paths(2) -> 2
// A -> B
// B -> A

paths(3) -> 6
// A -> B
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B

paths(5) -> 120
*/

// Solution:
const paths = (num) => {
  if (num === 1) return num;

  return num * paths(num - 1);
}

console.log(paths(2));
console.log(paths(3));
console.log(paths(5));
