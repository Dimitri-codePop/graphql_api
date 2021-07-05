const { RESTDataSource } = require('apollo-datasource-rest');


module.exports = class countryDataSources extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://restcountries.eu/rest/v2';
    }

    async getAll() {
        let data = await this.get('/all');

        console.log('data: ', data);
        return data;
    }

};