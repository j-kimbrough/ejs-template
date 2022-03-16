const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	var title = 'Home Page';
  res.render('pages/index',{title:title});
});

// about us
app.get('/my-dog', (req, res) => {
	var title = 'My Dog';
  res.render('pages/my-dog',{title:title});
});

//add users route
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
	var title = 'User Page';
	var id = req.params.id;
	res.render('users/view', {
	title: title,
	user: data[--id]
	});
});

//recipe
app.get('/recipe', (req, res) => {
	var title = 'Scalloped Potato Recipe';
  res.render('pages/recipe',{title:title});
});

//stickers
app.get('/sticker', (req, res) => {
	var title = 'My Stickers';
  res.render('pages/sticker',{title:title});
});

app.listen(port, () => {
  console.log(data);
});