"use strict";

/* 
Challenge #18: Count down from 100 to 1
============================
 
Create a function that counts down from 100 to 1 without using built in reverse() function.

*/

// Solution:
function countdown(fromNum) {
  for (let i = fromNum; i <= fromNum && i > 0; i--) {
    setTimeout(function() {
      console.log(i);
    })
  }
}

countdown(100);
