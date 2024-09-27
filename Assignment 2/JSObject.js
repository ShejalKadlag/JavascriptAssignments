// Define the book object
let book = {
    title: "Wings of fire",
    author: "Dr.A.P.J.Abdul kalam.",
    yearPublished: 1999,
    genre: "Autobiography"
};

// Function to display book details
function displayBookDetails(book) {
    return `Book Details:
    Title: ${book.title}
    Author: ${book.author}
    Year Published: ${book.yearPublished}
    Genre: ${book.genre}`;
}
// Call the function
console.log(displayBookDetails(book));
