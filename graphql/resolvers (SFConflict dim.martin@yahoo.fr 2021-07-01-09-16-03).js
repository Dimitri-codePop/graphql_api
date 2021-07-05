module.exports = {
    Query: {
        country: async (_, args, { dataSources }) => {
            const data = await dataSources.country.getAll();
            return data;
        },
    }
}