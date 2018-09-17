const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');

const routes = require('./routes/');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

app.use(routes);

app.listen(3000, () => {
  console.log('Server running on port 3000')
});