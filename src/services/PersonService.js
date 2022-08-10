const PersonRepository = require('../database/repositories/PersonRepository');

class PersonService {
    async getAll () {
        return PersonRepository.findAll();
    }

    async getPersonByName (name) {
        return PersonRepository.findPersonByName(name);
    }
}

module.exports = new PersonService(); // Design Pattern Singleton. Exportando a instância da classe