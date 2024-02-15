// Return the char that is repeated the most in a string. make sure that it is a albpabetic char. If there are more than one char that's the most common, return the first char of the first one.

const mostRepeated = (str) => {
  let mostCommon = 0;
  let mostCommonChar = '';
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > mostCommon && str[i].match(/[a-z]/i)) {
      mostCommon = count;
      mostCommonChar = str[i];
    }
  }
  return mostCommonChar;
}

console.log(mostRepeated('AAAAsfdasondoasnd21312dkansldknaBBBBBBBBBBBBBBBB'))