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
        value: Float!
        unit: String!
    }
    type Hops {
        name: String
    }

    type Breweries {
        id: ID!
        name: String!
        brewery_type: String!
        street: String
        address_2: String
        address_3: String
        city: String!
        state: String!
        country_province: String
        postal_code: String
        country: String!
        longitude: Float
        latitude: Float
        phone: Float
        website_url: String
        updated_at: String!
        created_at: String!
    }

    type Query {
        beer: [Beer!]!
        breweries: [Breweries!]! 
        randomBeer: [Beer!]!
        oneBeer(id: ID!): Beer!
    }`;

module.exports = schema;