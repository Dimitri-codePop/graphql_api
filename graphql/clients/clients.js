const { Pool } = require('pg');

const pool = new Pool();

module.exports = {

    originalClient: pool,

    // On récupère tous les paramètres dans un objet grâce au rest parameter
    async query(...params){

        // Ici je vais pouvoir afficher les requêtes qui sont exécuter
        console.log('SQL: ', ...params);
        console.count('Req SQL n°');

        // Et on retransmet la liste des paramètres sous forme d'arguments grâce au spread operator
        return await this.originalClient.query(...params);
    }

}