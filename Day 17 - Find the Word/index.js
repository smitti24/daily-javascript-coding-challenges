"use strict";

/* 
Challenge #17: Find the word!
============================
 
Create a function findWord which will find the word in the crow of letters with the following 2 rules:
- The word to be found is in lowercase.
- The crowd of letters is all in uppercase.

note: The word to be found will be spread out in the crow of letters, but their letters remain in the same order!

Test Data: 
findWord("UjUNFYGaFYFYGyNUH") -> jay
findWord(aGFASDSAndADWQDSPKPPrADSAe) -> andre
findWord(AKDAsADAOPPWmitaSDASDh) -> smith

*/

// Solution:
const findWord = (word) => {
  let lowercaseLetters = [];
  word.toString().split("").forEach(x => {
    if (x.match(/[a-z]/)) lowercaseLetters.push(x);
  });

  return lowercaseLetters.join('');
}

// Alternate solution
const findWordImproved = (word) => {
  return [...word].filter(c => c.toLowerCase() === c).join('');
}

console.log(findWord("UjUNFYGaFYFYGyNUH"));
console.log(findWord("aGFASDSAndADWQDSPKPPrADSAe"));
console.log(findWordImproved("AKDAsADAOPPWmitSDASDh"));
