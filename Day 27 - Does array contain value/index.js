/*
   Write a function that retuns true if an array of objects contains a element

*/

const products = [
  { productId: 1, name: "Smartphone" },
  { productId: 2, name: "Laptop" },
  { productId: 3, name: "Headphones" },
];

const containsName = (name) => products.some((el) => el.name === name);

console.log(containsName("Andre"));
