const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { authentication } = require('./middlewares/authMiddleware');

const app = express();

app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(routes);

app.listen(3000, () => {
  console.log('Frontend Web Application is running on port 3000...');
});
