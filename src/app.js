const titleInput = document.getElementById("title").value;
const authorInput = document.getElementById("author").value;
const pageCount = document.getElementById("pages").value;
const readInput = document.getElementById("read");
const subBtn = document.getElementById("sub-btn");
const cardDisplay = document.getElementById("card");
const form = document.getElementById("form");

let library = [];

function createBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  let newBook = new Book(title, author, pages);
  library.push(newBook);

  buildBook();
}

function buildBook() {
  const newDiv = document.createElement("div");
  console.log("add");
  newDiv.classList.add("new-div");
  for (let i = 0; i < library.length; i++) {
    cardDisplay.appendChild(newDiv);
    newDiv.textContent =
      library[i].title + " " + library[i].author + " " + library[i].pages;
  }
}
subBtn.addEventListener("click", createBook);

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
