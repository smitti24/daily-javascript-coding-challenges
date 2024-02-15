/* 
Challenge #1: Add All Before 
============================
==> Create a function addBefore that takes any number as an argument. The function should add all the numbers from 1 to the number you passed in the function.

Test Data: 
addBefore(1) -> 1
addBefore(4) -> 10
addBefore(13) -> 91
addBefore(392) -> 77028

*/

// My Solution using an array
const testData = [1, 4, 13, 392, 53, 897, 1000, 738];

function addAllBeforeArray() {
  testData.forEach((dataPoint) => {
    let sum = 0;
    for (let i = 1; i <= dataPoint; i++) {
      sum += i;
    }
    console.log(sum);
  });
}

// Solution using passed in numbers
function addBefore(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

addAllBeforeArray();

console.log(addBefore(13));

// Alternate Solutions:

function addBefore(num) {
  return (num * (num + 1)) / 2;
}
