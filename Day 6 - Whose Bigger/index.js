'use strict';

/* 

Challenge #6: Whose Bigger?
============================
 
Create a function isBigger that will pass two functions, first and second, that dont take any parameters, and return a string which indicates which function returned the larger numeber.

Test Data: 
isBigger(() => 5, () => 10); -> 'Second'
isBigger(() => 25, () => 25); -> 'Both'
isBigger(() => 505050, () => 5050); -> 'First

*/

// Solution: 

function isBigger(first, second) {
    if (first() > second()) {
        return 'First';
    } else if (first() < second()) {    
        return 'Second';
    } else {    
        return 'Both';
    }
}

console.log(isBigger(() => 5, () => 10));
console.log(isBigger(() => 25, () => 25));
console.log(isBigger(() => 505050, () => 5050));