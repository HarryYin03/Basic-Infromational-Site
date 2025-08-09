const express = require("express");
const router = express.Router();

const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
];

const users = ["Rose", "Cake", "Biff"];

router.get("/", (req, res) => {
    res.render("index", { links, users });
});

router.get("/about", (req, res) => {
    res.render("about", { links });
});

router.get("/contact", (req, res) => {
    res.render("contact", { links });
});

module.exports = router;
