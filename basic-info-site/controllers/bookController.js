const db = require('../db');

async function getBookById(req, res) {
    const { bookId } = req.params;
    const book = await db.getBookById(Number(bookId));
    if(!book) {
        return res.status(404).send("Book not found");
    }
    res.send(`Book Title: ${book.title}, Author ID: ${book.authorId}`);
}

async function getAllBooks(req, res) {
    const books = await db.getAllBooks();
    res.json(books);
}

module.exports = { getBookById, getAllBooks };