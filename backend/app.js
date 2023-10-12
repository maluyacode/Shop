const express = require('express');
const cookieParser = require('cookie-parser')

const products = require('./routes/product');
const auth = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cookieParser());



app.use('/api/v1', products);
app.use('/api/v1', auth);


module.exports = app