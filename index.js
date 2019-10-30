var express = require('express');
var pug = require('pug');
var path = require('path');
var sides = require('./sides.json');
var desserts = require('./desserts.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Home Page',
        'sides': sides,
        'desserts': desserts
    });
});

app.get('/location', function(req, res) {
    res.render('map', {
        title: 'Location',
        'sides': sides,
        'desserts': desserts
    });
});

app.get('/desserts', function(req, res) {
    res.render('desserts', {
        title: 'Desserts',
        'desserts': desserts
    });
});

app.get('/map', function(req, res) {

    res.sendFile(path.join(__dirname+'/map.html'));
    // res.render('map', {
    //     title: 'Map',
    // });
});

app.listen(3000);