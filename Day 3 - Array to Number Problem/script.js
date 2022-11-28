/* 
Challenge #3: Array to Number Problem
============================
==> Create a function toArray() that takes any positive number and returns an array of its digits.

Test Data: 
toArray(235) -> [2, 3, 5]
toArray(0) -> [0]
toArray(12) -> [1, 2]

*/

function toArray(number) {
    return number.toString().split('').map(Number);
}

console.log(toArray(235));