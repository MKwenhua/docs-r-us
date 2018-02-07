const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const LocalStrategy = require('passport-local').Strategy;
const {SignupAuth, SigninAuth, DeserializeUser} = require('./auth');
const redis = require('redis');
const client = redis.createClient(18121, 'redis-18121.c16.us-east-1-2.ec2.cloud.redislabs.com');
const redisOptions = {
  client: client
}

client.on('connect', () => console.log('Connected to Redis'));

module.exports = (app) => {
  app.use(session({store: new RedisStore(redisOptions), secret: 'think outside the bun', resave: true, saveUninitialized: true}))
  app.use(passport.initialize());
  app.use(passport.session());
  app.set('trust proxy', 1);
  app.use(cors('*'));

  const LocalSignupStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, SignupAuth)

  const LocalSigninStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, SigninAuth)

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(DeserializeUser);

  passport.use('local-signup', LocalSignupStrategy);
  passport.use('local-signin', LocalSigninStrategy);

  return passport;
}
