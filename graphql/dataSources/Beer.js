const { RESTDataSource } = require('apollo-datasource-rest');


module.exports = class beerDataSources extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.punkapi.com/v2/';
    }

    async getAll() {
        let data = await this.get('/beers');

        console.log('data: ', data);
        return data;
    }

    async getRandom() {
        let data = await this.get('/beers/random');

        console.log('data 2: ', data);
        return data;
    }

    async getOneBeer(id) {
        let data = await this.get(`/beers/${id}`);

        console.log('data 3: ', data[0]);
        return data[0];
    }

    
};