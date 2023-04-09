const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config({path: '../.env'});

connectDB();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');  

const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/*app.use(adminRoutes);
app.use(userRoutes);*/

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
    }
);

app.listen(3000);