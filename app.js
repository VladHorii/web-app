const express = require('express');
const exhbs = require('express-handlebars');

const menuList = require('./menu.json');

const PORT = process.env.PORT || 4444;
const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
  }),
);

app.listen(4444, () => {
  console.log(`Application server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('home', {
    cssFileName: false,
    scriptName: false,
    pageTitle: 'HOME',
  });
});

app.get('/food', (req, res) => {
  res.render('food', {
    menuList,
    cssFileName: 'styles',
    scriptName: 'script',
    pageTitle: 'Food Service',
  });
});
