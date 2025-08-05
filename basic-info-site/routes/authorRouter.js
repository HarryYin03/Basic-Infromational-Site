const express = require("express");
const { getAuthorById } = require("../controllers/authorController");
const authorRouter = express.Router();


authorRouter.get("/:authorId", getAuthorById);

// authorRouter.get("/:authorId", (req, res) => {
//     const { authorId } = req.params;
//     res.send(`Author ID: ${authorId}`);
// });

module.exports = authorRouter;
