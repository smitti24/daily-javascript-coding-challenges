/* 
Challenge #4: Christmas Eve Yet?
============================
==> Create A boolean function threeDivisors() that accepts a number and figures out if it has exactly 3 divisors (The number is exactly divisible by 3 other numbers). Return true if the number has exactly 3 divisors and false otherwise.

Test Data: 
threeDivisors(4)-> true
threeDivisors(12) -> false
threeDivisors(25) -> true

*/

const threeDivisors = (number) => {
    let divisorsCount = 0;

    for (let i = 1; i <= number; i++){
       if (number % i === 0) {
            divisorsCount++
            continue;
       }

       if (divisorsCount > 3){
        break;
       }
    }

    return divisorsCount;
}



console.log(threeDivisors(4));