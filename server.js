const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!!!');
});

require('./services/movies-service')(app);
require('./services/tweeter-service')(app);
require('./services/profile-service')(app);
require('./movies/service')(app);
require('./tweets/service')(app);
require('./who/service')(app);
require('./profile/service')(app);

app.listen(process.env.PORT || 4000);