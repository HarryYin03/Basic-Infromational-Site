const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files from the 'public' directory
// This will still serve CSS, JS, images, etc. directly
app.use(express.static(path.join(__dirname, 'public')));

// Explicit routes for clean URLs
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

// Your API endpoint remains
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice', age: 28 },
        { id: 2, name: 'Bob', age: 35 }
    ];
    res.json(users);
});

// 404 Not Found Middleware - must be LAST
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}/`);
});