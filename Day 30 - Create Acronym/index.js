/*

Write a JavaScript function named createAcronym that takes a string as input and returns the acronym of that string. 

console.log(createAcronym("Asynchronous JavaScript and XML")); // Should output: "AJAX"
console.log(createAcronym("HyperText Markup Language")); // Should output: "HTML"
console.log(createAcronym("Cascading Style Sheets")); // Should output: "CSS"

*/

const createAcronym = (sentence) => {
  return sentence
    .split(" ")
    .map((text) => text[0].toUpperCase())
    .join("");
};

console.log(createAcronym("Asynchronous JavaScript and XML")); // Should output: "AJAX"
console.log(createAcronym("Cascading Style Sheets")); // Should output: "CSS"

/*
Bonus: Enhance the createAcronym function to handle input strings where words may be separated by more than just spaces (e.g., commas, semicolons).
*/

const createAcronymAdvanced = (sentence) => {
  return sentence
    .split(/[ ,;]+/)
    .map((text) => text[0].toUpperCase())
    .join("");
};

console.log(createAcronymAdvanced("Representational State Transfer, REST")); // Should output: "REST"
