const bookContainer = document.querySelector(".book-container");
const addButton = document.querySelector(".add-button");
const addBookForm = document.querySelector(".add-book-form");
const cancelAddBookButton = document.querySelector("#cancel-add-book");
const bookForm = document.getElementById("book-form");
const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(name, author, pages) {
  const book = new Book(name, author, pages);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
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

    const addButton = document.querySelector(".add-button");
    bookContainer.insertBefore(bookCard, addButton);
  });
}

function clearBooks() {
  const bookCards = document.querySelectorAll(".book-card");
  bookCards.forEach((card) => {
    if (!card.classList.contains("add-button")) {
      card.remove();
    }
  });
}

function showAddBookForm() {
  addBookForm.style.display = "block";
}

function hideAddBookForm() {
  addBookForm.style.display = "none";
}

addButton.addEventListener("click", showAddBookForm);

cancelAddBookButton.addEventListener("click", hideAddBookForm);

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const bookName = document.getElementById("book-name").value;
  const bookAuthor = document.getElementById("book-author").value;
  const bookPages = document.getElementById("book-pages").value;

  addBookToLibrary(bookName, bookAuthor, bookPages);

  bookForm.reset();

  hideAddBookForm();

  clearBooks();
  displayBooks();
});

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);

clearBooks();
displayBooks();
