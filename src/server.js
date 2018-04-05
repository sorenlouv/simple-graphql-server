const express = require('express');
const schema = require('./schema');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');

// Initialize Express
const app = express();

// GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// Start the server
app.listen(3000, () => {
  console.log('Running GraphQL server on http://localhost:3000/graphql');
});
