const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');  

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
    }
);

app.listen(3000);