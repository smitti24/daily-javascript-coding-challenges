/*
    write a function that merges these two arrays to produce an array of objects. 
    Each object should contain the product ID, product name, and an array of all review texts associated with that product.

*/

const products = [
  { productId: 1, name: "Smartphone" },
  { productId: 2, name: "Laptop" },
  { productId: 3, name: "Headphones" },
];

const reviews = [
  { productId: 1, reviewText: "Great performance" },
  { productId: 1, reviewText: "Excellent camera" },
  { productId: 2, reviewText: "Very durable" },
  { productId: 2, reviewText: "Fast and reliable" },
  { productId: 3, reviewText: "Superb sound quality" },
  { productId: 3, reviewText: "Comfortable to wear" },
  { productId: 3, reviewText: "Affordable price" },
];

function matchProductsWithReviews() {
  return products.map((product) => {
    const reviewsForProduct = reviews
      .filter((review) => {
        return review.productId === product.productId;
      })
      .map((review) => review.reviewText);

    return {
      ...product,
      reviews: reviewsForProduct,
    };
  });
}

console.log(matchProductsWithReviews());
