const PROCESS_PORT = process.env.PORT || 5000;
import { createServer } from 'http';
import { app, passport } from './app';
import { schema } from './graphql/schema';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { DoctorLogin, PatientLogin, isLoggedIn, LogOut } from './static';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import {IndexRoute} from './react_pages';


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

//const GraphQLSub = require('./graphql')(app, db, server);
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:5000/subscriptions`
}));

app.use(
  '/graphql',
  graphqlExpress({ schema, context: { models: db } }),
);

const server = createServer(app);

// server.listen(ProceessPort, GraphQLSub);
server.listen(PROCESS_PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PROCESS_PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
    onConnect: (connectionParams, webSocket) => {
      console.log('\n onConnect connectionParams',connectionParams );
      console.log('\n onConnect webSocket',webSocket )
   },
   onOperation: (message, params, webSocket) => {
     console.log('\n onOperation message',message );
     console.log('\n onOperation params',params );
   },
   onOperationDone: (webSocket) => {

   },
   onDisconnect: (webSocket) => {
      
   }
  }, {
    server: server,
    path: '/subscriptions',
  });
});
