const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">By: ${book.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${book.author}</h6>
        <p class="card-text">Pages: ${book.pages}</p>
        <p class="card-text">${book.read ? "Read" : "Not Read Yet"}</p>
      </div>
    </div>
  `;
    libraryEl.appendChild(bookEl);
  }
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", function () {
  const newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

const newBookForm = document.querySelector("#new-book-form");

newBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
  newBookForm.style.display = "none";
});
