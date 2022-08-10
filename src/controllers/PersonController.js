const PersonService = require('../services/PersonService');

class PersonController {
    async get(req, res) {
        const payload = await PersonService.getAll();
        res.status(200).send(payload);
    }

    async getByName(req, res) {
        const payload = await PersonService.getPersonByName(req.params.name);
        res.status(200).send(payload);
    }
}

module.exports = new PersonController(); // Design Pattern Singleton. Exportando a instância da classe