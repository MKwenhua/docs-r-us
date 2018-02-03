const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

//app.use(require('morgan')('combined'));
app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({ secret: 'think outside the bun', resave: true, saveUninitialized:true}))
app.use(passport.initialize());
app.use(passport.session());
