const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});