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
  this.read = false;
}
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(name, author, pages) {
  const book = new Book(name, author, pages);
  myLibrary.push(book);
}

function createRemoveButtonSVG() {
  const removeButton = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  removeButton.setAttribute("viewBox", "0 0 24 24");
  removeButton.setAttribute("width", "24"); // Adjust size as needed
  removeButton.setAttribute("height", "24");
  removeButton.classList.add("remove-button");
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = "trash-can-outline";
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
  );
  removeButton.appendChild(title);
  removeButton.appendChild(path);

  return removeButton;
}

function displayBooks() {
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", index);

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");

    const Name = document.createElement("h2");
    Name.textContent = book.name;

    const Author = document.createElement("p");
    Author.textContent = `by ${book.author}`;

    const PageCount = document.createElement("p");
    PageCount.textContent = `${book.pages} Pages`;

    bookDetails.appendChild(Name);
    bookDetails.appendChild(Author);
    bookDetails.appendChild(PageCount);

    const removeButton = createRemoveButtonSVG();

    removeButton.addEventListener("click", function () {
      const indexToRemove = parseInt(
        this.closest(".book-card").dataset.index,
        10
      );
      myLibrary.splice(indexToRemove, 1);
      clearBooks();
      displayBooks();
    });

    bookCard.appendChild(bookDetails);
    bookCard.appendChild(removeButton);

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
