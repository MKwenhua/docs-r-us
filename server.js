const PROCESS_PORT = process.env.PORT || 5000;
//import { createServer } from 'http';
import { app, passport } from './app';
// import { schema } from './graphql/schema';
import { DoctorLogin, PatientLogin, isLoggedIn, LogOut } from './static';
import { IndexRoute } from './react_pages';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';

const db = require('./db');


app.get('/', isLoggedIn, IndexRoute);
app.get(/\/(patients|appointments|profile)/, isLoggedIn, IndexRoute);
app.get('/appointment/:id', isLoggedIn, IndexRoute);
app.get('/patient/:id', isLoggedIn, IndexRoute);

app.get('/signin', DoctorLogin);

app.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup'
}));

app.get('/logout', LogOut);

app.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/',
  failureRedirect: '/signin?error=true'
}));

app.post('/patient/login', PatientLogin)

require('./config/passport.js')(passport, db);
require('./graphql')(app, db);

// app.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql'
// }));
//
// app.use(
//   '/graphql',
//   graphqlExpress({ schema, context: { models: db } }),
// );

app.listen(PROCESS_PORT, () => {
  console.log(`Application worker ${process.pid} at Port: ${PROCESS_PORT} has started`);
});
