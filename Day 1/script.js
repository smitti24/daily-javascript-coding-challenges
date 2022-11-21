// My Solution
const testData = [1, 4, 13, 392, 53, 897, 1000, 738];

function addBefore() {
    testData.forEach(dataPoint => {
        let sum = 0;
        for (let i = 1; i <= dataPoint; i++) {
            sum += i;
        }
        console.log(sum);
    });
}

addBefore();
