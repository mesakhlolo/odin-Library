class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }

  addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.myLibrary.push(newBook);
    this.render();
  }

  removeBook(index) {
    this.myLibrary.splice(index, 1);
    this.render();
  }

  render() {
    const libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";

    this.myLibrary.forEach((book, i) => {
      const bookEl = document.createElement("div");
      bookEl.setAttribute("class", "card");
      bookEl.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">By: ${book.author}</h6>
      <p class="card-text">Pages: ${book.pages}</p>
      <p class="card-text">${book.read ? "Read" : "Not Read Yet"}</p>
      <button class="btn btn-danger" onclick="library.removeBook(${i})">Remove</button>
      <button class="btn btn-success" onclick="library.myLibrary[${i}].toggleRead(); library.render();">Change Read Status</button>
    </div>
  `;
      libraryEl.appendChild(bookEl);
    });
  }
}

// Initialize the library
const library = new Library();

// addBook button is submitted
const newBookForm = document.querySelector("#new-book-form");
const modalElement = document.querySelector("#newBookModal"); // Get the modal element

// Initialize the modal to be able to use modal.hide()
const modal = new bootstrap.Modal(modalElement);

newBookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (this.checkValidity()) {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    library.addBookToLibrary(title, author, pages, read);
    modal.hide();
  }
});

// when the form (modal) was closed
modalElement.addEventListener("hidden.bs.modal", function () {
  newBookForm.reset(); // Reset the form
});
