// My solution to this problem

const numbers = [14, 35, 6, 1, 34, 54];
let min = 0;
let max = 0;

// Solution #1
const smallBig1 = (numbersArray) => {
    min = numbersArray[0];
    max = numbersArray[0];
    // numbersArray.sort((a, b) => a - b);

    for (let i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] > max ) {
            max = numbersArray[i];
        } 

        if (numbersArray[i] < min) {
            min = numbersArray[i] 
        }
    }
    
    
    return [min, max];
}

console.log(smallBig1(numbers));
console.log(smallBig2(numbers));

// Solution #2 (Faster than 1);
function smallBig2(numbersArray) {
    min = Math.min(...numbersArray);
    max = Math.max(...numbersArray);

    return [min, max];
}