const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
// const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");

const path = require("path");

const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
];

const users = ["Rose", "Cake", "Biff" ];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.use("/authors", authorRouter);
app.use("/books", bookRouter);
// app.use("/", indexRouter);
app.use("/users", userRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "Internal Server Error");
})

app.get("/", (req, res) => {
    res.render("index", { links: links, users: users });
})

app.get("/movies", (req, res) => {
    const movies = [
        { title: "Inception", genre: "Sci-Fi" },
        { title: "The Dark Knight", genre: "Action" },
        { title: "Interstellar", genre: "Adventure" }
    ]
    res.render("movies", { links: links, users: users, movies: movies });
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



// app.get("/users/:id", (req, res) => {
//     res.send("This is a controller function")
// })

