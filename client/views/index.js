const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const app = express();

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Define your frontend routes and views
app.get('/', (req, res) => {
  // Handle rendering of your frontend views here
  res.render('home', { pageTitle: 'Frontend App', message: 'Hello from the frontend!' });
});

app.listen(3000, () => {
  console.log('Frontend Web Application is running on port 3000...');
});
