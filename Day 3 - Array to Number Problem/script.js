// My solution to the problem

function toArray(number) {
    return number.toString().split('').map(Number);
}

console.log(toArray(122200000));