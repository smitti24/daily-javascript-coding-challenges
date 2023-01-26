// Return the first index of the most common element. If there are more than one index
// that's the most common, return the first index of the first one.

// Examples:
// [1, 2, 3] -> 0
// [1, 1, 1, 3] -> 0
// [2, 1, 1, 2] -> 0

function mostCommonIndex(arr) {
  let mostCommon = 0;
  let mostCommonIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > mostCommon) {
      mostCommon = count;
      mostCommonIndex = i;
    }
  }
  return mostCommonIndex;
}

console.log(mostCommonIndex([1, 2, 3, 1, 5, 2, 2]));