var express = require('express');
var cors =require('cors');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
require('dotenv').config();

var roomsRouter = require('./routes/rooms');
var loginRouter = require('./routes/login');

app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.status(200).send('Hello world');
});

app.use('/get-rooms-by-userId', roomsRouter);

app.use('/login', loginRouter)

module.exports = app;