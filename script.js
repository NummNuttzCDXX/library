// Library App
// Array to Hold library of books
let lib = []

const card = document.querySelector('.card')
const container = document.querySelector('.container'),
newBtn = document.querySelector('.new-book'),
formDiv = document.querySelector('.book-form'),
subBtn = document.querySelector('.submit')

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

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages, false)
    // Add input to library
    return newBook
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

function addCard(book) {
    const div = document.createElement('div')

    // Add new div with .card to .container
    div.classList.add('card')
    container.append(div)

    // Get cards, Get length of nodelist, and set the card to the last item in nodelist
    const cards = document.querySelectorAll('.card'),
    len = cards.length,
    card = cards[len-1]
    
    // Create new div for title, set text, and add to card
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = book.title
    card.appendChild(title)

    // Author
    const author = document.createElement('div')
    author.classList.add('author')
    author.textContent = 'By: ' + book.author
    card.append(author)

    // Pages
    const pages = document.createElement('div')
    pages.classList.add('pages')
    pages.textContent =  book.pages + 'pages'
    card.append(pages)

    // Read
}

// Function to show newly added book on the page and add to library
// Need to turn inputs into a new Book Object -- Add card and show the details of book on the card
function createBook() {
    addBookToLibrary()
} 

// Button brings up form to input details about new book
newBtn.addEventListener('click', () => {
    // Form is already on the page -- just hidden
    // Button makes it visible
    formDiv.style.visibility = 'visible'
})

subBtn.addEventListener('click', (event) => {
    let title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    pages = document.querySelector('#pages')
    // read = 

    lib.push(addBookToLibrary(title.value, author.value, pages.value))

    // Reset text fields
    title.value = ''
    author.value = ''
    pages.value = ''

    // Prevent button from 'submitting' data -- Otherwise it sends the data before it can do anything else
    event.preventDefault()

    // Remove Form from window
    formDiv.style.visibility = 'hidden'

    // Add card to page with book data
    let len = lib.length
    addCard(lib[len - 1])
})

// TEST
let book1 = new Book('My Book', 'ME', 69, true);
lib.push(book1)