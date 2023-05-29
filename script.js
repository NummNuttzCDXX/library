// Library App
// Array to Hold library of books
let lib = []

const card = document.querySelector('.card')

// Object CONSTRUCTOR Function
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        if (this.read === false) {
            return `${title} by ${author}, ${pages} pages, not read yet`
        } else {
            return `${title} by ${author}, ${pages} pages, read`
        }
    }
}

function addBookToLibrary(input) {
    // Add input to library
    lib.push(input)
}

function showBook(book) {
    const title = document.querySelector('.title'),
    author = document.querySelector('.author'),
    pages = document.querySelector('.pages'),
    read = document.querySelector('.read');

    title.textContent += book.title
    author.textContent += book.author
    pages.textContent += book.pages
    read.textContent += book.read
}

// TEST
let book1 = new Book('My Book', 'ME', 69, true);
lib.push(book1)