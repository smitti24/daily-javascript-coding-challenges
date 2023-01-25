"use strict";

/* 
Challenge #20: Dotted Triangles
============================
 
Create a function triangle that returns the number of dots when given its corresponding triabgle  number of the sequence n.

Test Data: 
triangle(1) -> 1
triangle(6) -> 21
triangle(215) -> 23220

*/

// Solution:

const triangle = (n) => {
  return n * (n + 1) / 2;
}

console.log(triangle(1));
console.log(triangle(6));
console.log(triangle(215));
