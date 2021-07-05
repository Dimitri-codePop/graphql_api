require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const countryDataSources = require('./graphql/dataSources/Country.js');

const app = express();

const graphQLserver = new ApolloServer({
    typeDefs: schema,
    resolvers,
    dataSources: () => {
        return {
            country: new countryDataSources(),
            //units: new UnitsDataSource()
        }
    }
});

app.use(graphQLserver.getMiddleware());

app.get('/', (_, response) => {
    response.send('accueil');
});

const port = process.env.PORT || `3000`;

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});