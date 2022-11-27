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