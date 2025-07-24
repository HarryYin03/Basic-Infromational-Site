const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: path.join(__dirname, 'public')});
})

app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html', {root: path.join(__dirname, 'public')});
})

app.use((req, res) => {
    res.status(404);
    res.sendFile('404.html', {root: path.join(__dirname, 'public')});
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Press Ctrl+C to stop the server`);
})