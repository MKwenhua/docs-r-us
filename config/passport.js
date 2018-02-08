const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const LocalStrategy = require('passport-local').Strategy;
const {
  SignupAuth,
  SigninAuth,
  DeserializeUser
} = require('./auth');
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_ENDPOINT);
const redisOptions = {
  client: client
}

client.on('connect', () => console.log('Connected to Redis'));

module.exports = (app) => {
  app.enable('trust proxy');
  app.use(session({
    store: new RedisStore(redisOptions),
    secret: 'think outside the bun',
    resave: false,
    saveUninitialized: true
  }))
  app.use(passport.initialize());
  app.use(passport.session());
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
