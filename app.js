var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var cors=require('cors');

dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},function(err,data){
    if(err) console.log("Error in database connection");
    else console.log("Database connected");
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
