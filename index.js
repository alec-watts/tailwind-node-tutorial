const express = require('express');
const path = require('path');

const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.set(express.static(path.join(__dirname, '/public/')));
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(
  '/',
  express.static(path.join(__dirname, 'public'), { extensions: ['html'] }),
)
app.locals.basedir = path.join(__dirname, 'public')

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});