const express = require('express');
const app = new express();
const path = require('path');


app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});