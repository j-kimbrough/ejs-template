const express = require('express');
const app = express();
const port = 3000;

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
  console.log(`Example app listening on port ${port}`);
});