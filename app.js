import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
const session = require('express-session');
const app = express();
app.use(express.static('public'));
app.use(cors('*'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'think outside the bun', resave: true, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());
import {ProccessInfo, ProcessHealth} from './system_health';

app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);

export {
  app, passport
}
