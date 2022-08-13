const PersonService = require('../services/PersonService');

class PersonController {
    async index(req, res) {
        const payload = await PersonService.getAll();
        res.status(200).send(payload);
    }

    async show(req, res) {
        const payload = await PersonService.getPersonByName(req.params.name);
        res.status(200).send(payload);
    }

    async store(req, res) {
        const { fullName, dob, dom, city, state } = req.body;

        if (!fullName) {
            return res.status(400).json({ error: 'Fullname is required.' });
        }

        if (!city || !state) {
            return res.status(400).json({ error: 'State and City are required.' })
        }

        const payload = await PersonService.createPerson({ fullName, dob, dom, city, state });

        res.json(payload);
    }

    async delete(req, res) {
        const { fullName, city, state } = req.body;

        if (!fullName) {
            return res.status(400).json({ error: 'Fullname is required to delete a person.' });
        }

        if (!city) {
            return res.status(400).json({ error: 'City is required to delete a person.' });
        }

        if (!state) {
            return res.status(400).json({ error: 'State is required to delete a person.' });
        }
        const personId = await PersonService.getPersonByInfo({ fullName, city, state })

        if(!personId) {
            return res.status(400).json({ error: 'ID não encontrado.' });
        }

        const payload = await PersonService.deletePerson(personId);

        res.json(payload);
    }
}

module.exports = new PersonController(); // Design Pattern Singleton. Exportando a instância da classe