const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(name, author, pages) {
  // take params, create a book then store it in the array
  const book = new Book(name, author, pages);
  myLibrary.push(book);
}