const { gql } = require('apollo-server');

const schema = gql`
    type Beer {
        id: ID!
        name: String!
        tagline: String!
        description: String!
        image_url: String
        ibu: Int
        volume: Volume!
        boil_volume: Volume!
        method: Method
        ingredients: Ingredient!
        brewers_tips: String!
        contributed_by: String!
    }

    type Volume {
        value: Int
        unit: String
    }

    type Method {
        mash_temp: [Mash]
        fermentation: Fermentation!
        twist: String
    }

    type Mash {
        temp: Temp
        duration: Int
    }

    type Temp {
        value: Int
        unit: String
    }

    type Fermentation {
        temp: Temp
        twist : String
    }

    type Ingredient {
        malt: [Malt]!
        hops: [Hops]!
        yeast: String!
    }

    type Malt {
        name: String!
        amount: Amount!
    }

    type Amount {
        value: Int!
        unit: String!
    }
    type Hops {
        name: String
    }

    type Query {
        beer: [Beer!]!
        randomBeer: [Beer!]!
        oneBeer(id: ID!): Beer!
    }`;

module.exports = schema;