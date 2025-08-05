const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);
app.use("/users", userRouter);

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "Internal Server Error");
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



// app.get("/users/:id", (req, res) => {
//     res.send("This is a controller function")
// })

