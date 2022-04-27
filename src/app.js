const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageCount = document.getElementById("pages");
const readInput = document.getElementById("read");
const subBtn = document.getElementById("sub-btn");
const cardDisplay = document.getElementById("card");

let library = [];

const addBook = (e) => {
  e.preventDefault(); //to stop form submitting

  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
  };
  library.push(book);

  console.log(library);
};

// On click add book button executes => displayDetails
subBtn.addEventListener("click", addBook);

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

console.log(library);
