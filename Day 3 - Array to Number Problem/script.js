function toArray(number) {
    return number.toString().split('').map(Number);
}

console.log(toArray(235));