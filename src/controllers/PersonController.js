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
        
        if(!fullName){
            return res.status(400).json({ error: 'Fullname is required.' });
        }
        
        if(!city || !state) {
            return res.status(400).json({ error: 'State and City are required.' })
        }
        
        const payload = await PersonService.createPerson({ fullName, dob, dom, city, state });

        res.json(payload);
    }
}

module.exports = new PersonController(); // Design Pattern Singleton. Exportando a instância da classe