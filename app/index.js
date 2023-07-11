const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');

// Khởi tạo app
const app = new express();
mongoose.connect('mongodb://0.0.0.0:27017/clean_blog', {useNewUrlParser: true});

app.use(express.static('app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    BlogPost.find({}).then((blogposts) => {
        res.render('index', {blogposts: blogposts});
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post/:id', (req, res) => {
    BlogPost.find({_id: req.params.id}).then((post) => {
        res.render('post', {post: post});
    })
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

app.post('/posts/store', (req, res) => {
    BlogPost.create(req.body).then(() => {
        res.redirect('/');
    })
})

app.listen(4000, () => {
    console.log('App is running on the port 4000');
})
