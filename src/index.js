const express = require('express');
// const config = require('./config');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config()

const app = express();

// Static files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.all('/*', function(req, res) {
  res.sendfile(path.join(__dirname, '../public/index.html'));
});

app.listen(process.env.PORT, function() {
  console.log(`App is running at http://localhost:${process.env.PORT} in ${app.get('env')} mode`);
});
