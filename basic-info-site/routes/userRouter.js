const express = require("express");
const message = {}; // message store
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("All users");
});

userRouter.get("/:userId", (req, res) => {
    const { userId } = req.params;
    res.send(`User profile for user ID: ${userId}`);
});

userRouter.get("/:userId/search", (req, res) => {
    const { userId } = req.params;
    const { term, limit } = req.query;
    res.send(`User ${userId} search for ${term}, showing ${limit} results`);
});

userRouter.post("/:userId/message", (req, res) => {
    const { userId } = req.params;
    const { message: userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).send("Message is required");
    }

    if (!message[userId]) {
        message[userId] = [];
    }

    message[userId].push(userMessage);

    res.send(`Message sent to user ${userId}: "${userMessage}"`);
});

userRouter.get("/:userId/messages", (req, res) => {
    const { userId } = req.params;
    res.json(message[userId] || []);
});

module.exports = userRouter;
