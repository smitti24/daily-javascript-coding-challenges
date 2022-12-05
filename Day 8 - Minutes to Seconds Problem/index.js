"use strict";

/* 
Challenge #8: Minutes to Seconds Problem?
============================
 
Create a function timeConvert which takes an integer calue for minutes and converts it to seconds.

Test Data: 
timeConvert(5) -> 300
timeConvert(3) -> 180
timeConvert(2) -> 120
*/

// Solution:
const timeConvert = (minutes) => minutes * 60;

console.log(timeConvert(5));
console.log(timeConvert(3));
console.log(timeConvert(2));
