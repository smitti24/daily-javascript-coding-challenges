// My Solution using an array
const testData = [1, 4, 13, 392, 53, 897, 1000, 738];

function addAllBeforeArray() {
    testData.forEach(dataPoint => {
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
