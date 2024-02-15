/* 
Challenge #24: Reverse a string 
============================
==> Reverse a string

Test Data: 
reverseString("Apple") -> elppa

*/

// 1st solution:

const reverseString = (string) => {
  let reverse = [];
  const size = string.split("");
  for (let i = size.length - 1; i >= 0; i--) {
    reverse += size[i];
  }

  return reverse;
};

console.log(reverseString("apple"));

// 2nd Solution:

const reverseStringAndRemoveDuplicates = (string) => {
  return [...new Set(string.split("").reverse())].join("");
};

console.log(reverseStringAndRemoveDuplicates("apple"));

// 3rd Solution:

const reverseString2 = (string) => {
  return string.split("").reverse().join("");
};

console.log(reverseString2("apple"));
