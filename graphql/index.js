const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
// const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
//import { PubSub } from 'graphql-subscriptions';
// const { SubscriptionServer } = require( 'subscriptions-transport-ws');
import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = (app, models) => {
  console.log('models', models)
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    }),
  );

  app.use(
    '/graphql',
    graphqlExpress({ schema, context: { models } }),
  );
  // return () => {
  //   new SubscriptionServer({
  //     execute,
  //     subscribe,
  //     schema: schema,
  //   }, {
  //     server: createServer(app),
  //     path: '/subscriptions',
  //   });
  // }
}
