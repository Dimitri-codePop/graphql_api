module.exports = {
    Query: {
        beer: async (_, __, { dataSources }) => {
            const data = await dataSources.beer.getAll();
            return data;
        },

        randomBeer: async (_, __, { dataSources }) => {
            const data = await dataSources.beer.getRandom();
            return data;
        },

        oneBeer: async (_, args, { dataSources }) => {
            return await dataSources.beer.getOneBeer(args.id);
        },
    }
}