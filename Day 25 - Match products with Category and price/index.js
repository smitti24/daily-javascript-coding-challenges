"use strict";

/*
An interviewer once asked me a question using javascript. 
He gave me 3 objects of data. 
the one i think was a product list, tied to a category id, 
the other was a category list with a uid and the other was a price list with a uid attached to a product:



*/

const products = [
  { productId: 1, name: "Product A", categoryId: 101 },
  { productId: 2, name: "Product B", categoryId: 102 },
  { productId: 3, name: "Product C", categoryId: 103 },
];

const categories = [
  { categoryId: 101, categoryName: "Electronics" },
  { categoryId: 102, categoryName: "Books" },
  { categoryId: 103, categoryName: "Clothing" },
];

const prices = [
  { productId: 1, price: 299.99 },
  { productId: 2, price: 19.99 },
  { productId: 3, price: 49.99 },
];

// Create a function that matches the product to a category, and also to its price.
//  const item = [{
//     productId: 1,
//     name: "Product A",
//     categoryId: 101,
//     categoryName: "Electronics",
//     price: 299.99
//  }]

const items = [];

const matchItems = (productId) => {
  const product = products.find((product) => product.productId === productId);

  if (!product) {
    return null;
  }

  const category = categories.find(
    (category) => category.categoryId === product.categoryId
  );
  const price = prices.find((price) => price.productId === productId);

  return {
    ...product,
    ...category,
    ...price,
  };
};

const populateAllItems = () => {
  products.forEach((product) => {
    items.push(matchItems(product.productId));
  });
};

populateAllItems();

console.log(items);
