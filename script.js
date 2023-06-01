// Library App
// Array to Hold library of books
let lib = []

const container = document.querySelector('.container'),
newBtn = document.querySelector('.new-book'),
formDiv = document.querySelector('.book-form'),
subBtn = document.querySelector('.submit'),
cancelBtn = document.querySelector('.close')
// Declare global delete button and read checkbox variables
let delBtn = document.querySelectorAll('.card img'),
readCheck = document.querySelectorAll('.card input')

// Object CONSTRUCTOR Function
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.toggleRead = function () {
        if (this.read) {this.read = false} else {this.read = true}
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
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

    // Add X icon to card
    const img = document.createElement('img')
    img.setAttribute('src', 'img/x-icon.svg')
    img.setAttribute('alt', 'Close Icon')
    card.append(img)
    
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
    pages.textContent =  book.pages + ' pages'
    card.append(pages)

    // Read
    const read = document.createElement('input'),
    label = document.createElement('label')

    label.setAttribute('class', 'read')
    label.textContent = 'Read: '

    read.setAttribute('type', 'checkbox')
    if (book.read === true) {
        read.checked = true
    } else {read.checked = false}

    label.append(read)
    card.append(label)

    // Label the Card with the index of lib 
    card.setAttribute('data', (lib.length - 1))
}

// Button brings up form to input details about new book
newBtn.addEventListener('click', () => {
    // Form is already on the page -- just hidden
    // Button makes it visible
    formDiv.style.visibility = 'visible'
})

// Submit form btn will hold a function that adds book to library, adds card and fills card out with info -- updates delete buttons and adds listeners to them
subBtn.addEventListener('click', (event) => {
    let title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    pages = document.querySelector('#pages')
    read = document.querySelector('#read')

    lib.push(addBookToLibrary(title.value, author.value, pages.value, read.checked))

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

    delBtn = document.querySelectorAll('.card img')
    // Loop through X button on cards and delete the corrosponding card and book data from lib
    delBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            let parentCard = btn.parentElement,
            ind = parentCard.getAttribute('data')

            delete lib[ind]
            parentCard.remove()
        })
    })

    // Loop through Read Checkboxes and check if their status changed
    readCheck = document.querySelectorAll('.card input')
    readCheck.forEach((box) => {
        box.addEventListener('change', () => {
            let label = box.parentElement,
            card = label.parentElement,
            book = card.getAttribute('data')

            lib[book].toggleRead()
        })
    })
})

// Listener for .close button on form
cancelBtn.addEventListener('click', () => {
    // Hide form
    formDiv.style.visibility = 'hidden'
    // Clear contents of inputs
    const inputs = document.querySelectorAll('form input')
    inputs.forEach((input) => input.id === 'read' ? input.checked = false : input.value = '' )
})
// TEST
let book1 = new Book('My Book', 'ME', 69, true);
lib.push(book1)