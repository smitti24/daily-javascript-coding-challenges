"use strict";

/* 
Challenge #11: How many digits?
============================
 
Create a function digits() which will return an integer number based on the amount of digits in a given integer number.

Test Data: 
digits(1000) -> 4"
digits(12) -> 2
digits(1305981031) -> 10
*/

// Solution:
const digits = (number) => {
  const regex = new RegExp("^d( ?d){15,18}$");
  const test = regex.exec(number);

  console.log(test);
};

digits(1000);
