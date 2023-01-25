"use strict";

/* 
Challenge #19*: Fizz Buzz
============================
 
Given an integer n, return a string where:
FizzBuzz -> if i is divisible by 3 and 5.
Buzz -> if i is divisible by 3
Fizz -> if i is divisible by 5.
return i if none are true.

Test Data: 
fizzBuzz(3) -> ["1","2","Fizz"]
fizzBuzz(15) -> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

*/

// Solution:

const fizzBuzz = (n) => {
  let array = [];

  for(let i = 1; i <= n; i++) {
    // if (i % 3 === 0 && i % 5 === 0){
    //   array.push('FizzBuzz');
    // } else if (i % 3 === 0) {
    //   array.push('Fizz');
    // } else if (i % 5 === 0) {
    //   array.push('Buzz');
    // } else {
    //   array.push(i.toString());
    // }

    switch(true) {
      case i % 3 === 0 && i % 5 === 0:
        array.push('FizzBuzz');
      case i % 3 === 0:
        array.push('Fizz');
      case i % 5 === 0:
        array.push('Buzz');
      default:
        array.push(i.toString());
    }
  }

  return array;

}

console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
