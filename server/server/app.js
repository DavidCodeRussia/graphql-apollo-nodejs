const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(
  'mongodb+srv://user:123@graphql-course-1.rs0ieor.mongodb.net/GraphQL-course-1?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const PORT = 3005;
const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.log(`Connection error ${err}`));
dbConnection.once('open', () => console.log(`Connection to DB!`));

app.listen(PORT, (err) => {
  err ? console.log('error: ', err) : console.log('Server started');
});
