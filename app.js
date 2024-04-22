const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.redirect('/Login/login.html');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening to 3000');
});