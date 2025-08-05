const { Router } = require("express");
const { getBookById, getAllBooks } = require("../controllers/bookController");
const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBookById);
bookRouter.get("/:bookId/reserve", (req, res) => {
    res.send(`Reserve page for book ${req.params.bookId}`);
});
bookRouter.post("/:bookId/reserve", (req, res) => {
    res.send(`Processing reservation for book ${req.params.bookId}`);
});

module.exports = bookRouter;
