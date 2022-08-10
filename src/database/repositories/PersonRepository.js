const db = require('../index.js');

class PersonRepository {
    async findAll () {
        const conn = await db.connectToMySql();
        const query = "SELECT * FROM person";
        const people = await conn.query(query);

        return people;
    }

    async findPersonByName (name) {
        const conn = await db.connectToMySql();
        const query = "";
        const people = await conn.query(query, [name]);

        return people;
    }
}

module.exports = new PersonRepository(); // Design Pattern Singleton. Exportando a instância da classe