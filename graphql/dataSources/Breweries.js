const { RESTDataSource } = require('apollo-datasource-rest');


module.exports = class beerDataSources extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.openbrewerydb.org/breweries';
    }

    async getAll() {
        let data = await this.get('');

        console.log('data: ', data);
        return data;
    }
    
};