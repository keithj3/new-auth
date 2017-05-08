var express = require('express');

var app = express();


/////////////VIEW AND TEMPLATE ENGINE

app.set('view engine', 'pug');




///////////ROUTES

app.get('/', function(req, res) {
  res.render('index.pug');
});

app.get('/register', function(req, res) {
  res.render('register.pug');
});

app.get('/login', function(req, res) {
  res.render('login.pug');
})

app.get('/logout', function(req, res) {
  res.redirect('/');
})

app.get('/account', function(req, res) {
  res.render('account.pug');
})



////////////SERVE SITE
app.listen(3000);
