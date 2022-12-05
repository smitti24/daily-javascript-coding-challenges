/* 
Challenge #4: Christmas Eve Yet?
============================
==> Create a boolean function christmasEve() that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.

Test Data: 
christmasEve(new Date(2003, 11, 24)) -> true
christmasEve(new Date(2018, 0, 23)) -> false
christmasEve(new Date(3000, 11, 24)) -> true

*/

const christmasEve = (date) => {
    return (date.getDate() === 24 && date.getMonth() === 11);
}

console.log(christmasEve(new Date(2003, 11, 24)));
console.log(christmasEve(new Date(2018, 0, 23)));
console.log(christmasEve(new Date(3000, 11, 24)));