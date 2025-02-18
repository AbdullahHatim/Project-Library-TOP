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

function displayBooks(){
  myLibrary.forEach((book)=>{
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    
    const Name = document.createElement("h2");
    Name.textContent = book.name;

    const Author = document.createElement("p");
    Author.textContent = `by ${book.author}`;

    const PageCount = document.createElement("p");
    PageCount.textContent = `${book.pages} Pages`;

    bookCard.appendChild(Name);
    bookCard.appendChild(Author);
    bookCard.appendChild(PageCount);

    const bookContainer = document.querySelector(".book-container");
    const addButton = document.querySelector(".add-button");
    bookContainer.insertBefore(bookCard,addButton);
    
  });
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);

displayBooks();