require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const pgClient = require('./graphql/clients/clients');

const beerDataSources = require('./graphql/dataSources/Beer.js');
const breweriesDataSources = require('./graphql/dataSources/Breweries.js');

const app = express();

const graphQLserver = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: () => {
        return {
            pgClient,
            test: 'ceci est une valeur dans le contexte personnalisé'
        }
    },
    dataSources: () => {
        return {
            beer: new beerDataSources(),
            breweries: new breweriesDataSources()
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