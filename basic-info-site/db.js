const authors = [
    {id: 1, name: "Bryan",},
    {id: 2, name: "John",},
    {id: 3, name: "Jane",},
];

const books = [
    {id: 1, title: "Book One", authorId: 1},
    {id: 2, title: "Book Two", authorId: 2},
    {id: 3, title: "Book Three", authorId: 3},
]

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
}

async function getBookById(bookId) {
    return books.find(book => book.id === bookId);
}

async function getAllBooks() {
    return books;
}

module.exports = { getAuthorById, getBookById, getAllBooks };