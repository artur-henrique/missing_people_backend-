const db = require('../index.js');

class PersonRepository {
    async findAll() {
        const conn = await db.connectToMySql();
        const query = "SELECT * FROM person";
        const [people] = await conn.query(query);

        return people;
    }

    async findPersonByName(name) {
        const conn = await db.connectToMySql();
        const query = "SELECT * FROM person WHERE fullName LIKE ?;";
        name = `%${name}%`;
        const [people] = await conn.query(query, [name]);

        return people[0];
    }


    async create({ fullName, dob, dom, city, state }) {
        const conn = await db.connectToMySql();
        const query = "INSERT INTO person (fullName, dob, dom, city, state) VALUES (?, ?, ?, ?, ?)";
        const [person] = await conn.query(query, [fullName, dob, dom, city, state]);

        return person;
    }

    // This function is only used to find a person more accurately and delete it in the deletePerson function.
    async findPersonByInfo({ fullName, city, state }) {
        const conn = await db.connectToMySql();
        const query = `SELECT id FROM person WHERE fullName = ? AND city = ? AND state = ?;`;
        const [[person]] = await conn.query(query, [fullName, city, state]);

        return person.id;
    }

    async deletePerson(id) {
        const conn = await db.connectToMySql();
        const query = `DELETE FROM person WHERE id = ?`;
        const deletedPerson = await conn.query(query, [id]);

        return deletedPerson;
    }
}

module.exports = new PersonRepository(); // Design Pattern Singleton. Exportando a instância da classe