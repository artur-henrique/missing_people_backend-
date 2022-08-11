const db = require('../index.js');

class PersonRepository {
    async findAll () {
        const conn = await db.connectToMySql();
        const query = "SELECT * FROM person";
        const people = await conn.query(query);

        return people[0];
    }

    async findPersonByName (name) {
        const conn = await db.connectToMySql();
        const query = "SELECT * FROM person WHERE fullName LIKE ?;";
        name = `%${name}%`;
        const people = await conn.query(query, [name]);

        return people[0];
    }
}

module.exports = new PersonRepository(); // Design Pattern Singleton. Exportando a instância da classe