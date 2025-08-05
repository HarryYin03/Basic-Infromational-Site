const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Homepage"));
indexRouter.get("/about", (req, res) => res.send("About page"));
indexRouter.get("/contact", (req, res) => res.send("Contact page"));
indexRouter.post("/contact", (req, res) => res.send("Received contact form"));

module.exports = indexRouter;
