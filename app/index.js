const express = require('express');
const mongoose = require('mongoose');

// Khởi tạo app
const app = new express();

app.use(express.static('app/public'));

app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.listen(3000, () => {
    console.log('App is running on the port 3000');
})
