const path = require('path');
const express = require('express');
const connectDB = require('./config/db');

const app = express();


// models
const Product = require('./models/product');


connectDB(); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('API berjalan...');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});