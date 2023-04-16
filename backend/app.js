const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const routes = require('./routes/routes');
require('dotenv').config({path: '../.env'});

connectDB().then(r => console.log('Connected to DB'));

const app = express();

/*app.set('view engine', 'ejs');
app.set('views', 'views');*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
    }
);

app.listen(3001, () => console.log('Server started on port 3001'));