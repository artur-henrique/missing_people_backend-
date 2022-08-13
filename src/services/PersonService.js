const PersonRepository = require('../database/repositories/PersonRepository');

class PersonService {
    async getAll () {
        return PersonRepository.findAll();
    }

    async getPersonByName (name) {
        return PersonRepository.findPersonByName(name);
    }

    async getPersonByInfo({ fullName, city, state }) {
        return PersonRepository.findPersonByInfo({ fullName, city, state });
    }

    async createPerson ({fullName, dob, dom, city, state}) {
        return PersonRepository.create({fullName, dob, dom, city, state});
    }

    async deletePerson (id) {
        return PersonRepository.deletePerson(id);
    }
}

module.exports = new PersonService(); // Design Pattern Singleton. Exportando a instância da classe