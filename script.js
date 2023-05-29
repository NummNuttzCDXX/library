// Library App
let lib = []

function book(title, author, pages, read) {
    self.name = title,
    self.author = author,
    self.pages = pages,
    self.read = read,
    self.info = function() {
        if (self.read === false) {
            return `${title} by ${author}, ${pages} pages, not read yet`
        } else {
            return `${title} by ${author}, ${pages} pages, read`
        }
    }
}