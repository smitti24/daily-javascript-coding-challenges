const christmasEve = (date) => {
    return (date.getDate() === 24 && date.getMonth() === 11);
}

console.log(christmasEve(new Date(2003, 11, 24)));
console.log(christmasEve(new Date(2018, 0, 23)));
console.log(christmasEve(new Date(3000, 11, 24)));