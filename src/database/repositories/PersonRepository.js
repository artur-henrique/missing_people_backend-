const db = require('../index.js');

class PersonRepository {
    async findAll () {
        const conn = await db.connectToMySql();
        const query = "SELECT * FROM person";
        const [people] = await conn.query(query);

        return people;
    }

    async findPersonByName (name) {
        const conn = await db.connectToMySql();
        const query = "SELECT * FROM person WHERE fullName LIKE ?;";
        name = `%${name}%`;
        const [people] = await conn.query(query, [name]);

        return people;
    }

    async create({fullName, dob, dom, city, state}) {
        const conn = await db.connectToMySql();
        const query = "INSERT INTO person (fullName, dob, dom, city, state) VALUES (?, ?, ?, ?, ?)";
        const [person] = await conn.query(query, [fullName, dob, dom, city, state]);

        return [person];
    }
}

module.exports = new PersonRepository(); // Design Pattern Singleton. Exportando a instância da classe