"use strict";

/* 
Challenge #10: Same Function Again?
============================
 
Create a function same() that takes in a str and returns a function that returns str

Test Data: 
same("ANDRE SMITH"); -> function1() -> "ANDRE SMITH"
same("THIS IS A COOL CHALLENGE"); -> function2() -> 'THIS IS A COOL CHALLENGE'
*/

// Solution:
const same = (str) => () => str;

const function1 = same("ANDRE SMITH");
console.log(function1);
