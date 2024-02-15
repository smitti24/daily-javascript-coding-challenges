const { books } = require("../books-data");

// Destructure the first book object from the books array into variables called title, author and ISBN.
const [firstBook] = books;

// const { title, author, ISBN } = firstBook;
// console.log(title, author, ISBN);

/*

Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

*/
const { keywords: tags } = firstBook;
console.log(tags);

/*

The seventh book from the books array is missing the programmingLanguage property. 
Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. 
Assign the programmingLanguage variable with a default value of 'unknown'.

*/

const seventhBook = books[6];

const { language, programmingLanguage = "unknown" } = seventhBook;

console.log(language, programmingLanguage);

/*

Below are two variables called bookTitle and bookAuthor.
Reassign them with the values of the title and author properties of the first book object from the books array.

*/

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = firstBook);

/*

Destructure the first book object from the books array into a variable called bookRating. 
In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

Please do most of the work on the left side of the assignment operator: const ... = books[0];

*/
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

console.log(bookRating);
