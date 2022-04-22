let library = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
}

addBookToLibrary("b", "b", 20, true)
addBookToLibrary("c", "c", 200, false)


function displayBooks() {
    for(const book of library) {
        if(book.length === 0)break
        console.log(book)
    }
}
displayBooks()