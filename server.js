const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require('express-session');

//Set Config Path
dotenv.config({path : "./config/config.env"});

//Mongo
require("./config/databaseConfig")();

//Express
const app = express();

// Express Cokkie
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

// Passport Init
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(passport);

// Body Parser MiddleWare 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//Routes 
app.use("/auth",require("./routes/auth"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Application Started on PORT ${PORT} with ${process.env.NODE_ENV}`));