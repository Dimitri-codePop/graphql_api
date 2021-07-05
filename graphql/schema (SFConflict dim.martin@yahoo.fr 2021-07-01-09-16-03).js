const { gql } = require('apollo-server');

const schema = gql`
    type Country {
        name: String!
        capital: String!
    }
    type Query {
        country: [Country!]!
    }`;

module.exports = schema;