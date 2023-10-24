const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const  { authentication } = require('./middlewares/authMiddleware');


app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(authentication);
app.use(routes);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/HCM');

app.listen(5000, () => console.log('Server is running on port 5000...'));