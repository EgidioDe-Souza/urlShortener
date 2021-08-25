const express = require('express');
const logger = require('morgan');
const shortid = require('shortid');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: 'Welcome to my URL Shortener API'})
});
  
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if (err) return console.log(err)
    return console.log(`Server connecting on http://localhost:${port}`);
});



